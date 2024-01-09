window.onload = generateSakkTabla;

function addBabukToTabla() {
    for (const szin in babuk) {
        for (const babuNev in babuk[szin]) {
            const babu = babuk[szin][babuNev];
            const cell = document.querySelector(`[data-pozicio='${babu.pozicio}']`);
            const img = document.createElement('img');
            img.src = babu.img;
            img.id = babu.id;
            img.draggable = true;
            img.addEventListener('dragstart', drag);
            cell.appendChild(img);
        }
    }
}

function generateSakkTabla() {
    const tabla = document.getElementById('sakkTabla');
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell ' + ((i + j) % 2 === 0 ? 'feher' : 'fekete');
            cell.dataset.pozicio = String.fromCharCode('a'.charCodeAt(0) + j) + (8 - i);
            cell.addEventListener('dragover', allowDrop);
            cell.addEventListener('drop', drop);
            tabla.appendChild(cell);
        }
    }

    addBabukToTabla();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var babu = document.getElementById(data);

    var celElem = ev.target;
    if (celElem.tagName === 'IMG') {
        celElem = celElem.parentNode;
    }

    if (celElem.classList.contains('cell') && celElem.dataset.pozicio) {
        if (lepesEngedelyezese(celElem.dataset.pozicio, babu.id)) {
            if (celElem.hasChildNodes()) {
                var leutottBabu = celElem.firstChild;
                var leutottBabuSzine = leutottBabu.id.includes('feher') ? 'feher' : 'fekete';
                var celDiv = leutottBabuSzine === 'feher' ? document.querySelector('.leutottFeherek') : document.querySelector('.leutottFeketek');
                celDiv.appendChild(leutottBabu);
            }
            celElem.appendChild(babu);
        } else {
            const errorMessage = document.getElementById('errormessage');
            errorMessage.innerHTML = "Hibás lépés!"
            errorMessage.style.color = "red"
            setTimeout(() => {
                errorMessage.innerHTML = " "
            }, 1000);
        }
    } else {
        console.error("Érvénytelen cél vagy nincs pozíció adat.");
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

window.onload = generateSakkTabla;
const babuk = {
    feher: {
        gyalog1: { pozicio: 'a2', img: 'img/Wparaszt.png', id: "feher_gyalog1" },
        gyalog2: { pozicio: 'b2', img: 'img/Wparaszt.png', id: "feher_gyalog2" },
        gyalog3: { pozicio: 'c2', img: 'img/Wparaszt.png', id: "feher_gyalog3" },
        gyalog4: { pozicio: 'd2', img: 'img/Wparaszt.png', id: "feher_gyalog4" },
        gyalog5: { pozicio: 'e2', img: 'img/Wparaszt.png', id: "feher_gyalog5" },
        gyalog6: { pozicio: 'f2', img: 'img/Wparaszt.png', id: "feher_gyalog6" },
        gyalog7: { pozicio: 'g2', img: 'img/Wparaszt.png', id: "feher_gyalog7" },
        gyalog8: { pozicio: 'h2', img: 'img/Wparaszt.png', id: "feher_gyalog8" },
        bastya1: {pozicio: 'a1', img: 'img/Wbastya.png', id: "feher_bastya1" },
        lo1: {pozicio: 'b1', img:'img/Wlo.png', id: "feher_lo1"},
        futo1: { pozicio: 'c1', img: 'img/Wfuto.png', id: "feher_futo1"},
        kiraly: { pozicio: 'd1', img: 'img/Wkiraly.png', id: "feher_kiraly"},
        kir4lyno: {pozicio: 'e1', img:'img/Wkiralyno.png', id: "feher_kiralyno"},
        futo2: { pozicio: 'f1', img: 'img/Wfuto.png', id: "feher_futo2"},
        lo2: {pozicio: 'g1', img:'img/Wlo.png', id: "feher_lo2"},
        bastya2: {pozicio: 'h1', img:'img/Wbastya.png', id: "feher_bastya2"},

    },
    fekete: {
        gyalog1: { pozicio: 'a7', img: 'img/Bparaszt.png', id: "fekete_gyalog1" },
        gyalog2: { pozicio: 'b7', img: 'img/Bparaszt.png', id: "fekete_gyalog2" },
        gyalog3: { pozicio: 'c7', img: 'img/Bparaszt.png', id: "fekete_gyalog3" },
        gyalog4: { pozicio: 'd7', img: 'img/Bparaszt.png', id: "fekete_gyalog4" },
        gyalog5: { pozicio: 'e7', img: 'img/Bparaszt.png', id: "fekete_gyalog5" },
        gyalog6: { pozicio: 'f7', img: 'img/Bparaszt.png', id: "fekete_gyalog6" },
        gyalog7: { pozicio: 'g7', img: 'img/Bparaszt.png', id: "fekete_gyalog7" },
        gyalog8: { pozicio: 'h7', img: 'img/Bparaszt.png', id: "fekete_gyalog8" },
        bastya1: {pozicio: 'a8', img: 'img/Bbastya.png', id: "fekete_bastya1" },
        lo1: {pozicio: 'b8', img:'img/Blo.png', id: "fekete_lo1"},
        futo1: { pozicio: 'c8', img: 'img/Bfuto.png', id:"fekete_futo1"},
        kir4lyno: {pozicio: 'd8', img:'img/Bkiralyno.png', id: "fekete_kiralyno"},
        kiraly: { pozicio: 'e8', img: 'img/Bkiraly.png', id: "fekete_kiraly" },
        futo2: { pozicio: 'f8', img: 'img/Bfuto.png', id:"fekete_futo2"},
        lo2: {pozicio: 'g8', img:'img/Blo.png', id: "fekete_lo2"},
        bastya2: {pozicio: 'h8', img:'img/Bbastya.png', id: "fekete_bastya2" }
    }
};

function lepesEngedelyezese(celPozicio, babuId) {
    const babuElem = document.getElementById(babuId);
    const forrasPozicio = babuElem.parentNode.dataset.pozicio;
    const babuSzine = babuId.includes('feher') ? 'feher' : 'fekete';

    for (const szin in babuk) {
        for (const babuNev in babuk[szin]) {
            const babu = babuk[szin][babuNev];
            if (babu.id === babuId) {
                if (babuNev.includes('gyalog')) {
                    return gyalogLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                else if (babuNev.includes('bastya')) {
                    return bastyaLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                else if (babuNev.includes('lo')) {
                    return loLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                else if (babuNev.includes('futo')){
                    return futoLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                else if (babuNev.includes('kiraly')){
                    return kiralyLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                else if (babuNev.includes('kir4lyno')){
                    return kiralynoLepesEngedelyezese(forrasPozicio, celPozicio, babuSzine);
                }
                // További bábuk esetében...
            }
        }
    }
    return false;
}

//Egyéb Ellenőrzések//

function vanEllensegesBabu(celPozicio, mozgatottBabuSzine) {
    const celCella = document.querySelector(`[data-pozicio='${celPozicio}']`);
    
    if (celCella && celCella.hasChildNodes()) {
        const celBabu = celCella.firstChild;
        const celBabuSzine = celBabu.id.includes('feher') ? 'feher' : 'fekete';
        return celBabuSzine !== mozgatottBabuSzine;
    }

    return false;
}

function nincsAkadaly(forras, cel, vizszintes) {
    let start, end, fixedCoord;
    if (vizszintes) {
        start = Math.min(forras.charCodeAt(0), cel.charCodeAt(0));
        end = Math.max(forras.charCodeAt(0), cel.charCodeAt(0));
        fixedCoord = forras[1];
    } else {
        start = Math.min(forras[1], cel[1]);
        end = Math.max(forras[1], cel[1]);
        fixedCoord = forras.charCodeAt(0);
    }

    for (let i = start + 1; i < end; i++) {
        let ellenorzesPozicio;
        if (vizszintes) {
            ellenorzesPozicio = String.fromCharCode(i) + fixedCoord;
        } else {
            ellenorzesPozicio = String.fromCharCode(fixedCoord) + i;
        }
        const cella = document.querySelector(`[data-pozicio='${ellenorzesPozicio}']`);
        if (cella && cella.hasChildNodes()) {
            return false; 
        }
    }
    return true; 
}

function nincsAkadalyAtlason(forras, cel) {
    let startSor = parseInt(forras[1]);
    let startOszlop = forras.charCodeAt(0);
    let celSor = parseInt(cel[1]);
    let celOszlop = cel.charCodeAt(0);

    let sorIrany = celSor > startSor ? 1 : -1;
    let oszlopIrany = celOszlop > startOszlop ? 1 : -1;

    let jelenlegiSor = startSor + sorIrany;
    let jelenlegiOszlop = startOszlop + oszlopIrany;

    while (jelenlegiSor !== celSor && jelenlegiOszlop !== celOszlop) {
        let ellenorzesPozicio = String.fromCharCode(jelenlegiOszlop) + jelenlegiSor;
        const cella = document.querySelector(`[data-pozicio='${ellenorzesPozicio}']`);
        if (cella && cella.hasChildNodes()) {
            return false;
        }

        jelenlegiSor += sorIrany;
        jelenlegiOszlop += oszlopIrany;
    }

    return true; 
}



//lépések//
function gyalogLepesEngedelyezese(forras, cel, babuSzine) {
    const forrasSor = parseInt(forras[1]);
    const celSor = parseInt(cel[1]);
    const forrasOszlop = forras.charCodeAt(0);
    const celOszlop = cel.charCodeAt(0);

    const sorKulonbseg = babuSzine === 'feher' ? celSor - forrasSor : forrasSor - celSor;
    const oszlopKulonbseg = Math.abs(celOszlop - forrasOszlop);

    const celCellaUres = !document.querySelector(`[data-pozicio='${cel}']`).hasChildNodes();

    if (oszlopKulonbseg === 0 && sorKulonbseg === 1 && celCellaUres) {
        return true;
    }
    else if (oszlopKulonbseg === 0 && celCellaUres && ((babuSzine === 'feher' && forrasSor === 2 && sorKulonbseg === 2) || (babuSzine === 'fekete' && forrasSor === 7 && sorKulonbseg === 2))) {
        return true;
    }
    else if (oszlopKulonbseg === 1 && sorKulonbseg === 1 && vanEllensegesBabu(cel, babuSzine)) {
        return true;
    }
    return false;
}

function bastyaLepesEngedelyezese(forras, cel, babuId) {
    const forrasSor = parseInt(forras[1]);
    const celSor = parseInt(cel[1]);
    const forrasOszlop = forras.charCodeAt(0);
    const celOszlop = cel.charCodeAt(0);

    const babuSzine = babuId.includes('feher') ? 'feher' : 'fekete';

    const vizszintesLepes = forrasSor === celSor;
    const fuggolegesLepes = forrasOszlop === celOszlop;

    if (vizszintesLepes || fuggolegesLepes) {
        if (nincsAkadaly(forras, cel, vizszintesLepes)) {
            const celCella = document.querySelector(`[data-pozicio='${cel}']`);
            if (celCella.hasChildNodes()) {
                const celBabu = celCella.firstChild;
                const celBabuSzine = celBabu.id.includes('feher') ? 'feher' : 'fekete';
                return celBabuSzine !== babuSzine; 
            }
            return true; 
        }
    }

    return false;
}

function loLepesEngedelyezese(forras, cel, babuSzine) {
    const forrasOszlop = forras.charCodeAt(0);
    const celOszlop = cel.charCodeAt(0);
    const forrasSor = parseInt(forras[1]);
    const celSor = parseInt(cel[1]);

    const oszlopKulonbseg = Math.abs(celOszlop - forrasOszlop);
    const sorKulonbseg = Math.abs(celSor - forrasSor);

    if ((oszlopKulonbseg === 2 && sorKulonbseg === 1) || (oszlopKulonbseg === 1 && sorKulonbseg === 2)) {
        const celCella = document.querySelector(`[data-pozicio='${cel}']`);
        if (celCella.hasChildNodes()) {
            const celBabu = celCella.firstChild;
            const celBabuSzine = celBabu.id.includes('feher') ? 'feher' : 'fekete';
            return celBabuSzine !== babuSzine;
        }
        return true; 
    }

    return false;
}

function futoLepesEngedelyezese(forras, cel, babuSzine) {
    const forrasSor = parseInt(forras[1]);
    const celSor = parseInt(cel[1]);
    const forrasOszlop = forras.charCodeAt(0);
    const celOszlop = cel.charCodeAt(0);

    if (Math.abs(celSor - forrasSor) === Math.abs(celOszlop - forrasOszlop)) {
        const celCella = document.querySelector(`[data-pozicio='${cel}']`);
        if (celCella.hasChildNodes()) {
            const celBabu = celCella.firstChild;
            const celBabuSzine = celBabu.id.includes('feher') ? 'feher' : 'fekete';
            return celBabuSzine !== babuSzine;
        }
        return nincsAkadalyAtlason(forras, cel);
    }
    return false;
}

function kiralyLepesEngedelyezese(forras, cel, babuSzine) {
    const forrasSor = parseInt(forras[1]);
    const celSor = parseInt(cel[1]);
    const forrasOszlop = forras.charCodeAt(0);
    const celOszlop = cel.charCodeAt(0);

    const sorKulonbseg = Math.abs(celSor - forrasSor);
    const oszlopKulonbseg = Math.abs(celOszlop - forrasOszlop);

    if ((sorKulonbseg <= 1) && (oszlopKulonbseg <= 1)) {
        const celCella = document.querySelector(`[data-pozicio='${cel}']`);
        if (celCella.hasChildNodes()) {
            const celBabu = celCella.firstChild;
            const celBabuSzine = celBabu.id.includes('feher') ? 'feher' : 'fekete';
            if (celBabuSzine === babuSzine) {
                return false; 
            }
        }
        return true; 
    }
    return false; 
}

function kiralynoLepesEngedelyezese(forras, cel, babuSzine) {
    return bastyaLepesEngedelyezese(forras, cel, babuSzine) || futoLepesEngedelyezese(forras, cel, babuSzine);
}

