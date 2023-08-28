const url = "https://striveschool-api.herokuapp.com/api/product/";
const prodottoId = new URLSearchParams(window.location.search).get("prodottoId");
console.log(prodottoId);
if (prodottoId) {
  fetch(url + prodottoId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((prodottoSelezionato) => {
      const { name, description, price, imageUrl, brand } = prodottoSelezionato;
      const divForm = document.getElementById("form");
      const divRow = document.createElement("div");
      divRow.className = "row g-3 needs-validation";

      divRow.innerHTML = ` <form onsubmit="event"> <div class="col-md-4">
         <label  class="form-label">Nome <input
         type="text"
         class="form-control"
         id="validationCustom01"
      
         placeholder="Inserisci Nome Prodotto"
        value=${name}
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
         <label  class="form-label">Price  <input  type="text" class="form-control" id="validationCustom04" placeholder="inserisci prezzo" value=${price}  required /></label>
      
       </div>
       <div class="col-12">
         <div class="form-check"></div>
       </div>
       <div class="col-12">
         <button id= "crea" type="submit" class="btn btn-primary" >Crea Nuovo Prodotto</button>
         <button id= "modifica" type="submit" class="btn btn-primary" >Modifica Prodotto</button>
       </div> </form>`;

      divForm.appendChild(divRow);
      const ModificaProdotto = function (event) {
        event.preventDefault();
        console.log("modifica");
        const inputName = document.getElementById("validationCustom01");
        const inputDescription = document.getElementById("validationCustom02");
        const inputBrand = document.getElementById("validationCustomBrand");
        const inputImageUrl = document.getElementById("validationCustom03");
        const inputPrice = document.getElementById("validationCustom04");
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
      };
      form.addEventListener("submit", ModificaProdotto);
    });
} else {
  const divForm = document.getElementById("form");
  const divRow = document.createElement("div");
  divRow.className = "row g-3 needs-validation";

  divRow.innerHTML = ` <form onsubmit="event"> <div class="col-md-4">
         <label  class="form-label">Nome <input
         type="text"
         class="form-control"
         id="validationCustom01"
      
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
         
      
         required
       /></label>
      
       </div>
       <div class="col-12">
         <label  class="form-label">imageUrl  <input
         type="text"
         class="form-control"
         id="validationCustom03"
         placeholder="inserisci un urlImage del prodotto"
         
      
         required
       /> </label>
      
       </div>
       <div class="col-12">
         <label  class="form-label">Price  <input  type="text" class="form-control" id="validationCustom04" placeholder="inserisci prezzo"   required /></label>
      
       </div>
       <div class="col-12">
         <div class="form-check"></div>
       </div>
       <div class="col-12">
         <button id= "crea" type="submit" class="btn btn-primary" >Crea Nuovo Prodotto</button>
         <button id= "modifica" type="submit" class="btn btn-primary" >Modifica Prodotto</button>
       </div> </form>`;
  divForm.appendChild(divRow);
  const creaProdotto = function (event) {
    event.preventDefault();
    console.log("Creato!");
    const inputName = document.getElementById("validationCustom01");
    const inputDescription = document.getElementById("validationCustom02");
    const inputBrand = document.getElementById("validationCustomBrand");
    const inputImageUrl = document.getElementById("validationCustom03");
    const inputPrice = document.getElementById("validationCustom04");
    fetch(url, {
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
  form.addEventListener("submit", creaProdotto);
}
