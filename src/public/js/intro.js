lblIntroTitle.innerHTML = introTitle;
// nav = `<a class="dropdown-item" href="#intro">${introTitle}</a>`;
nav = `<a class="tree2-item w-100 d-block fz-12" href="#intro" onclick="changeMenu(true)">${introTitle}</a>`;

lblIntroSubtitle.innerHTML = introSubtitle;

ulListFunc.innerHTML = '';
lstFunc.forEach(e => {
    if (e !== '') ulListFunc.innerHTML += `<li>${e}</li>`;
    else  ulListFunc.innerHTML += `<br />`;
});
divIntroObs.innerHTML = introObs;