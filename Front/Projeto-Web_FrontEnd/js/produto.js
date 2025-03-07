const API_URL = "http://localhost:8080/main";
const carregarProdutoPagina = async (produtoId) => {
  try {
    console.log("Carregando detalhes do produto...");
    const response = await fetch(`${API_URL}/produtos/${produtoId}`);
    if (!response.ok) {
      throw new Error("Erro ao carregar os detalhes do produto!");
    }
    const produto = await response.json();
    console.log(produto);
    return produto;
  } catch (error) {
    console.error("Erro ao carregar os detalhes do produto!", error);
  }
};

async function renderizarProdutoPagina() {
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = parseInt(urlParams.get("id"));

  if (isNaN(produtoId) || produtoId <= 0) {
    console.log("Nenhum ID de produto na URL. Exibindo a lista de produtos.");
    return;
  }

  try {
    const produto = await carregarProdutoPagina(produtoId);
    if (produto) {
      const produtoContainer = document.getElementById("produto-page");
      produtoContainer.innerHTML = `
      
        <section class="container-meio">
          <div class="produto-container">
            <div class="centraliza-img">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/${produto.imagem}" class="img-fluid d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="img/${produto.imagem2}" class="img-fluid d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="img/${produto.imagem3}" class="img-fluid d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="produto">
              <h2 id="nome" class="jetbrains-mono-uniquifier cor-nome">${produto.nome}</h2>
              <p class="marca">${produto.marca}</p>
              <p class="desconto">${produto.desconto}</p>
              <p id="preco" class="font-preco">${produto.preco}</p>
              <h4>em pagamentos por criptomoedas</h4>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  style="
                    color: #036baa;
                    background-color: rgba(3, 107, 170, 0.2);"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Ver formas de pagamento
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="">Pix</a></li>
                  <li><a class="dropdown-item" href="">Criptomoedas</a></li>
                  <li><a class="dropdown-item" href="">Cartão Crédito/Débito</a></li>
                </ul>
              </div>

              <button id="btComprarAgora"class="botao-produto blue"><a class="text-decoration-none text-light" href="carrinho.html">Comprar Agora</a></button>
              <input type="submit" value="Adicionar ao carrinho" class="botao-produto blueA jetbrains-mono-uniquifier" name="btAdd" id="btAddCarrinho" />


              <h4 class="jetbrains-mono-uniquifier mt-2">Consultar frete</h4>
              <div class="d-flex">
                <input
                  class="form-cep jetbrains-mono-uniquifier"
                  type="text"
                  name="nomePessoa"
                  placeholder="Digite o CEP"
                />
                <button class="botao-cep blue">Consultar</button>
              </div>
            </div>
          </div>
        </section>

        <div class="container-meio">
          <div class="descricao">
            <h2>Descrição do Produto</h2>
            <p class="">${produto.descricao}</p>
          </div>
          <div class="caracteristica">
            <h2>Informações Técnicas</h2>
            <table>
              <tbody>
                <tr class="table-beje">
                  <th class="p-2">Marca</th>
                  <td class="p-2">${produto.marca}</td>
                </tr>
                <tr class="table-azul">
                  <th class="p-2">Modelo</th>
                  <td class="p-2">${produto.nome}</td>
                </tr>
                <tr class="table-beje">
                  <th class="p-2">Tipo Conector</th>
                  <td>${produto.conector}</td>
                </tr>
                <tr class="table-azul">
                  <th class="p-2">
                    Comprimento x<br />
                    Altura x Largura
                  </th>
                  <td class="p-2">${produto.tamanho}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      `;

      document
        .getElementById("btComprarAgora")
        .addEventListener("click", () => adicionarAoCarrinho(produto));
      document
        .getElementById("btAddCarrinho")
        .addEventListener("click", () => adicionarAoCarrinho(produto));
    } else {
      console.log("Produto não encontrado");
    }
  } catch (error) {
    console.error("Erro ao renderizar os detalhes do produto", error);
  }
}

async function adicionarAoCarrinho(produto) {
  try {
    produto.quantidade = 1;
    console.log(produto);
    const response = await fetch(`${API_URL}/carrinho`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar o produto ao carrinho!");
    }

    const data = await response.json();
    console.log("Produto adicionado ao carrinho:", data);
    alert("Produto adicionado ao carrinho!");
  } catch (error) {
    console.error("Erro ao adicionar o produto ao carrinho:", error);
    alert("Houve um erro ao adicionar o produto ao carrinho. Tente novamente.");
  }
}

window.onload = async () => {
  try {
    await renderizarProdutoPagina();
  } catch (error) {
    console.error("Erro ao carregar produtos na inicialização", error);
  }
};
