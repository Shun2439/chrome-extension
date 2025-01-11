const idioms = [
  { kanji: "一期一会", meaning: "一生に一度だけの出会いを大切にする。" },
  { kanji: "七転八起", meaning: "何度失敗しても諦めずに立ち上がる。" },
  { kanji: "温故知新", meaning: "過去を学び、新しいことを知る。" },
  { kanji: "異体同心", meaning: "立場は違えど、同じ心で協力する。" },
];

function displayRandomIdiom() {
  const randomIdiom = idioms[Math.floor(Math.random() * idioms.length)];
  document.getElementById("idiom").textContent = randomIdiom.kanji;
  document.getElementById("meaning").textContent = randomIdiom.meaning;
}

document.getElementById("refresh").addEventListener("click", displayRandomIdiom);

// Display a random idiom when the page loads
displayRandomIdiom();

