//Capa
nomeCarga = "Reset da ECU Nissan Denso (Frontier 13-15)";
revCarga = "Rev. 1";
dataManual = "Julho 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU Denso`,
``,
` Esta carga realiza o reset da ECU, deixando-a virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Nissan",
model: "Frontier 2.5",
years: "2013 a 2015"
},
];
applicationObs = createObs("Atenção!", "O hardware da ECU deve ser identico ao mostrado na pág XX", undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a ECU.", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0203 Reset da ECU Nissan Denso (Frontier 2014)/denso.jpg"},

{title: "Identificando a memória S93A86", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0203 Reset da ECU Nissan Denso (Frontier 2014)/S93A86.JPG"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0203 Reset da ECU Nissan Denso (Frontier 2014)/ECU Denso.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o Reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Frontier`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Denso`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`·	Mau contato da pinça com a memória,`,`·	Mau contato da pinça com o OBDMap,`,`·	Memória ou ECU com problema,`,`·	A pinça foi conectada em outro componente, `,`·	Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`·	Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`·	Conferir bom estado da ECU,`,``,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`·	A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`·	A pinça foi conectada em outro componente, `,`·	Memória ou ECU com problema.`,``,``,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`·	Conferir bom estado da ECU.`,``,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`ECU com problema;`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado ECU.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
