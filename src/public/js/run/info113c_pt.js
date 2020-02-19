//Capa
nomeCarga = "Reset da M2.10.4 (Marea 2.0 - 98 a 99)";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU M2.10.4`,
`Realiza o reset da ECU, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Marea 2.0 20V",
years: "1998 a 1999"
},
{
manufacturer: "Fiat",
model: "Marea 2.0 20V Turbo",
years: "1998 a 1999"
},
];
applicationObs = createObs("Observação: Nem todos os veículos relacionados aos anos citados acima possuem a ECU M2.10.4. Verifique a etiqueta da ECU para identificá-la.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando e desmontando a ECU M2.10.4:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Identificando a ECU.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave torx para retirar os parafusos da ECU.", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Retirando os parafusos da ECU.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa da ECU.", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Abrindo a ECU.jpg"},

{title: "Localizando e conectando a pinça na memória B58258(24C02):", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Localizando a memória B58258.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Conectando a pinça.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Pinça conectada.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0113 Reset da M2.10.4 (Marea 2.0 - 97 a 99)/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Reset da ECU M2.10.4:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Marea`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch M2.10.4`], help: `Tecle OK`, menu: 1000},
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
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
`Mau contato na pinça com a memória;`,`ECU ou memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU e memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
