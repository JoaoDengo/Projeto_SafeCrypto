document.addEventListener("DOMContentLoaded", function () {
    const abrirModalBtn = document.getElementById("abrirModal");
    const modal = document.getElementById("modal");
    const fecharModalBtn = document.getElementById("fecharModal");
  
    abrirModalBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    fecharModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  