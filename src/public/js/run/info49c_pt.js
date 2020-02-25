//Capa
nomeCarga = `Manual Carga -  OBD0049<br />Descodificar ECU GM M1.5.4`;
revCarga = `Rev. 1`;
dataManual = `Abril 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Descodificar a ECU M1.5.4.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Blazer 2.2`,
years: `1997 a 2001`
},
{
manufacturer: `GM`,
model: `Blazer 2.4`,
years: `2000 a 2006`
},
{
manufacturer: `GM`,
model: `S10 2.2`,
years: `1997 a 2000`
},
{
manufacturer: `GM`,
model: `S10 2.4`,
years: `2000 a 2006`
},
{
manufacturer: `GM`,
model: `Vectra B 2.0`,
years: `1996 a 2004`
},
{
manufacturer: `GM`,
model: `Vectra B 2.2`,
years: `1997 a 2004`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU M1.5.4`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0049 - Descodificar ECU M1.5.4 GM/ECU 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Com a ajuda de uma chave de fenda, levante a trava da tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0049 - Descodificar ECU M1.5.4 GM/ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com uma chave philips retire o parafuso.`, 
image: `/images/Funções Específicas/OBD0049 - Descodificar ECU M1.5.4 GM/ECU 3.jpg`},

{title: `Localizando e conectando a pinça na memória :`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0049 - Descodificar ECU M1.5.4 GM/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0049 - Descodificar ECU M1.5.4 GM/Pinça conectada.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a descodificação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Vectra`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch M1.5.4`], help: `Tecle OK`, menu: 1000},
{lines: [`Descodificação da ECU`], help: `Tecle OK`, menu: 1000},
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
`Operação`,
`Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`Memória ou ECU com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da memória e da ECU.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A ECU ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,`Conferir o bom estado da ECU e da memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da memória e da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`ECU ou memória com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da memória e da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
