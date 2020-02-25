//Capa
nomeCarga = `Manual Carga -  OBD0055<br />Reset IAW 1G7`;
revCarga = `Rev. 1`;
dataManual = `Julho 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU IAW 1G7.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Fiorino 1.3`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.5`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio1.0`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio 1.3`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio 1.8`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.3`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.8`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Strada 1.3`,
years: `1997 a 2004`
},
{
manufacturer: `Fiat`,
model: `Strada 1.8`,
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
ballon: `Cabo IAW 1G7. Utilizado para realizar o reset.`, 
image: `/images/Funções Específicas/OBD0055 - Reset IAW 1G7/Cabo IAW 1G7.jpg`},

{title: `Identificando a ECU IAW 1G7`, 
description: `Para realizar o procedimento é necessário retirar a ECU IAW 1G7 do veículo, e utilizar o cabo IAW 1G7 em bancada.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0055 - Reset IAW 1G7/ECU.jpg`},

{title: ``, 
description: `Para realizar o procedimento é necessário retirar a ECU IAW 1G7 do veículo, e utilizar o cabo IAW 1G7 em bancada.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0055 - Reset IAW 1G7/Descricao.jpg`},

{title: ``, 
description: `Para realizar o procedimento é necessário retirar a ECU IAW 1G7 do veículo, e utilizar o cabo IAW 1G7 em bancada.<br />`, 
ballon: `Conectando o cabo IAW 1G7 na ECU.`, 
image: `/images/Funções Específicas/OBD0055 - Reset IAW 1G7/Conectando cabo IAW 1G7 na ECU.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando o Reset da ECU IAW 1G7`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 1G7`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 1G7`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
