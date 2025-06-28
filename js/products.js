// 假資料
const products = {
  飲料: [
    { 編號: "D001", 品名: "綠茶" },
    { 編號: "D002", 品名: "紅茶" },
  ],
  零食: [
    { 編號: "S001", 品名: "海苔餅" },
    { 編號: "S002", 品名: "花生糖" },
  ],
};

const categoryCards = document.getElementById("category-cards");
const productSection = document.getElementById("product-section");
const productList = document.getElementById("product-list");
const categoryTitle = document.getElementById("category-title");
const productSearch = document.getElementById("product-search");
const backBtn = document.getElementById("back-to-categories");

function showCategories() {
  categoryCards.innerHTML = "";
  productSection.classList.add("hidden");
  categoryCards.classList.remove("hidden");

  Object.keys(products).forEach((cat) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow hover:bg-yellow-100 cursor-pointer";
    card.innerHTML = `<h3 class="text-lg font-semibold">${cat}</h3>`;
    card.onclick = () => showProducts(cat);
    categoryCards.appendChild(card);
  });
}

function showProducts(category) {
  categoryTitle.textContent = category;
  productSearch.value = "";
  renderProductList(products[category]);

  categoryCards.classList.add("hidden");
  productSection.classList.remove("hidden");

  productSearch.oninput = () => {
    const keyword = productSearch.value.trim().toLowerCase();
    const filtered = products[category].filter(
      (p) =>
        p.品名.toLowerCase().includes(keyword) ||
        p.編號.toLowerCase().includes(keyword)
    );
    renderProductList(filtered);
  };
}

function renderProductList(list) {
  productList.innerHTML = "";
  list.forEach((p) => {
    const li = document.createElement("li");
    li.className = "bg-white p-3 rounded shadow flex justify-between";
    li.innerHTML = `<span>${p.品名}</span><span class="text-gray-500">${p.編號}</span>`;
    productList.appendChild(li);
  });
}

backBtn.onclick = showCategories;

document.addEventListener("DOMContentLoaded", showCategories);
