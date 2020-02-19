//Capa
nomeCarga = "Programação de Chaves Honda Imob1 (Tipo1, Tipo2, Tipo3)";
revCarga = "Rev. 6";
dataManual = "Outubro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves.`,
`Leitura da quantidade de chaves programadas no veículo.`,
`Programação de Telecomando. Para programar o telecomando é preciso usar chave original com o transponder integrado, que será reconhecido automaticamente.`,
`<obs>`,
`Observação: Para apagar transponders basta não apresentar as chaves durante o procedimento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Honda",
model: "Civic 1.8",
years: "2006 a 2011"
},
{
manufacturer: "Honda",
model: "Civic 2.0",
years: "2006 a 2011"
},
{
manufacturer: "Honda",
model: "City 1.5",
years: "2006 a 2013"
},
{
manufacturer: "Honda",
model: "CR-V 2.0",
years: "2008 a 2008"
},
{
manufacturer: "Honda",
model: "Fit 1.4",
years: "2006 a 2014"
},
{
manufacturer: "Honda",
model: "Fit 1.5",
years: "2006 a 2014"
},
];
applicationObs = createObs("Observação: Nem todos os veículos acima correspondem a aplicação dessa carga. É necessário conferir a chave original do veículo.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "O Transponder usado é o T-19 ou ID 46 Crypto sem lock.", 
image: "/images/Transponders/ID46 SEM LOCK FIT.jpg"},

{title: "", 
description: "", 
ballon: "Chave original, compatível com esta carga.", 
image: "/images/Chaves e Telecomandos/Chave Honda Antiga.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados fica localizada na área D6.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D6.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Honda`], help: `Tecle OK`, menu: 1000},
{lines: [`Civic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1, 2, 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura de número de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Honda`], help: `Tecle OK`, menu: 1000},
{lines: [`Civic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1, 2, 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Número de chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,`Foi identificado que a versão do veículo não corresponde com a versão escolhida`,``,],
solutions: [
`Verificar aplicação.`,`Inserir versão correta.`,]
},

{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
