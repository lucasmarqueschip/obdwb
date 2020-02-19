//Capa
nomeCarga = "Programação de Telecomando MITSUBISHI Alarme 1";
revCarga = "Rev. 4";
dataManual = "Outubro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programa telecomandos para os veículos Mitsubishi que utilizam o sistema Alarme1.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mitsubishi",
model: "L200 Triton 2.4",
years: "2013 a 2017"
},
{
manufacturer: "Mitsubishi",
model: "L200 Triton  3.2",
years: "2008 a 2017"
},
{
manufacturer: "Mitsubishi",
model: "L200 Triton 3.5",
years: "2008 a 2017"
},
{
manufacturer: "Mitsubishi",
model: "Pajero Dakar 3.2",
years: "2013 a 2013"
},
];
applicationObs = createObs("Observação: Esta carga não funciona para veículos com partida START/STOP.", undefined, undefined)



resources = [
{title: "Telecomando utilizado:", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/tlcmd mit.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na área D6.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D6.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`L200`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
