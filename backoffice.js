const url = "https://striveschool-api.herokuapp.com/api/product/";
const CreaProdotto = function () {
  console.log("ciao");
  const Modifica = async function () {
    const prodottoId = new URLSearchParams(window.location.search).get("prodottoId");
    console.log(prodottoId);
    const resp = await fetch(url + prodottoId, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
      },
    });
    const prodottoSelezionato = await resp.json();

    const { name, description, brand, imageUrl, price, _id } = prodottoSelezionato;
    console.log(name);
    console.log(description);

    const divForm = document.getElementById("form");
    const divRow = document.createElement("div");
    divRow.className = "row g-3 needs-validation";
    divRow.innerHTML = ` <form onsubmit="event"> <div class="col-md-4">
  <label  class="form-label">Nome <input
  type="text"
  class="form-control"
  id="validationCustom01"
  value=${name}
  placeholder="Inserisci Nome Prodotto"
 
  required
/></label>
  
</div>
<div class="col-12">
  <label  class="form-label">Description <input
  type="text"
  class="form-control"
  id="validationCustom02"
  placeholder="Inserisci Descrizione"
  value=${description}
  
  required
/></label>
  
</div>
<div class="col-md-12">
  <label  class="form-label">Brand <input
  type="text"
  class="form-control"
  id="validationCustomBrand"
  aria-describedby="inputGroupPrepend"
  placeholder="inserisci Brand"
  value=${brand}
  
  required
/></label>
  
</div>
<div class="col-12">
  <label  class="form-label">imageUrl  <input
  type="text"
  class="form-control"
  id="validationCustom03"
  placeholder="inserisci un urlImage del prodotto"
  value=${imageUrl}
  
  required
/> </label>
 
</div>
<div class="col-12">
  <label  class="form-label">Price  <input  type="text" class="form-control" id="validationCustom04" placeholder="inserisci prezzo"  value=${price} required /></label>
 
</div>
<div class="col-12">
  <div class="form-check"></div>
</div>
<div class="col-12">
  <button id= "crea" type="submit" class="btn btn-primary" >Crea Nuovo Prodotto</button>
  <button id= "modifica" type="submit" class="btn btn-primary" >Modifica Prodotto</button>
</div> </form>`;
    divForm.appendChild(divRow);
  };
  Modifica();
};
CreaProdotto();

const generateProduct = (event) => {
  event.preventDefault();
  const inputName = document.getElementById("validationCustom01");
  const inputDescription = document.getElementById("validationCustom02");
  const inputBrand = document.getElementById("validationCustomBrand");
  const inputImageUrl = document.getElementById("validationCustom03");
  const inputPrice = document.getElementById("validationCustom04");
  const btnCreaProdotto = document.getElementById("crea");
  console.log(btnCreaProdotto);
  btnCreaProdotto.onclick = console.log("ciao");
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify({
      name: inputName.value,
      description: inputDescription.value,
      brand: inputBrand.value,
      imageUrl: inputImageUrl.value,
      price: inputPrice.value,
    }),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
      "Content-Type": "application/json",
    },
  });
};
form.addEventListener("submit", generateProduct);

const ModificaProdotto = function () {
  const inputName = document.getElementById("validationCustom01");
  const inputDescription = document.getElementById("validationCustom02");
  const inputBrand = document.getElementById("validationCustomBrand");
  const inputImageUrl = document.getElementById("validationCustom03");
  const inputPrice = document.getElementById("validationCustom04");
  const btnModificaProdotto = document.getElementById("modifica");
  fetch(url + prodottoId, {
    method: "PUT",
    body: JSON.stringify({
      name: inputName.value,
      description: inputDescription.value,
      brand: inputBrand.value,
      imageUrl: inputImageUrl.value,
      price: inputPrice.value,
    }),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
      "Content-Type": "application/json",
    },
  });
  btnModificaProdotto.onclick = ModificaProdotto();
};
