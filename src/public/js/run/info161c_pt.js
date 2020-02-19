//Capa
nomeCarga = "Reset ECU Fiat MJD 8F3 – 55246943 (Ducato 10-14)";
revCarga = "Rev. 3";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do Código Eletrônico,`,
`Reset da ECU MJD 8F3 - 55246943.`,
`Esta carga realiza a leitura do código eletrônico e o reset da ECU, deixando-a virgem, pronta para se codificar com um novo veículo.`,
``,
`Atenção!`,
`Se após o procedimento a luz de injeção fique acesa, dar partida no veiculo e aguardar alguns minutos, desligue o veiculo, aguarde alguns segundos, ao ligar o veiculo novamente a luz ira se apagar.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "Jumper 2.3 Multijet",
years: "2010 a 2014"
},
{
manufacturer: "Fiat",
model: "Ducato 2.3 Multijet",
years: "2010 a 2014"
},
{
manufacturer: "Peugeot",
model: "Boxer 2.3 Multijet",
years: "2010 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



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
image: "/images/Funções Específicas/OBD0161 Reset ECU Bosch 55246943 (Fiat-Ducato)/ecu.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0161 Reset ECU Bosch 55246943 (Fiat-Ducato)/idEcu.jpg"},

{title: "Localizando a memória 95640", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0161 Reset ECU Bosch 55246943 (Fiat-Ducato)/Localizando a memória 95640.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0161 Reset ECU Bosch 55246943 (Fiat-Ducato)/Conectando a memória 95640.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o Reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Ducato`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli MJD 8F3`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU.`,]
},

{ label: `ATENCAO! ECU desconhecida Deseja contin.? (X) NAO (OK) SIM`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`ECU&nbsp;desconhecida`,
`&nbsp;Deseja&nbsp;contin.?`,
`(X)&nbsp;NAO&nbsp;(OK)&nbsp;SIM`,
],
causes: [
`A ECU não corresponde a aplicação, continuar o procedimento não significa que o Reset ira funcionar corretamente.`,],
solutions: [
`Conferir a aplicação.`,`Consulte o Suporte Técnico.`,]
},

{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Memória ou ECU com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
