window.addEventListener('DOMContentLoaded', function() {

    let start = document.querySelector('#start');
    let ability = document.querySelector('#ability');
    let parameter = document.querySelector('#parameter');
    let close_ability = document.querySelector('#close_ability');
    let close_parameter = document.querySelector('#close_parameter');

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
});