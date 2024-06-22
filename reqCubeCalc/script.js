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
            html = '<strong class="text1">既に目標の修正値まで強化しています！</strong><hr>';
            condition ++;
        }
        if (lvlNow < 0 || lvlGoal < 0) {
            html = '<strong class="text1">0以上の数値を入力してください！</strong><hr>';
            condition ++;
        }
        if (isNaN(lvlNow) || isNaN(lvlGoal)) {
            html = '<strong class="text1">数値を入力してください！</strong><hr>';
            condition ++;
        }
        console.log('html:' + html);
        console.log('condition:' + condition);

        let cubeNow = 0;
        switch (lvlNow % 2) {
            case 0:
                cubeNow = 0.25 * lvlNow * (lvlNow + 2);
                break;
            case 1:
                cubeNow = 0.25 * (lvlNow + 1) * (lvlNow + 1);
        }
        console.log('cubeNow:' + cubeNow);

        let cubeGoal = 0;
        switch (lvlGoal % 2) {
            case 0:
                cubeGoal = 0.25 * lvlGoal * (lvlGoal + 2);
                break;
            case 1:
                cubeGoal = 0.25 * (lvlGoal + 1) * (lvlGoal + 1);
        }
        console.log('cubeGoal:' + cubeGoal);

        let goldNow = 5 * lvlNow * (lvlNow + 1);
        let goldGoal = 5 * lvlGoal * (lvlGoal + 1);
        console.log('goldNow:' + goldNow);
        console.log('goldGoal:' + goldGoal);

        let cubeSum, goldSum, cubeRate, goldRate, html1, html2, html3, html4;
        if (condition == 0) {
            cubeSum = cubeGoal - cubeNow;
            goldSum = goldGoal - goldNow;
            cubeRate = (100 * cubeNow / cubeGoal).toFixed(2);
            if (cubeRate == 100) {
                cubeRate = 99.99;
            }
            goldRate = (100 * goldNow / goldGoal).toFixed(2);
            if (goldRate == 100) {
                goldRate = 99.99;
            }
            html = '修正値' + lvlNow + 'から修正値' + lvlGoal + 'まで強化する際に必要なキューブとゴールドは、';
            html1 = "キューブ：";
            html2 = "ゴールド：";
            html3 = "キューブの達成率：";
            html4 = "ゴールドの達成率：";
            document.querySelector('#output1').innerHTML = html1;
            document.querySelector('#output2').innerHTML = html2;
            document.querySelector('#output3').innerHTML = html3;
            document.querySelector('#output4').innerHTML = html4;
            document.querySelector('#cubeSum').innerHTML = '<strong class="text1">' + cubeSum + ' 個</strong>';
            document.querySelector('#goldSum').innerHTML = '<strong class="text1">' + goldSum + ' G</strong>';
            document.querySelector('#cubeRate').innerHTML = '<strong class="text1">' + cubeRate + ' %</strong>';
            document.querySelector('#goldRate').innerHTML = '<strong class="text1">' + goldRate + ' %</strong>';

            document.querySelector('.display').style.display = "block";
        } else {
            document.querySelector('.display').style.display = "none";
        }
        document.querySelector('#output').innerHTML = html;
        console.log('cubeSum:' + cubeSum);
        console.log('goldSum:' + goldSum);
        console.log('cubeRate:' + cubeRate);
        console.log('goldRate:' + goldRate);
        console.log('html:' + html);
        console.log('html1:' + html1);
        console.log('html2:' + html2);
        console.log('html3:' + html3);
        console.log('html4:' + html4);
    });
});