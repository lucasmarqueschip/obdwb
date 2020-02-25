//Capa
nomeCarga = `Manual Carga -  OBD0139<br />Reset ECU Bosch ME7.4.4`;
revCarga = `Rev. 2`;
dataManual = `Março 2013`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU ME7.4.4, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4 16V`,
years: `2005 a 2008`
},
{
manufacturer: `Peugeot`,
model: `206 1.6 16V`,
years: `2002 a 2008`
},
{
manufacturer: `Peugeot`,
model: `307 1.6 16V`,
years: `2003 a 2006`
},
{
manufacturer: `Citroen`,
model: `C3 1.6 16V`,
years: `2002 a 2008`
},
{
manufacturer: `Citroen`,
model: `C3 1.4 16V`,
years: `2005 a 2008`
},
{
manufacturer: `Citroen`,
model: `Xsara 1.6 16V`,
years: `2002 a 2005`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação:`, `Esta carga somente realiza o reset da ECU ME7.4.4. Para adaptá-la é necessário utilizar outro equipamento.`, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando a ECU ME7.4.4:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Identificando ECU 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Identificando ECU 2.jpg`},

{title: `Localizando e conectando a pinça na memória 25C160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pino 1 da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pinca.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Todos os equipamentos.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando o reset da ECU ME7.4.4:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>Bosch Me7.4.4`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.4`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;pinca`,
`&nbsp;&nbsp;&nbsp;na&nbsp;memoria`,
`&nbsp;25c160&nbsp;segundo`,
`&nbsp;&nbsp;manual&nbsp;&lt;OK&gt;`,
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`ECU ou memória com problema.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,``,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
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
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
