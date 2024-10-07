// Criação do JSON
var json = `{
    "imagem": "<img src='IMGs/Sage_artwork.webp'>",
    "id": 7,
    "nome": "Sage",
    "classe": "Sentinela",
    "habilidades": {
        "Q": { "nome": "Slow Orb", "icone": "IMGs/orb.webp" },
        "E": { "nome": "Healing Orb", "icone": "IMGs/healing.webp" },
        "X": { "nome": "Barrier Orb", "icone": "IMGs/barrier.webp" },
        "C": { "nome": "Ressurrection", "icone": "IMGs/ressurection.webp" }
    },
    "país": "China"
}`;

var dados1 = JSON.parse(json);

// Função para exibir Sage
function apertar1() {
    document.getElementById('imagem').innerHTML = dados1.imagem;
    document.getElementById('id').innerHTML = dados1.id;
    document.getElementById('nome').innerHTML = dados1.nome;
    document.getElementById('classe').innerHTML = dados1.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados1.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados1.habilidades[key].icone}" alt="${dados1.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados1.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados1.país;
}




var json2 = `{
    "imagem": "<img src='IMGs/killjoy.webp'>",
    "id": 4,
    "nome": "KillJoy",
    "classe": "Sentinela",
    "habilidades": {
        "Q": { "nome": "AlarmBot", "icone": "IMGs/alarmbot.webp" },
        "E": { "nome": "Turret", "icone": "IMGs/turret.webp" },
        "C": { "nome": "Nanoenxame", "icone": "IMGs/nano.webp" },
        "X": { "nome": "LockDown", "icone": "IMGs/lockdown.webp" }
    },
    "país": "Alemanha"
}`;

var dados2 = JSON.parse(json2);

// Função para exibir KillJoy
function apertar2() {
    document.getElementById('imagem').innerHTML = dados2.imagem;
    document.getElementById('id').innerHTML = dados2.id;
    document.getElementById('nome').innerHTML = dados2.nome;
    document.getElementById('classe').innerHTML = dados2.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados2.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados2.habilidades[key].icone}" alt="${dados2.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados2.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados2.país;
}


var dados2 = JSON.parse(json2);






//Reyna
var json3 = `{
    "imagem": "<img src='IMGs/reyna.webp'>",
    "id": 11,
    "nome": "Reyna",
    "classe": "Duelista",
    "habilidades": {
        "Q": { "nome": "Devour", "icone": "IMGs/devour.webp" },
        "E": { "nome": "Dimiss", "icone": "IMGs/dimiss.webp" },
        "C": { "nome": "Leer", "icone": "IMGs/leer.webp" },
        "X": { "nome": "Empress", "icone": "IMGs/empress.webp" }
    },
    "país": "México"
}`;


// Função para exibir Reyna
function apertar3() {
    document.getElementById('imagem').innerHTML = dados3.imagem;
    document.getElementById('id').innerHTML = dados3.id;
    document.getElementById('nome').innerHTML = dados3.nome;
    document.getElementById('classe').innerHTML = dados3.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados3.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados3.habilidades[key].icone}" alt="${dados3.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados3.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados3.país;
}

var dados3 = JSON.parse(json3);







//Viper
var json4 = `{
    "imagem": "<img src='IMGs/viper.webp'>",
    "id": 2,
    "nome": "Viper",
    "classe": "Controlador",
    "habilidades": {
        "Q": { "nome": "Poison Cloud", "icone": "IMGs/poisoncloud.webp" },
        "E": { "nome": "Toxic Screen", "icone": "IMGs/toxicscreen.webp" },
        "C": { "nome": "Snake Bit", "icone": "IMGs/snakebite.webp" },
        "X": { "nome": "Viper's Pit", "icone": "IMGs/viperspit.webp" }
    },
    "país": "Estados Unidos"
}`;


// Função para exibir Viper
function apertar4() {
    document.getElementById('imagem').innerHTML = dados4.imagem;
    document.getElementById('id').innerHTML = dados4.id;
    document.getElementById('nome').innerHTML = dados4.nome;
    document.getElementById('classe').innerHTML = dados4.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados4.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados4.habilidades[key].icone}" alt="${dados4.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados4.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados4.país;
}

var dados4 = JSON.parse(json4);







var json5 = `{
    "imagem": "<img src='IMGs/neon.webp'>",
    "id": 19,
    "nome": "Neon",
    "classe": "Duelista",
    "habilidades": {
        "Q": { "nome": "Relay Bolt", "icone": "IMGs/relaybolt.webp" },
        "E": { "nome": "High Gear", "icone": "IMGs/highgear.webp" },
        "C": { "nome": "Fast Lane", "icone": "IMGs/fastlane.webp" },
        "X": { "nome": "Overdrive", "icone": "IMGs/overdrive.webp" }
    },
    "país": "Filipinas"
}`;


// Função para exibir Viper
function apertar5() {
    document.getElementById('imagem').innerHTML = dados5.imagem;
    document.getElementById('id').innerHTML = dados5.id;
    document.getElementById('nome').innerHTML = dados5.nome;
    document.getElementById('classe').innerHTML = dados5.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados5.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados5.habilidades[key].icone}" alt="${dados5.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados5.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados5.país;
}

var dados5 = JSON.parse(json5);







//Vyse
var json6 = `{
    "imagem": "<img src='IMGs/vyse.webp'>",
    "id": 26,
    "nome": "Vyse",
    "classe": "Sentinela",
    "habilidades": {
        "Q": { "nome": "Shear", "icone": "IMGs/shear.webp" },
        "E": { "nome": "Arc Rose", "icone": "IMGs/arcrose.webp" },
        "C": { "nome": "Razor Vine", "icone": "IMGs/razorvine.webp" },
        "X": { "nome": "Steel Garden", "icone": "IMGs/steelgarden.webp" }
    },
    "país": "Origem Desconhecida"
}`;


// Função para exibir Viper
function apertar6() {
    document.getElementById('imagem').innerHTML = dados6.imagem;
    document.getElementById('id').innerHTML = dados6.id;
    document.getElementById('nome').innerHTML = dados6.nome;
    document.getElementById('classe').innerHTML = dados6.classe;

    // Adicionando habilidades
    let habilidadesHTML = '';
    for (const key in dados6.habilidades) {
        habilidadesHTML += `
            <div class="habilidade">
                <img src="${dados6.habilidades[key].icone}" alt="${dados6.habilidades[key].nome}" class="icone-habilidade">
                <span>${dados6.habilidades[key].nome}</span>
            </div>
        `;
    }
    document.getElementById('habilidades').innerHTML = habilidadesHTML;
    document.getElementById('país').innerHTML = dados6.país;
}

var dados6 = JSON.parse(json6);