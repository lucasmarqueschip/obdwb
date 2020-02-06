resources.forEach((res, i) => {
    s += `<div class="newPage">`;
    if (res.title) {
        s += `<div class="row under text-center bold mt-5" id="resource${i}">`;
        s += `<div class="col fz-14">${res.title}</div>`;
        s += `</div>`;
    }
    if (res.description) {
        s += `<div class="row mt-1">`;
        s += `<div class="col fz-13">${res.description}</div>`;
        s += `</div>`;
    }
    s += `<div class="row mt-3 text-center px-4">`;
    if (res.ballon !== ''){
        s += `<div class="col info fz-13 bold">${res.ballon}</div>`;
    }
    if (res.image !== ''){
        s += `<div class="col">`;
        s += `<img src="${res.image}" alt="Recursos"`;
        s += `class="imgShad mt-1">`;
        s += `</div>`;
    }
    s += `</div>`;
    s += `</div>`;

    if (res.title) nav += `<a class="dropdown-item" href="#resource${i}">${res.title}</a>`;
});
divResources.innerHTML = s;