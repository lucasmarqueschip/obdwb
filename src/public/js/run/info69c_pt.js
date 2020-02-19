//Capa
nomeCarga = "Golf Antigo Immo 1 - Programação de Chaves e Adaptação da ECU";
revCarga = "Rev. 0";
dataManual = "Dezembro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves via OBD: Permite programar até 8 chaves no mesmo veículo sem a necessidade de ter uma chave válida.`,
`Adaptação da ECU via OBD.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Golf 1.6",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 1.8",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 2.0",
years: "1995 a 1999"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID 33 - VW (T33).", 
image: "/images/Transponders/T33 dedicado VW.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na posição F5.", 
ballon: "O slot do veículo está localizado na posição F5.", 
image: "/images/Tomada de Diagnostico/Carro/F5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a Programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptacao do modulo`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`Quando inserido a senha errada o imobilizador pode ser bloqueado por 25 minutos, neste caso mesmo digitando a senha correta ele continua acusando senha incorreta. `,``,],
solutions: [
`Deixe a ignição ligada por 25 minutos, e repita o procedimento, certificando que a senha digitada é a correta. `,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
