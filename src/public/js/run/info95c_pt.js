//Capa
nomeCarga = `Manual Carga -  OBD0095<br />Reset da ECU SIM 32 (Clio, Logan e Sandero)`;
revCarga = `Rev. 3`;
dataManual = `Novembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU SIM 32.`,
`Com esta carga é possível fazer o reset da ECU, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0`,
years: `2005 a 2011`
},
{
manufacturer: `Renault`,
model: `Sandero 1.0`,
years: `2008 a 2011`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2008 a 2011`
},
{
manufacturer: `Renault`,
model: `Logan 1.0`,
years: `2007 a 2011`
},
{
manufacturer: `Renault`,
model: `Logan 1.6`,
years: `2007 a 2011`
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

{title: `Identificando e desmontando a ECU SIM 32:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0095 SIM 32/Identificando e desmontando a ECU SIM 32.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Localizando e conectando a pinça na memória 95160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0095 SIM 32/Localizando e conectando a pinça na memória 95160.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0095 SIM 32/Localizando e conectando a pinça na memória 95160 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0095 SIM 32/Todos os acessórios conectados.jpg`},
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
{title: `Realizando o Reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-2`], help: `Tecle OK`, menu: 1000},
{lines: [`Siemens SIM 32`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95160&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;`,
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
`Operação`,
`Concluida!`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`ECU ou memória com problema,`,`Pinça foi conectada em outro componente.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU e da memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU e da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
