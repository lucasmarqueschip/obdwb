//Capa
nomeCarga = "Reset ECU Bosch MP7.2";
revCarga = "Rev. 2";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU MP7.2 deixando a mesma virgem pronta para se codificar com um novo veiculo, não sendo necessário realizar a sua adaptação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Peugeot",
model: "206 1.0",
years: "1999 a 2001"
},
{
manufacturer: "Peugeot",
model: "206 1.6",
years: "1999 a 2001"
},
{
manufacturer: "Citroen",
model: "Xsara 1.6",
years: "1999 a 2001"
},
{
manufacturer: "Citroen",
model: "Xsara 1.8",
years: "1999 a 2001"
},
{
manufacturer: "Peugeot",
model: "Xsara 2.0",
years: "1999 a 2001"
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

{title: "Identificando a ECU MP7.2", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0162 Reset ECU MP7.2/Identificando a ECU MP7.2.jpg"},

{title: "Localizando a memória 24C02:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0162 Reset ECU MP7.2/Localizando a memória 24C02.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando o reset da ECU MP7.2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>Bosch MP.72`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch MP.72`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;24C02`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Resetando&nbsp;ECU.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]}
];
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
`Mau contato na pinça com a memória;`,`Memória ou ECU com problema;`,`A pinça foi conectada em outro componente;`,`A pinça não foi conectada corretamente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU.`,]
},

{ label: `Erro na gravacao da ECU!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;da&nbsp;ECU!`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Mau contato da pinça com o OBDMap.`,],
solutions: [
`Verificar a conexão da pinça com a memória;`,`Verificar a conexão da pinça com o OBDMap;`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente,`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do módulo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
