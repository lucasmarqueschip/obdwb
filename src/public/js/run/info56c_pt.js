//Capa
nomeCarga = `Manual Carga -  OBD0056<br />Reset IAW 4SF`;
revCarga = `Rev. 3`;
dataManual = `Outubro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da central 4SF, deixando a ECU pronta para se codificar com outro veículo.`,
`Reset da central 4DF, deixando a ECU pronta para se codificar com outro veículo.`,
`<obs>`,
`Observação: Para realizar este procedimento é necessário retirar a ECU do veículo, levá-la para bancada e conectar ao Multigiga (item não incluso).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Linea 1.9`,
years: `2007 a 2009`
},
{
manufacturer: `Fiat`,
model: `Palio 1.8`,
years: `2004 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `2004 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena 1.8`,
years: `2004 a 2005`
},
{
manufacturer: `Fiat`,
model: `Punto 1.4`,
years: `2007 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Ferro de solda. Necessário para soldar os resistores.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Ferro de Solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize dois resistores, um de 100 Ohms e outro de 560 Ohms.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/resistores.jpg`},

{title: `Identificando e desmontando a ECU`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Localizando a ECU do veículo.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize a chave Torque T1 para retirar os quatro parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Desmontando a ECU IAW 4SF ou 4DF.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Desmontando a ECU IAW 4SF ou 4DF 2.jpg`},

{title: `Localizando os pontos de soldagem dos resistores:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Localizando os pontos de soldagem dos resistores.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os resistores na placa da ECU.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Soldado os resistores.jpg`},

{title: `Localizando os pontos para a pinagem da ECU`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Pinagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando os pinos de conexão do multigiga.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Localizando os pinos de conexão.jpg`},

{title: ``, 
description: ``, 
ballon: `Multigiga conectado na ECU.`, 
image: `/images/Funções Específicas/OBD0056 Reset IAW 4SF ou 4DF/Cabo universal de leitura conectado.jpg`},
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
{title: `Realizando o Reset da ECU IAW 4SF ou 4DF:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4SF`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
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
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Mau contato nos conectores do cabo do Multigiga,`,`ECU danificada,`,`Software do OBDMap desatualizado.`,],
solutions: [
`Conferir conexões do cabo do Multigiga,`,`Conferir o estado da ECU,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
