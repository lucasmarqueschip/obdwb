//Capa
nomeCarga = "Programação de Chaves e Telecomandos GM6 via OBD (Captiva 08-14)";
revCarga = "Rev. 3";
dataManual = "Julho 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para os veículos da aplicação.`,
` Programação de telecomando para os veículos da aplicação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Captiva 2.4",
years: "2008 a 2014"
},
{
manufacturer: "GM",
model: "Captiva 3.0",
years: "2008 a 2014"
},
{
manufacturer: "GM",
model: "Captiva 3.6",
years: "2008 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Identificação do telecomando e do transponder", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) dedicado para GM.", 
image: "/images/Transponders/PCF7936 dedicado para GM (2).jpg"},

{title: "", 
description: "", 
ballon: "Telecomando", 
image: "/images/Chaves e Telecomandos/Telecomando Captiva.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal Connect", 
image: "/images/Acessórios/Adaptador A8.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A8 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Captiva`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Captiva`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 6`], help: `Tecle OK`, menu: 1000},
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A8,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`O veículo não corresponde à aplicação desta carga.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
