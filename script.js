const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
let liczby = $$('.liczba');
let dwiekropki = $$('.dwiekropki');

function pokazCzas(h, m, s, ms){
    if(ms < 500){
        dwiekropki[0].setAttribute('stan','off');
        dwiekropki[1].setAttribute('stan','off');
    }else{
        dwiekropki[0].setAttribute('stan','on');
        dwiekropki[1].setAttribute('stan','on');
    }

    liczby[0].className = `liczba n${Math.floor(h/10)}`
    liczby[1].className = `liczba n${h%10}`
    liczby[2].className = `liczba n${Math.floor(m/10)}`
    liczby[3].className = `liczba n${m%10}`
    liczby[4].className = `liczba n${Math.floor(s/10)}`
    liczby[5].className = `liczba n${s%10}`
}

function doPrzerwy(h, m, s){
    
}

setInterval(() => {
    let czas = new Date();
    let godzina = String(czas.getHours());
    let minuta = String(czas.getMinutes());
    let sekunda = String(czas.getSeconds());
    let milisekunda = czas.getMilliseconds();

    pokazCzas(godzina, minuta, sekunda, milisekunda);
    


}, 100);
