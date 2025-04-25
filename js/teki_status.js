// $("#kota, #tekipokename, #pokeShape input[name=shape], #level_selection input[name=Lv], #trainers").on("change", function () {
$(" #tekipokename,#level_selection input[name=Lv], #trainers").on("change", function () {

  const trainersVal = parseFloat($("#trainers option:selected").val());
  const tekipokeNameVal = parseFloat($("#tekipokename option:selected").val());
  const lvVal = parseFloat($("input[name=Lv]:checked").val());
  const tekipokeST = bfpokedata.filter(item => item.pokeNo == tekipokeNameVal);//4型分配列に格納

  const tekipokeBaseH = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shH);//敵H種族値※4型とも同じなのでfindで１件目を参照
  const tekipokeBaseA = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shA);//敵A種族値
  const tekipokeBaseB = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shB);//敵B種族値
  const tekipokeBaseC = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shC);//敵C種族値
  const tekipokeBaseD = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shD);//敵D種族値
  const tekipokeBaseS = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.shS);//敵S種族値
  const tekipokeTokusei1 = bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.tokusei1;//特性1
  const tekipokeTokusei2 = bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.tokusei2;//特性2
  const tekipokeKusamusubiDamage = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.kusamusubiD);//攻撃がわ草結び威力
  const tekipokeType1 = bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.t1;//タイプ1
  const tekipokeType2 = bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.t2;//タイプ2

  const tekipokeBfNoArray = tekipokeST.map(item => (item.bfNo));//性格4型配列
  const tekipokeBfNoshape1 = (tekipokeBfNoArray[0]);//敵bfNo　型1
  const tekipokeBfNoshape2 = (tekipokeBfNoArray[1]);//敵bfNo　型2
  const tekipokeBfNoshape3 = (tekipokeBfNoArray[2]);//敵bfNo　型3
  const tekipokeBfNoshape4 = (tekipokeBfNoArray[3]);//敵bfNo　型4



  const tekipokenNAMEArray = tekipokeST.map(item => (item.nNAME));//性格4型配列
  const tekipokenNAMEshape1 = (tekipokenNAMEArray[0]);//敵性格　型1
  const tekipokenNAMEshape2 = (tekipokenNAMEArray[1]);//敵性格　型2
  const tekipokenNAMEshape3 = (tekipokenNAMEArray[2]);//敵性格　型3
  const tekipokenNAMEshape4 = (tekipokenNAMEArray[3]);//敵性格　型4

  //ここでNaN返した場合は出力しないようにする。
  const tekipokeShapeArray = tekipokeST.map(item => (item.shape));//型4型配列
  const tekipokeShape1 = parseFloat(tekipokeShapeArray[0]);//敵型　型1
  const tekipokeShape2 = parseFloat(tekipokeShapeArray[1]);//敵型　型2
  const tekipokeShape3 = parseFloat(tekipokeShapeArray[2]);//敵型　型3
  const tekipokeShape4 = parseFloat(tekipokeShapeArray[3]);//敵型　型4

  const tekipokeItemNameArray = tekipokeST.map(item => (item.itemName));//持ち物名称4型配列
  const tekipokeItemName1 = (tekipokeItemNameArray[0]);//敵持ち物名称　型1
  const tekipokeItemName2 = (tekipokeItemNameArray[1]);//敵持ち物名称　型2
  const tekipokeItemName3 = (tekipokeItemNameArray[2]);//敵持ち物名称　型3
  const tekipokeItemName4 = (tekipokeItemNameArray[3]);//敵持ち物名称　型4

  const tekipokeItemValueArray = tekipokeST.map(item => (item.item));//持ち物ID4型配列
  const tekipokeItem1 = (tekipokeItemValueArray[0]);//敵持ち物ID　型1
  const tekipokeItem2 = (tekipokeItemValueArray[1]);//敵持ち物ID　型2
  const tekipokeItem3 = (tekipokeItemValueArray[2]);//敵持ち物ID　型3
  const tekipokeItem4 = (tekipokeItemValueArray[3]);//敵持ち物ID　型4

  const tekipokeWeight = parseFloat(bfpokedata.find(item => item.pokeNo == tekipokeNameVal)?.weight);//体重

  const tekipokeWeapon1NoArray = tekipokeST.map(item => parseFloat(item.weapon1));
  const tekipokeWeapon1NoS1 = parseFloat(tekipokeWeapon1NoArray[0]);//敵わざ1　型1
  const tekipokeWeapon1NoS2 = parseFloat(tekipokeWeapon1NoArray[1]);//敵わざ1　型2
  const tekipokeWeapon1NoS3 = parseFloat(tekipokeWeapon1NoArray[2]);//敵わざ1　型3
  const tekipokeWeapon1NoS4 = parseFloat(tekipokeWeapon1NoArray[3]);//敵わざ1　型4

  const tekipokeWeapon2NoArray = tekipokeST.map(item => parseFloat(item.weapon2));
  const tekipokeWeapon2NoS1 = parseFloat(tekipokeWeapon2NoArray[0]);//敵わざ2　型1
  const tekipokeWeapon2NoS2 = parseFloat(tekipokeWeapon2NoArray[1]);//敵わざ2　型2
  const tekipokeWeapon2NoS3 = parseFloat(tekipokeWeapon2NoArray[2]);//敵わざ2　型3
  const tekipokeWeapon2NoS4 = parseFloat(tekipokeWeapon2NoArray[3]);//敵わざ2　型4

  const tekipokeWeapon3NoArray = tekipokeST.map(item => parseFloat(item.weapon3));
  const tekipokeWeapon3NoS1 = parseFloat(tekipokeWeapon3NoArray[0]);//敵わざ3　型1
  const tekipokeWeapon3NoS2 = parseFloat(tekipokeWeapon3NoArray[1]);//敵わざ3　型2
  const tekipokeWeapon3NoS3 = parseFloat(tekipokeWeapon3NoArray[2]);//敵わざ3　型3
  const tekipokeWeapon3NoS4 = parseFloat(tekipokeWeapon3NoArray[3]);//敵わざ3　型4

  const tekipokeWeapon4NoArray = tekipokeST.map(item => parseFloat(item.weapon4));
  const tekipokeWeapon4NoS1 = parseFloat(tekipokeWeapon4NoArray[0]);//敵わざ4　型1
  const tekipokeWeapon4NoS2 = parseFloat(tekipokeWeapon4NoArray[1]);//敵わざ4　型2
  const tekipokeWeapon4NoS3 = parseFloat(tekipokeWeapon4NoArray[2]);//敵わざ4　型3
  const tekipokeWeapon4NoS4 = parseFloat(tekipokeWeapon4NoArray[3]);//敵わざ4　型4

  const tekipokedHArray = tekipokeST.map(item => parseFloat(item.dH));
  const tekipokedHS1 = parseFloat(tekipokedHArray[0]);//敵H努力値　型1
  const tekipokedHS2 = parseFloat(tekipokedHArray[1]);//敵H努力値　型2
  const tekipokedHS3 = parseFloat(tekipokedHArray[2]);//敵H努力値　型3
  const tekipokedHS4 = parseFloat(tekipokedHArray[3]);//敵H努力値　型4

  const tekipokedAArray = tekipokeST.map(item => parseFloat(item.dA));
  const tekipokedAS1 = parseFloat(tekipokedAArray[0]);//敵A努力値　型1
  const tekipokedAS2 = parseFloat(tekipokedAArray[1]);//敵A努力値　型2
  const tekipokedAS3 = parseFloat(tekipokedAArray[2]);//敵A努力値　型3
  const tekipokedAS4 = parseFloat(tekipokedAArray[3]);//敵A努力値　型4

  const tekipokedBArray = tekipokeST.map(item => parseFloat(item.dB));
  const tekipokedBS1 = parseFloat(tekipokedBArray[0]);//敵B努力値　型1
  const tekipokedBS2 = parseFloat(tekipokedBArray[1]);//敵B努力値　型2
  const tekipokedBS3 = parseFloat(tekipokedBArray[2]);//敵B努力値　型3
  const tekipokedBS4 = parseFloat(tekipokedBArray[3]);//敵B努力値　型4

  const tekipokedCArray = tekipokeST.map(item => parseFloat(item.dC));
  const tekipokedCS1 = parseFloat(tekipokedCArray[0]);//敵C努力値　型1
  const tekipokedCS2 = parseFloat(tekipokedCArray[1]);//敵C努力値　型2
  const tekipokedCS3 = parseFloat(tekipokedCArray[2]);//敵C努力値　型3
  const tekipokedCS4 = parseFloat(tekipokedCArray[3]);//敵C努力値　型4

  const tekipokedDArray = tekipokeST.map(item => parseFloat(item.dD));
  const tekipokedDS1 = parseFloat(tekipokedDArray[0]);//敵D努力値　型1
  const tekipokedDS2 = parseFloat(tekipokedDArray[1]);//敵D努力値　型2
  const tekipokedDS3 = parseFloat(tekipokedDArray[2]);//敵D努力値　型3
  const tekipokedDS4 = parseFloat(tekipokedDArray[3]);//敵D努力値　型4

  const tekipokedSArray = tekipokeST.map(item => parseFloat(item.dS));
  const tekipokedSS1 = parseFloat(tekipokedSArray[0]);//敵S努力値　型1
  const tekipokedSS2 = parseFloat(tekipokedSArray[1]);//敵S努力値　型2
  const tekipokedSS3 = parseFloat(tekipokedSArray[2]);//敵S努力値　型3
  const tekipokedSS4 = parseFloat(tekipokedSArray[3]);//敵S努力値　型4

  //性格補正
  const tekipokenAArray = tekipokeST.map(item => parseFloat(item.nA));
  const tekipokenAS1 = parseFloat(tekipokenAArray[0]);//敵A性格補正　型1
  const tekipokenAS2 = parseFloat(tekipokenAArray[1]);//敵A性格補正　型2
  const tekipokenAS3 = parseFloat(tekipokenAArray[2]);//敵A性格補正　型3
  const tekipokenAS4 = parseFloat(tekipokenAArray[3]);//敵A性格補正　型4

  //     const tekipokenB = parseFloat(tekipokeST.nB);
  const tekipokenBArray = tekipokeST.map(item => parseFloat(item.nB));
  const tekipokenBS1 = parseFloat(tekipokenBArray[0]);//敵B性格補正　型1
  const tekipokenBS2 = parseFloat(tekipokenBArray[1]);//敵B性格補正　型2
  const tekipokenBS3 = parseFloat(tekipokenBArray[2]);//敵B性格補正　型3
  const tekipokenBS4 = parseFloat(tekipokenBArray[3]);//敵B性格補正　型4

  //     const tekipokenC = parseFloat(tekipokeST.nC);
  const tekipokenCArray = tekipokeST.map(item => parseFloat(item.nC));
  const tekipokenCS1 = parseFloat(tekipokenCArray[0]);//敵C性格補正　型1
  const tekipokenCS2 = parseFloat(tekipokenCArray[1]);//敵C性格補正　型2
  const tekipokenCS3 = parseFloat(tekipokenCArray[2]);//敵C性格補正　型3
  const tekipokenCS4 = parseFloat(tekipokenCArray[3]);//敵C性格補正　型4

  //     const tekipokenD = parseFloat(tekipokeST.nD);
  const tekipokenDArray = tekipokeST.map(item => parseFloat(item.nD));
  const tekipokenDS1 = parseFloat(tekipokenDArray[0]);//敵D性格補正　型1
  const tekipokenDS2 = parseFloat(tekipokenDArray[1]);//敵D性格補正　型2
  const tekipokenDS3 = parseFloat(tekipokenDArray[2]);//敵D性格補正　型3
  const tekipokenDS4 = parseFloat(tekipokenDArray[3]);//敵D性格補正　型4

  //     const tekipokenS = parseFloat(tekipokeST.nS);
  const tekipokenSArray = tekipokeST.map(item => parseFloat(item.nS));
  const tekipokenSS1 = parseFloat(tekipokenSArray[0]);//敵S性格補正　型1
  const tekipokenSS2 = parseFloat(tekipokenSArray[1]);//敵S性格補正　型2
  const tekipokenSS3 = parseFloat(tekipokenSArray[2]);//敵S性格補正　型3
  const tekipokenSS4 = parseFloat(tekipokenSArray[3]);//敵S性格補正　型4


  //        { cd: "14", rank: 1, kota: 0, under100: 351, top100: 486, select100: "351~486", under50: 1, top50: 150, select50: "1~150", label: "アーサー" },

  const trainerData = trainerdata.find(item => item.cd == trainersVal);

  const trainerId = parseFloat(trainerData.cd);//トレーナID
  const trainerRank = parseFloat(trainerData.rank);//トレーナID
  const trainerKota = parseFloat(trainerData.kota);//個体値
  const trainerUnder100 = parseFloat(trainerData.under100);//オープン使用範囲下限
  const trainerTop100 = parseFloat(trainerData.top100);//オープン使用範囲上限
  const trainerSelect100 = trainerData.select100;//オープン使用範囲
  const trainerUnder50 = parseFloat(trainerData.under50);//50レベル使用範囲下限
  const trainerTop50 = parseFloat(trainerData.top50);//50レベル使用範囲上限
  const trainerSelect50 = trainerData.select50;//50レベル使用範囲
  const trainerName = trainerData.label;//トレーナー名


  const trainerStatus = document.getElementById('trainer_status');
  trainerStatus.innerHTML = `
    <div>トレーナー詳細[${trainerName}]</div>
    <div>個体値[${trainerKota}]<br>
    使用範囲:オープン[${trainerSelect100}]&nbsp;/Lv.50[${trainerSelect50}]</div><br>`








  if (tekipokeBaseH == 1) {
    tekipokeStatusHS1 = 1;//ヌケニン判定
    tekipokeStatusHS2 = 1;
    tekipokeStatusHS3 = 1;
    tekipokeStatusHS4 = 1;
  } else {
    tekipokeStatusHS1 = Math.floor((tekipokeBaseH * 2 + trainerKota + Math.floor(tekipokedHS1 / 4)) * lvVal / 100) + lvVal + 10;//敵HP　型1
    tekipokeStatusHS2 = Math.floor((tekipokeBaseH * 2 + trainerKota + Math.floor(tekipokedHS2 / 4)) * lvVal / 100) + lvVal + 10;//敵HP　型2
    tekipokeStatusHS3 = Math.floor((tekipokeBaseH * 2 + trainerKota + Math.floor(tekipokedHS3 / 4)) * lvVal / 100) + lvVal + 10;//敵HP　型3
    tekipokeStatusHS4 = Math.floor((tekipokeBaseH * 2 + trainerKota + Math.floor(tekipokedHS4 / 4)) * lvVal / 100) + lvVal + 10;//敵HP　型4
  }

  tekipokeStatusAS1 = Math.floor(Math.floor((tekipokeBaseA * 2 + trainerKota + Math.floor(tekipokedAS1 / 4)) * lvVal / 100 + 5) * tekipokenAS1 / 10);//(敵A)型1
  tekipokeStatusAS2 = Math.floor(Math.floor((tekipokeBaseA * 2 + trainerKota + Math.floor(tekipokedAS2 / 4)) * lvVal / 100 + 5) * tekipokenAS2 / 10);//(敵A)型2
  tekipokeStatusAS3 = Math.floor(Math.floor((tekipokeBaseA * 2 + trainerKota + Math.floor(tekipokedAS3 / 4)) * lvVal / 100 + 5) * tekipokenAS3 / 10);//(敵A)型3
  tekipokeStatusAS4 = Math.floor(Math.floor((tekipokeBaseA * 2 + trainerKota + Math.floor(tekipokedAS4 / 4)) * lvVal / 100 + 5) * tekipokenAS4 / 10);//(敵A)型4

  tekipokeStatusBS1 = Math.floor(Math.floor((tekipokeBaseB * 2 + trainerKota + Math.floor(tekipokedBS1 / 4)) * lvVal / 100 + 5) * tekipokenBS1 / 10);//(敵B)型1
  tekipokeStatusBS2 = Math.floor(Math.floor((tekipokeBaseB * 2 + trainerKota + Math.floor(tekipokedBS2 / 4)) * lvVal / 100 + 5) * tekipokenBS2 / 10);//(敵B)型2
  tekipokeStatusBS3 = Math.floor(Math.floor((tekipokeBaseB * 2 + trainerKota + Math.floor(tekipokedBS3 / 4)) * lvVal / 100 + 5) * tekipokenBS3 / 10);//(敵B)型3
  tekipokeStatusBS4 = Math.floor(Math.floor((tekipokeBaseB * 2 + trainerKota + Math.floor(tekipokedBS4 / 4)) * lvVal / 100 + 5) * tekipokenBS4 / 10);//(敵B)型4

  tekipokeStatusCS1 = Math.floor(Math.floor((tekipokeBaseC * 2 + trainerKota + Math.floor(tekipokedCS1 / 4)) * lvVal / 100 + 5) * tekipokenCS1 / 10);//(敵C)型1
  tekipokeStatusCS2 = Math.floor(Math.floor((tekipokeBaseC * 2 + trainerKota + Math.floor(tekipokedCS2 / 4)) * lvVal / 100 + 5) * tekipokenCS2 / 10);//(敵C)型2
  tekipokeStatusCS3 = Math.floor(Math.floor((tekipokeBaseC * 2 + trainerKota + Math.floor(tekipokedCS3 / 4)) * lvVal / 100 + 5) * tekipokenCS3 / 10);//(敵C)型3
  tekipokeStatusCS4 = Math.floor(Math.floor((tekipokeBaseC * 2 + trainerKota + Math.floor(tekipokedCS4 / 4)) * lvVal / 100 + 5) * tekipokenCS4 / 10);//(敵C)型4

  tekipokeStatusDS1 = Math.floor(Math.floor((tekipokeBaseD * 2 + trainerKota + Math.floor(tekipokedDS1 / 4)) * lvVal / 100 + 5) * tekipokenDS1 / 10);//(敵D)型1
  tekipokeStatusDS2 = Math.floor(Math.floor((tekipokeBaseD * 2 + trainerKota + Math.floor(tekipokedDS2 / 4)) * lvVal / 100 + 5) * tekipokenDS2 / 10);//(敵D)型2
  tekipokeStatusDS3 = Math.floor(Math.floor((tekipokeBaseD * 2 + trainerKota + Math.floor(tekipokedDS3 / 4)) * lvVal / 100 + 5) * tekipokenDS3 / 10);//(敵D)型3
  tekipokeStatusDS4 = Math.floor(Math.floor((tekipokeBaseD * 2 + trainerKota + Math.floor(tekipokedDS4 / 4)) * lvVal / 100 + 5) * tekipokenDS4 / 10);//(敵D)型4

  tekipokeStatusSS1 = Math.floor(Math.floor((tekipokeBaseS * 2 + trainerKota + Math.floor(tekipokedSS1 / 4)) * lvVal / 100 + 5) * tekipokenSS1 / 10);//(敵S)型1
  tekipokeStatusSS2 = Math.floor(Math.floor((tekipokeBaseS * 2 + trainerKota + Math.floor(tekipokedSS2 / 4)) * lvVal / 100 + 5) * tekipokenSS2 / 10);//(敵S)型2
  tekipokeStatusSS3 = Math.floor(Math.floor((tekipokeBaseS * 2 + trainerKota + Math.floor(tekipokedSS3 / 4)) * lvVal / 100 + 5) * tekipokenSS3 / 10);//(敵S)型3
  tekipokeStatusSS4 = Math.floor(Math.floor((tekipokeBaseS * 2 + trainerKota + Math.floor(tekipokedSS4 / 4)) * lvVal / 100 + 5) * tekipokenSS4 / 10);//(敵S)型4


  //     // { name: "名前", wtype: "タイプ", power:  威力, powerdisplay: 威力(徹底攻略）, accuracy: 命中(必中100), accuracydisplay: 命中(徹底攻略）, pp: PP, moveClass: "分類", priority: 優先度, contact: "接触", protect: "守", king: "王者補正", subject: "効果対象", effect: "説明", no: 技No value, no51on:昇順並び替え }, 







  const tekipokeMove1S1 = weaponsdata.find(item => item.no === tekipokeWeapon1NoS1);
  const tekipokeMove2S1 = weaponsdata.find(item => item.no === tekipokeWeapon2NoS1);
  const tekipokeMove3S1 = weaponsdata.find(item => item.no === tekipokeWeapon3NoS1);
  const tekipokeMove4S1 = weaponsdata.find(item => item.no === tekipokeWeapon4NoS1);









  if (tekipokeMove1S1 === undefined || tekipokeMove2S1 === undefined || tekipokeMove3S1 === undefined || tekipokeMove4S1 === undefined) {
    const pokeStatus1 = document.getElementById('tekipoke_status1');
    pokeStatus1.innerHTML = "該当の型は存在しません";
  } else {





    const name1S1 = tekipokeMove1S1.name;//型1　わざ1 名称
    const name2S1 = tekipokeMove2S1.name;//型1　わざ2 名称
    const name3S1 = tekipokeMove3S1.name;//型1　わざ3 名称
    const name4S1 = tekipokeMove4S1.name;//型1　わざ4 名称

    const wtype1S1 = tekipokeMove1S1.wtype;//型1　わざ1 タイプ
    const wtype2S1 = tekipokeMove2S1.wtype;//型1　わざ2 タイプ
    const wtype3S1 = tekipokeMove3S1.wtype;//型1　わざ3 タイプ
    const wtype4S1 = tekipokeMove4S1.wtype;//型1　わざ4 タイプ

    const power1S1 = tekipokeMove1S1.power;//型1　わざ1 威力
    const power2S1 = tekipokeMove2S1.power;//型1　わざ2 威力
    const power3S1 = tekipokeMove3S1.power;//型1　わざ3 威力
    const power4S1 = tekipokeMove4S1.power;//型1　わざ4 威力
    const powerdisplay1S1 = tekipokeMove1S1.powerdisplay;//型1　わざ1 威力表示
    const powerdisplay2S1 = tekipokeMove2S1.powerdisplay;//型1　わざ2 威力表示
    const powerdisplay3S1 = tekipokeMove3S1.powerdisplay;//型1　わざ3 威力表示
    const powerdisplay4S1 = tekipokeMove4S1.powerdisplay;//型1　わざ4 威力表示
    const accuracydisplay1S1 = tekipokeMove1S1.accuracydisplay;//型1　わざ1 命中(徹底攻略）
    const accuracydisplay2S1 = tekipokeMove2S1.accuracydisplay;//型1　わざ2 命中(徹底攻略）
    const accuracydisplay3S1 = tekipokeMove3S1.accuracydisplay;//型1　わざ3 命中(徹底攻略）
    const accuracydisplay4S1 = tekipokeMove4S1.accuracydisplay;//型1　わざ4 命中(徹底攻略）
    const pp1S1 = tekipokeMove1S1.pp;//型1　わざ1 PP
    const pp2S1 = tekipokeMove2S1.pp;//型1　わざ2 PP
    const pp3S1 = tekipokeMove3S1.pp;//型1　わざ3 PP
    const pp4S1 = tekipokeMove4S1.pp;//型1　わざ4 PP
    const moveClass1S1 = tekipokeMove1S1.moveClass;//型1　わざ1 分類
    const moveClass2S1 = tekipokeMove2S1.moveClass;//型1　わざ2 分類
    const moveClass3S1 = tekipokeMove3S1.moveClass;//型1　わざ3 分類
    const moveClass4S1 = tekipokeMove4S1.moveClass;//型1　わざ4 分類
    const priority1S1 = tekipokeMove1S1.priority;//型1　わざ1 優先度
    const priority2S1 = tekipokeMove2S1.priority;//型1　わざ2 優先度
    const priority3S1 = tekipokeMove3S1.priority;//型1　わざ3 優先度
    const priority4S1 = tekipokeMove4S1.priority;//型1　わざ4 優先度
    const contact1S1 = tekipokeMove1S1.contact;//型1　わざ1 接触
    const contact2S1 = tekipokeMove2S1.contact;//型1　わざ2 接触
    const contact3S1 = tekipokeMove3S1.contact;//型1　わざ3 接触
    const contact4S1 = tekipokeMove4S1.contact;//型1　わざ4 接触
    const king1S1 = tekipokeMove1S1.king;//型1　わざ1 王者補正
    const king2S1 = tekipokeMove2S1.king;//型1　わざ2 王者補正
    const king3S1 = tekipokeMove3S1.king;//型1　わざ3 王者補正
    const king4S1 = tekipokeMove4S1.king;//型1　わざ4 王者補正
    const no1S1 = tekipokeMove1S1.no;//型1　わざ1 技ナンバー
    const no2S1 = tekipokeMove2S1.no;//型1　わざ2 技ナンバー
    const no3S1 = tekipokeMove3S1.no;//型1　わざ3 技ナンバー
    const no4S1 = tekipokeMove4S1.no;//型1　わざ4 技ナンバー
    const effect1S1 = tekipokeMove1S1.effect;//型1　わざ1 技の効果
    const effect2S1 = tekipokeMove2S1.effect;//型1　わざ2 技の効果
    const effect3S1 = tekipokeMove3S1.effect;//型1　わざ3 技の効果
    const effect4S1 = tekipokeMove4S1.effect;//型1　わざ4 技の効果


    if (lvVal === 100 && (tekipokeBfNoshape1 < trainerUnder100 || tekipokeBfNoshape1 > trainerTop100)) {
      const pokeStatus1 = document.getElementById('tekipoke_status1');
      pokeStatus1.innerHTML = `${trainerName}は型${tekipokeShape1}を使用しません。`;
    } else if (lvVal === 50 && (tekipokeBfNoshape1 < trainerUnder50 || tekipokeBfNoshape1 > trainerTop50)) {
      const pokeStatus1 = document.getElementById('tekipoke_status1');
      pokeStatus1.innerHTML = `${trainerName}は型${tekipokeShape1}を使用しません。`;
    } else {
      // 通常の処理をここに書く



      const pokeStatus1 = document.getElementById('tekipoke_status1');
      pokeStatus1.innerHTML = `
    型:${tekipokeShape1}&nbsp;${tekipokeType1}/${tekipokeType2}&nbsp;${tekipokenNAMEshape1}(${tekipokeItemName1})
    <p class="ST">
    ${tekipokeStatusHS1}-${tekipokeStatusAS1}-${tekipokeStatusBS1}-${tekipokeStatusCS1}-${tekipokeStatusDS1}-${tekipokeStatusSS1}</p>
    ${tekipokeTokusei1}/${tekipokeTokusei2}<br><br>


    <div class="A">⒈&nbsp;${name1S1}</div>
    <div class="B" style="display: none;">
    [${wtype1S1}]&nbsp;<br>威力:${powerdisplay1S1}&nbsp;命中:${accuracydisplay1S1}&nbsp;PP:${pp1S1}&nbsp;<br>
    分類:${moveClass1S1}&nbsp;優先度:${priority1S1}&nbsp;接触:${contact1S1}&nbsp;王者:${king1S1}&nbsp;No:${no1S1}<br>効果:${effect1S1}<br>
    </div><br>

    <div class="A">⒉&nbsp;${name2S1}</div>
    <div class="B" style="display: none;">
    [${wtype2S1}]&nbsp;<br>威力:${powerdisplay2S1}&nbsp;命中:${accuracydisplay2S1}&nbsp;PP:${pp2S1}&nbsp;<br>
    分類:${moveClass2S1}&nbsp;優先度:${priority2S1}&nbsp;接触:${contact2S1}&nbsp;王者:${king2S1}&nbsp;No:${no2S1}<br>効果:${effect2S1}<br>    
    </div><br>

    <div class="A">⒊&nbsp;${name3S1}</div>
    <div class="B" style="display: none;">
    [${wtype3S1}]&nbsp;<br>威力:${powerdisplay3S1}&nbsp;命中:${accuracydisplay3S1}&nbsp;PP:${pp3S1}&nbsp;<br>
    分類:${moveClass3S1}&nbsp;優先度:${priority3S1}&nbsp;接触:${contact3S1}&nbsp;王者:${king3S1}&nbsp;No:${no3S1}<br>効果:${effect3S1}<br>
    </div><br>

    <div class="A">⒋&nbsp;${name4S1}</div>
    <div class="B" style="display: none;">
    [${wtype4S1}]&nbsp;<br>威力:${powerdisplay4S1}&nbsp;命中:${accuracydisplay4S1}&nbsp;PP:${pp4S1}&nbsp;<br>
    分類:${moveClass4S1}&nbsp;優先度:${priority4S1}&nbsp;接触:${contact4S1}&nbsp;王者:${king4S1}&nbsp;No:${no4S1}<br>効果:${effect4S1}<br>    
    </div><br>
    
    ※（被）草結び/けたぐり 威力:${tekipokeKusamusubiDamage}[${tekipokeWeight}kg]`;


      // すべてのA要素を取得する
      const trainerDetailAs = pokeStatus1.querySelectorAll('.A');

      trainerDetailAs.forEach(trainerDetailA => {
        // クリックイベントリスナーを設定する
        trainerDetailA.addEventListener('click', () => {
          // クリックされたA要素の次の兄弟要素を取得する
          const trainerDetailB = trainerDetailA.nextElementSibling;

          // 兄弟要素が存在しているかをチェックし、存在している場合には表示を切り替える
          if (trainerDetailB) {
            trainerDetailB.style.display = trainerDetailB.style.display === 'none' ? 'block' : 'none';
          }
        });
      });

    }
  }





  const tekipokeMove1S2 = weaponsdata.find(item => item.no === tekipokeWeapon1NoS2);
  const tekipokeMove2S2 = weaponsdata.find(item => item.no === tekipokeWeapon2NoS2);
  const tekipokeMove3S2 = weaponsdata.find(item => item.no === tekipokeWeapon3NoS2);
  const tekipokeMove4S2 = weaponsdata.find(item => item.no === tekipokeWeapon4NoS2);

  if (tekipokeMove1S2 === undefined || tekipokeMove2S2 === undefined || tekipokeMove3S2 === undefined || tekipokeMove4S2 === undefined) {
    const pokeStatus2 = document.getElementById('tekipoke_status2');
    pokeStatus2.innerHTML = "該当の型は存在しません";
  } else {

    const name1S2 = tekipokeMove1S2.name;//型2　わざ2 名称
    const name2S2 = tekipokeMove2S2.name;//型2　わざ2 名称
    const name3S2 = tekipokeMove3S2.name;//型2　わざ2 名称
    const name4S2 = tekipokeMove4S2.name;//型2　わざ2 名称

    const wtype1S2 = tekipokeMove1S2.wtype;//型2　わざ2 タイプ
    const wtype2S2 = tekipokeMove2S2.wtype;//型2　わざ2 タイプ
    const wtype3S2 = tekipokeMove3S2.wtype;//型2　わざ2 タイプ
    const wtype4S2 = tekipokeMove4S2.wtype;//型2　わざ2 タイプ

    const power1S2 = tekipokeMove1S2.power;//型2　わざ2 威力
    const power2S2 = tekipokeMove2S2.power;//型2　わざ2 威力
    const power3S2 = tekipokeMove3S2.power;//型2　わざ2 威力
    const power4S2 = tekipokeMove4S2.power;//型2　わざ2 威力

    const powerdisplay1S2 = tekipokeMove1S2.powerdisplay;//型2　わざ2 威力表示
    const powerdisplay2S2 = tekipokeMove2S2.powerdisplay;//型2　わざ2 威力表示
    const powerdisplay3S2 = tekipokeMove3S2.powerdisplay;//型2　わざ2 威力表示
    const powerdisplay4S2 = tekipokeMove4S2.powerdisplay;//型2　わざ2 威力表示
    const accuracydisplay1S2 = tekipokeMove1S2.accuracydisplay;//型2　わざ2 命中(徹底攻略）
    const accuracydisplay2S2 = tekipokeMove2S2.accuracydisplay;//型2　わざ2 命中(徹底攻略）
    const accuracydisplay3S2 = tekipokeMove3S2.accuracydisplay;//型2　わざ2 命中(徹底攻略）
    const accuracydisplay4S2 = tekipokeMove4S2.accuracydisplay;//型2　わざ2 命中(徹底攻略）
    const pp1S2 = tekipokeMove1S2.pp;//型2　わざ2 PP
    const pp2S2 = tekipokeMove2S2.pp;//型2　わざ2 PP
    const pp3S2 = tekipokeMove3S2.pp;//型2　わざ2 PP
    const pp4S2 = tekipokeMove4S2.pp;//型2　わざ2 PP
    const moveClass1S2 = tekipokeMove1S2.moveClass;//型2　わざ2 分類
    const moveClass2S2 = tekipokeMove2S2.moveClass;//型2　わざ2 分類
    const moveClass3S2 = tekipokeMove3S2.moveClass;//型2　わざ2 分類
    const moveClass4S2 = tekipokeMove4S2.moveClass;//型2　わざ2 分類
    const priority1S2 = tekipokeMove1S2.priority;//型2　わざ2 優先度
    const priority2S2 = tekipokeMove2S2.priority;//型2　わざ2 優先度
    const priority3S2 = tekipokeMove3S2.priority;//型2　わざ2 優先度
    const priority4S2 = tekipokeMove4S2.priority;//型2　わざ2 優先度
    const contact1S2 = tekipokeMove1S2.contact;//型2　わざ2 接触
    const contact2S2 = tekipokeMove2S2.contact;//型2　わざ2 接触
    const contact3S2 = tekipokeMove3S2.contact;//型2　わざ2 接触
    const contact4S2 = tekipokeMove4S2.contact;//型2　わざ2 接触
    const king1S2 = tekipokeMove1S2.king;//型2　わざ2 王者補正
    const king2S2 = tekipokeMove2S2.king;//型2　わざ2 王者補正
    const king3S2 = tekipokeMove3S2.king;//型2　わざ2 王者補正
    const king4S2 = tekipokeMove4S2.king;//型2　わざ2 王者補正
    const no1S2 = tekipokeMove1S2.no;//型2　わざ2 技ナンバー
    const no2S2 = tekipokeMove2S2.no;//型2　わざ2 技ナンバー
    const no3S2 = tekipokeMove3S2.no;//型2　わざ2 技ナンバー
    const no4S2 = tekipokeMove4S2.no;//型2　わざ2 技ナンバー
    const effect1S2 = tekipokeMove1S2.effect;//型3　わざ3 技の効果
    const effect2S2 = tekipokeMove2S2.effect;//型3　わざ3 技の効果
    const effect3S2 = tekipokeMove3S2.effect;//型3　わざ3 技の効果
    const effect4S2 = tekipokeMove4S2.effect;//型3　わざ3 技の効果


    if (lvVal === 100 && (tekipokeBfNoshape2 < trainerUnder100 || tekipokeBfNoshape2 > trainerTop100)) {
      const pokeStatus2 = document.getElementById('tekipoke_status2');
      pokeStatus2.innerHTML = `${trainerName}は型${tekipokeShape2}を使用しません。`;
    } else if (lvVal === 50 && (tekipokeBfNoshape2 < trainerUnder50 || tekipokeBfNoshape2 > trainerTop50)) {
      const pokeStatus2 = document.getElementById('tekipoke_status2');
      pokeStatus2.innerHTML = `${trainerName}は型${tekipokeShape2}を使用しません。`;
    } else {





      const pokeStatus2 = document.getElementById('tekipoke_status2');
      pokeStatus2.innerHTML = `
    型:${tekipokeShape2}&nbsp;${tekipokeType1}/${tekipokeType2}&nbsp;${tekipokenNAMEshape2}(${tekipokeItemName2})
    <p class="ST">
    ${tekipokeStatusHS2}-${tekipokeStatusAS2}-${tekipokeStatusBS2}-${tekipokeStatusCS2}-${tekipokeStatusDS2}-${tekipokeStatusSS2}</p>
    ${tekipokeTokusei1}/${tekipokeTokusei2}<br>

    <div class="A">⒈&nbsp;${name1S2}</div>
    <div class="B" style="display: none;">
    [${wtype1S2}]&nbsp;<br>威力:${powerdisplay1S2}&nbsp;命中:${accuracydisplay1S2}&nbsp;PP:${pp1S2}&nbsp;<br>
    分類:${moveClass1S2}&nbsp;優先度:${priority1S2}&nbsp;接触:${contact1S2}&nbsp;王者:${king1S2}&nbsp;No:${no1S2}<br>効果:${effect1S2}<br>
    </div><br>

    <div class="A">⒉&nbsp;${name2S2}</div>
    <div class="B" style="display: none;">
    [${wtype2S2}]&nbsp;<br>威力:${powerdisplay2S2}&nbsp;命中:${accuracydisplay2S2}&nbsp;PP:${pp2S2}&nbsp;<br>
    分類:${moveClass2S2}&nbsp;優先度:${priority2S2}&nbsp;接触:${contact2S2}&nbsp;王者:${king2S2}&nbsp;No:${no2S2}<br>効果:${effect2S2}<br>
    </div><br>

    <div class="A">⒊&nbsp;${name3S2}</div>
    <div class="B" style="display: none;">
    [${wtype3S2}]&nbsp;<br>威力:${powerdisplay3S2}&nbsp;命中:${accuracydisplay3S2}&nbsp;PP:${pp3S2}&nbsp;<br>
    分類:${moveClass3S2}&nbsp;優先度:${priority3S2}&nbsp;接触:${contact3S2}&nbsp;王者:${king3S2}&nbsp;No:${no3S2}<br>効果:${effect3S2}<br>
    </div><br>
    
    <div class="A">⒋&nbsp;${name4S2}</div>
    <div class="B" style="display: none;">
    [${wtype4S2}]&nbsp;<br>威力:${powerdisplay4S2}&nbsp;命中:${accuracydisplay4S2}&nbsp;PP:${pp4S2}&nbsp;<br>
    分類:${moveClass4S2}&nbsp;優先度:${priority4S2}&nbsp;接触:${contact4S2}&nbsp;王者:${king4S2}&nbsp;No:${no4S2}<br>効果:${effect4S2}<br>
    </div><br>

    ※（被）草結び/けたぐり 威力:${tekipokeKusamusubiDamage}[${tekipokeWeight}kg]`;


      // すべてのA要素を取得する
      const trainerDetailAs = pokeStatus2.querySelectorAll('.A');

      trainerDetailAs.forEach(trainerDetailA => {
        // クリックイベントリスナーを設定する
        trainerDetailA.addEventListener('click', () => {
          // クリックされたA要素の次の兄弟要素を取得する
          const trainerDetailB = trainerDetailA.nextElementSibling;

          // 兄弟要素が存在しているかをチェックし、存在している場合には表示を切り替える
          if (trainerDetailB) {
            trainerDetailB.style.display = trainerDetailB.style.display === 'none' ? 'block' : 'none';
          }
        });
      });

    }
  }


  const tekipokeMove1S3 = weaponsdata.find(item => item.no === tekipokeWeapon1NoS3);
  const tekipokeMove2S3 = weaponsdata.find(item => item.no === tekipokeWeapon2NoS3);
  const tekipokeMove3S3 = weaponsdata.find(item => item.no === tekipokeWeapon3NoS3);
  const tekipokeMove4S3 = weaponsdata.find(item => item.no === tekipokeWeapon4NoS3);

  if (tekipokeMove1S3 === undefined || tekipokeMove2S3 === undefined || tekipokeMove3S3 === undefined || tekipokeMove4S3 === undefined) {
    const pokeStatus3 = document.getElementById('tekipoke_status3');
    pokeStatus3.innerHTML = "該当の型は存在しません";
  } else {
    const name1S3 = tekipokeMove1S3.name;//型3　わざ3 名称
    const name2S3 = tekipokeMove2S3.name;//型3　わざ3 名称
    const name3S3 = tekipokeMove3S3.name;//型3　わざ3 名称
    const name4S3 = tekipokeMove4S3.name;//型3　わざ3 名称

    const wtype1S3 = tekipokeMove1S3.wtype;//型3　わざ3 タイプ
    const wtype2S3 = tekipokeMove2S3.wtype;//型3　わざ3 タイプ
    const wtype3S3 = tekipokeMove3S3.wtype;//型3　わざ3 タイプ
    const wtype4S3 = tekipokeMove4S3.wtype;//型3　わざ3 タイプ

    const power1S3 = tekipokeMove1S3.power;//型3　わざ3 威力
    const power2S3 = tekipokeMove2S3.power;//型3　わざ3 威力
    const power3S3 = tekipokeMove3S3.power;//型3　わざ3 威力
    const power4S3 = tekipokeMove4S3.power;//型3　わざ3 威力

    const powerdisplay1S3 = tekipokeMove1S3.powerdisplay;//型3　わざ3 威力表示
    const powerdisplay2S3 = tekipokeMove2S3.powerdisplay;//型3　わざ3 威力表示
    const powerdisplay3S3 = tekipokeMove3S3.powerdisplay;//型3　わざ3 威力表示
    const powerdisplay4S3 = tekipokeMove4S3.powerdisplay;//型3　わざ3 威力表示

    const accuracydisplay1S3 = tekipokeMove1S3.accuracydisplay;//型3　わざ3 命中(徹底攻略）
    const accuracydisplay2S3 = tekipokeMove2S3.accuracydisplay;//型3　わざ3 命中(徹底攻略）
    const accuracydisplay3S3 = tekipokeMove3S3.accuracydisplay;//型3　わざ3 命中(徹底攻略）
    const accuracydisplay4S3 = tekipokeMove4S3.accuracydisplay;//型3　わざ3 命中(徹底攻略）
    const pp1S3 = tekipokeMove1S3.pp;//型3　わざ3 PP
    const pp2S3 = tekipokeMove2S3.pp;//型3　わざ3 PP
    const pp3S3 = tekipokeMove3S3.pp;//型3　わざ3 PP
    const pp4S3 = tekipokeMove4S3.pp;//型3　わざ3 PP
    const moveClass1S3 = tekipokeMove1S3.moveClass;//型3　わざ3 分類
    const moveClass2S3 = tekipokeMove2S3.moveClass;//型3　わざ3 分類
    const moveClass3S3 = tekipokeMove3S3.moveClass;//型3　わざ3 分類
    const moveClass4S3 = tekipokeMove4S3.moveClass;//型3　わざ3 分類
    const priority1S3 = tekipokeMove1S3.priority;//型3　わざ3 優先度
    const priority2S3 = tekipokeMove2S3.priority;//型3　わざ3 優先度
    const priority3S3 = tekipokeMove3S3.priority;//型3　わざ3 優先度
    const priority4S3 = tekipokeMove4S3.priority;//型3　わざ3 優先度
    const contact1S3 = tekipokeMove1S3.contact;//型3　わざ3 接触
    const contact2S3 = tekipokeMove2S3.contact;//型3　わざ3 接触
    const contact3S3 = tekipokeMove3S3.contact;//型3　わざ3 接触
    const contact4S3 = tekipokeMove4S3.contact;//型3　わざ3 接触
    const king1S3 = tekipokeMove1S3.king;//型3　わざ3 王者補正
    const king2S3 = tekipokeMove2S3.king;//型3　わざ3 王者補正
    const king3S3 = tekipokeMove3S3.king;//型3　わざ3 王者補正
    const king4S3 = tekipokeMove4S3.king;//型3　わざ3 王者補正
    const no1S3 = tekipokeMove1S3.no;//型3　わざ3 技ナンバー
    const no2S3 = tekipokeMove2S3.no;//型3　わざ3 技ナンバー
    const no3S3 = tekipokeMove3S3.no;//型3　わざ3 技ナンバー
    const no4S3 = tekipokeMove4S3.no;//型3　わざ3 技ナンバー
    const effect1S3 = tekipokeMove1S3.effect;//型3　わざ3 技の効果
    const effect2S3 = tekipokeMove2S3.effect;//型3　わざ3 技の効果
    const effect3S3 = tekipokeMove3S3.effect;//型3　わざ3 技の効果
    const effect4S3 = tekipokeMove4S3.effect;//型3　わざ3 技の効果

    if (lvVal === 100 && (tekipokeBfNoshape3 < trainerUnder100 || tekipokeBfNoshape3 > trainerTop100)) {
      const pokeStatus3 = document.getElementById('tekipoke_status3');
      pokeStatus3.innerHTML = `${trainerName}は型${tekipokeShape3}を使用しません。`;
    } else if (lvVal === 50 && (tekipokeBfNoshape3 < trainerUnder50 || tekipokeBfNoshape3 > trainerTop50)) {
      const pokeStatus3 = document.getElementById('tekipoke_status3');
      pokeStatus3.innerHTML = `${trainerName}は型${tekipokeShape3}を使用しません。`;
    } else {

      const pokeStatus3 = document.getElementById('tekipoke_status3');
      pokeStatus3.innerHTML = `
    型:${tekipokeShape3}&nbsp;${tekipokeType1}/${tekipokeType2}&nbsp;${tekipokenNAMEshape3}(${tekipokeItemName3}) <p class="ST">
    ${tekipokeStatusHS3}-${tekipokeStatusAS3}-${tekipokeStatusBS3}-${tekipokeStatusCS3}-${tekipokeStatusDS3}-${tekipokeStatusSS3}</p>
    ${tekipokeTokusei1}/${tekipokeTokusei2}<br>

    <div class="A">⒈&nbsp;${name1S3}</div>
    <div class="B" style="display: none;">
    [${wtype1S3}]&nbsp;<br>威力:${powerdisplay1S3}&nbsp;命中:${accuracydisplay1S3}&nbsp;PP:${pp1S3}&nbsp;<br>分類:${moveClass1S3}&nbsp;優先度:${priority1S3}&nbsp;接触:${contact1S3}&nbsp;王者:${king1S3}&nbsp;No:${no1S3}<br>効果:${effect1S3}<br>
    </div><br>

    <div class="A">⒉&nbsp;${name2S3}</div>
    <div class="B" style="display: none;">
    [${wtype2S3}]&nbsp;<br>威力:${powerdisplay2S3}&nbsp;命中:${accuracydisplay2S3}&nbsp;PP:${pp2S3}&nbsp;<br>分類:${moveClass2S3}&nbsp;優先度:${priority2S3}&nbsp;接触:${contact2S3}&nbsp;王者:${king2S3}&nbsp;No:${no2S3}<br>効果:${effect2S3}<br>
    </div><br>

    <div class="A">⒊&nbsp;${name3S3}</div>
    <div class="B" style="display: none;">
    [${wtype3S3}]&nbsp;<br>威力:${powerdisplay3S3}&nbsp;命中:${accuracydisplay3S3}&nbsp;PP:${pp3S3}&nbsp;<br>分類:${moveClass3S3}&nbsp;優先度:${priority3S3}&nbsp;接触:${contact3S3}&nbsp;王者:${king3S3}&nbsp;No:${no3S3}<br>効果:${effect3S3}<br>
    </div><br>
    
    <div class="A">⒋&nbsp;${name4S3}</div>
    <div class="B" style="display: none;">
    [${wtype4S3}]&nbsp;<br>威力:${powerdisplay4S3}&nbsp;命中:${accuracydisplay4S3}&nbsp;PP:${pp4S3}&nbsp;<br>分類:${moveClass4S3}&nbsp;優先度:${priority4S3}&nbsp;接触:${contact4S3}&nbsp;王者:${king4S3}&nbsp;No:${no4S3}<br>効果:${effect4S3}<br>
    </div><br>
    
    ※（被）草結び/けたぐり 威力:${tekipokeKusamusubiDamage}[${tekipokeWeight}kg]`;
      // すべてのA要素を取得する
      const trainerDetailAs = pokeStatus3.querySelectorAll('.A');

      trainerDetailAs.forEach(trainerDetailA => {
        // クリックイベントリスナーを設定する
        trainerDetailA.addEventListener('click', () => {
          // クリックされたA要素の次の兄弟要素を取得する
          const trainerDetailB = trainerDetailA.nextElementSibling;

          // 兄弟要素が存在しているかをチェックし、存在している場合には表示を切り替える
          if (trainerDetailB) {
            trainerDetailB.style.display = trainerDetailB.style.display === 'none' ? 'block' : 'none';
          }
        });
      });

    }
  }



  const tekipokeMove1S4 = weaponsdata.find(item => item.no === tekipokeWeapon1NoS4);
  const tekipokeMove2S4 = weaponsdata.find(item => item.no === tekipokeWeapon2NoS4);
  const tekipokeMove3S4 = weaponsdata.find(item => item.no === tekipokeWeapon3NoS4);
  const tekipokeMove4S4 = weaponsdata.find(item => item.no === tekipokeWeapon4NoS4);
  if (tekipokeMove1S4 === undefined || tekipokeMove2S4 === undefined || tekipokeMove3S4 === undefined || tekipokeMove4S4 === undefined) {
    const pokeStatus4 = document.getElementById('tekipoke_status4');
    pokeStatus4.innerHTML = "該当の型は存在しません";
  } else {

    //name: "名前",
    const name1S4 = tekipokeMove1S4.name;//型4　わざ4 名称
    const name2S4 = tekipokeMove2S4.name;//型4　わざ4 名称
    const name3S4 = tekipokeMove3S4.name;//型4　わざ4 名称
    const name4S4 = tekipokeMove4S4.name;//型4　わざ4 名称
    //     //wtype: "タイプ"
    const wtype1S4 = tekipokeMove1S4.wtype;//型4　わざ4 タイプ
    const wtype2S4 = tekipokeMove2S4.wtype;//型4　わざ4 タイプ
    const wtype3S4 = tekipokeMove3S4.wtype;//型4　わざ4 タイプ
    const wtype4S4 = tekipokeMove4S4.wtype;//型4　わざ4 タイプ
    // power:  威力,
    const power1S4 = tekipokeMove1S4.power;//型4　わざ4 威力
    const power2S4 = tekipokeMove2S4.power;//型4　わざ4 威力
    const power3S4 = tekipokeMove3S4.power;//型4　わざ4 威力
    const power4S4 = tekipokeMove4S4.power;//型4　わざ4 威力

    // powerdisplay:  威力表示,
    const powerdisplay1S4 = tekipokeMove1S4.powerdisplay;//型4　わざ4 威力表示
    const powerdisplay2S4 = tekipokeMove2S4.powerdisplay;//型4　わざ4 威力表示
    const powerdisplay3S4 = tekipokeMove3S4.powerdisplay;//型4　わざ4 威力表示
    const powerdisplay4S4 = tekipokeMove4S4.powerdisplay;//型4　わざ4 威力表示
    //accuracydisplay: 命中(徹底攻略）
    const accuracydisplay1S4 = tekipokeMove1S4.accuracydisplay;//型4　わざ4 命中(徹底攻略）
    const accuracydisplay2S4 = tekipokeMove2S4.accuracydisplay;//型4　わざ4 命中(徹底攻略）
    const accuracydisplay3S4 = tekipokeMove3S4.accuracydisplay;//型4　わざ4 命中(徹底攻略）
    const accuracydisplay4S4 = tekipokeMove4S4.accuracydisplay;//型4　わざ4 命中(徹底攻略）

    //PP
    const pp1S4 = tekipokeMove1S4.pp;//型4　わざ4 PP
    const pp2S4 = tekipokeMove2S4.pp;//型4　わざ4 PP
    const pp3S4 = tekipokeMove3S4.pp;//型4　わざ4 PP
    const pp4S4 = tekipokeMove4S4.pp;//型4　わざ4 PP
    //     // moveClass: "分類", 
    const moveClass1S4 = tekipokeMove1S4.moveClass;//型4　わざ4 分類
    const moveClass2S4 = tekipokeMove2S4.moveClass;//型4　わざ4 分類
    const moveClass3S4 = tekipokeMove3S4.moveClass;//型4　わざ4 分類
    const moveClass4S4 = tekipokeMove4S4.moveClass;//型4　わざ4 分類
    //     // priority: 優先度
    const priority1S4 = tekipokeMove1S4.priority;//型4　わざ4 優先度
    const priority2S4 = tekipokeMove2S4.priority;//型4　わざ4 優先度
    const priority3S4 = tekipokeMove3S4.priority;//型4　わざ4 優先度
    const priority4S4 = tekipokeMove4S4.priority;//型4　わざ4 優先度

    //     // contact: "接触

    const contact1S4 = tekipokeMove1S4.contact;//型4　わざ4 接触
    const contact2S4 = tekipokeMove2S4.contact;//型4　わざ4 接触
    const contact3S4 = tekipokeMove3S4.contact;//型4　わざ4 接触
    const contact4S4 = tekipokeMove4S4.contact;//型4　わざ4 接触

    //     // king: "王者補正

    const king1S4 = tekipokeMove1S4.king;//型4　わざ4 王者補正
    const king2S4 = tekipokeMove2S4.king;//型4　わざ4 王者補正
    const king3S4 = tekipokeMove3S4.king;//型4　わざ4 王者補正
    const king4S4 = tekipokeMove4S4.king;//型4　わざ4 王者補正
    //     // no: "技ナンバー
    const no1S4 = tekipokeMove1S4.no;//型4　わざ4 技ナンバー
    const no2S4 = tekipokeMove2S4.no;//型4　わざ4 技ナンバー
    const no3S4 = tekipokeMove3S4.no;//型4　わざ4 技ナンバー
    const no4S4 = tekipokeMove4S4.no;//型4　わざ4 技ナンバー
    //     // effect: "技の効果
    const effect1S4 = tekipokeMove1S4.effect;//型4　わざ4 技の効果
    const effect2S4 = tekipokeMove2S4.effect;//型4　わざ4 技の効果
    const effect3S4 = tekipokeMove3S4.effect;//型4　わざ4 技の効果
    const effect4S4 = tekipokeMove4S4.effect;//型4　わざ4 技の効果

    if (lvVal === 100 && (tekipokeBfNoshape4 < trainerUnder100 || tekipokeBfNoshape4 > trainerTop100)) {
      const pokeStatus4 = document.getElementById('tekipoke_status4');
      pokeStatus4.innerHTML = `${trainerName}は型${tekipokeShape4}を使用しません。`;
    } else if (lvVal === 50 && (tekipokeBfNoshape4 < trainerUnder50 || tekipokeBfNoshape4 > trainerTop50)) {
      const pokeStatus4 = document.getElementById('tekipoke_status4');
      pokeStatus4.innerHTML = `${trainerName}は型${tekipokeShape4}を使用しません。`;
    } else {

      //     // 名前 タイプ 威力 命中 PP	分類	優先度	接触	王者補正	効果対象	説明
      const pokeStatus4 = document.getElementById('tekipoke_status4');
      pokeStatus4.innerHTML = `

    型:${tekipokeShape4}&nbsp;${tekipokeType1}/${tekipokeType2}&nbsp;${tekipokenNAMEshape4}(${tekipokeItemName4}) <p class="ST">
    ${tekipokeStatusHS4}-${tekipokeStatusAS4}-${tekipokeStatusBS4}-${tekipokeStatusCS4}-${tekipokeStatusDS4}-${tekipokeStatusSS4}</p>
    ${tekipokeTokusei1}/${tekipokeTokusei2}<br>

    <div class="A">⒈&nbsp;${name1S4}</div>
    <div class="B" style="display: none;">
    [${wtype1S4}]&nbsp;<br>威力:${powerdisplay1S4}&nbsp;命中:${accuracydisplay1S4}&nbsp;PP:${pp1S4}&nbsp;<br>分類:${moveClass1S4}&nbsp;優先度:${priority1S4}&nbsp;接触:${contact1S4}&nbsp;王者:${king1S4}&nbsp;No:${no1S4}<br>効果:${effect1S4}<br>
    </div><br>

    <div class="A">⒉&nbsp;${name2S4}</div>
    <div class="B" style="display: none;">
    [${wtype2S4}]&nbsp;<br>威力:${powerdisplay2S4}&nbsp;命中:${accuracydisplay2S4}&nbsp;PP:${pp2S4}&nbsp;<br>分類:${moveClass2S4}&nbsp;優先度:${priority2S4}&nbsp;接触:${contact2S4}&nbsp;王者:${king2S4}&nbsp;No:${no2S4}<br>効果:${effect2S4}<br>
    </div><br>
    
    <div class="A">⒊&nbsp;${name3S4}</div>
    <div class="B" style="display: none;">
    [${wtype3S4}]&nbsp;<br>威力:${powerdisplay3S4}&nbsp;命中:${accuracydisplay3S4}&nbsp;PP:${pp3S4}&nbsp;<br>分類:${moveClass3S4}&nbsp;優先度:${priority3S4}&nbsp;接触:${contact3S4}&nbsp;王者:${king3S4}&nbsp;No:${no3S4}<br>効果:${effect3S4}<br>
    </div><br>
    
    <div class="A">⒋&nbsp;${name4S4}</div>
    <div class="B" style="display: none;">
    [${wtype4S4}]&nbsp;<br>威力:${powerdisplay4S4}&nbsp;命中:${accuracydisplay4S4}&nbsp;PP:${pp4S4}&nbsp;<br>分類:${moveClass4S4}&nbsp;優先度:${priority4S4}&nbsp;接触:${contact4S4}&nbsp;王者:${king4S4}&nbsp;No:${no4S4}<br>効果:${effect4S4}<br>
    </div><br>
    
    ※（被）草結び/けたぐり 威力:${tekipokeKusamusubiDamage}[${tekipokeWeight}kg]`;

      // すべてのA要素を取得する
      const trainerDetailAs = pokeStatus4.querySelectorAll('.A');

      trainerDetailAs.forEach(trainerDetailA => {
        // クリックイベントリスナーを設定する
        trainerDetailA.addEventListener('click', () => {
          // クリックされたA要素の次の兄弟要素を取得する
          const trainerDetailB = trainerDetailA.nextElementSibling;

          // 兄弟要素が存在しているかをチェックし、存在している場合には表示を切り替える
          if (trainerDetailB) {
            trainerDetailB.style.display = trainerDetailB.style.display === 'none' ? 'block' : 'none';
          }
        });
      });
    }
  }







});





