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
        <div class="btn bg-dark text-light" id="btnModifica"><a href="./dettaglio.html?prodottoId=${prodotto._id}">Scopri di più </a> </div>
      </div>
      </div>`;
        const buttonsElimina = document.querySelectorAll("#btnElimina");
        buttonsElimina.forEach((btnElimina) =>
          btnElimina.addEventListener("click", function (e) {
            e.currentTarget.closest(".card").style.display = "none";
          })
        );
      });
    });
};

getData();
