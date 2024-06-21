window.addEventListener('DOMContentLoaded', function() {

    let elCalc = document.querySelector('#calc');

    elCalc.addEventListener('click', function() {

        let expChips = parseInt(document.querySelector('#expChips').value);
        let goldChips = parseInt(document.querySelector('#goldChips').value);
        console.log('expChips:' + expChips);
        console.log('goldChips:' + goldChips);

        let html;
        let condition = 0;
        if (expChips > 1500 || goldChips > 500) {
            html = '<strong class="text1">所持不可能な数値です！</strong>';
            condition ++;
        }
        if (expChips < 0 || goldChips < 0) {
            html = '<strong class="text1">0以上の数値を入力してください！</strong>';
            condition ++;
        }
        if (isNaN(expChips) || isNaN(goldChips)) {
            html = '<strong class="text1">数値を入力してください！</strong>';
            condition ++;
        }
        console.log('html:' + html);
        console.log('condition:' + condition);

        let expMonster1 = expChips + 1000;
        let expMonster2 = expChips + 1100;
        let expMonster3 = expChips + 1200;
        let expMonster4 = expChips + 1300;
        let expMonster5 = expChips + 1400;
        let expMonster6 = expChips + 1500;
        let expMonster7 = expChips + 1600;
        let expMonster8 = expChips + 1700;
        let expMonster9 = expChips + 1800;
        let expMonster10 = expChips + 2000;
        let expMonsterX = expChips + 3000;
        console.log('expMonster1:' + expMonster1);
        console.log('expMonster2:' + expMonster2);
        console.log('expMonster3:' + expMonster3);
        console.log('expMonster4:' + expMonster4);
        console.log('expMonster5:' + expMonster5);
        console.log('expMonster6:' + expMonster6);
        console.log('expMonster7:' + expMonster7);
        console.log('expMonster8:' + expMonster8);
        console.log('expMonster9:' + expMonster9);
        console.log('expMonster10:' + expMonster10);
        console.log('expMonsterX:' + expMonsterX);

        let expFloor1 = Math.ceil((expMonster1 - 100) / 3) * 10 + 1;
        let expFloor2 = Math.ceil((expMonster2 - 110) / 3) * 10 + 2;
        let expFloor3 = Math.ceil((expMonster3 - 120) / 3) * 10 + 3;
        let expFloor4 = Math.ceil((expMonster4 - 130) / 3) * 10 + 4;
        let expFloor5 = Math.ceil((expMonster5 - 140) / 3) * 10 + 5;
        let expFloor6 = Math.ceil((expMonster6 - 150) / 3) * 10 + 6;
        let expFloor7 = Math.ceil((expMonster7 - 160) / 3) * 10 + 7;
        let expFloor8 = Math.ceil((expMonster8 - 170) / 3) * 10 + 8;
        let expFloor9 = Math.ceil((expMonster9 - 185) / 3) * 10 + 9;
        let expFloor10 = Math.ceil((expMonster10 - 200) / 3) * 10 + 10;
        let expFloorX = Math.ceil((expMonsterX - 400) / 3) * 10 + 1;
        console.log('expFloor1:' + expFloor1);
        console.log('expFloor2:' + expFloor2);
        console.log('expFloor3:' + expFloor3);
        console.log('expFloor4:' + expFloor4);
        console.log('expFloor5:' + expFloor5);
        console.log('expFloor6:' + expFloor6);
        console.log('expFloor7:' + expFloor7);
        console.log('expFloor8:' + expFloor8);
        console.log('expFloor9:' + expFloor9);
        console.log('expFloor10:' + expFloor10);
        console.log('expFloorX:' + expFloorX);

        let goldMonster1 = goldChips + 300;
        let goldMonster2 = goldChips + 350;
        let goldMonster3 = goldChips + 400;
        let goldMonster4 = goldChips + 450;
        let goldMonster5 = goldChips + 500;
        let goldMonster6 = goldChips + 550;
        let goldMonster7 = goldChips + 600;
        let goldMonster8 = goldChips + 650;
        let goldMonster9 = goldChips + 800;
        let goldMonster10 = goldChips + 1000;
        let goldMonsterX = goldChips + 2000;
        console.log('goldMonster1:' + goldMonster1);
        console.log('goldMonster2:' + goldMonster2);
        console.log('goldMonster3:' + goldMonster3);
        console.log('goldMonster4:' + goldMonster4);
        console.log('goldMonster5:' + goldMonster5);
        console.log('goldMonster6:' + goldMonster6);
        console.log('goldMonster7:' + goldMonster7);
        console.log('goldMonster8:' + goldMonster8);
        console.log('goldMonster9:' + goldMonster9);
        console.log('goldMonster10:' + goldMonster10);
        console.log('goldMonsterX:' + goldMonsterX);

        let goldFloor1 = (goldMonster1 - 20) * 10 + 1;
        let goldFloor2 = (goldMonster2 - 20) * 10 + 2;
        let goldFloor3 = (goldMonster3 - 20) * 10 + 3;
        let goldFloor4 = (goldMonster4 - 21) * 10 + 4;
        let goldFloor5 = (goldMonster5 - 21) * 10 + 5;
        let goldFloor6 = (goldMonster6 - 21) * 10 + 6;
        let goldFloor7 = (goldMonster7 - 21) * 10 + 7;
        let goldFloor8 = (goldMonster8 - 22) * 10 + 8;
        let goldFloor9 = (goldMonster9 - 23) * 10 + 9;
        let goldFloor10 = (goldMonster10 - 25) * 10 + 10;
        let goldFloorX = (goldMonsterX - 500) * 10 + 1;
        console.log('goldFloor1:' + goldFloor1);
        console.log('goldFloor2:' + goldFloor2);
        console.log('goldFloor3:' + goldFloor3);
        console.log('goldFloor4:' + goldFloor4);
        console.log('goldFloor5:' + goldFloor5);
        console.log('goldFloor6:' + goldFloor6);
        console.log('goldFloor7:' + goldFloor7);
        console.log('goldFloor8:' + goldFloor8);
        console.log('goldFloor9:' + goldFloor9);
        console.log('goldFloor10:' + goldFloor10);
        console.log('goldFloorX:' + goldFloorX);

        if (condition == 0) {
            html = '所持ＥＸＰマイクロチップ' + expChips + '、所持Ｇマイクロチップ' + goldChips + 'での経験値とゴールドの上限とその階は、以下の表の通りです！';

            document.querySelector('#expMonster1').innerHTML = expMonster1 + ' EXP';
            document.querySelector('#expMonster2').innerHTML = expMonster2 + ' EXP';
            document.querySelector('#expMonster3').innerHTML = expMonster3 + ' EXP';
            document.querySelector('#expMonster4').innerHTML = expMonster4 + ' EXP';
            document.querySelector('#expMonster5').innerHTML = expMonster5 + ' EXP';
            document.querySelector('#expMonster6').innerHTML = expMonster6 + ' EXP';
            document.querySelector('#expMonster7').innerHTML = expMonster7 + ' EXP';
            document.querySelector('#expMonster8').innerHTML = expMonster8 + ' EXP';
            document.querySelector('#expMonster9').innerHTML = expMonster9 + ' EXP';
            document.querySelector('#expMonster10').innerHTML = expMonster10 + ' EXP';
            document.querySelector('#expMonsterX').innerHTML = expMonsterX + ' EXP';

            document.querySelector('#expFloor1').innerHTML = expFloor1 + ' F';
            document.querySelector('#expFloor2').innerHTML = expFloor2 + ' F';
            document.querySelector('#expFloor3').innerHTML = expFloor3 + ' F';
            document.querySelector('#expFloor4').innerHTML = expFloor4 + ' F';
            document.querySelector('#expFloor5').innerHTML = expFloor5 + ' F';
            document.querySelector('#expFloor6').innerHTML = expFloor6 + ' F';
            document.querySelector('#expFloor7').innerHTML = expFloor7 + ' F';
            document.querySelector('#expFloor8').innerHTML = expFloor8 + ' F';
            document.querySelector('#expFloor9').innerHTML = expFloor9 + ' F';
            document.querySelector('#expFloor10').innerHTML = expFloor10 + ' F';
            document.querySelector('#expFloorX').innerHTML = expFloorX + ' F';

            document.querySelector('#goldMonster1').innerHTML = goldMonster1 + ' G';
            document.querySelector('#goldMonster2').innerHTML = goldMonster2 + ' G';
            document.querySelector('#goldMonster3').innerHTML = goldMonster3 + ' G';
            document.querySelector('#goldMonster4').innerHTML = goldMonster4 + ' G';
            document.querySelector('#goldMonster5').innerHTML = goldMonster5 + ' G';
            document.querySelector('#goldMonster6').innerHTML = goldMonster6 + ' G';
            document.querySelector('#goldMonster7').innerHTML = goldMonster7 + ' G';
            document.querySelector('#goldMonster8').innerHTML = goldMonster8 + ' G';
            document.querySelector('#goldMonster9').innerHTML = goldMonster9 + ' G';
            document.querySelector('#goldMonster10').innerHTML = goldMonster10 + ' G';
            document.querySelector('#goldMonsterX').innerHTML = goldMonsterX + ' G';

            document.querySelector('#goldFloor1').innerHTML = goldFloor1 + ' F';
            document.querySelector('#goldFloor2').innerHTML = goldFloor2 + ' F';
            document.querySelector('#goldFloor3').innerHTML = goldFloor3 + ' F';
            document.querySelector('#goldFloor4').innerHTML = goldFloor4 + ' F';
            document.querySelector('#goldFloor5').innerHTML = goldFloor5 + ' F';
            document.querySelector('#goldFloor6').innerHTML = goldFloor6 + ' F';
            document.querySelector('#goldFloor7').innerHTML = goldFloor7 + ' F';
            document.querySelector('#goldFloor8').innerHTML = goldFloor8 + ' F';
            document.querySelector('#goldFloor9').innerHTML = goldFloor9 + ' F';
            document.querySelector('#goldFloor10').innerHTML = goldFloor10 + ' F';
            document.querySelector('#goldFloorX').innerHTML = goldFloorX + ' F';
        }
        document.querySelector('#output').innerHTML = html;
        console.log('html:' + html);
    });
});