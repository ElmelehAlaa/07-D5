const url = "https://striveschool-api.herokuapp.com/api/product/";
const prodottoId = new URLSearchParams(window.location.search).get("prodottoId");
window.onload = async () => {
  const resp = await fetch(url + prodottoId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
    },
  });
  const prodottoSelezionato = await resp.json();
  console.log(prodottoSelezionato);
  const { name, description, brand, imageUrl, price } = prodottoSelezionato;
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
  <button class="btn-primary">modifica</button>;
  </div>`;
  const btnElimina = document.querySelector("#btnElimina");
  console.log(btnElimina);
  const Elimina = function () {
    fetch(url + prodottoId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
      },
    });
    console.log("Eliminato!");
  };
  btnElimina.onclick = Elimina();
};
