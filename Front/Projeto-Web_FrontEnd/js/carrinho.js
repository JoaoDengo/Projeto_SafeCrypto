document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`${API_URL}/carrinho`);
    if (!response.ok) {
      throw new Error("Erro ao carregar o carrinho!");
    }
    const dadosCarrinho = await response.json();
    console.log("Dados do carrinho recebidos:", dadosCarrinho);

    const produtos = dadosCarrinho.itensCarrinho.map((item) => item.produto);
    console.log("Itens do carrinho:", produtos);
    produtos.forEach((prod) => {
      addProdutoCarrinho(prod);
    });
    atualizarTotal();
  } catch (error) {
    console.error("Erro ao carregar o carrinho", error);
  }
});

function produtoNovo(produto) {
  console.log("Produto recebido:", produto);

  const totalProduto = produto.preco * produto.quantidade;
  return `
  <div class="produto-carrinho jetbrains-mono-uniquifier position-relative">
          <div class="d-flex ">
              <img class="img-carrinho" src="img/${produto.imagem}" alt="">
          </div>
          <div class="ms-5 p-2">
              <h4 class="nome-produto">${produto.nome}</h4>
              <p class="marca-produto">${produto.marca}</p>
              <p class="text-decoration-line-through text-secondary fs-4 lh-sm">${produto.desconto}</p>
              <p class="preco-produto fs-2">${produto.preco}</p>

              <div class="d-flex">
                  <p>Total produto: </p>
                  <p class="total-produto">${totalProduto}</p>
              </div>

              <div class="position-absolute bottom-0 end-0 me-5 mb-3">
                  <input class="quantidade" type="number" value="${produto.quantidade}">
                  <button class="btn-icone-carrinho "><i class="icon-carrinho" data-feather="heart"></i></button>
                  <button id="btn-trash" class="btn-icone-carrinho"><i class="icon-carrinho" data-feather="trash-2"></i></button>
              </div>
          </div>
      </div>

  `;
}

async function excluirCarrinho(produtoElement) {
  const nomeProduto = produtoElement.querySelector(".nome-produto").textContent;

  if (confirm(`Deseja remover o produto ${nomeProduto} do carrinho?`)) {
    try {
      const response = await fetch(`${API_URL}/carrinho/${nomeProduto}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao remover produto do carrinho!");
      }

      produtoElement.remove();
      atualizarTotal();
      alert(`Produto ${nomeProduto} removido do carrinho.`);
    } catch (error) {
      console.error("Erro ao remover produto do carrinho", error);
    }
  }
}

document
  .querySelector("#carrinho-container")
  .addEventListener("click", function (event) {
    if (event.target.closest("#btn-trash")) {
      const produtoElement = event.target.closest(".produto-carrinho");
      excluirCarrinho(produtoElement);
    }
  });

function addProdutoCarrinho(produto) {
  const carrinhoContainer = document.getElementById("carrinho-container");
  carrinhoContainer.insertAdjacentHTML("beforeend", produtoNovo(produto));

  feather.replace();
  atualizarTotal();
}

document
  .querySelector("#carrinho-container")
  .addEventListener("input", function (event) {
    const target = event.target;
    if (target.classList.contains("quantidade")) {
      const produtoElement = target.closest(".produto-carrinho");
      const nome = produtoElement.querySelector(".nome-produto").textContent;
      const novaQtd = parseInt(target.value, 10);
      atualizarQuantidadeNoCarrinho(nome, novaQtd, produtoElement);
      atualizarTotal();
    }
  });

async function atualizarQuantidadeNoCarrinho(nome, novaQtd, produtoElement) {
  try {
    console.log(nome);
    console.log(novaQtd);

    const response = await fetch(`${API_URL}/carrinho/${nome}/${novaQtd}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantidade: novaQtd }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar quantidade do produto no carrinho!");
    }

    const preco = parseFloat(
      produtoElement
        .querySelector(".preco-produto")
        .textContent.replace("R$", "")
    );
    produtoElement.querySelector(".total-produto").textContent = (
      preco * novaQtd
    ).toFixed(2);

    if (novaQtd == 0) {
      excluirCarrinho(produtoElement);
    }

    atualizarTotal();
  } catch (error) {
    console.error("Erro ao atualizar quantidade do produto no carrinho", error);
  }
}

async function atualizarTotal() {
  try {
    const response = await fetch(`${API_URL}/carrinho/total`);

    if (!response.ok) {
      throw new Error("Erro ao carregar o total do carrinho!");
    }
    const total = await response.json();
    console.log(total);
    document.querySelector("#total-container").innerHTML = `
      <div class="total">
          <table>
              <thead>
                  <tr>
                      <th class="text-center" colspan="2">Resumo da compra</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Sub-Total</td>
                      <td>R$ ${total}</td>
                  </tr>
                  <tr>
                      <td>Frete</td>
                      <td>R$ 0</td>
                  </tr>
                  <tr>
                      <td colspan="2"><a href="">Inserir código do cupom</a></td>
                  </tr>
                  <tr>
                      <td>Total</td>
                      <td>R$ ${total}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="d-flex">
          <div>
              <a class="botao-total blueA" href="index.html">Continuar Comprando</a>
          </div>
          <div>
              <a class="botao-total blue" href="formulario.html">Finalizar o Pedido</a>
          </div>
      </div>
      `;
  } catch (error) {
    console.error("Erro ao carregar o total do carrinho", error);
  }
}
