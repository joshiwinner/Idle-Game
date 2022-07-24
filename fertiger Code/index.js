let wheat = 0;
let coins = 0;
let wheatfarmcounter = 0;
let Levelfarm = 1;
let WeizenPreis = 0;
let BauernhofPreis = 0;

setInterval(getwheat,1000)

function createfarm(name) {
    if(coins >= BauernhofPreis) {
        if (BauernhofPreis == 0) {
            BauernhofPreis += 100
            document.getElementById("Wheat").innerHTML= "Farm kaufen cost: " + BauernhofPreis
            let button = document.createElement('button');
            button.textContent = name;
            button.id = "wheatfarm"
            button.className = "wheatfarm"
            return button;
        }else {
            coins -= BauernhofPreis  
            BauernhofPreis += 100
            document.getElementById("Wheat").innerHTML= "Farm kaufen cost: " + BauernhofPreis
            document.getElementById("Geld").innerHTML = "Coins:" + coins
            let button = document.createElement('button');
            button.textContent = name;
            button.id = "wheatfarm"
            button.className = "wheatfarm"
            return button;
        }
        
    }else {
        alert("zu wenig Geld")
    }
}

function get(params) {
    if(wheatfarmcounter <= 6) {
        document.getElementById("container").appendChild(createfarm("Farm level 1"))
        wheatfarmcounter += 1;
    }else {
        alert("du kannst keine von diesn Gebäuden bauen")
    }
}

function getwheat(params) {
    if (wheatfarmcounter == 1) {
        wheat += 1
    }else if (wheatfarmcounter == 2) {
        wheat += 2
    }else if (wheatfarmcounter == 3) {
        wheat += 3
    } else if (wheatfarmcounter == 4) {
        wheat += 4
    } else if (wheatfarmcounter == 5) {
        wheat += 5
    } else if (wheatfarmcounter == 6) {
        wheat += 6
    } else if (wheatfarmcounter == 7) {
        wheat += 7
    } else if (wheatfarmcounter == 8) {
        wheat += 8
    }
    document.getElementById("Coins").innerHTML = "Weizen:" + wheat
}



//preisrandomizer

function preisrandomizer(params) {
    WeizenPreis = Math.floor(Math.random() * 10)
    document.getElementById("WeizenPreis").innerHTML = "WeizenPreis: " + WeizenPreis
}

setInterval(preisrandomizer,10000)

//verkaufen

function verkaufen(params) {
    coins += wheat * WeizenPreis;
    wheat = 0;
    document.getElementById("Coins").innerHTML = "Weizen:" + wheat
    document.getElementById("Geld").innerHTML = "Coins:" + coins
}

//upgrade 
function farmupgrade(params) {
    Levelfarm += 1
    document.querySelectorAll(".wheatfarm").forEach(element => {
        element.innerHTML ="Farm Level"+ Levelfarm
    })
}