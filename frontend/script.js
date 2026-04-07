async function search() {
  const q = document.getElementById("search").value;
  const category = document.getElementById("category").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  const url = `http://localhost:5000/search?q=${q}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  const res = await fetch(url);
  const data = await res.json();

  const container = document.getElementById("results");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  data.forEach((item) => {
    container.innerHTML += `
      <p>${item.productName} - ${item.category} - ₹${item.price}</p>
    `;
  });
}
