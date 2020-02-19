//Capa
nomeCarga = "Golf Antigo Immo 1 - Programação de Chaves e Adaptação da ECU";
revCarga = "Rev. 0";
dataManual = "Dezembro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
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
obdmap = true;
services = 
[{title: `Realizando a Programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Caixa Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Caixa Golf 95`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o`,
`transponder&nbsp;T33!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:`,
`0000`,
`<br />`,
],
help: `Insira a senha que foi lida do imobilizador através da carga OBD0017. Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada, utilize as setas para cima e para baixo.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Primeira chave já programada. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Iniciar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Programacao!`,
`<br />`,
],
help: `Para programar mais chaves siga o procedimento a seguir. Tecle OK!`
},
]
}, {title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Caixa Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Caixa Golf 95`, `>Adaptar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`ECU`,
`&nbsp;&nbsp;Adaptada!`,
`<br />`,
],
help: ``
},
]}
];
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
