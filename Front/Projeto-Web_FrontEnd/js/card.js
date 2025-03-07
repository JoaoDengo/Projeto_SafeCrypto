// const API_URL = "http://localhost:8080/main";

const carregarProdutoCard = async () => {
  try {
    console.log("Iniciando o carregamento dos produtos...");
    const response = await fetch(`${API_URL}/produtos`);
    if (!response.ok) {
      throw new Error("Erros ao carregar os produtos!");
    }
    const produtos = await response.json();
    console.log(produtos);
    return produtos;
  } catch (error) {
    console.error("Erros ao carregar os produtos!", error);
  }
};

async function renderizaProdutoCarrossel() {
  const carrosselContainer = document.getElementById("carrossel-container");

  try {
    const arrayProdutos = await carregarProdutoCard();

    // Produtos divididos por categoria
    const produtosMaisVendidos = arrayProdutos.filter(prod => prod.maisVendido === true);
    const produtosNovidades = arrayProdutos.filter(prod => prod.novidade === true);
    const produtosDiy = arrayProdutos.filter(prod => prod.diy === true);

    // Criação do carrossel de produtos
    const carrosselCard = document.createElement("div");
    carrosselCard.innerHTML = `
    <div class="container-carrossel">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner lh-2">
          <!-- Mais Vendidos -->
          <div class="carousel-item active">
            <h4 class="mb-4 text-center">Mais Vendidos</h4>
            <div class="produto-carrossel d-flex justify-content-center gap-5">
              ${produtosMaisVendidos.map(prod => `
                <div class="d-flex flex-column justify-content-center">
                  <img class="img-carrossel" src="img/${prod.imagem}" alt="${prod.nome}">
                  <p class="mt-3">${prod.nome}</p>
                  <p class="text-decoration-line-through text-secondary fs-6">R$ ${prod.desconto}</p>
                  <p class="preco">R$ ${prod.preco}</p>
                  <a class="mt-2" href="produtos.html?id=${prod.id}">Ver Opções</a>
                </div>`).join('')}
            </div>
          </div>
          <!-- Novidades -->
          <div class="carousel-item">
            <h4 class="mb-4 text-center">Novidades</h4>
            <div class="produto-carrossel d-flex justify-content-center gap-5">
              ${produtosNovidades.map(prod => `
                <div class="d-flex flex-column justify-content-center">
                  <img class="img-carrossel" src="img/${prod.imagem}" alt="${prod.nome}">
                  <p class="mt-3">${prod.nome}</p>
                  <p class="text-decoration-line-through text-secondary fs-6">R$ ${prod.desconto}</p>
                  <p class="preco">R$ ${prod.preco}</p>
                  <a class="mt-2" href="produtos.html?id=${prod.id}">Ver Opções</a>
                </div>`).join('')}
            </div>
          </div>
          <!-- DIY -->
          <div class="carousel-item">
            <h4 class="mb-4 text-center">DIY (Faça você mesmo)</h4>
            <div class="produto-carrossel d-flex justify-content-center gap-5">
              ${produtosDiy.map(prod => `
                <div class="d-flex flex-column justify-content-center">
                  <img class="img-carrossel" src="img/${prod.imagem}" alt="${prod.nome}">
                  <p class="mt-3">${prod.nome}</p>
                  <p class="text-decoration-line-through text-secondary fs-6">R$ ${prod.desconto}</p>
                  <p class="preco">R$ ${prod.preco}</p>
                  <a class="mt-2" href="produtos.html?id=${prod.id}">Ver Opções</a>
                </div>`).join('')}
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`;

    carrosselContainer.appendChild(carrosselCard);

  } catch (error) {
    console.error("Erro ao renderizar os produtos", error);
  }
}



async function renderizarProdutos() {
  const produtosContainer = document.getElementById("produtos");
  try {
    const arrayProdutos = await carregarProdutoCard();
    arrayProdutos.forEach((prod) => {
      const produtoCard = document.createElement("div");
      produtoCard.innerHTML = `
      <div class="cards">
      <img class="img-fluid" src="img/${prod.imagem}" alt="${prod.nome}" />
      <h3>${prod.nome}</h3>
      <h5 class="h5-marca">${prod.marca}</h5>
      <p class="jetbrains-mono-uniquifier p-desconto">R$ ${prod.desconto}</p>
      <p class="jetbrains-mono-uniquifier p-preco">R$ ${prod.preco}</p>
      <div class="d-flex justify-content-center">
          <a href="produtos.html?id=${prod.id}" >Ver Opções</a>
      </div>
    </div>        `;

      produtosContainer.appendChild(produtoCard);
    });

  } catch (error) {
    console.error("Erro ao renderizar os produtos", error);
  }
}


document.getElementById("btComprarAgora2").addEventListener("click", async function () {
  try {
      const produtos = await carregarProdutoCard();

      const produto = produtos.find((prod) => prod.id == 1);

      if (produto) {
          window.location.href = `produtos.html?id=${produto.id}`;
      } else {
          console.log("Produto com ID 1 não encontrado.");
      }
  } catch (error) {
      console.error("Erro ao carregar produtos:", error);
  }
});

window.onload = async () => {
  try {
    await renderizarProdutos();
    await renderizaProdutoCarrossel();
  } catch (error) {
    console.error("Erro ao carregar produtos na inicialização", error);
  }
};