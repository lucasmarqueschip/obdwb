s = '';

if (obdmap) {
    services.forEach((service, nService) => {
        s += getServiceHeader(service, nService);

        service.screens.forEach((screen, i) => {
            s += `<div class="row fz-14 mt-0 ai-left">`;
            s += `<div class="col colScreen">`;
            s += `<div class="screenHead newPage">`;
            s += `<div class="ballon ballon-small p-1">${lblStep} ${i + 1}</div>`;
            s += `<div class="screen p-1 mx-2 mt-1 mb-0" id="s${nService}step${i}"><div>`;
            screen.lines.forEach(line => s += `<div class="screenIn">${line}</div>`);
            s += `</div></div></div>`;
            s += `</div>`;

            s += `<div class="col pl-1 my-1">`;
            if (screen.help !== '') s += `<div d-block><div class="ballon ballon-auto">${screen.help}</div></div>`;
            s += `</div>`;
            s += `</div>`;
            if (screen.resource){
                createResource(screen.resource.res, screen.resource.i);
            }
            });
    });
} else {
    
    services.forEach((service, nService) => {
        let path = '';
        s += getServiceHeader(service, nService);
        s += `<div class="row mt-1">`;
        s += `<div class="col"><img class="imgShad" src="images/initialScreen.jpg" /></div></div>`

        // console.log(service)

        service.screens.forEach((screen, i) => {
            let cssMenu = '';
            let cssMenuActive = '';
            s += `<div class="newPage">`;
            if (screen.menu >=0) {
                if (screen.menu === 1000) {
                    s += `<div class="row ml-1 mt-3 fz-12"><div col>${path}</div></div>`;
                    s += `<div class="row fz-14 ai-left">`;
                } else s += `<div class="row fz-14 mt-3 ai-left">`;
                cssMenu = 'Menu'
            } else s += `<div class="row fz-14 ai-left mt-3">`;

            s += `<div class="col step mt-1">`;
            s += `<div class="ballon ballon-small p-1 mt-2">${lblStep} ${i + 1}</div>`;
            s += `</div>`;
            s += `<div class="col screenCon${cssMenu} px-0 mt-2" id="s${nService}step${i}"><div>`;
            screen.lines.forEach((line, i2) => {
                if (screen.menu === i2 || screen.menu === 1000) cssMenuActive = ' activeMenu';
                else cssMenuActive = '';
                s += `<div class="screenInCon${cssMenu}${cssMenuActive}">${line}</div>`;
            });
            s += `</div></div>`;
            s += `<div class="col mt-2">`;
            if (screen.help !== '') s += `<div d-block><div class="ballon ballonCon-auto">${screen.help}</div></div>`;
            s += `</div>`;
            s += `</div>`;
            s += `</div>`;
            path += `${screen.lines[0]} &gt; `;

            if (screen.resource){
                createResource(screen.resource.res, screen.resource.i);
            }

        });
    });
}
divServices.innerHTML = s;

function getServiceHeader(service, nService) {
    // nav += `<a class="dropdown-item" href="#service${nService}">${service.title}</a>`;
    nav += `<a class="tree2-item w-100 d-block fz-12" href="#service${nService}" onclick="changeMenu(true)">${service.title}</a>`;

    let s = '';
    s += `<div class="row fz-14 bold under pt-1 text-center pt-5 newPageForce" id="service${nService}">`;
    s += `<div class="col">${service.title}</div>`;
    s += `</div>`;
    s += `<div class="row fz-13">`;
    s += `<div class="col mb-3">${service.description}</div>`;
    s += `</div>`;
    return s;
}