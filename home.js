const getData = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NzAzMzY4NWVjNDAwMTQ1MGI5M2QiLCJpYXQiOjE2OTI5NTQ2NzUsImV4cCI6MTY5NDE2NDI3NX0.63VJ58idUSSf-AK1f2lYIyx9mnx8SToyKqHXGKU96MI",
    },
  })
    .then((responseGetFetch) => {
      if (responseGetFetch.ok) {
        return responseGetFetch.json();
      }
    })
    .then((prodotti) => {
      console.log(prodotti);
      const row = document.querySelector("#rowProducts");
      console.log(row);
      let col;
      prodotti.forEach((prodotto) => {
        col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 col-xl-3";
        console.log(col);
        row.appendChild(col);
        col.innerHTML = ` <div class="card">
      <img src="${prodotto.imageUrl}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${prodotto.name}</h5>
        <p class="card-text">
          ${prodotto.description}
        </p>
        <p class="card-text">
          ${prodotto.price}$
        </p>
        <button class="btn btn-secondary" id="btnElimina">Nascondi</button>
        <div class="btn btn-white" id="btnModifica"><a href="./dettaglio.html?prodottoId=${prodotto._id}">Dettagli </a> </div>
        <button class="btn btn-primary" id="btnScopri">Scopri di più</button>
      </div>
      </div>`;

        const buttonsModifica = document.querySelectorAll("#btnModifica");
        const buttonsElimina = document.querySelectorAll("#btnElimina");
        const buttonsScopri = document.querySelectorAll("#btnScopri");
        buttonsElimina.forEach((btnElimina) =>
          btnElimina.addEventListener("click", function (e) {
            e.currentTarget.closest(".card").style.display = "none";
          })
        );
        const ModificaProdotto = function () {
          const divForm = document.getElementById("form");
          const form = document.createElement("form");
          form.className = "row g-3 needs-validation";
          form.innerHTML = ` <div class="col-md-4">
        <label  class="form-label">Nome <input
        type="text"
        class="form-control"
        id="validationCustom01"
        placeholder="Inserisci Nome Prodotto"
        value=${prodotto.name}
        required
      /></label>
        
      </div>
      <div class="col-12">
        <label  class="form-label">Description <input
        type="text"
        class="form-control"
        id="validationCustom02"
        placeholder="Inserisci Descrizione"
        value = ${prodotto.description}
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
        value= ${prodotto.brand}
        required
      /></label>
        
      </div>
      <div class="col-12">
        <label  class="form-label">imageUrl  <input
        type="text"
        class="form-control"
        id="validationCustom03"
        placeholder="inserisci un urlImage del prodotto"
        value=${prodotto.imageUrl}
        required
      /> </label>
       
      </div>
      <div class="col-12">
        <label  class="form-label">Price  <input  type="text" class="form-control" id="validationCustom04" placeholder="inserisci prezzo"  value= ${prodotto.price} required /></label>
       
      </div>
      <div class="col-12">
        <div class="form-check"></div>
      </div>
      <div class="col-12">
        <button id= "submit" class="btn btn-primary" >Carica Prodotto</button>
      </div>`;
          divForm.appendChild(form);
        };
        const inputName = document.getElementById("validationCustom01");
        const inputDescription = document.getElementById("validationCustom02");
        const inputBrand = document.getElementById("validationCustomBrand");
        const inputImageUrl = document.getElementById("validationCustom03");
        const inputPrice = document.getElementById("validationCustom04");

        const buttonsSubmit = document.querySelectorAll("#submit");

        // buttonsModifica.forEach((btnModifica) => {
        //   btnModifica.addEventListener("click", function () {
        //     ModificaProdotto();
        //   });
        //   buttonsSubmit.forEach((btnSubmit) => {
        //     btnSubmit.addEventListener("click",function(){}) = fetch(url + prodotto._id, {
        //       method: "PUT",
        //       body: JSON.stringify({
        //         name: inputName.value,
        //         description: inputDescription.value,
        //         price: inputPrice.value,
        //         brand: inputBrand.value,
        //         inputImageUrl: inputImageUrl.value,
        //       }),
        //     });
        //   });
        // });
      });
    });
};

getData();
