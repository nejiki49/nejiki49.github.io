// //レベルが50かオープンでオプションを変更
// function updatePokeList() {
//   // 選択されたレベルに応じて、ポケモンの選択肢を切り替える
//   const selectedLv = document.querySelector('input[name="Lv_tab2"]:checked').value;
//   const pokeListToUse = selectedLv === "50" ? array["50"] : array["100"];

//   // ポケモンの選択肢を作成する
//   const myPokeSelect = document.getElementById("mypokename_tab2");
//   const tekiPokeSelect = document.getElementById("tekipokename_tab2");
//   myPokeSelect.innerHTML = "";
//   tekiPokeSelect.innerHTML = "";
//   pokeListToUse.forEach((poke) => {
//     const option = document.createElement("option");
//     option.value = poke.cd;
//     option.textContent = poke.label;
//     myPokeSelect.appendChild(option);

//     const option2 = document.createElement("option");
//     option2.value = poke.cd;
//     option2.textContent = poke.label;
//     tekiPokeSelect.appendChild(option2);
//   });
// }

const levelSelection_tab2 = document.getElementById("level_selection_tab2");
const shapeNum_tab2 = document.getElementById("shape-num_tab2");

function updatePokeList() {
  // 選択されたレベルに応じて、ポケモンの選択肢を切り替える
  const selectedLv = document.querySelector('input[name="Lv_tab2"]:checked');
  const selectedLvValue = selectedLv ? selectedLv.value : "50";
  const setShape = shapeNum_tab2.querySelector('input[name="shape-num_tab2"]:checked').value;
  const pokeListToUse = selectedLvValue === "50" ? array["50"] : array["100"];

  // 絞り込み条件に応じてポケモンの選択肢を作成する
  const myPokeSelect = document.getElementById("mypokename_tab2");
  const tekiPokeSelect = document.getElementById("tekipokename_tab2");
  myPokeSelect.innerHTML = "";
  tekiPokeSelect.innerHTML = "";

  pokeListToUse.forEach((poke) => {
    // myPokeSelectに格納する条件に合致するポケモンを追加
    if ((selectedLvValue === "100" || selectedLvValue === "50") && setShape == "0") {
      // console.log("選択なし");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "100" &&
      parseInt(setShape) >= 1 &&
      parseInt(setShape) <= 3 &&
      (poke.group === "0" || poke.group === "4")
    ) {
      // console.log("100-1~3");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "100" &&
      "4" <= setShape &&
      (poke.group === "0" || poke.group === "4" || poke.group === "8")
    ) {
      // console.log("100-4以降");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (selectedLvValue === "50" && "1" == setShape && (poke.group === "0" || poke.group === "1")) {
      // console.log("50-1");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "2" == setShape &&
      (poke.group === "0" || poke.group === "1" || poke.group === "2")
    ) {
      // console.log("50-2");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "3" == setShape &&
      (poke.group === "0" || poke.group === "2" || poke.group === "4")
    ) {
      // console.log("50-3");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "4" == setShape &&
      (poke.group === "0" || poke.group === "2" || poke.group === "4")
    ) {
      // console.log("50-4");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      parseInt(setShape) >= 5 &&
      parseInt(setShape) <= 6 &&
      (poke.group === "0" || poke.group === "4")
    ) {
      // console.log("50-4〜6");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "7" <= setShape &&
      (poke.group === "0" || poke.group === "4" || poke.group === "8")
    ) {
      // console.log("50-7以降");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      myPokeSelect.appendChild(option);
    }

    // tekiPokeSelectに格納する条件に合致するポケモンを追加
    if ((selectedLvValue === "100" || selectedLvValue === "50") && setShape == "0") {
      // console.log("選択なし");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (selectedLvValue === "100" && setShape <= "2" && (poke.group === "0" || poke.group === "4")) {
      // console.log("100-1~2");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "100" &&
      "3" <= setShape &&
      (poke.group === "0" || poke.group === "4" || poke.group === "8")
    ) {
      // console.log("100-3以降");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "1" == setShape &&
      (poke.group === "0" || poke.group === "1" || poke.group === "2")
    ) {
      // console.log("50-1");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "2" == setShape &&
      (poke.group === "0" || poke.group === "1" || poke.group === "2")
    ) {
      // console.log("50-2");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "3" == setShape &&
      (poke.group === "0" || poke.group === "2" || poke.group === "4")
    ) {
      // console.log("50-3");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "4" == setShape &&
      (poke.group === "0" || poke.group === "2" || poke.group === "4")
    ) {
      // console.log("50-4");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      parseInt(setShape) >= 5 &&
      parseInt(setShape) <= 7 &&
      (poke.group === "0" || poke.group === "4")
    ) {
      // console.log("50-5~7");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    } else if (
      selectedLvValue === "50" &&
      "8" <= setShape &&
      (poke.group === "0" || poke.group === "4" || poke.group === "8")
    ) {
      // console.log("50-8以降");
      const option = document.createElement("option");
      option.value = poke.cd;
      option.dataset.search = poke.label; // カスタムデータ属性を追加
      option.textContent = poke.label;
      tekiPokeSelect.appendChild(option);
    }
  });
}

