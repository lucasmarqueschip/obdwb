//Capa
nomeCarga = "Programação de Chaves GM5";
revCarga = "Rev. 9";
dataManual = "Julho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 6 chaves para o veículo.`,
`É necessário ter em mãos todas as chaves a serem apresentadas, inclusive as que já estavam programadas. Caso elas não sejam apresentadas, elas não funcionarão no veículo.`,
`<obs>`,
`Observação: Esta função não deve ser utilizada em veículos Camaro e em veículos com o sistema Keyless (chave de presença), se ela for utilizada, pode causar danos ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2018"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2011 a 2018"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2011 a 2018"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2012 a 2019"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2012 a 2019"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2014"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2012 a 2018"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2012 a 2018"
},
{
manufacturer: "GM",
model: "S10 2.8 Diesel",
years: "2012 a 2018"
},
{
manufacturer: "GM",
model: "Tracker 1.8",
years: "2014 a 2015"
},
{
manufacturer: "GM",
model: "TrailBlazer 2.8 Diesel",
years: "2013 a 2013"
},
{
manufacturer: "GM",
model: "TrailBlazer 3.6 Gasolina",
years: "2013 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID46 GM. Dedicado para GM.", 
image: "/images/Chaves e Telecomandos/ID46 GM.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Cobalt, Cruze, Onix, Spin, Sonic e Tracker está localizada na área A5.<br />A tomada de diagnóstico dos veículos S10 e Trailblazer está localizada na área C5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Onix`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. de chave com telecomando`], help: `Tecle OK`, menu: 1000},

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

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha foi digitada incorretamente.`,],
solutions: [
`Verificar se a senha está correta.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`A chave pode já estar programada,`,`O transponder não é ID46 GM.`,],
solutions: [
`Verificar se o transponder está dedicado para GM.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
