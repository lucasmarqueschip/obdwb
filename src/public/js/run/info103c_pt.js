//Capa
nomeCarga = "Leitura de Senha ME7.5.30 via OBD";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos da ECU ME7.5.30 via diagnóstico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Crossfox 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Spacefox 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol G4 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol G4 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol G5 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Golf 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Golf 2.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Polo 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Polo 2.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Voyage 1.6",
years: "2009 a 2012"
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

{title: "Localizando a tomada de diagnóstico dos veículos:", 
description: "A tomada de diagnóstico do Gol G4/G5, Saveiro e Voyage fica localizada na área A5<br />A tomada de diagnóstico do Polo fica localizada na área A4<br />A tomada de diagnóstico do Golf fica localizada na área E6/F6<br />A tomada de diagnóstico do Fox/CrossFox/SpaceFox e Jetta Clássico fica localizada na área C5<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4-A5-E6-F6-C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.30`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;nao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encontrada!`,
`<br />`,
],
causes: [
`Arquivo da ECU está corrompido,`,`Arquivo inválido da ECU,`,`A senha da ECU pode estar resetada.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
