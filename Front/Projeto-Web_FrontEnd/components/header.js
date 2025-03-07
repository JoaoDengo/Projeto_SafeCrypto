export const headerComponent = `
  <nav class="navbar navbar-expand-lg nav fixed-top">
    <div class="container-fluid d-flex justify-content-between">
      <a href="index.html">
        <img class="logo" src="img/Logo.png" alt="Logo" />
      </a> 

      <button class="navbar-toggler modal-botao" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav mx-auto text-center">
          <a class="nav-link text-light fs-3 p-3" href="#hardwallet">Hard Wallet</a>
          <a class="nav-link text-light fs-3 p-3" href="sobre.html">Quem Somos</a>
          <a class="nav-link text-light fs-3 p-3" href="#">Suporte</a>
        </div>

        <div class="d-flex align-items-center mt-3">
          <form class="busca-campo d-flex" role="search">
            <input class="form-contro form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">
              <i class="tam-icon" data-feather="search"></i>
            </button>
          </form>

          <div class="d-flex ">
            <a class="text-light me-3" href="carrinho.html">
              <i class="tam-icon" data-feather="shopping-cart"></i>
            </a>

            <button id="abrirModal" class="modal-botao">
              <i class="tam-icon" data-feather="user"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="modal" class="modal-login">
      <div class="modal-conteudo">
        <span class="close" id="fecharModal">&times;</span>
        <form class="login">
          <h2>Entrar</h2>
          <div class="d-flex flex-column">
            <label for="emailModal">Email</label>
            <input type="email" id="emailModal" name="emailModal" />
          </div>
          <div class="d-flex flex-column">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <input type="submit" value="Entrar" class="input-entrar" />
          <a class="esqueceu" href="#">Esqueceu a conta?</a>
          <p class="tira">ou</p>
          <a href="formulario.html" class="botao-criar">Criar nova conta</a>
        </form>
      </div>
    </div>
  </nav>
`;
