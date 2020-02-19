// navSumary = document.getElementById('navSumary');
// navErrors = document.getElementById('navErrors');
navSumary = document.getElementById('collapse1');
navErrors = document.getElementById('collapse2');





lblNomeCarga = document.getElementById('lblNomeCarga');
lblRevCarga = document.getElementById('lblRevCarga');
lbldataManual = document.getElementById('lblDataManual');
imgTop = document.getElementById('imgTop');
imgObd = document.getElementById('imgObd');
imgChip = document.getElementById('imgChip');

lblIntro = document.getElementById('lblIntro');
ulListFunc = document.getElementById('lstFunc');
divIntroObs = document.getElementById('divIntroObs');

lblApplicationTitle = document.getElementById('lblApplicationTitle');
trApplicationTable = document.getElementById('trApplicationTable');
tbCars = document.getElementById('tbCars');
divApplicationObs = document.getElementById('divApplicationObs');

divResources = document.getElementById('divResources');

lblLocalTitle = document.getElementById('lblLocalTitle');
divLocalDesc = document.getElementById('divLocalDesc');
imgLocalImage = document.getElementById('imgLocalImage');

divInstruction = document.getElementById('divInstruction');

divServices = document.getElementById('divServices');

divOthersMessage = document.getElementById('divOthersMessage');
lblOtherMessageTitle = document.getElementById('lblOtherMessageTitle');

divLastMsg = document.getElementById('divLastMsg');


s = ''; //usado para auxialiar as ancoras
nav; //usado na navegação pelas ancoras

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 200 }, 1000);
            return false;
        }
    });
});

function createObs(title, description, imgPath) {
    if (title) {
        let res = `<div class="row mt-2">
                        <div class="col"><strong class="obs fz-13">${title}</strong></div>
                    </div>`;
        if (description) 
            res += `<div class="row"><div class="col fz-12">${description}</div></div>`;
        if (imgPath)
            res += `<div class="row text-center mt-2"><div class="col">
                        <img class="img-fluid imgShad" src="${imgPath}" alt="Painel Ecosport">
                    </div></div>`;

        return res;
    } else return '';
}

function btnTriggerNavClick() {

    const nav = document.getElementById('my-nav');

    if (nav.style.display === 'inline') {
        nav.style.display = 'none';
        document.getElementById('my-modal').style.display = 'none';
        document.getElementById('btnNav').innerHTML = '>';
    }
    else {
        nav.style.display = 'inline';
        document.getElementById('my-modal').style.display = 'inline';
        document.getElementById('btnNav').innerHTML = 'x';
    }
    
}