// kota_tab2、mypokename_tab2、shape、Lvのいずれかが変更されたときの処理
$("#kota_tab2, #mypokename_tab2, #pokeShape_tab2 input[name=shape_tab2], #level_selection_tab2 input[name=Lv_tab2]").on(
  "change",
  function () {
    // kotaのvalueを取得
    const kotaVal = parseFloat($("input[name=kota_tab2]:checked").val());
    // mypokenameのvalueを取得
    const mypokeNameVal = parseFloat($("#mypokename_tab2 option:selected").val());
    // shapeのvalueを取得
    const pokeShapeVal = parseFloat($("input[name=shape_tab2]:checked").val());
    // Lvのvalueを取得
    const lvVal = parseFloat($("input[name=Lv_tab2]:checked").val());

    // pokeShapeVal の値が更新されたため、新しい値を利用した処理をここに記述する
    const mypokeST = bfpokedata.find((item) => item.pokeNo == mypokeNameVal && item.shape === pokeShapeVal);
    if (mypokeST) {
      const mypokeBaseH = parseFloat(mypokeST.shH); //自H種族値
      const mypokeBaseA = parseFloat(mypokeST.shA); //自A種族値
      const mypokeBaseB = parseFloat(mypokeST.shB); //自B種族値
      const mypokeBaseC = parseFloat(mypokeST.shC); //自C種族値
      const mypokeBaseD = parseFloat(mypokeST.shD); //自D種族値
      const mypokeBaseS = parseFloat(mypokeST.shS); //自S種族値
      const mypokeTokusei1 = mypokeST.tokusei1; //攻撃側特性1
      const mypokeTokusei2 = mypokeST.tokusei2; //攻撃側特性2
      const mypokeKusamusubiDamage = parseFloat(mypokeST.kusamusubiD); //攻撃がわ草結び威力
      const mypokeType1 = mypokeST.t1; //タイプ1
      const mypokeType2 = mypokeST.t2; //タイプ2
      const mypokenNAME = mypokeST.nNAME; //性格
      const mypokeShape = parseFloat(mypokeST.shape); //型
      const mypokeItemName = mypokeST.itemName; //持ち物名称
      const mypokeItemValue = mypokeST.item; //持ち物ID
      const mypokeWeight = parseFloat(mypokeST.weight); //体重
      const mypokeWeapon1No = parseFloat(mypokeST.weapon1); //技ナンバー
      const mypokeWeapon2No = parseFloat(mypokeST.weapon2); //技ナンバー
      const mypokeWeapon3No = parseFloat(mypokeST.weapon3); //技ナンバー
      const mypokeWeapon4No = parseFloat(mypokeST.weapon4); //技ナンバー

      // { bfNo:ファクトリーNo,NAME:ポケモン名前,pokeNo:ダメ系No,shape:型,track:周, 持ち物名称, item:持ち物(効果あるものプルダウンリストValue),weapon1:技1No,weapon2:技2No,weapon3: 技3No,weapon4:技4No,shH:種族値H,shA:種族値A,shB:種族値B,shC:種族値C,shD:種族値D,shS:種族値S,nA:性補A,nB:性補B,nC:性補,nD:性補A,nS:性補,nNAME:性格,dH:努力値,dA:努力値,dB:努力値,dC:努力値,dD:努力値,dS:努力値,t1:タイプ1,t2:タイプ2,tokusei1:特性1,tokusei2:特性2,weight:体重,kusamusubiD:草結び威力}

      const mypokedH = parseFloat(mypokeST.dH); //自H努力値
      const mypokedA = parseFloat(mypokeST.dA); //自A努力値
      const mypokedB = parseFloat(mypokeST.dB); //自B努力値
      const mypokedC = parseFloat(mypokeST.dC); //自C努力値
      const mypokedD = parseFloat(mypokeST.dD); //自D努力値
      const mypokedS = parseFloat(mypokeST.dS); //自S努力値
      // natureA
      const mypokenA = parseFloat(mypokeST.nA); //HTML変更
      const mypokenB = parseFloat(mypokeST.nB);
      const mypokenC = parseFloat(mypokeST.nC);
      const mypokenD = parseFloat(mypokeST.nD);
      const mypokenS = parseFloat(mypokeST.nS);



      if (mypokeBaseH == 1) mypokeStatusH = 1;
      else
        mypokeStatusH = Math.floor(((mypokeBaseH * 2 + kotaVal + Math.floor(mypokedH / 4)) * lvVal) / 100) + lvVal + 10; //ヌケニン判定、自HP
      mypokeStatusA = Math.floor(
        (Math.floor(((mypokeBaseA * 2 + kotaVal + Math.floor(mypokedA / 4)) * lvVal) / 100 + 5) * mypokenA) / 10
      ); //(自A)計算
      mypokeStatusB = Math.floor(
        (Math.floor(((mypokeBaseB * 2 + kotaVal + Math.floor(mypokedB / 4)) * lvVal) / 100 + 5) * mypokenB) / 10
      ); //(自B)
      mypokeStatusC = Math.floor(
        (Math.floor(((mypokeBaseC * 2 + kotaVal + Math.floor(mypokedC / 4)) * lvVal) / 100 + 5) * mypokenC) / 10
      ); //(自C)
      mypokeStatusD = Math.floor(
        (Math.floor(((mypokeBaseD * 2 + kotaVal + Math.floor(mypokedD / 4)) * lvVal) / 100 + 5) * mypokenD) / 10
      ); //(自D)
      mypokeStatusS = Math.floor(
        (Math.floor(((mypokeBaseS * 2 + kotaVal + Math.floor(mypokedS / 4)) * lvVal) / 100 + 5) * mypokenS) / 10
      ); //(自S)

      // { name: "名前", wtype: "タイプ", power:  威力, powerdisplay: 威力(徹底攻略）, accuracy: 命中(必中100), accuracydisplay: 命中(徹底攻略）, pp: PP, moveClass: "分類", priority: 優先度, contact: "接触", protect: "守", king: "王者補正", subject: "効果対象", effect: "説明", no: 技No value, no51on:昇順並び替え },

      const mypokeMove1 = weaponsdata.find((item) => item.no === mypokeWeapon1No);
      const mypokeMove2 = weaponsdata.find((item) => item.no === mypokeWeapon2No);
      const mypokeMove3 = weaponsdata.find((item) => item.no === mypokeWeapon3No);
      const mypokeMove4 = weaponsdata.find((item) => item.no === mypokeWeapon4No);

      //name: "名前",
      const name1 = mypokeMove1.name;
      const name2 = mypokeMove2.name;
      const name3 = mypokeMove3.name;
      const name4 = mypokeMove4.name;

      //wtype: "タイプ"
      const wtype1 = mypokeMove1.wtype;
      const wtype2 = mypokeMove2.wtype;
      const wtype3 = mypokeMove3.wtype;
      const wtype4 = mypokeMove4.wtype;

      // power:  威力,
      const powerdisplay1 = mypokeMove1.powerdisplay;
      const powerdisplay2 = mypokeMove2.powerdisplay;
      const powerdisplay3 = mypokeMove3.powerdisplay;
      const powerdisplay4 = mypokeMove4.powerdisplay;

      // 2つ目の技の威力タイプでステを確認してる？
      //document.getElementById("POWB").value = mypokeMove2.powerdisplay;
      // document.getElementById("POWB").dataset.locked = true;
      // document.getElementById("moveBType").value = mypokeMove2.wtypeId;
      // document.getElementById("isSPB").value = mypokeMove2.moveClassId;

      //     if (isSPB) {
      //       sATKc = sATK = statusC;
      //     } else {
      //       sATKc = sATK = statusA;
      //     }

      // accuracydisplay: 命中(徹底攻略）
      const accuracydisplay1 = mypokeMove1.accuracydisplay;
      const accuracydisplay2 = mypokeMove2.accuracydisplay;
      const accuracydisplay3 = mypokeMove3.accuracydisplay;
      const accuracydisplay4 = mypokeMove4.accuracydisplay;
      // pp: PP
      // accuracydisplay: 命中(徹底攻略）
      const pp1 = mypokeMove1.pp;
      const pp2 = mypokeMove2.pp;
      const pp3 = mypokeMove3.pp;
      const pp4 = mypokeMove4.pp;
      // moveClass: "分類",
      const moveClass1 = mypokeMove1.moveClass;
      const moveClass2 = mypokeMove2.moveClass;
      const moveClass3 = mypokeMove3.moveClass;
      const moveClass4 = mypokeMove4.moveClass;
      // priority: 優先度
      const priority1 = mypokeMove1.priority;
      const priority2 = mypokeMove2.priority;
      const priority3 = mypokeMove3.priority;
      const priority4 = mypokeMove4.priority;

      // contact: "接触
      const contact1 = mypokeMove1.contact;
      const contact2 = mypokeMove2.contact;
      const contact3 = mypokeMove3.contact;
      const contact4 = mypokeMove4.contact;

      // king: "王者補正
      const king1 = mypokeMove1.king;
      const king2 = mypokeMove2.king;
      const king3 = mypokeMove3.king;
      const king4 = mypokeMove4.king;

      // no: "技ナンバー
      const no1 = mypokeMove1.no;
      const no2 = mypokeMove2.no;
      const no3 = mypokeMove3.no;
      const no4 = mypokeMove4.no;
      // effect: "技の効果
      const effect1 = mypokeMove1.effect;
      const effect2 = mypokeMove2.effect;
      const effect3 = mypokeMove3.effect;
      const effect4 = mypokeMove4.effect;

      // 名前 タイプ 威力 命中 PP	分類	優先度	接触	王者補正	効果対象	説明
      const pokeStatus = document.getElementById("mypoke_status_tab2");
      pokeStatus.innerHTML = `
      <div class="fs-4">
      型:${mypokeShape}&nbsp;${mypokeType1}/${mypokeType2}&nbsp;${mypokenNAME}(${mypokeItemName})
      </div>

      <p class="ST">
      <span class="hosei fs-2">
      ${mypokeStatusH}-${mypokeStatusA}-${mypokeStatusB}-${mypokeStatusC}-${mypokeStatusD}-${mypokeStatusS}
      </span></p>
      <div class="fs-4">
      ${mypokeTokusei1}/${mypokeTokusei2}<br>
      </div>

      <div class="A fs-4 ">⒈&nbsp;${name1}</div>
      <div class="B" style="display: none;">
      [${wtype1}]&nbsp;<br>威力:${powerdisplay1}&nbsp;命中:${accuracydisplay1}&nbsp;PP:${pp1}&nbsp;<br>分類:${moveClass1}&nbsp;優先度:${priority1}&nbsp;接触:${contact1}&nbsp;王者:${king1}&nbsp;No:${no1}<br>効果:${effect1}<br>
      </div><br>
      
      <div class="A fs-4 ">⒉&nbsp;${name2}</div>
      <div class="B" style="display: none;">
      [${wtype2}]&nbsp;<br>威力:${powerdisplay2}&nbsp;命中:${accuracydisplay2}&nbsp;PP:${pp2}&nbsp;<br>分類:${moveClass2}&nbsp;優先度:${priority2}&nbsp;接触:${contact2}&nbsp;王者:${king2}&nbsp;No:${no2}<br>効果:${effect2}<br>
      </div><br>

      <div class="A fs-4">⒊&nbsp;${name3}</div>
      <div class="B" style="display: none;">
      [${wtype3}]&nbsp;<br>威力:${powerdisplay3}&nbsp;命中:${accuracydisplay3}&nbsp;PP:${pp3}&nbsp;<br>分類:${moveClass3}&nbsp;優先度:${priority3}&nbsp;接触:${contact3}&nbsp;王者:${king3}&nbsp;No:${no3}<br>効果:${effect3}<br>
      </div><br>
      
      <div class="A fs-4">⒋&nbsp;${name4}</div>
      <div class="B" style="display: none;">
      [${wtype4}]&nbsp;<br>威力:${powerdisplay4}&nbsp;命中:${accuracydisplay4}&nbsp;PP:${pp4}&nbsp;<br>分類:${moveClass4}&nbsp;優先度:${priority4}&nbsp;接触:${contact4}&nbsp;王者:${king4}&nbsp;No:${no4}<br>効果:${effect4}<br>
      </div><br>
      
      ※（被）草結び/けたぐり 威力:${mypokeKusamusubiDamage}[${mypokeWeight}kg]`;

      // すべてのA要素を取得する
      const trainerDetailAs = pokeStatus.querySelectorAll(".A");

      trainerDetailAs.forEach((trainerDetailA) => {
        // クリックイベントリスナーを設定する
        trainerDetailA.addEventListener("click", () => {
          // クリックされたA要素の次の兄弟要素を取得する
          const trainerDetailB = trainerDetailA.nextElementSibling;

          // 兄弟要素が存在しているかをチェックし、存在している場合には表示を切り替える
          if (trainerDetailB) {
            trainerDetailB.style.display = trainerDetailB.style.display === "none" ? "block" : "none";
          }
        });
      });

      // }
    } else {
      const pokeStatus = document.getElementById("mypoke_status_tab2");
      pokeStatus.innerHTML = "該当の型は存在しません";
    }
  }
);
