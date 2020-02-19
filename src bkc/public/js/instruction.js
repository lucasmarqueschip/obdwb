
if (instruction){
    
}
s = '';
instruction.forEach((e, i) => {
    nav += `<a class="dropdown-item" href="#lblInstructionTitle${i}">${e.title}</a>`;
    s += `
        <div class="row under text-center bold mt-3">
            <div class="col fz-14" id="lblInstructionTitle${i}">${e.title} </div>
        </div>`;
    if (e.description){
        s += `
            <div class="row fz-12">
                <div class="col"> ${e.description} </div>
            </div>`;
    }
    if (e.image) {
        s += `
            <div class="row fz-13">
                <div class="col text-center">
                    <img src="${e.image}" alt="Instrução" class="img-fluid mt-2" id="imgInstructionImage">
                </div>
            </div>`;
    }

});
divInstruction.innerHTML = s;




