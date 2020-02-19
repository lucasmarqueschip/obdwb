//Capa
nomeCarga = "Reset da 5NR (Clio, Kango, Twingo - 01 a 05)";
revCarga = "Rev. 3";
dataManual = "Julho 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU IAW 5NR.`,
`Realiza o reset da ECU, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Clio 1.0 16V",
years: "2001 a 2004"
},
{
manufacturer: "Renault",
model: "Clio Sedan 1.0 16V",
years: "2001 a 2004"
},
{
manufacturer: "Renault",
model: "Kangoo 1.0 16V",
years: "2003 a 2005"
},
{
manufacturer: "Renault",
model: "Twingo 1.0 16V",
years: "2002 a 2002"
},
];
applicationObs = createObs("Observação: Nem todos os veículos relacionados aos anos citados acima possuem a ECU IAW 5NR. Verifique a etiqueta da ECU para identificá-la.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo C1. Conecta a pinça ao OBDMap.", 
image: "/images/Acessórios/Cabo C1.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a ECU IAW 5NR:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0112 Reset da 5NR (Clio, Kango, Twingo - 01 a 05)/Identificando ECU 1.jpg"},

{title: "Localizando e conectando a pinça na memória 95160:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0112 Reset da 5NR (Clio, Kango, Twingo - 01 a 05)/Localizando a memória.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0112 Reset da 5NR (Clio, Kango, Twingo - 01 a 05)/Conectando a pinça.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Apoie o dedo na pinça como mostra a foto, pois a memória fica localizada entre outros componentes que dificultam o encaixe da pinça na", 
image: "/images/Funções Específicas/OBD0112 Reset da 5NR (Clio, Kango, Twingo - 01 a 05)/Pinça conectada.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0112 Reset da 5NR (Clio, Kango, Twingo - 01 a 05)/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Reset da ECU 5NR:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 5NR`], help: `Tecle OK`, menu: 1000},
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
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
`Mau contato na pinça com a memória;`,`ECU ou memória com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
