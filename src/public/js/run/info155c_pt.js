//Capa
nomeCarga = "Clonar 4D Kawasaki e Yamaha (transponder)";
revCarga = "Rev. 2";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Clona chaves das motocicletas Kawasaki (ID4D-6B) e Yamaha (ID4D-69) no transponder TPX2.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Kawasaki",
model: "Ninja ZX 6R",
years: "2006 a 2012"
},
{
manufacturer: "Kawasaki",
model: "Ninja ZX 10R",
years: "2004 a 2012"
},
{
manufacturer: "Kawasaki",
model: "Z 750S",
years: "2006 a 2012"
},
{
manufacturer: "Kawasaki",
model: "Z 1000",
years: "2004 a 2012"
},
{
manufacturer: "Kawasaki",
model: "ZX 1000",
years: "2004 a 2011"
},
{
manufacturer: "Kawasaki",
model: "ZZR 1400",
years: "2007 a 2010"
},
{
manufacturer: "Yamaha",
model: "BT 1100 Bulldog",
years: "2002 a 2008"
},
{
manufacturer: "Yamaha",
model: "FJR 1300",
years: "2005 a 2011"
},
{
manufacturer: "Yamaha",
model: "FZ1",
years: "2006 a 2011"
},
{
manufacturer: "Yamaha",
model: "FZ6",
years: "2004 a 2011"
},
{
manufacturer: "Yamaha",
model: "FZ8",
years: "2010 a 2012"
},
{
manufacturer: "Yamaha",
model: "FZS 1000 Fazer",
years: "2004 a 2005"
},
{
manufacturer: "Yamaha",
model: "Majesty 400",
years: "2004 a 2012"
},
{
manufacturer: "Yamaha",
model: "MT-01",
years: "2005 a 2012"
},
{
manufacturer: "Yamaha",
model: "MT-03",
years: "2006 a 2012"
},
{
manufacturer: "Yamaha",
model: "TDM 900",
years: "2004 a 2012"
},
{
manufacturer: "Yamaha",
model: "T-MAX 500",
years: "2005 a 2012"
},
{
manufacturer: "Yamaha",
model: "XJR 1300",
years: "2004 a 2012"
},
{
manufacturer: "Yamaha",
model: "X-MAX 125",
years: "2006 a 2012"
},
{
manufacturer: "Yamaha",
model: "X-MAX 250",
years: "2009 a 2012"
},
{
manufacturer: "Yamaha",
model: "XP 500",
years: "2004 a 2012"
},
{
manufacturer: "Yamaha",
model: "XT 660R",
years: "2004 a 2012"
},
{
manufacturer: "Yamaha",
model: "XT 660Z Ténéré",
years: "2008 a 2012"
},
{
manufacturer: "Yamaha",
model: "XT 1200Z Super Ténéré",
years: "2010 a 2012"
},
{
manufacturer: "Yamaha",
model: "XVS 650A Drag Star",
years: "2004 a 2008"
},
{
manufacturer: "Yamaha",
model: "XVS 1100A Drag Star",
years: "2004 a 2008"
},
{
manufacturer: "Yamaha",
model: "YZF R1",
years: "2005 a 2012"
},
{
manufacturer: "Yamaha",
model: "YZF R6",
years: "2003 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilizar chave ou transponder original<br />Yamaha ou Kawasaki que irá ser clonado", 
image: "/images/Chaves e Telecomandos/Chave Yamaha Kawasaki.jpg"},

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
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a clonagem de transponders - Kawasaki:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Kawasaki Motocicletas`], help: `Tecle OK`, menu: 1000},
{lines: [`Ninja ZX`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D 6B`], help: `Tecle OK`, menu: 1000},
{lines: [`Clonagem do transponder`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a clonagem de transponders - Yamaha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Yamaha Motocicletas`], help: `Tecle OK`, menu: 1000},
{lines: [`FZ1`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D 69`], help: `Tecle OK`, menu: 1000},
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
`Verificar a correta posição do transponder no módulo de transponder.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder TPX2 inserido no módulo está bloqueado.`,],
solutions: [
`Utilize transponder TPX2 virgem.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é ID4D,`,`O transponder utilizado não é TPX2.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos,`,`Utilize transponder TPX2 virgem.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
