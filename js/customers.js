// 假資料
const customers = {
  北部: [
    { 編號: "C001", 名稱: "台北通路商" },
    { 編號: "C002", 名稱: "新竹經銷商" },
  ],
  南部: [
    { 編號: "C101", 名稱: "高雄經銷商" },
    { 編號: "C102", 名稱: "台南代理商" },
  ],
};

const regionCards = document.getElementById("region-cards");
const customerSection = document.getElementById("customer-section");
const customerList = document.getElementById("customer-list");
const regionTitle = document.getElementById("region-title");
const customerSearch = document.getElementById("customer-search");
const backBtn = document.getElementById("back-to-regions");

function showRegions() {
  regionCards.innerHTML = "";
  customerSection.classList.add("hidden");
  regionCards.classList.remove("hidden");

  Object.keys(customers).forEach((region) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow hover:bg-yellow-100 cursor-pointer";
    card.innerHTML = `<h3 class="text-lg font-semibold">${region}</h3>`;
    card.onclick = () => showCustomerList(region);
    regionCards.appendChild(card);
  });
}

function showCustomerList(region) {
  regionTitle.textContent = region;
  customerSearch.value = "";
  renderCustomerList(customers[region]);

  regionCards.classList.add("hidden");
  customerSection.classList.remove("hidden");

  customerSearch.oninput = () => {
    const keyword = customerSearch.value.trim().toLowerCase();
    const filtered = customers[region].filter(
      (c) =>
        c.名稱.toLowerCase().includes(keyword) ||
        c.編號.toLowerCase().includes(keyword)
    );
    renderCustomerList(filtered);
  };
}

function renderCustomerList(list) {
  customerList.innerHTML = "";
  list.forEach((c) => {
    const li = document.createElement("li");
    li.className = "bg-white p-3 rounded shadow flex justify-between";
    li.innerHTML = `<span>${c.名稱}</span><span class="text-gray-500">${c.編號}</span>`;
    customerList.appendChild(li);
  });
}

backBtn.onclick = showRegions;
document.addEventListener("DOMContentLoaded", showRegions);
