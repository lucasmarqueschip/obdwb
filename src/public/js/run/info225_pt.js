//Capa
nomeCarga = "Clonar Transponder ID46 no Transponder CN3 (Nissan 08-16 / Suzuki 2012)";
revCarga = "Rev. 1";
dataManual = "Julho 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Clonagem do transponder ID46 Nissan e Suzuki dos veículos conforme aplicação, em um CN3 virgem.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Nissan",
model: "Grand Livina 1.8",
years: "2010 a 2012"
},
{
manufacturer: "Nissan",
model: "Livina 1.8",
years: "2010 a 2012"
},
{
manufacturer: "Nissan",
model: "Sentra 2.0",
years: "2008 a 2012"
},
{
manufacturer: "Nissan",
model: "Frontier 2.5",
years: "2014 a 2014"
},
{
manufacturer: "Nissan",
model: "Tiida 1.8",
years: "2009 a 2012"
},
{
manufacturer: "Nissan",
model: "March 1.6",
years: "2012 a 2016"
},
{
manufacturer: "Nissan",
model: "Versa 1.6",
years: "2012 a 2013"
},
{
manufacturer: "Suzuki",
model: "SX4 2.0",
years: "2012 a 2012"
},
];
applicationObs = createObs("Observação: Esta carga não realiza a clonagem dos transponders dos veículos March 1.0 e Livina 1.6.", undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o Transponder CN3 Virgem.", 
image: "/images/Transponders/CN3 Virgem.jpg"},

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
[{title: `Realizando a clonagem do transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Clonar PCF7936`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Nissan`,
`<br />`,
],
help: `Selecione: Nissan ou Suzuki 
e tecle OK!`
},
{lines: [
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`original&nbsp;no&nbsp;mod.`,
`&nbsp;de&nbsp;transponder`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`Insira&nbsp;o&nbsp;transp.`,
`&nbsp;CN3&nbsp;no&nbsp;modulo.`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Tecle OK para gravar outro transponder ou tecle VOLTA para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder pode estar defeituoso,`,`O transponder não é um CN3.`,``,``,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder CN3,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos,`,` Verifique a procedência do transponder,`,`Utilize a carga do Módulo de Transponder para identificar o transponder.`,``,``,``,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente ou foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder não é um CN3.`,``,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos,`,`Utilize a carga do Módulo de Transponder para identificar o transponder.`,``,``,]
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
`Utilize um transponder CN3 virgem.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`Mau contato no Módulo de Transponder com o OBDMap.`,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
