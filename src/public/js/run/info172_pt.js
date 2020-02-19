//Capa
nomeCarga = "Dedicação transponder PCF 7935 para ID40";
revCarga = "Rev. 2";
dataManual = "Março 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicar o transponder PCF 7935 para ID40 (Opel2).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8, 2.0 e 2.0 16v",
years: "1998 a 2010"
},
{
manufacturer: "GM",
model: "Blazer 2.4 Flex",
years: "2006 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2001 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.4",
years: "2003 a 2010"
},
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "2001 a 2009"
},
{
manufacturer: "GM",
model: "Corsa 1.8",
years: "2002 a 2006"
},
{
manufacturer: "GM",
model: "Meriva 1.8 e 1.8 16v",
years: "2002 a 2010"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2007 a 2009"
},
{
manufacturer: "GM",
model: "Montana 1.8",
years: "2003 a 2009"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2006 a 2010"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2006 a 2010"
},
{
manufacturer: "GM",
model: "Vectra C 2.0 e 2.4",
years: "2005 a 2010"
},
{
manufacturer: "GM",
model: "Zafira 2.0 e 2.0 16v",
years: "2001 a 2010"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Transponder utilizado PCF7935 virgem.", 
image: "/images/Transponders/Transponder PCF7935 Carvão.jpg"},

{title: "Todos os acessorios conectados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

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
[{title: `Realizando a dedicação dos transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Dedica PCF7935`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Insira&nbsp;o&nbsp;transp.`,
`&nbsp;&nbsp;&nbsp;PCF7935&nbsp;no`,
`modulo&nbsp;de&nbsp;trans.`,
`&nbsp;segundo&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Grav.&nbsp;PCF7935`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Para gerar mais transponders tecle OK e
volte ao passo 6, ou tecle VOLTA para finalizar.`
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
`O transponder não está posicionado corretamente no módulo de transponder.`,`O transponder utilizado não é o PCF 7935 virgem.`,],
solutions: [
`Verifique o transponder utilizado.`,`Verificar a correta posição do transponder no módulo de transponder.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize o transponder PCF 7935 virgem.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
