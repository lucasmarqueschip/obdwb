//Capa
nomeCarga = `Manual Carga -  OBD0138<br />Dedicação do ID4D para ID60, ID61, ID62, ID65, ID66, ID67, ID68, ID70`;
revCarga = `Rev. 2`;
dataManual = `Março 2013`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicação do transponder Texas Crypto - 4D - ID60 como ID61, ID62, ID65, ID66, ID67, ID68 ou ID70.`,
`Volta o transponder no estado virgem - ID60, caso o transponder não esteja bloqueado (Lock).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Rav4 (ID67)`,
years: `2005 a 2009`
},
{
manufacturer: `Toyota`,
model: `Hilux (ID67)`,
years: `2005 a 2008`
},
{
manufacturer: `Toyota`,
model: `Corolla (ID70)`,
years: `2009 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize um transponder ID 4D63 especial.`, 
image: `/images/Transponders/Texas Crypto 4D.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a dedicação de transponder ID 46`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Dedicar 4D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:&nbsp;`,
`ID:67&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(TY)`,
`<br />`,
],
help: `Utilizando as teclas para cima ou para baixo, selecione a dedicação:
ID:61 – (MT): Mitsubishi
ID:62 – (SB): Subaru
ID:65 – (SZ): Suzuki
ID:66 – (SZ): Suzuki Liana
ID:67, ID:68 e ID:70 – (TY):
Toyota`
},
{lines: [
`&nbsp;`,
`ID67:`,
`MESTRA`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;Transp.&nbsp;&nbsp;`,
`ID4D&nbsp;no&nbsp;modulo!`,
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
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `O transponder foi dedicado com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `ERRO DE CRC!`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;DE&nbsp;CRC!`,
`<br />`,
`<br />`,
],
causes: [
`Houve falha ou interferência na comunicação com o transponder.`,],
solutions: [
`Houve falha ou interferência na comunicação com o transponder.`,``,]
},
{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `Use Transponder ID4D Blank!`,
screens: [
`&nbsp;`,
`Use&nbsp;Transponder`,
`&nbsp;&nbsp;ID4D&nbsp;Blank!`,
`<br />`,
],
causes: [
`O transponder já se encontra dedicado e travado.`,],
solutions: [
`O transponder já se encontra dedicado e travado.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
