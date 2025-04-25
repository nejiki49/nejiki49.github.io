$("#mypokename_tab2, #pokeShape_tab2 input[name=shape_tab2], #level_selection_tab2 input[name=Lv_tab2]").on(
  "change",
  function () {
    mypokename_tab2;
    // mypokenameのvalueを取得
    const mypokeNameVal = parseFloat($("#mypokename_tab2 option:selected").val());
    // shapeのvalueを取得
    const pokeShapeVal = parseFloat($("input[name=shape_tab2]:checked").val());
    // Lvのvalueを取得
    const lvVal = parseFloat($("input[name=Lv_tab2]:checked").val());

    const mypokeST = bfpokedata.find((item) => item.pokeNo == mypokeNameVal && item.shape === pokeShapeVal);
    const mypokeBfNo = mypokeST && mypokeST.bfNo ? parseFloat(mypokeST.bfNo) : "";

    let kotaChange = document.getElementById("kota_tab2");


    if (lvVal === 100) {
      if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota1_tab2" value="0" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota1_tab2">0</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      } else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota4_tab2" value="4" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota4_tab2">4</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      } else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
        kotaChange.innerHTML = `

        <input type="radio" class="btn-check" name="kota_tab2" id="kota8_tab2" value="8" checked>
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota8_tab2">8</label>
        <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
        <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
        <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
        <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
      `;
      } else if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota12_tab2" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12_tab2">12</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      } else if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota12_tab2" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12_tab2">12</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      }

      //レベル50のとき
    } else if (lvVal === 50) {
      if (mypokeBfNo >= 1 && mypokeBfNo <= 150) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota1_tab2" value="0" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota1_tab2">0</label>
    `;
      } else if (mypokeBfNo >= 151 && mypokeBfNo <= 250) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota4_tab2" value="4" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota4_tab2">4</label>
    `;
      } else if (mypokeBfNo >= 251 && mypokeBfNo <= 350) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota8_tab2" value="8" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota8_tab2">8</label>
    `;
      } else if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota12_tab2" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12_tab2">12</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      } else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota16_tab2" value="16" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16_tab2">16</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      } else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
        kotaChange.innerHTML = `

        <input type="radio" class="btn-check" name="kota_tab2" id="kota20_tab2" value="20" checked>
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20_tab2">20</label>
        <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
      `;
      }
      if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
        kotaChange.innerHTML = `
      
      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      }
      if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
        kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota_tab2" id="kota24_tab2" value="24" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24_tab2">24</label>
      <input type="radio" class="btn-check" name="kota_tab2" id="kota31_tab2" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31_tab2">31</label>
    `;
      }
    }
  }
);
