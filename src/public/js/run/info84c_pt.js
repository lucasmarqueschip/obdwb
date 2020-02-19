//Capa
nomeCarga = "Leitura de Senha Alarme GM 2009";
revCarga = "Rev. 3";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Ler a senha de 4 dígitos que se encontra no módulo de Alarme do veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Agile 1.4",
years: "2009 a 2013"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Corsa 1.4",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2009 a 2013"
},
{
manufacturer: "GM",
model: "Vectra 2.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Zafira 2.0",
years: "2009 a 2011"
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
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "Identificando o módulo de Alarme modelo A", 
description: "Retire o módulo de Alarme do veículo e leve-o para bancada.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Identificando e desmontando o módulo de Alarme modelo A.jpg"},

{title: "Identificando o módulo de Alarme modelo B", 
description: "Retire o módulo de Alarme do veículo e leve-o para bancada.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Identificando e desmontando módulo alarme modelo B.jpg"},

{title: "Desmontando o módulo de Alarme", 
description: "Este procedimento é válido para os modelos A e B de módulo de Alarme.<br />", 
ballon: "Localizando as 4 travas que prendem a tampa do módulo de Alarme.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Identificando e desmontando o módulo de Alarme 2.jpg"},

{title: "", 
description: "Este procedimento é válido para os modelos A e B de módulo de Alarme.<br />", 
ballon: "Com o auxílio de uma chave de fenda, solte as travas da caixa.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Identificando e desmontando o módulo de Alarme 3.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo A:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU no modelo A.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos para soldagem do cabo MCU1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU do modelo A:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Verde<br />4=> Fio Preto", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos para soldagem do cabo MCU2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no módulo de Alarme, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos para soldagem do cabo MCU3.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo B:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU do modelo B.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos de solda modelo B.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU do modelo B:<br />1=> Fio Amarelo<br />2=> Fio Verde<br />3=> Fio Vermelho<br />4=> Fio Preto", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos de solda modelo B 1.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no módulo de Alarme, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Localizando os pontos de solda modelo B 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o módulo de Alarme, evitando danos ao mesmo e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0084 Leit Alarme GM 2009/Todos os acessoros.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Agile`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com o módulo do Alarme,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Módulo de Alarme com problema ou arquivo corrompido,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da  memória.`,`Conferir a correta soldagem do cabo MCU e conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos.`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no módulo de Alarme,`,`O cabo MCU ou o módulo de Alarme está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no módulo de Alarme,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
