//Capa
nomeCarga = `Manual Carga -  OBD0072<br />Reset 5NF`;
revCarga = `Rev. 3`;
dataManual = `Junho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código eletrônico da ECU IAW 5NF: partida de emergência.`,
`Reset da ECU IAW 5NF: deixa a ECU virgem, pronta para codificar com outro kit.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Palio 1.0`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio 1.3`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio 1.8`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.3`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Siena 1.8`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Doblo 1.3`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Doble 1.8`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Strada 1.3`,
years: `2001 a 2004`
},
{
manufacturer: `Fiat`,
model: `Strada 1.8`,
years: `2001 a 2004`
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
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Chave de fenda de espessura média. Usada para fazer uma alavanca na tampa da ECU para desmontá-la.`, 
image: `/images/Acessórios/Chave de fenda espessura media.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: `Identificando a ECU.`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Identificando a ECU.jpg`},

{title: `Desmontando a ECU:`, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda remova o silicone que prende a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Desmontando a ECU.jpg`},

{title: ``, 
description: ``, 
ballon: `Depois de todo silicone removido, faça uma alavanca com a chave de fenda para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Desmontando a ECU 2.jpg`},

{title: `Localizando os pontos para soldagem:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na área A: <br />1 => Fio Vermelho <br />2 => Fio Cinza <br />3 => Fio Azul <br />4 => Fio Preto`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Identificando os pontos na Área A.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na área B: <br />5 => Fio Amarelo <br />6 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Identificando os pontos na Área B.jpg`},

{title: `Soldando o cabo MCU na ECU`, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na área A.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Soldando o cabo MCU na ECU.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o estilete para remover o verniz que protege o local onde deve ser soldado o fio verde na área B.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/soldar o fio verde na Área B.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na área B.`, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Soldado os fios do cabo MCU na Área B.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios na ECU, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a ECU e assim evitando danos à ECU e ao OBDMap.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0072 Reset IAW 5NF/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura do código eletrônico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 5NF`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 5NF`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MCU&nbsp;na&nbsp;ECU`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chave&nbsp;COD.&nbsp;ERA:`,
`***************`,
`<br />`,
],
help: `Utilizado somente se for sistema Code 1. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Cod.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Código eletrônico da ECU, com esse código é possível dar a partida de emergência no veículo sem a necessidade de um imobilizador ou chave.`
},
]
}, {title: `Realizando o reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 5NF`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 5NF`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;&nbsp;&nbsp;MCU&nbsp;na&nbsp;ECU`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ok&gt;`,
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
help: `ECU resetada.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com a ECU, `,`Mau contato no cabo MCU com o OBDMap, `,`ECU com problema ou arquivo corrompido. `,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo. `,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos da ECU, `,`Cabo MCU ou ECU está com problema. `,],
solutions: [
`Verificar a correta posição dos fios na ECU, `,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo. `,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato do cabo MCU com a ECU,`,`Mau contato do cabo MCU com o OBDMap,`,`ECU com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios na ECU, `,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos, `,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo. `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
