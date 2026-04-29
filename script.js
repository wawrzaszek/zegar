const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
let liczby = $$('.liczba');
let dwiekropki = $$('.dwiekropki');

function pokazCzas(h, m, s) {
    if (s % 2 === 0) {
        dwiekropki[0].setAttribute('stan', 'off');
        dwiekropki[1].setAttribute('stan', 'off');
    } else {
        dwiekropki[0].setAttribute('stan', 'on');
        dwiekropki[1].setAttribute('stan', 'on');
    }

    liczby[0].className = `liczba n${Math.floor(h / 10)}`
    liczby[1].className = `liczba n${h % 10}`
    liczby[2].className = `liczba n${Math.floor(m / 10)}`
    liczby[3].className = `liczba n${m % 10}`
    liczby[4].className = `liczba n${Math.floor(s / 10)}`
    liczby[5].className = `liczba n${s % 10}`
}

function doPrzerwy() {
    let tab = ["07:10", "07:55", "08:00", "08:45", "08:55", "09:40", "09:50", "10:35", "10:45", "11:30",
        "11:50", "12:35", "12:45", "13:30", "13:40", "14:25", "14:35", "15:20", "15:25", "16:10", "16:15", "17:00"]

    let lastH, lastM;
    let czas = new Date();
    let godzina = czas.getHours().toString().padStart(2, '0');
    let minuta = czas.getMinutes().toString().padStart(2, '0');
    let czasStr = `${godzina}:${minuta}`;

    tab.forEach(e => {
        if (e < czasStr) {
            const [h, m] = e.split(':').map(Number);
            lastH = h;
            lastM = m;
        }
    })

    console.log(lastH, lastM);
}

setInterval(() => {
    let czas = new Date();
    let godzina = String(czas.getHours());
    let minuta = String(czas.getMinutes());
    let sekunda = String(czas.getSeconds());

    pokazCzas(godzina, minuta, sekunda);



}, 500);
