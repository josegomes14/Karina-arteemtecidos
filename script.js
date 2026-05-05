const TELEFONE_WHATSAPP = "5545998510794";

function comprarProduto(nomeProduto, precoProduto) {
  const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}, no valor de R$ ${precoProduto},00. Poderia me passar mais informações?`;
  const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function abrirWhatsApp() {
  const mensagem = "Olá! Gostaria de saber mais sobre os produtos da Karina Arte em Tecido.";
  const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function filtrarProdutos(categoria) {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach((produto) => {
    const deveMostrar = categoria === "todos" || produto.classList.contains(categoria);
    produto.style.display = deveMostrar ? "block" : "none";
  });
}
