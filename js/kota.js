$("#mypokename, #pokeShape input[name=shape], #level_selection input[name=Lv]").on("change", function () {
  // mypokenameのvalueを取得
  const mypokeNameVal = parseFloat($("#mypokename option:selected").val());
  // shapeのvalueを取得
  const pokeShapeVal = parseFloat($("input[name=shape]:checked").val());
  // Lvのvalueを取得
  const lvVal = parseFloat($("input[name=Lv]:checked").val());

  const mypokeST = bfpokedata.find((item) => item.pokeNo == mypokeNameVal && item.shape === pokeShapeVal);
  const mypokeBfNo = mypokeST && mypokeST.bfNo ? parseFloat(mypokeST.bfNo) : "";

  let kotaChange = document.getElementById("kota");

  if (lvVal === 100) {
    if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota1" value="0" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota1">0</label>
      <input type="radio" class="btn-check" name="kota" id="kota16" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
      <input type="radio" class="btn-check" name="kota" id="kota20" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
      <input type="radio" class="btn-check" name="kota" id="kota24" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    } else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota4" value="4" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota4">4</label>
      <input type="radio" class="btn-check" name="kota" id="kota16" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
      <input type="radio" class="btn-check" name="kota" id="kota20" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
      <input type="radio" class="btn-check" name="kota" id="kota24" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    } else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
      kotaChange.innerHTML = `

        <input type="radio" class="btn-check" name="kota" id="kota8" value="8" checked>
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota8">8</label>
        <input type="radio" class="btn-check" name="kota" id="kota16" value="16">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
        <input type="radio" class="btn-check" name="kota" id="kota20" value="20">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
        <input type="radio" class="btn-check" name="kota" id="kota24" value="24">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
        <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
      `;
    } else if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota12" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12">12</label>
      <input type="radio" class="btn-check" name="kota" id="kota16" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
      <input type="radio" class="btn-check" name="kota" id="kota20" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
      <input type="radio" class="btn-check" name="kota" id="kota24" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    } else if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota12" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12">12</label>
      <input type="radio" class="btn-check" name="kota" id="kota16" value="16">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
      <input type="radio" class="btn-check" name="kota" id="kota20" value="20">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
      <input type="radio" class="btn-check" name="kota" id="kota24" value="24">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    }

    //レベル50のとき
  } else if (lvVal === 50) {
    if (mypokeBfNo >= 1 && mypokeBfNo <= 150) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota1" value="0" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota1">0</label>
    `;
    } else if (mypokeBfNo >= 151 && mypokeBfNo <= 250) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota4" value="4" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota4">4</label>
    `;
    } else if (mypokeBfNo >= 251 && mypokeBfNo <= 350) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota8" value="8" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota8">8</label>
    `;
    } else if (mypokeBfNo >= 351 && mypokeBfNo <= 486) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota12" value="12" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota12">12</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    } else if (mypokeBfNo >= 487 && mypokeBfNo <= 622) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota16" value="16" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota16">16</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    } else if (mypokeBfNo >= 623 && mypokeBfNo <= 758) {
      kotaChange.innerHTML = `

        <input type="radio" class="btn-check" name="kota" id="kota20" value="20" checked>
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota20">20</label>
        <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
        <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
      `;
    }
    if (mypokeBfNo >= 759 && mypokeBfNo <= 894) {
      kotaChange.innerHTML = `
      
      <input type="radio" class="btn-check" name="kota" id="kota24" value="24" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    }
    if (mypokeBfNo >= 895 && mypokeBfNo <= 950) {
      kotaChange.innerHTML = `

      <input type="radio" class="btn-check" name="kota" id="kota24" value="24" checked>
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota24">24</label>
      <input type="radio" class="btn-check" name="kota" id="kota31" value="31">
      <label class="btn btn-secondary rounded-0 py-3 fs-5" for="kota31">31</label>
    `;
    }
  }
});
