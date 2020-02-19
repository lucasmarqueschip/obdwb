//Capa
nomeCarga = "Pats 3 Can / Flex (chaves e casamento)";
revCarga = "Rev. 3";
dataManual = "Maio 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da quantidade de chaves programadas no veículo (Pats 3 CAN). `,
`Apagar chaves (Pats 3 CAN / Pats 3 CAN FLEX).`,
`Adicionar chaves (Pats 3 CAN).`,
`Programar até 5 chaves (Pats 3 CAN FLEX).`,
`Sincronismo entre a ECU e o painel (Pats 3 CAN / Pats 3 CAN FLEX).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Courier 1.6",
years: "2002 a 2013"
},
{
manufacturer: "Ford",
model: "Ecosport 1.0",
years: "2003 a 2013"
},
{
manufacturer: "Ford",
model: "Ecosport 1.6",
years: "2003 a 2013"
},
{
manufacturer: "Ford",
model: "Ecosport 2.0 16V",
years: "2003 a 2013"
},
{
manufacturer: "Ford",
model: "Fiesta 1.0",
years: "2002 a 2013"
},
{
manufacturer: "Ford",
model: "Fiesta 1.6",
years: "2002 a 2013"
},
{
manufacturer: "Ford",
model: "KA 1.0",
years: "2006 a 2013"
},
{
manufacturer: "Ford",
model: "KA 1.6",
years: "2006 a 2013"
},
];
applicationObs = createObs("Atenção: Para os veículos acima de 2006 utilizar o sistema PATS 3 CAN FLEX .", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID4D60 (T32) de Vidro.", 
image: "/images/Transponders/ID4D-60.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área D5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`], help: `Tecle OK`, menu: 1000},
{lines: [`Número de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento das chaves PATS 3 CAN FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves PATS 3 CAN FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o sincronismo entre a ECU e o painel PATS 3 CAN / FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN FLEX`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
