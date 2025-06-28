const allProducts = [
  { 編號: "D001", 品名: "綠茶" },
  { 編號: "D002", 品名: "紅茶" },
  { 編號: "S001", 品名: "海苔餅" },
  { 編號: "S002", 品名: "花生糖" },
  { 編號: "S003", 品名: "米果" },
  { 編號: "S004", 品名: "牛肉乾" },
  { 編號: "D003", 品名: "烏龍茶" },
  { 編號: "D004", 品名: "蜂蜜水" },
];

const generateBtn = document.getElementById("generate-btn");
const showAllBtn = document.getElementById("show-all-btn");
const practiceList = document.getElementById("practice-list");

let currentSet = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generatePracticeList() {
  const count = Math.floor(Math.random() * 4) + 5; // 5~8 個商品
  currentSet = shuffle([...allProducts]).slice(0, count);
  renderPracticeList();
}

function renderPracticeList(showAll = false) {
  practiceList.innerHTML = "";
  currentSet.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow p-4";

    const question = document.createElement("div");
    question.textContent = `${idx + 1}. ${item.品名}`;
    question.className = "font-medium";

    const answer = document.createElement("div");
    answer.textContent = showAll ? item.編號 : "點我看編號";
    answer.className = "text-blue-600 cursor-pointer mt-1";
    if (!showAll) {
      answer.onclick = () => {
        answer.textContent = item.編號;
        answer.classList.remove("cursor-pointer", "text-blue-600");
        answer.classList.add("text-gray-600");
      };
    }

    card.appendChild(question);
    card.appendChild(answer);
    practiceList.appendChild(card);
  });
}

generateBtn.onclick = generatePracticeList;
showAllBtn.onclick = () => renderPracticeList(true);
