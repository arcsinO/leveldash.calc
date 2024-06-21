window.addEventListener('DOMContentLoaded', function() {

    let elCalc = document.querySelector('#calc');

    elCalc.addEventListener('click', function() {

        let lvlNow = parseInt(document.querySelector('#lvlNow').value);
        let lvlGoal = parseInt(document.querySelector('#lvlGoal').value);
        console.log('lvlNow:' + lvlNow);
        console.log('lvlGoal:' + lvlGoal);

        let html;
        let condition = 0;
        if (lvlNow >= lvlGoal) {
            html = '<strong class="text1">既に目標の属性値まで強化しています！</strong>';
            condition ++;
        }
        if (lvlNow < 0 || lvlGoal < 0) {
            html = '<strong class="text1">0以上の数値を入力してください！</strong>';
            condition ++;
        }
        if (isNaN(lvlNow) || isNaN(lvlGoal)) {
            html = '<strong class="text1">数値を入力してください！</strong>';
            condition ++;
        }
        console.log('html:' + html);
        console.log('condition:' + condition);

        let crystalNow = 0;
        switch (lvlNow % 2) {
            case 0:
                crystalNow = 0.25 * lvlNow * (lvlNow + 2);
                break;
            case 1:
                crystalNow = 0.25 * (lvlNow + 1) * (lvlNow + 1);
        }
        console.log('crystalNow:' + crystalNow);

        let crystalGoal = 0;
        switch (lvlGoal % 2) {
            case 0:
                crystalGoal = 0.25 * lvlGoal * (lvlGoal + 2);
                break;
            case 1:
                crystalGoal = 0.25 * (lvlGoal + 1) * (lvlGoal + 1);
        }
        console.log('crystalGoal:' + crystalGoal);

        let goldNow = 10 * lvlNow * (lvlNow + 1);
        let goldGoal = 10 * lvlGoal * (lvlGoal + 1);
        console.log('goldNow:' + goldNow);
        console.log('goldGoal:' + goldGoal);

        let crystalSum, goldSum, crystalRate, goldRate, html1, html2, html3, html4;
        if (condition == 0) {
            crystalSum = crystalGoal - crystalNow;
            goldSum = goldGoal - goldNow;
            crystalRate = (100 * crystalNow / crystalGoal).toFixed(2);
            goldRate = (100 * goldNow / goldGoal).toFixed(2);
            html = '属性値' + lvlNow + 'から属性値' + lvlGoal + 'まで強化する際に必要なクリスタルとゴールドは、';
            html1 = "クリスタル：";
            html2 = "ゴールド：";
            html3 = "クリスタルの達成率：";
            html4 = "ゴールドの達成率：";
            document.querySelector('#output1').innerHTML = html1;
            document.querySelector('#output2').innerHTML = html2;
            document.querySelector('#output3').innerHTML = html3;
            document.querySelector('#output4').innerHTML = html4;
            document.querySelector('#crystalSum').innerHTML = '<strong class="text1">' + crystalSum + ' 個</strong>';
            document.querySelector('#goldSum').innerHTML = '<strong class="text1">' + goldSum + ' G</strong>';
            document.querySelector('#crystalRate').innerHTML = '<strong class="text1">' + crystalRate + ' %</strong>';
            document.querySelector('#goldRate').innerHTML = '<strong class="text1">' + goldRate + ' %</strong>';

            document.querySelector('#visibility1').style.visibility = "visible";
            document.querySelector('#visibility2').style.visibility = "visible";
        } else {
            document.querySelector('#visibility1').style.visibility = "collapse";
            document.querySelector('#visibility2').style.visibility = "collapse";
        }
        document.querySelector('#output').innerHTML = html;
        console.log('crystalSum:' + crystalSum);
        console.log('goldSum:' + goldSum);
        console.log('crystalRate:' + crystalRate);
        console.log('goldRate:' + goldRate);
        console.log('html:' + html);
        console.log('html1:' + html1);
        console.log('html2:' + html2);
        console.log('html3:' + html3);
        console.log('html4:' + html4);
    });
});