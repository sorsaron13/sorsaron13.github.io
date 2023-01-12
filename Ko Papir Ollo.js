let jatekosScore = 0;
let szamitogepScore = 0;
const jatekosScore_span = document.getElementById("jatekos-pont");
const szamitogepScore_span = document.getElementById("szamitogep-pont");
const pontszamlalo_div = document.querySelector(".pont");
const eredmeny_div = document.querySelector(".eredmeny > p");
const ko_div = document.getElementById("r");
const papir_div = document.getElementById("p");
const ollo_div = document.getElementById("s");

function getSzamitogepValasztasa(){
    const valasztasok = ['r','p','s'];
    const randomSzam = Math.floor(Math.random()*  3);
    return valasztasok[randomSzam];
}
function alakit(betu){
    if(betu === "r") return "Kő";
    if(betu === "p") return "Papír";
    return "Olló";
}
function nyer(jatekosValasztasa, szamitogepValasztasa){
    jatekosScore++;
    jatekosScore_span.innerHTML = jatekosScore;
    szamitogepScore_span.innerHTML = szamitogepScore;
    eredmeny_div.innerHTML = alakit(jatekosValasztasa) + " üti " + alakit(szamitogepValasztasa) +"-t. Te nyertél!";
    document.getElementById(jatekosValasztasa).classList.add('zold');
    setTimeout(function (){document.getElementById(jatekosValasztasa).classList.remove('zold')}, 750);

}
function veszt(jatekosValasztasa, szamitogepValasztasa){
    szamitogepScore++;
    jatekosScore_span.innerHTML = jatekosScore;
    szamitogepScore_span.innerHTML = szamitogepScore;
    eredmeny_div.innerHTML = alakit(jatekosValasztasa) + " veszít " + alakit(szamitogepValasztasa) +" ellen! L";
    document.getElementById(jatekosValasztasa).classList.add('piros');
    setTimeout(function (){document.getElementById(jatekosValasztasa).classList.remove('piros')}, 750);

}
function dontetlen(jatekosValasztasa, szamitogepValasztasa){
    jatekosScore_span.innerHTML = jatekosScore;
    szamitogepScore_span.innerHTML = szamitogepScore;
    eredmeny_div.innerHTML = alakit(jatekosValasztasa) + " és " + alakit(szamitogepValasztasa) +"...Döntetlen";
    document.getElementById(jatekosValasztasa).classList.add('szurke');
    setTimeout(function (){document.getElementById(jatekosValasztasa).classList.remove('szurke')}, 750);

}

function jatek(jatekosValasztasa){
    const szamitogepValasztasa = getSzamitogepValasztasa();
    switch (jatekosValasztasa + szamitogepValasztasa){
        case "rs":
        case "pr":
        case "sp":
            nyer(jatekosValasztasa,szamitogepValasztasa);
            break;
        case "rp":
        case "ps":
        case "sr":
            veszt(jatekosValasztasa,szamitogepValasztasa);
            break;
        case "rr":
        case "pp":
        case "ss":
            dontetlen(jatekosValasztasa,szamitogepValasztasa);
            break;
    }
}

function main(){
    ko_div.addEventListener('click', function(){
        jatek("r");
    })
    papir_div.addEventListener('click', function(){
        jatek("p");
    })
    ollo_div.addEventListener('click', function(){
        jatek("s");
    })
}
main();