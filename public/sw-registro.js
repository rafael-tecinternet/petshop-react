if ("serviceWorker" in navigator) {
  /* Faça o navegador registrar */
  navigator.serviceWorker
    .register("sw-petshop.js")
    .then(function () {
      console.log("Service Worker foi registrado com sucesso");
    })
    .catch(function (error) {
      console.log("Erro no Service Worker: " + error.message);
    });
} else {
  console.log("Este navegador não suporta Service Worker");
}
