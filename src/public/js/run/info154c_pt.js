//Capa
nomeCarga = "Clonar 4D Toyota (transponder)";
revCarga = "Rev. 2";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Clona chaves dos veículos Toyota que utilizam transponder ID4D - 67/68/70 no transponder TPX2.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Toyota",
model: "Corolla 1.8",
years: "2005 a 2012"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0",
years: "2005 a 2012"
},
{
manufacturer: "Toyota",
model: "Prado",
years: "2003 a 2007"
},
{
manufacturer: "Toyota",
model: "Hilux 2.5",
years: "2005 a 2008"
},
{
manufacturer: "Toyota",
model: "Hilux 3.0",
years: "2005 a 2008"
},
{
manufacturer: "Toyota",
model: "Rav4 2.4",
years: "2005 a 2009"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilizar chave original Toyota que irá ser clonado.", 
image: "/images/Chaves e Telecomandos/Chave original Toyota.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o transponder TPX2 Virgem. (Vidro)", 
image: "/images/Transponders/TPX2.jpg"},

{title: "Acessórios utilizados:", 
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
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT - Chave Toyota 4D CERTO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a clonagem de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D 70`], help: `Tecle OK`, menu: 1000},
{lines: [`Clonagem do transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ERRO DE CRC!`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;DE&nbsp;CRC!`,
`<br />`,
`<br />`,
],
causes: [
`Houve falha ou interferência na comunicação com o transponder.`,],
solutions: [
`Verificar correta posição do transponder no módulo de transponder.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o TPX2.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Erro! O transp. lido nao esta dedicado para Toyota!`,
screens: [
`Erro!&nbsp;O&nbsp;transp.`,
`&nbsp;lido&nbsp;nao&nbsp;esta`,
`&nbsp;dedicado&nbsp;para`,
`&nbsp;&nbsp;&nbsp;&nbsp;Toyota!`,
],
causes: [
`O transponder a ser clonado não está dedicado para a Toyota/Lexus,`,`Houve falha na comunicação com o transponder.`,],
solutions: [
`Certifique-se que uma chave válida foi inserida no módulo de transponder,`,`Verifique o correto posicionamento da chave no módulo de transponder.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é TPX2.`,],
solutions: [
`Utilize transponder TPX2 virgem,`,`Conferir a correta posição do transponder no Módulo de Transponder,`,`Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
