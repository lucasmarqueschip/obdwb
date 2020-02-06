s = '';
let nav2 = '';
lblOtherMessageTitle.innerHTML = othersMessageTitle;
othersMessage.forEach((message, i) => {
    nav2 += `<a class="dropdown-item" href="#errors${i}">${message.label}</a>`;



    s += `<section class="newPage"><br />`
    if (obdmap) {
        s += `<div class="screen p-1 ml-2" id="errors${i}">`
        message.screens.forEach(screen => {
            s += `<div class="screenIn">${screen}</div>`;
        });
        s += `</div>`;

        if (message.causes.length > 0) {
            s += `Causas Prováveis`;
            s += `<ul>`;
            message.causes.forEach(cause => s += `<li>${cause}</li>`);
            s += `</ul>`;
        }

        if (message.solutions.length > 0) {
            s += `Soluções`;
            s += `<ul>`;
            message.solutions.forEach(sol => s += `<li>${sol}</li>`);
            s += `</ul>`;
        }
    } else {
        s += `<div class="screenCon py-4 px-0 ml-2" id="errors${i}">`
        message.screens.forEach(screen => {
            s += `<div class="screenInCon">${screen}</div>`;
        });
        s += `</div>`;

        if (message.causes.length > 0) {
            s += `Causas Prováveis`;
            s += `<ul>`;
            message.causes.forEach(cause => s += `<li>${cause}</li>`);
            s += `</ul>`;
        }

        if (message.solutions.length > 0) {
            s += `Soluções`;
            s += `<ul>`;
            message.solutions.forEach(sol => s += `<li>${sol}</li>`);
            s += `</ul>`;
        }
    }
    s += `</section>`;
});
divOthersMessage.innerHTML = s;
divLastMsg.innerHTML = lastMsg;
