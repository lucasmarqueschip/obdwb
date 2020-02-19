//Capa
nomeCarga = "Programação de Telecomando VW G6";
revCarga = "Rev. 5";
dataManual = "Novembro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 7 telecomandos para o veículo`,
`<obs>`,
`Observação 1:`,
` É necessário ter em mãos todos os telecomandos a serem programados, inclusive os que já estavam programados. Caso eles não seja reprogramados, eles não funcionarão no veículo.`,
`Observação 2:`,
` Para o correto funcionamento da carga é necessário que o módulo de alarme esteja instalado e habilitado.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Gol G6 1.0",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Gol G6 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Voyage 1.0",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Voyage 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "UP! 1.0",
years: "2014 a 2016"
},
{
manufacturer: "VW",
model: "Amarok 2.0",
years: "2010 a 2017"
},
{
manufacturer: "VW",
model: "Jetta 2.0",
years: "2010 a 2014"
},
{
manufacturer: "VW",
model: "Tiguan 2.0",
years: "2010 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Gol G6,Voyage e Saveiro G6 ficam localizadas na área A5 da imagem. E a tomada de diagnóstico do veículo Fox fica localizada na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de Telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo A`], help: `Tecle OK`, menu: 1000},
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Use cabo CAN!`,
screens: [
`<br />`,
`Use&nbsp;cabo&nbsp;CAN!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo CAN pode não estar conectado no OBDMap `,],
solutions: [
`Verificar a conexão do cabo CAN com o OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
