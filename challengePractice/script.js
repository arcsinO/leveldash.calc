window.addEventListener('DOMContentLoaded', function() {

    // セクションボタンid読み込み

    let start = document.querySelector('#start');
    let ability = document.querySelector('#ability');
    let parameter = document.querySelector('#parameter');
    let close_ability = document.querySelector('#close_ability');
    let close_parameter = document.querySelector('#close_parameter');

    // アビリティ・パラメータのボタンid読み込み

    let ability_killMonsterHeal_btn_down = document.querySelector('#ability_killMonsterHeal_btn_down');
    let ability_killMonsterHeal_btn_up = document.querySelector('#ability_killMonsterHeal_btn_up');
    let ability_rareMonsterRate_btn_down = document.querySelector('#ability_rareMonsterRate_btn_down');
    let ability_rareMonsterRate_btn_up = document.querySelector('#ability_rareMonsterRate_btn_up');
    let ability_coinGetRate_btn_down = document.querySelector('#ability_coinGetRate_btn_down');
    let ability_coinGetRate_btn_up = document.querySelector('#ability_coinGetRate_btn_up');
    let ability_initialCoin_btn_down = document.querySelector('#ability_initialCoin_btn_down');
    let ability_initialCoin_btn_up = document.querySelector('#ability_initialCoin_btn_up');
    let ability_refillBonusShop_btn_down = document.querySelector('#ability_refillBonusShop_btn_down');
    let ability_refillBonusShop_btn_up = document.querySelector('#ability_refillBonusShop_btn_up');
    let ability_maxHp_btn_down = document.querySelector('#ability_maxHp_btn_down');
    let ability_maxHp_btn_up = document.querySelector('#ability_maxHp_btn_up');
    let ability_maxHpIncrease_btn_down = document.querySelector('#ability_maxHpIncrease_btn_down');
    let ability_maxHpIncrease_btn_up = document.querySelector('#ability_maxHpIncrease_btn_up');
    let ability_attackHeal_btn_down = document.querySelector('#ability_attackHeal_btn_down');
    let ability_attackHeal_btn_up = document.querySelector('#ability_attackHeal_btn_up');
    let ability_atk_btn_down = document.querySelector('#ability_atk_btn_down');
    let ability_atk_btn_up = document.querySelector('#ability_atk_btn_up');
    let ability_evaRate_btn_down = document.querySelector('#ability_evaRate_btn_down');
    let ability_evaRate_btn_up = document.querySelector('#ability_evaRate_btn_up');
    let ability_criticalAtkRate_btn_down = document.querySelector('#ability_criticalAtkRate_btn_down');
    let ability_criticalAtkRate_btn_up = document.querySelector('#ability_criticalAtkRate_btn_up');
    let ability_criticalDexRate_btn_down = document.querySelector('#ability_criticalDexRate_btn_down');
    let ability_criticalDexRate_btn_up = document.querySelector('#ability_criticalDexRate_btn_up');
    let ability_basePoint_btn_down = document.querySelector('#ability_basePoint_btn_down');
    let ability_basePoint_btn_up = document.querySelector('#ability_basePoint_btn_up');
    let parameter_hp_btn_down = document.querySelector('#parameter_hp_btn_down');
    let parameter_hp_btn_up = document.querySelector('#parameter_hp_btn_up');
    let parameter_atk_btn_down = document.querySelector('#parameter_atk_btn_down');
    let parameter_atk_btn_up = document.querySelector('#parameter_atk_btn_up');
    let parameter_evaRate_btn_down = document.querySelector('#parameter_evaRate_btn_down');
    let parameter_evaRate_btn_up = document.querySelector('#parameter_evaRate_btn_up');

    // 変数初期化

    let ability_killMonsterHeal = 0;
    let ability_rareMonsterRate = 0;
    let ability_coinGetRate = 0;
    let ability_initialCoin = 0;
    let ability_refillBonusShop = 0;
    let ability_maxHp = 0;
    let ability_maxHpIncrease = 0;
    let ability_attackHeal = 0;
    let ability_atk = 0;
    let ability_evaRate = 0;
    let ability_criticalAtkRate = 0;
    let ability_criticalDexRate = 0;
    let ability_basePoint = 0;
    let ability_killMonsterHeal_lvl = 0;
    let ability_rareMonsterRate_lvl = 0;
    let ability_coinGetRate_lvl = 0;
    let ability_initialCoin_lvl = 0;
    let ability_refillBonusShop_lvl = 0;
    let ability_maxHp_lvl = 0;
    let ability_maxHpIncrease_lvl = 0;
    let ability_attackHeal_lvl = 0;
    let ability_atk_lvl = 0;
    let ability_evaRate_lvl = 0;
    let ability_criticalAtkRate_lvl = 0;
    let ability_criticalDexRate_lvl = 0;
    let ability_basePoint_lvl = 0;
    let parameter_hp = 125;
    let parameter_atk = 25;
    let parameter_evaRate = 11;
    let parameter_hp_lvl = parameter_hp;
    let parameter_atk_lvl = parameter_atk;
    let parameter_evaRate_lvl = parameter_evaRate;

    let ability_killMonsterHeal_ary = [0, 5, 7, 10, 13, 15, 20];
    let ability_rareMonsterRate_ary = [0, 5, 10, 15, 20, 25];
    let ability_coinGetRate_ary = [0, 10, 20, 30];
    let ability_initialCoin_ary = [0, 250, 500, 1000, 2000];
    let ability_refillBonusShop_ary = [0, 1, 2, 3, 4, 5];
    let ability_maxHp_ary = [0, 50, 100, 150, 200, 250];
    let ability_maxHpIncrease_ary = [0, 15, 30, 40, 50];
    let ability_attackHeal_ary = [0, 1, 2, 4, 6, 8, 10];
    let ability_atk_ary = [0, 10, 20, 30, 40, 50];

    // 変数をhtmlに送信

    document.querySelector('#ability_killMonsterHeal_lvl').innerHTML = ability_killMonsterHeal_lvl + '/6';
    document.querySelector('#ability_killMonsterHeal').innerHTML = ability_killMonsterHeal;
    document.querySelector('#ability_rareMonsterRate_lvl').innerHTML = ability_rareMonsterRate_lvl + '/5';
    document.querySelector('#ability_rareMonsterRate').innerHTML = ability_rareMonsterRate;
    document.querySelector('#ability_coinGetRate_lvl').innerHTML = ability_coinGetRate + '/3';
    document.querySelector ('#ability_coinGetRate').innerHTML = ability_coinGetRate;
    document.querySelector('#ability_initialCoin_lvl').innerHTML = ability_initialCoin_lvl + '/4';
    document.querySelector('#ability_initialCoin').innerHTML = ability_initialCoin;
    document.querySelector('#ability_refillBonusShop_lvl').innerHTML = ability_refillBonusShop_lvl + '/5';
    document.querySelector('#ability_refillBonusShop').innerHTML = ability_refillBonusShop;
    document.querySelector('#ability_maxHp_lvl').innerHTML = ability_maxHp_lvl + '/5';
    document.querySelector('#ability_maxHp').innerHTML = ability_maxHp;
    document.querySelector('#ability_maxHpIncrease_lvl').innerHTML = ability_maxHpIncrease_lvl + '/4';
    document.querySelector('#ability_maxHpIncrease').innerHTML = ability_maxHpIncrease;
    document.querySelector('#ability_attackHeal_lvl').innerHTML = ability_attackHeal_lvl + '/6';
    document.querySelector('#ability_attackHeal').innerHTML = ability_attackHeal;
    document.querySelector('#ability_atk_lvl').innerHTML = ability_atk_lvl + '/5';
    document.querySelector('#ability_atk').innerHTML = ability_atk;
    document.querySelector('#ability_evaRate_lvl').innerHTML = ability_evaRate_lvl + '/5';
    document.querySelector('#ability_evaRate').innerHTML = ability_evaRate;
    document.querySelector('#ability_criticalAtkRate_lvl').innerHTML = ability_criticalAtkRate_lvl + '/5';
    document.querySelector('#ability_criticalAtkRate').innerHTML = ability_criticalAtkRate;
    document.querySelector('#ability_criticalDexRate_lvl').innerHTML = ability_criticalDexRate_lvl + '/5';
    document.querySelector('#ability_criticalDexRate').innerHTML = ability_criticalDexRate;
    document.querySelector('#ability_basePoint_lvl').innerHTML = ability_basePoint_lvl + '/5';
    document.querySelector('#ability_basePoint').innerHTML = ability_basePoint;
    document.querySelector('#parameter_hp_lvl').innerHTML = parameter_hp_lvl + '/125';
    document.querySelector('#parameter_hp').innerHTML = parameter_hp;
    document.querySelector('#parameter_atk_lvl').innerHTML = parameter_atk_lvl + '/25';
    document.querySelector('#parameter_atk').innerHTML = parameter_atk;
    document.querySelector('#parameter_evaRate_lvl').innerHTML = parameter_evaRate_lvl + '/11';
    document.querySelector('#parameter_evaRate').innerHTML = parameter_evaRate;

    // セクションの読み込み

    start.addEventListener('click', function() {
        document.querySelector('.button_start').style.display = "none";
    });
    ability.addEventListener('click', function() {
        document.querySelector('.img_section').style.display = "none";
        document.querySelector('.button_start').style.display = "none";
        document.querySelector('.ability_shop').style.display = "block";
        document.querySelector('.button_ability_reset').style.display = "block";
    });
    parameter.addEventListener('click', function() {
        document.querySelector('.img_section').style.display = "none";
        document.querySelector('.button_start').style.display = "none";
        document.querySelector('.parameter_setting').style.display = "block";
        document.querySelector('.button_parameter_reset').style.display = "block";
    });
    close_ability.addEventListener('click', function() {
        document.querySelector('.img_section').style.display = "block";
        document.querySelector('.button_start').style.display = "block";
        document.querySelector('.ability_shop').style.display = "none";
        document.querySelector('.button_ability_reset').style.display = "none";
    });
    close_parameter.addEventListener('click', function() {
        document.querySelector('.img_section').style.display = "block";
        document.querySelector('.button_start').style.display = "block";
        document.querySelector('.parameter_setting').style.display = "none";
        document.querySelector('.button_parameter_reset').style.display = "none";
    });

    // アビリティ・パラメータ設定

    // killMonsterHeal

    ability_killMonsterHeal_btn_down.addEventListener('click', function() {
        if (ability_killMonsterHeal_lvl > 0) {
            ability_killMonsterHeal_lvl --;
            ability_killMonsterHeal = ability_killMonsterHeal_ary[ability_killMonsterHeal_lvl];
            if (ability_killMonsterHeal_lvl == 0) {
                document.querySelector('#ability_killMonsterHeal_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_killMonsterHeal_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_killMonsterHeal_lvl').innerHTML = ability_killMonsterHeal_lvl + '/6';
            document.querySelector('#ability_killMonsterHeal').innerHTML = ability_killMonsterHeal;
        } 
    });
    ability_killMonsterHeal_btn_up.addEventListener('click', function() {
        if (ability_killMonsterHeal_lvl < 6) {
            ability_killMonsterHeal_lvl ++;
            ability_killMonsterHeal = ability_killMonsterHeal_ary[ability_killMonsterHeal_lvl];
            if (ability_killMonsterHeal_lvl == 6) {
                document.querySelector('#ability_killMonsterHeal_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_killMonsterHeal_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_killMonsterHeal_lvl').innerHTML = ability_killMonsterHeal_lvl + '/6';
            document.querySelector('#ability_killMonsterHeal').innerHTML = ability_killMonsterHeal;
        }
    });

    // rareMonsterRate

    ability_rareMonsterRate_btn_down.addEventListener('click', function() {
        if (ability_rareMonsterRate_lvl > 0) {
            ability_rareMonsterRate_lvl --;
            ability_rareMonsterRate = ability_rareMonsterRate_ary[ability_rareMonsterRate_lvl];
            if (ability_rareMonsterRate_lvl == 0) {
                document.querySelector('#ability_rareMonsterRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_rareMonsterRate_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_rareMonsterRate_lvl').innerHTML = ability_rareMonsterRate_lvl + '/5';
            document.querySelector('#ability_rareMonsterRate').innerHTML = ability_rareMonsterRate;
        }
    });
    ability_rareMonsterRate_btn_up.addEventListener('click', function() {
        if (ability_rareMonsterRate_lvl < 5) {
            ability_rareMonsterRate_lvl ++;
            ability_rareMonsterRate = ability_rareMonsterRate_ary[ability_rareMonsterRate_lvl];
            if (ability_rareMonsterRate_lvl == 5) {
                document.querySelector('#ability_rareMonsterRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_rareMonsterRate_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_rareMonsterRate_lvl').innerHTML = ability_rareMonsterRate_lvl + '/5';
            document.querySelector('#ability_rareMonsterRate').innerHTML = ability_rareMonsterRate;
        }
    });

    // coinGetRate

    ability_coinGetRate_btn_down.addEventListener('click', function() {
        if (ability_coinGetRate_lvl > 0) {
            ability_coinGetRate_lvl --;
            ability_coinGetRate = ability_coinGetRate_ary[ability_coinGetRate_lvl];
            if (ability_coinGetRate_lvl == 0) {
                document.querySelector('#ability_coinGetRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_coinGetRate_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_coinGetRate_lvl').innerHTML = ability_coinGetRate_lvl + '/3';
            document.querySelector('#ability_coinGetRate').innerHTML = ability_coinGetRate;
        }
    });
    ability_coinGetRate_btn_up.addEventListener('click', function() {
        if (ability_coinGetRate_lvl < 3) {
            ability_coinGetRate_lvl ++;
            ability_coinGetRate = ability_coinGetRate_ary[ability_coinGetRate_lvl];
            if (ability_coinGetRate_lvl == 3) {
                document.querySelector('#ability_coinGetRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_coinGetRate_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_coinGetRate_lvl').innerHTML = ability_coinGetRate_lvl + '/3';
            document.querySelector('#ability_coinGetRate').innerHTML = ability_coinGetRate;
        }
    });

    // initialCoin

    ability_initialCoin_btn_down.addEventListener('click', function() {
        if (ability_initialCoin_lvl > 0) {
            ability_initialCoin_lvl --;
            ability_initialCoin = ability_initialCoin_ary[ability_initialCoin_lvl];
            if (ability_initialCoin_lvl == 0) {
                document.querySelector('#ability_initialCoin_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_initialCoin_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_initialCoin_lvl').innerHTML = ability_initialCoin_lvl + '/4';
            document.querySelector('#ability_initialCoin').innerHTML = ability_initialCoin;
        }
    });
    ability_initialCoin_btn_up.addEventListener('click', function() {
        if (ability_initialCoin_lvl < 4) {
            ability_initialCoin_lvl ++;
            ability_initialCoin = ability_initialCoin_ary[ability_initialCoin_lvl];
            if (ability_initialCoin_lvl == 4) {
                document.querySelector('#ability_initialCoin_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_initialCoin_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_initialCoin_lvl').innerHTML = ability_initialCoin_lvl + '/4';
            document.querySelector('#ability_initialCoin').innerHTML = ability_initialCoin;
        }
    });

    // refillBonusShop

    ability_refillBonusShop_btn_down.addEventListener('click', function() {
        if (ability_refillBonusShop_lvl > 0) {
            ability_refillBonusShop_lvl --;
            ability_refillBonusShop = ability_refillBonusShop_ary[ability_refillBonusShop_lvl];
            if (ability_refillBonusShop_lvl == 0) {
                document.querySelector('#ability_refillBonusShop_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_refillBonusShop_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_refillBonusShop_lvl').innerHTML = ability_refillBonusShop_lvl + '/5';
            document.querySelector('#ability_refillBonusShop').innerHTML = ability_refillBonusShop;
        }
    });
    ability_refillBonusShop_btn_up.addEventListener('click', function() {
        if (ability_refillBonusShop_lvl < 5) {
            ability_refillBonusShop_lvl ++;
            ability_refillBonusShop = ability_refillBonusShop_ary[ability_refillBonusShop_lvl];
            if (ability_refillBonusShop_lvl == 5) {
                document.querySelector('#ability_refillBonusShop_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_refillBonusShop_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_refillBonusShop_lvl').innerHTML = ability_refillBonusShop_lvl + '/5';
            document.querySelector('#ability_refillBonusShop').innerHTML = ability_refillBonusShop;
        }
    });

    // maxHp

    ability_maxHp_btn_down.addEventListener('click', function() {
        if (ability_maxHp_lvl > 0) {
            ability_maxHp_lvl --;
            ability_maxHp = ability_maxHp_ary[ability_maxHp_lvl];
            if (ability_maxHp_lvl == 0) {
                document.querySelector('#ability_maxHp_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_maxHp_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_maxHp_lvl').innerHTML = ability_maxHp_lvl + '/5';
            document.querySelector('#ability_maxHp').innerHTML = ability_maxHp;
        }
    });
    ability_maxHp_btn_up.addEventListener('click', function() {
        if (ability_maxHp_lvl < 5) {
            ability_maxHp_lvl ++;
            ability_maxHp = ability_maxHp_ary[ability_maxHp_lvl];
            if (ability_maxHp_lvl == 5) {
                document.querySelector('#ability_maxHp_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_maxHp_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_maxHp_lvl').innerHTML = ability_maxHp_lvl + '/5';
            document.querySelector('#ability_maxHp').innerHTML = ability_maxHp;
        }
    });

    // maxHpIncrease

    ability_maxHpIncrease_btn_down.addEventListener('click', function() {
        if (ability_maxHpIncrease_lvl > 0) {
            ability_maxHpIncrease_lvl --;
            ability_maxHpIncrease = ability_maxHpIncrease_ary[ability_maxHpIncrease_lvl];
            if (ability_maxHpIncrease_lvl == 0) {
                document.querySelector('#ability_maxHpIncrease_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_maxHpIncrease_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_maxHpIncrease_lvl').innerHTML = ability_maxHpIncrease_lvl + '/4';
            document.querySelector('#ability_maxHpIncrease').innerHTML = ability_maxHpIncrease;
        }
    });
    ability_maxHpIncrease_btn_up.addEventListener('click', function() {
        if (ability_maxHpIncrease_lvl < 4) {
            ability_maxHpIncrease_lvl ++;
            ability_maxHpIncrease = ability_maxHpIncrease_ary[ability_maxHpIncrease_lvl];
            if (ability_maxHpIncrease_lvl == 4) {
                document.querySelector('#ability_maxHpIncrease_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_maxHpIncrease_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_maxHpIncrease_lvl').innerHTML = ability_maxHpIncrease_lvl + '/4';
            document.querySelector('#ability_maxHpIncrease').innerHTML = ability_maxHpIncrease;
        }
    });

    // attackHeal

    ability_attackHeal_btn_down.addEventListener('click', function() {
        if (ability_attackHeal_lvl > 0) {
            ability_attackHeal_lvl --;
            ability_attackHeal = ability_attackHeal_ary[ability_attackHeal_lvl];
            if (ability_attackHeal_lvl == 0) {
                document.querySelector('#ability_attackHeal_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_attackHeal_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_attackHeal_lvl').innerHTML = ability_attackHeal_lvl + '/6';
            document.querySelector('#ability_attackHeal').innerHTML = ability_attackHeal;
        }
    });
    ability_attackHeal_btn_up.addEventListener('click', function() {
        if (ability_attackHeal_lvl < 6) {
            ability_attackHeal_lvl ++;
            ability_attackHeal = ability_attackHeal_ary[ability_attackHeal_lvl];
            if (ability_attackHeal_lvl == 6) {
                document.querySelector('#ability_attackHeal_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_attackHeal_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_attackHeal_lvl').innerHTML = ability_attackHeal_lvl + '/6';
            document.querySelector('#ability_attackHeal').innerHTML = ability_attackHeal;
        }
    });

    // atk

    ability_atk_btn_down.addEventListener('click', function() {
        if (ability_atk_lvl > 0) {
            ability_atk_lvl --;
            ability_atk = ability_atk_ary[ability_atk_lvl];
            if (ability_atk_lvl == 0) {
                document.querySelector('#ability_atk_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_atk_btn_up').style.backgroundColor = "white";
            }
            document.querySelector('#ability_atk_lvl').innerHTML = ability_atk_lvl + '/5';
            document.querySelector('#ability_atk').innerHTML = ability_atk;
        }
    });
    ability_atk_btn_up.addEventListener('click', function() {
        if (ability_atk_lvl < 5) {
            ability_atk_lvl ++;
            ability_atk = ability_atk_ary[ability_atk_lvl];
            if (ability_atk_lvl == 5) {
                document.querySelector('#ability_atk_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_atk_btn_down').style.backgroundColor = "white";
            }
            document.querySelector('#ability_atk_lvl').innerHTML = ability_atk_lvl + '/5';
            document.querySelector('#ability_atk').innerHTML = ability_atk;
        }
    });

    // evaRate

    ability_evaRate_btn_down.addEventListener('click', function() {
        if (ability_evaRate_lvl > 0) {
            ability_evaRate_lvl -= 1;
            ability_evaRate = ability_evaRate_lvl * 10;
            if (ability_evaRate_lvl == 0) {
                document.querySelector('#ability_evaRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_evaRate_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_evaRate_lvl').innerHTML = ability_evaRate_lvl + '/5';
        document.querySelector('#ability_evaRate').innerHTML = ability_evaRate;
    });
    ability_evaRate_btn_up.addEventListener('click', function() {
        if (ability_evaRate_lvl < 5) {
            ability_evaRate_lvl += 1;
            ability_evaRate = ability_evaRate_lvl * 10;
            if (ability_evaRate_lvl == 5) {
                document.querySelector('#ability_evaRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_evaRate_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_evaRate_lvl').innerHTML = ability_evaRate_lvl + '/5';
        document.querySelector('#ability_evaRate').innerHTML = ability_evaRate;
    });
    
    // criticalAtkRate

    ability_criticalAtkRate_btn_down.addEventListener('click', function() {
        if (ability_criticalAtkRate_lvl > 0) {
            ability_criticalAtkRate_lvl -= 1;
            ability_criticalAtkRate = ability_criticalAtkRate_lvl * 10;
            if (ability_criticalAtkRate_lvl == 0) {
                document.querySelector('#ability_criticalAtkRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_criticalAtkRate_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_criticalAtkRate_lvl').innerHTML = ability_criticalAtkRate_lvl + '/5';
        document.querySelector('#ability_criticalAtkRate').innerHTML = ability_criticalAtkRate;
    });
    ability_criticalAtkRate_btn_up.addEventListener('click', function() {
        if (ability_criticalAtkRate_lvl < 5) {
            ability_criticalAtkRate_lvl += 1;
            ability_criticalAtkRate = ability_criticalAtkRate_lvl * 10;
            if (ability_criticalAtkRate_lvl == 5) {
                document.querySelector('#ability_criticalAtkRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_criticalAtkRate_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_criticalAtkRate_lvl').innerHTML = ability_criticalAtkRate_lvl + '/5';
        document.querySelector('#ability_criticalAtkRate').innerHTML = ability_criticalAtkRate;
    });

    // criticalDexRate

    ability_criticalDexRate_btn_down.addEventListener('click', function() {
        if (ability_criticalDexRate_lvl > 0) {
            ability_criticalDexRate_lvl -= 1;
            ability_criticalDexRate = ability_criticalDexRate_lvl * 10;
            if (ability_criticalDexRate_lvl == 0) {
                document.querySelector('#ability_criticalDexRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_criticalDexRate_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_criticalDexRate_lvl').innerHTML = ability_criticalDexRate_lvl + '/5';
        document.querySelector('#ability_criticalDexRate').innerHTML = ability_criticalDexRate;
    });
    ability_criticalDexRate_btn_up.addEventListener('click', function() {
        if (ability_criticalDexRate_lvl < 5) {
            ability_criticalDexRate_lvl += 1;
            ability_criticalDexRate = ability_criticalDexRate_lvl * 10;
            if (ability_criticalDexRate_lvl == 5) {
                document.querySelector('#ability_criticalDexRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_criticalDexRate_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_criticalDexRate_lvl').innerHTML = ability_criticalDexRate_lvl + '/5';
        document.querySelector('#ability_criticalDexRate').innerHTML = ability_criticalDexRate;
    });

    // basePoint

    ability_basePoint_btn_down.addEventListener('click', function() {
        if (ability_basePoint_lvl > 0) {
            ability_basePoint_lvl -= 1;
            ability_basePoint = ability_basePoint_lvl * 10;
            if (ability_basePoint_lvl == 0) {
                document.querySelector('#ability_basePoint_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_basePoint_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_basePoint_lvl').innerHTML = ability_basePoint_lvl + '/5';
        document.querySelector('#ability_basePoint').innerHTML = ability_basePoint;
    });
    ability_basePoint_btn_up.addEventListener('click', function() {
        if (ability_basePoint_lvl < 5) {
            ability_basePoint_lvl += 1;
            ability_basePoint = ability_basePoint_lvl * 10;
            if (ability_basePoint_lvl == 5) {
                document.querySelector('#ability_basePoint_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#ability_basePoint_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#ability_basePoint_lvl').innerHTML = ability_basePoint_lvl + '/5';
        document.querySelector('#ability_basePoint').innerHTML = ability_basePoint;
    });

    // parameter_hp

    parameter_hp_btn_down.addEventListener('click', function() {
        if (parameter_hp_lvl > 0) {
            parameter_hp_lvl -= 1;
            parameter_hp = parameter_hp_lvl;
            if (parameter_hp_lvl == 0) {
                document.querySelector('#parameter_hp_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_hp_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_hp_lvl').innerHTML = parameter_hp_lvl + '/125';
        document.querySelector('#parameter_hp').innerHTML = parameter_hp;
    });
    parameter_hp_btn_up.addEventListener('click', function() {
        if (parameter_hp_lvl < 125) {
            parameter_hp_lvl += 1;
            parameter_hp = parameter_hp_lvl;
            if (parameter_hp_lvl == 125) {
                document.querySelector('#parameter_hp_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_hp_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_hp_lvl').innerHTML = parameter_hp_lvl + '/125';
        document.querySelector('#parameter_hp').innerHTML = parameter_hp;
    });

    // parameter_atk

    parameter_atk_btn_down.addEventListener('click', function() {
        if (parameter_atk_lvl > 0) {
            parameter_atk_lvl -= 1;
            parameter_atk = parameter_atk_lvl;
            if (parameter_atk_lvl == 0) {
                document.querySelector('#parameter_atk_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_atk_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_atk_lvl').innerHTML = parameter_atk_lvl + '/25';
        document.querySelector('#parameter_atk').innerHTML = parameter_atk;
    });
    parameter_atk_btn_up.addEventListener('click', function() {
        if (parameter_atk_lvl < 25) {
            parameter_atk_lvl += 1;
            parameter_atk = parameter_atk_lvl;
            if (parameter_atk_lvl == 25) {
                document.querySelector('#parameter_atk_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_atk_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_atk_lvl').innerHTML = parameter_atk_lvl + '/25';
        document.querySelector('#parameter_atk').innerHTML = parameter_atk;
    });

    // parameter_evaRate

    parameter_evaRate_btn_down.addEventListener('click', function() {
        if (parameter_evaRate_lvl > 0) {
            parameter_evaRate_lvl -= 1;
            parameter_evaRate = parameter_evaRate_lvl;
            if (parameter_evaRate_lvl == 0) {
                document.querySelector('#parameter_evaRate_btn_down').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_evaRate_btn_up').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_evaRate_lvl').innerHTML = parameter_evaRate_lvl + '/11';
        document.querySelector('#parameter_evaRate').innerHTML = parameter_evaRate;
    });
    parameter_evaRate_btn_up.addEventListener('click', function() {
        if (parameter_evaRate_lvl < 11) {
            parameter_evaRate_lvl += 1;
            parameter_evaRate = parameter_evaRate_lvl;
            if (parameter_evaRate_lvl == 11) {
                document.querySelector('#parameter_evaRate_btn_up').style.backgroundColor = "gray";
            } else {
                document.querySelector('#parameter_evaRate_btn_down').style.backgroundColor = "white";
            }
        }
        document.querySelector('#parameter_evaRate_lvl').innerHTML = parameter_evaRate_lvl + '/11';
        document.querySelector('#parameter_evaRate').innerHTML = parameter_evaRate;
    });

});