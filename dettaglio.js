const url = "https://striveschool-api.herokuapp.com/api/product/";
const prodottoId = new URLSearchParams(window.location.search).get("prodottoId");
window.onload = async () => {
  const resp = await fetch(url + prodottoId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE1NGMwMzRmZjAwMTQwM2Y1MzMiLCJpYXQiOjE2OTQ4NjczMzgsImV4cCI6MTY5NjA3NjkzOH0.hTLKACOvUzS1q8dZXmkwdm7Z62vONoitbxAbjBu4UrY",
    },
  });
  const prodottoSelezionato = await resp.json();
  console.log(prodottoSelezionato);
  const { name, description, brand, imageUrl, price, _id } = prodottoSelezionato;
  const container = document.getElementById("containerProdotto");
  container.innerHTML = `<div class="row justify-content-center">
  <div class="card">
      <img class="w-50" src="${imageUrl}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          ${description}
        </p>
        <p class="card-text">
          ${brand}$
        </p>
        <p class="card-text">
          ${price}$
        </p>
        <button class="btn btn-secondary" id="btnElimina">Elimina</button>
        
        <button class="btn btn-primary" id="btnScopri">Scopri di più</button>
      </div>
      </div>
      <div id="prodotto-dettaglio"></div>
      <div id="btnModifica" class="btn bg-dark text-light"><a href="./backoffice.html?prodottoId=${_id}">Modifica </a></div>;
      </div>`;
  const btnElimina = document.querySelector("#btnElimina");
  console.log(btnElimina);
  btnElimina.onclick = Elimina;
  const btnScopri = document.getElementById("btnScopri");
  btnScopri.classList.add("d-none");
};
const Elimina = function () {
  if (confirm("Sei sicuro di eliminare questo prodotto?")) {
    fetch(url + prodottoId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE1NGMwMzRmZjAwMTQwM2Y1MzMiLCJpYXQiOjE2OTQ4NjczMzgsImV4cCI6MTY5NjA3NjkzOH0.hTLKACOvUzS1q8dZXmkwdm7Z62vONoitbxAbjBu4UrY",
      },
    });
    console.log("Eliminato!");
  } else {
    // Do nothing!
    console.log("Operazione Annullata");
  }
};
