//Capa
nomeCarga = "VAG Group 1 - Golf 2008 (senha, chaves e telecomandos)";
revCarga = "Rev. 0";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha da ECU ME7.5.20 via OBD.`,
`Leitura do numero de chaves.`,
`Programação de chaves.`,
`Programação de telecomando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Golf 1.6",
years: "2001 a 2008"
},
{
manufacturer: "VW",
model: "Golf 1.6 Flex",
years: "2005 a 2008"
},
{
manufacturer: "VW",
model: "Golf 1.8 turbo",
years: "2002 a 2004"
},
{
manufacturer: "VW",
model: "Golf 1.8",
years: "2000 a 2008"
},
{
manufacturer: "VW",
model: "Golf 2.0",
years: "2000 a 2008"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área E5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/E5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura de senha de ECU ME7.5.20`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a leitura do número de chaves Pats 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Senha nao Encontrada!`,
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

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`·	A senha inserida está incorreta,`,`·	Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`·	Conferir a senha digitada,`,`·	Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
