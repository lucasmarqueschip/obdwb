//Capa
nomeCarga = `Manual Carga -  OBD0019<br />Fiat Reset Code 1 - 702 / 704`;
revCarga = `Rev. 2`;
dataManual = `Fevereiro 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset dos Imobilizadores 702 e 704.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Brava 1.6`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.5`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio 1.0`,
years: `1998 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio 1.5`,
years: `1997 a 2001`
},
{
manufacturer: `Fiat`,
model: `Palio 1.6`,
years: `1999 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0 8v`,
years: `2001 a 2005`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 8v`,
years: `2002 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena fire 1.0`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Siena 1.5`,
years: `1997 a 2001`
},
{
manufacturer: `Fiat`,
model: `Siena 1.6`,
years: `1999 a 2000`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0`,
years: `2000 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3`,
years: `2003 a 2005`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Existem imobilizadores do sistema CODE 1 que tem numeração final diferente de 702 e 704, porém todos os Imobilizadores deste sistema são abrangidos por esta carga.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Sempre que é mencionado Imobilizador 702, está se referindo a todos Imobilizadores do sistema CODE 1 que utilizam o microcontrolador com máscara IM106.OOC.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/702.jpg`},

{title: ``, 
description: ``, 
ballon: `Sempre que é mencionado Imobilizador 704, está se referindo a todos Imobilizadores do sistema CODE 1 que utilizam o microcontrolador com máscara 1K59H.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/704.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Identificando e desmontando o imobilizador 702`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/i702.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Desmontando imobilizador 702.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Azul<br />5 => Fio Roxo<br />6 => Fio Laranja`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Pontos solda 702.jpg`},

{title: ``, 
description: ``, 
ballon: `É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha na soldagem.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Retirando Resina.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no Imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Soldando os fios 702.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Imobilizador.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Soldando Fios 702.jpg`},

{title: `Identificando e desmontando o imobilizador 704`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/i704.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Desmontando imobilizador 704.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Laranja<br />5 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Pontos solda 704.jpg`},

{title: ``, 
description: ``, 
ballon: `É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha a soldagem.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Retirando Resina 704.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios noImobilizador, depois ligue ocabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Soldando os Fios 704.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Imobilizador.`, 
image: `/images/Funções Específicas/OBD0019 Reset e Geração 702  704/Fios Soldados 704.jpg`},
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
{title: `Realizando reset do Imobilizador 702 / 704`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset do imobilizador`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`<br />`,
`<br />`,
],
help: `Selecione “Imob. Code 1 702“ ou “Imob. Code 1 704“, tecle OK`
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
help: `Operação concluída com sucesso.`
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
`Mal contato no cabo MCU com o Imobilizador,`,`Mal contato no cabo MCU com o OBDMap,`,`Imobilizador com problema.`,],
solutions: [
`Conferir a correta posição dos fios no Imobilizador,`,`Conferir a conexão do cabo MCU com o OBDMap.`,]
},
{ label: `Curto! Verifique`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do Imobilizador,`,`Cabo MCU ou Imobilizador está com problema. `,],
solutions: [
`Conferir a correta posição dos fios na placa.`,]
},
{ label: `IMOBILIZADOR INCOMPATIVEL!`,
screens: [
`&nbsp;`,
`IMOBILIZADOR`,
`INCOMPATIVEL!`,
`<br />`,
],
causes: [
`O imobilizador não é compatível com a aplicação.`,],
solutions: [
`Verifique a aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