levelSelection_tab2.addEventListener("change", updatePokeList);
shapeNum_tab2.addEventListener("change", updatePokeList);
// 初期表示時にポケモンの選択肢を更新する
updatePokeList();

const mypokename_tab2 = document.getElementById("mypokename_tab2");
const tekipokename_tab2 = document.getElementById("tekipokename_tab2");

// levelSelection_tab2.addEventListener("change", function () {
//   mypokename_tab2.options.length = 0;
//   tekipokename_tab2.options.length = 0;
//   const changedPref = document.querySelector('input[name="Lv_tab2"]:checked').value;
//   for (let i = 0; i < array[changedPref].length; i++) {
//     const op = document.createElement("option");
//     const value = array[changedPref][i];
//     op.value = value.cd;
//     op.text = value.label;
//     mypokename_tab2.appendChild(op);

//     const op2 = document.createElement("option");
//     op2.value = value.cd;
//     op2.text = value.label;
//     tekipokename_tab2.appendChild(op2);
//   }
// });

// mypokeのvalueが変更された際に呼び出される関数
function updateMypokeIcon() {
  const mypokename_tab2 = document.getElementById("mypokename_tab2").value;
  document.getElementById("mypokeicon_tab2").src =
    "https://veekun.com/dex/media/pokemon/main-sprites/platinum/" + mypokename_tab2 + ".png";
}

// tekipokeのvalueが変更された際に呼び出される関数
function updateTekipokeIcon() {
  const tekipokename_tab2 = document.getElementById("tekipokename_tab2").value;
  document.getElementById("tekipokeicon").src =
    "https://veekun.com/dex/media/pokemon/main-sprites/platinum/" + tekipokename_tab2 + ".png";
}

// mypokeとtekipokeのchangeイベントにそれぞれ関数を割り当てる
document.getElementById("mypokename_tab2").addEventListener("change", updateMypokeIcon);
document.getElementById("tekipokename_tab2").addEventListener("change", updateTekipokeIcon);

const HGSSPt_tab2 = document.getElementById("HGSSPt_tab2");
const trainers_tab2 = document.getElementById("trainers_tab2");

function updateTrainers() {
  const setLevel = HGSSPt_tab2.querySelector('input[name="HGSSPt_tab2"]:checked').value;
  const setShape = shapeNum_tab2.querySelector('input[name="shape-num_tab2"]:checked').value;

  // 絞り込み条件を追加
  const filteredTrainers = trainerList[setLevel].filter((item) => {
    if (setShape === "1") {
      return item.rank === 0 || item.rank === 1 || item.rank === 2;
    } else if (setShape === "2") {
      return item.rank === 0 || (item.rank >= 1 && item.rank <= 3);
    } else if (setShape === "3") {
      return item.rank === 0 || item.rank === 2 || item.rank === 3 || item.rank === 9 || item.rank === 10;
    } else if (setShape === "4") {
      return item.rank === 0 || (item.rank >= 3 && item.rank <= 5);
    } else if (setShape === "5") {
      return item.rank === 0 || (item.rank >= 4 && item.rank <= 6);
    } else if (setShape === "6") {
      return item.rank === 0 || (item.rank >= 5 && item.rank <= 7);
    } else if (setShape === "7") {
      return item.rank === 0 || item.rank === 6 || item.rank === 7 || item.rank === 9 || item.rank === 10;
    } else if (setShape === "8") {
      return item.rank === 0 || (item.rank >= 7 && item.rank <= 8);
    } else {
      return true; // どの条件にも当てはまらない場合はすべての要素を返す
    }
  });
  // フィルタリングされた要素をオプションとして生成
  const options = filteredTrainers
    .map((item) => `<option value="${item.cd}" data-search="${item.label}">${item.label}</option>`)
    .join("");
  // const options = filteredTrainers.map((item) => `<option value="${item.cd}">${item.label}</option>`).join("");
  trainers_tab2.innerHTML = options;
}

shapeNum_tab2.addEventListener("change", updateTrainers);
HGSSPt_tab2.addEventListener("change", updateTrainers);

updateTrainers(); // 初期表示時にtrainersを更新する

$(function () {
  $(".toggle-button").click(function () {
    $(this).next(".toggle-content").slideToggle();
    $(this).text(function (i, text) {
      return text === "詳細を表示" ? "詳細を非表示" : "詳細を表示";
    });
  });
});

// window.onload = function () {
//   var myItemAuto_tab2 = document.getElementById("myItemAuto_tab2");
//   var myItemAutoApply_tab2 = document.getElementById("myItemAutoApply_tab2");

//   myItemAutoApply_tab2.style.display = "none"; // 初期表示を非表示にする

//   myItemAuto_tab2.addEventListener("click", function () {
//     myItemAutoApply_tab2.style.display = "block"; // ボタンがクリックされたら表示する
//   });

//   myItemAutoApply_tab2.addEventListener("click", function () {
//     myItemAutoApply_tab2.style.display = "none"; // ボタンがクリックされたら非表示にする
//   });
// };
