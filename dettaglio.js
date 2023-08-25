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
};
