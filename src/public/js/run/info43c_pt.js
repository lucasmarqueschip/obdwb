//Capa
nomeCarga = "Reset e Programação GM BCM1";
revCarga = "Rev. 1";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset do BCM.`,
`Programação do BCM.`,
`<obs>`,
`Observação: Para resetar e programar o BCM é necessário a senha de 4 dígitos. Esta senha é a mesma do kit, que pode ser lida da ECU (software não incluso, contate o departamento de vendas da Chiptronic).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Meriva 1.8",
years: "2004 a 2007"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica licalizada na área F9.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando reset da BCM`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Meriva`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BCM - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da BCM`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando programação da BCM`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Meriva`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BCM - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação da BCM`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro no Reset`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Reset`,
`<br />`,
`<br />`,
],
causes: [
`Acessórios mal conectados,`,`Falha no procedimento,`,`Veículo fora da aplicação.`,],
solutions: [
`Conferir conexão dos acessórios,`,`Repetir o procedimento,`,`Verificar a aplicação e conferir se o carro possui o sistema de conforto BCM1.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Falha na programação,`,`Veículo fora da aplicação.`,],
solutions: [
`Repetir o procedimento,`,`Conferir a aplicação.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
