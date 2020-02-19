//Capa
nomeCarga = "Reset ECU Bosch ME7.4.9";
revCarga = "Rev. 2";
dataManual = "Março 2013";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU ME7.4.9, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Peugeot",
model: "206 1.4 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "206 1.6 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "207 1.4 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "207 1.6 16V",
years: "2008 a 2012"
},
];
applicationObs = createObs("Observação: Esta carga somente realiza o reset da ECU ME7.4.9. Para adaptá-la é necessário utilizar outro equipamento.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a ECU ME7.4.9:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Identificando a ECU ME7.4.91.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Identificando a ECU ME7.4.92.jpg"},

{title: "Localizando e conectando a pinça na memória 95320:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Localizando e conectando a pinça na memória 953201.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Localizando e conectando a pinça na memória 953202.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Localizando e conectando a pinça na memória 953203.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0140 - Reset ECU Bosch ME7.4.9/Todos os acessorios.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o reset da ECU ME7.4.9:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`207`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.9`], help: `Tecle OK`, menu: 1000},
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
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`ECU ou memória com problema,`,`Pinça foi conectada em outro componente.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,``,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
