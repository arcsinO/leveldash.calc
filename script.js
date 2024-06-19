// DOMの読み込み終了時の処理を登録

window.addEventListener('DOMContentLoaded', function() {

    // id="calc"のボタンを選択

    let elCalc = document.querySelector('#calc');

    // ボタンをクリックした際の処理を追加

    elCalc.addEventListener('click', function() {

        // id="lvlNow", "lvlGoal"の要素を選択

        let lvlNow = parseInt(document.querySelector('#lvlNow').value);
        let lvlGoal = parseInt(document.querySelector('#lvlGoal').value);
        console.log('lvlNow:' + lvlNow);
        console.log('lvlGoal:' + lvlGoal);

        // 入力ミス対策

        let html;
        let condition = 0;
        if (lvlNow >= lvlGoal) {
            html = '<strong class="text1">既に目標レベルに到達してます。</strong>';
            condition ++;
        }
        if (lvlNow <= 0) {
            html = '<strong class="text1">自然数を入力してください。</strong>';
            condition ++;
        }
        if (lvlGoal <= 0) {
            html = '<strong class="text1">自然数を入力してください。</strong>';
            condition ++;
        }
        console.log('html1:' + html);
        console.log('condition:' + condition);

        // レベル１から現在のレベルまでに必要な経験値の計算

        let expNow = 0;
        if (lvlNow > 21) {
            expNow += 210;
            if (lvlNow > 201) {
                expNow += 85050;
                if (lvlNow > 1001) {
                    expNow += 7144000;
                    if (lvlNow > 2001) {
                        expNow += 34437500;
                        if (lvlNow >= 2002) {
                            expNow += 52500 * (lvlNow - 2001);
                        }
                    } else {
                        expNow += 2.5 * (7 * lvlNow - 232) * (lvlNow - 1001);
                    }
                } else {
                    expNow += 10 * (lvlNow - 108) * (lvlNow -201);
                }
            } else {
                expNow += 2.5 * (lvlNow - 12) * (lvlNow - 21);
            }
        } else {
            expNow += 0.5 * lvlNow * (lvlNow - 1);
        }
        console.log('expNow:' + expNow);

        // レベル１から目標のレベルまでに必要な経験値の計算

        let expGoal = 0;
        if (lvlGoal > 21) {
            expGoal += 210;
            if (lvlGoal > 201) {
                expGoal += 85050;
                if (lvlGoal > 1001) {
                    expGoal += 7144000;
                    if (lvlGoal > 2001) {
                        expGoal += 34437500;
                        if (lvlGoal >= 2002) {
                            expGoal += 52500 * (lvlGoal - 2001);
                        }
                    } else {
                        expGoal += 2.5 * (7 * lvlGoal - 232) * (lvlGoal - 1001);
                    }
                } else {
                    expGoal += 10 * (lvlGoal - 108) * (lvlGoal -201);
                }
            } else {
                expGoal += 2.5 * (lvlGoal - 12) * (lvlGoal - 21);
            }
        } else {
            expGoal += 0.5 * lvlGoal * (lvlGoal - 1);
        }
        console.log('expGoal:' + expGoal);

        // 必要経験値の計算

        let expSum = expGoal - expNow;
        if (condition == 0) {
            html = 'レベル' + lvlNow + 'からレベル' + lvlGoal + 'までに必要な経験値は、<strong class="text1">' + expSum + '</strong>です。';
        }
        document.querySelector('#output').innerHTML = html;
        console.log('expSum:' + expSum);
        console.log('html2:' + html);
    });
});