//Capa
nomeCarga = "Dedicação de transponder GM/Renault/Dodge PCF7936";
revCarga = "Rev. 2";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder PCF7936 (ID46) para GM, Renault e Dodge. `,
`<obs>`,
`Observação:    `,
`Para realizar esta função é necessário utilizar o Módulo de Transponder conectado ao OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Captiva 2.4",
years: "2009 a 2014"
},
{
manufacturer: "GM",
model: "Captiva 3.0",
years: "2011 a 2013"
},
{
manufacturer: "GM",
model: "Captiva 3.6",
years: "2008 a 2010"
},
{
manufacturer: "Dodge",
model: "RAM 2500 5.9",
years: "2006 a 2006"
},
{
manufacturer: "Renault",
model: "Master 2.5",
years: "2010 a 2012"
},
{
manufacturer: "Renault",
model: "Clio II 1.0 16v",
years: "2003 a 2012"
},
{
manufacturer: "Renault",
model: "Clio II 1.6 16v",
years: "2003 a 2012"
},
{
manufacturer: "Renault",
model: "Duster",
years: "2012 a 2012"
},
{
manufacturer: "Renault",
model: "Logan 1.0 16v",
years: "2006 a 2012"
},
{
manufacturer: "Renault",
model: "Logan 1.6 16v",
years: "2006 a 2012"
},
{
manufacturer: "Renault",
model: "Sandero 1.6",
years: "2007 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Identificando o transponder:", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) virgem.", 
image: "/images/Transponders/PCF7936 Philips Virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a dedicação do transponder para a GM`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;PCF7936&nbsp;no`,
`&nbsp;modulo&nbsp;segundo`,
`&nbsp;&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle Ok!`
},
]
}, {title: `Realizando a dedicação do transponder para a Dodge`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;PCF7936&nbsp;no`,
`&nbsp;modulo&nbsp;segundo`,
`&nbsp;&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle Ok!`
},
]
}, {title: `Realizando a dedicação do transponder para a Renault`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;PCF7936&nbsp;no`,
`&nbsp;modulo&nbsp;segundo`,
`&nbsp;&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle Ok!`
},
]
}, {title: `Realizando a dedicação do transponder para a GM`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a dedicação do transponder para a Dodge`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a dedicação do transponder para a Renault`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a dedicação do transponder para a GM`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Dedicação Concluída!`
},
]
}, {title: `Realizando a dedicação do transponder para a Dodge`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Dedicação Concluída!`
},
]
}, {title: `Realizando a dedicação do transponder para a Renault`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>PCF7936 (ID46)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Dedicação Concluída!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir se utiliza o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,``,],
solutions: [
`Utilize um transponder PCF7936 (ID46) virgem.`,``,]
},

{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder PCF7936 (ID46) virgem.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
