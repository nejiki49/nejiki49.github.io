// $("#mypokename, #level_selection input[name=Lv]").on("change", function () {
//   const mypokeNameVal = parseFloat($("#mypokename option:selected").val());
//   const lvVal = parseFloat($("input[name=Lv]:checked").val());
//   const mypokeSTs = bfpokedata.filter(item => item.pokeNo === mypokeNameVal);

//   const shapeOptions = [
//     {id: 1, value: "1", label: "1型"},
//     {id: 2, value: "2", label: "2型"},
//     {id: 3, value: "3", label: "3型"},
//     {id: 4, value: "4", label: "4型"}
//   ];

//   let shapeHtml = '<div id="pokeShape" class="cp_ipradio"><span class="moji">型</span><br>';

//   if (mypokeSTs.length === 0) {
//     shapeHtml += "型配列が見つけられませんでした。";
//   } else if (mypokeSTs.length > shapeOptions.length) {
//     shapeHtml += "型配列がたくさんありすぎました。";
//   } else {
//     shapeOptions.slice(0, mypokeSTs.length).forEach((option) => {
//       shapeHtml += `
//         <input type="radio" name="shape" id="shape${option.id}" value="${option.value}"${option.id === 1 ? ' checked' : ''}>
//         <label for="shape${option.id}">${option.label}</label>
//       `;
//     });
//   }

//   shapeHtml += '</div>';

//   const shapeChange = document.getElementById('pokeShape');
//   shapeChange.innerHTML = shapeHtml;
// });
// $(document).on("change", "#mypokename, #pokeShape input[name=shape], #level_selection input[name=Lv]", function () {

//   // mypokenameのvalueを取得
//   const mypokeNameVal = parseFloat($("#mypokename option:selected").val());
//   // shapeのvalueを取得
//   const pokeShapeVal = parseFloat($("input[name=shape]:checked").val());
//   // Lvのvalueを取得
//   const lvVal = parseFloat($("input[name=Lv]:checked").val());

//   const mypokeST = bfpokedata.find(item => item.pokeNo == mypokeNameVal && item.shape === pokeShapeVal);
//   const mypokeBfNo = mypokeST && mypokeST.bfNo ? parseFloat(mypokeST.bfNo) : "";


//   let kotaChange = document.getElementById('kota');

//   if (lvVal === 100) {
//     if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota1" value="0" checked>
//       <label for="kota1">0</label>
//       <input type="radio" name="kota" id="kota16" value="16">
//       <label for="kota16">16</label>
//       <input type="radio" name="kota" id="kota20" value="20">
//       <label for="kota20">20</label>
//       <input type="radio" name="kota" id="kota24" value="24">
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota4" value="4" checked>
//       <label for="kota4">4</label>
//       <input type="radio" name="kota" id="kota16" value="16">
//       <label for="kota16">16</label>
//       <input type="radio" name="kota" id="kota20" value="20">
//       <label for="kota20">20</label>
//       <input type="radio" name="kota" id="kota24" value="24">
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
//       kotaChange.innerHTML = `
//         <input type="radio" name="kota" id="kota8" value="8" checked>
//         <label for="kota8">8</label>
//         <input type="radio" name="kota" id="kota16" value="16">
//         <label for="kota16">16</label>
//         <input type="radio" name="kota" id="kota20" value="20">
//         <label for="kota20">20</label>
//         <input type="radio" name="kota" id="kota24" value="24">
//         <label for="kota24">24</label>
//         <input type="radio" name="kota" id="kota31" value="31">
//         <label for="kota31">31</label>
//       `;
//     }
//     else if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota12" value="12" checked>
//       <label for="kota12">12</label>
//       <input type="radio" name="kota" id="kota16" value="16">
//       <label for="kota16">16</label>
//       <input type="radio" name="kota" id="kota20" value="20">
//       <label for="kota20">20</label>
//       <input type="radio" name="kota" id="kota24" value="24">
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }else if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota12" value="12" checked>
//       <label for="kota12">12</label>
//       <input type="radio" name="kota" id="kota16" value="16">
//       <label for="kota16">16</label>
//       <input type="radio" name="kota" id="kota20" value="20">
//       <label for="kota20">20</label>
//       <input type="radio" name="kota" id="kota24" value="24">
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }

//     //レベル50のとき
//   } else if (lvVal === 50) {
//     if (mypokeBfNo >= 1 && mypokeBfNo <= 150) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota1" value="0" checked>
//       <label for="kota1">0</label>
//     `;
//     }
//     else if (mypokeBfNo >= 151 && mypokeBfNo <= 250) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota4" value="4" checked>
//       <label for="kota4">4</label>
//     `;
//     }else if (mypokeBfNo >= 251 && mypokeBfNo <= 350) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota8" value="8" checked>
//       <label for="kota8">8</label>
//     `;
//     }else if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota12" value="12" checked>
//       <label for="kota12">12</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota16" value="16" checked>
//       <label for="kota16">16</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
//       kotaChange.innerHTML = `
//         <input type="radio" name="kota" id="kota20" value="20" checked>
//         <label for="kota20">20</label>
//         <input type="radio" name="kota" id="kota31" value="31">
//         <label for="kota31">31</label>
//       `;
//     }
//     if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota24" value="24" checked>
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }
//     if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
//       kotaChange.innerHTML = `
//       <input type="radio" name="kota" id="kota24" value="24" checked>
//       <label for="kota24">24</label>
//       <input type="radio" name="kota" id="kota31" value="31">
//       <label for="kota31">31</label>
//     `;
//     }
//   }
// });
