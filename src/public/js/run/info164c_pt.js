//Capa
nomeCarga = "Reset Fiat Me7.9.9";
revCarga = "Rev. 2";
dataManual = "Maio 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset ME7.9.9 deixando a mesma virgem pronta para se codificar com um novo veículo.`,
`<obs>`,
`Observação:`,
` É necessário soldar um resistor de 470 OHM na ECU para realizar o reset. Apos feito o reset é necessário a remoção desse resistor.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Idea 1.4 Flex",
years: "2005 a 2010"
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

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Resistor de 470 OHM. Solda na placa da ECU para realizar o reset.", 
image: "/images/Acessórios/Resistor 470 OHM..jpg"},

{title: "Identificando a ECU ME7.9. 9:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/idEcu1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/idEcu2.jpg"},

{title: "Localizando os pontos de soldagem dos resistores:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/Ponto de Solda.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/Ponto de Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Resistor soldado na placa da ECU.", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/Ponto de Solda3.jpg"},

{title: "Localizando e conectando a pinça na memória 95080:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/memória 950801.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/memória 950802.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0164 Reset ME 7.9.9/memória 950803.jpg"},

{title: "Todos os acessórios conectados:", 
, 
, 

];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o reset da ECU ME7.9.9:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Idea`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.9`], help: `Tecle OK`, menu: 1000},
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,`O resistor de 470 Ohms não foi soldado corretamente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,`Verificar os pontos de solda do resistor.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente, o pino 1 da pinça não coincide com o pino 1 da memória;`,`A pinça foi conectada em outro componente da placa.`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,`Verificar se a pinça foi conectada no componente correto.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
