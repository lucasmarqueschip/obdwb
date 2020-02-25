//Capa
nomeCarga = `Manual Carga -  OBD0098<br />Reset da ECU Bosch 0281 012 474 ( 35P08 ) usada nas Ducatos / Boxer / Jumper - 2.8 Diesel`;
revCarga = `Rev. 4`;
dataManual = `Abril 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU Bosch - 0281012474.`,
`Com esta carga é possível fazer o reset da ECU via pinça ou cabo MCU, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `Boxer 2.8 Diesel`,
years: `2001 a 2011`
},
{
manufacturer: `Fiat`,
model: `Ducato 2.8 Diesel`,
years: `2001 a 2011`
},
{
manufacturer: `Citroen`,
model: `Jumper 2.8 Diesel`,
years: `2001 a 2011`
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
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU Bosch 0281012474:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Identificando e desmontando a ECU Bosch 0281012474.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave Allen para soltar os parafusos da ECU.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Identificando e desmontando a ECU Bosch 0281012474 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso a placa da ECU.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Tendo acesso a placa.jpg`},

{title: `Localizando e conectando a pinça na memória 35P08:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Localizando e conectando a pinça na memória 35P08.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Conectando a pinça na memória 35P08.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Conectando a pinça na memória 35P08 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma nem a ECU.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Todos os acessórios conectados 1.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Localizando a área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Localizando os pontos de solda do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Roxo<br />2=> Fio Azul<br />3=> Fio Verde<br />4=> Fio Amarelo<br />5=> Fio Preto<br />6=> Fio Vermelho<br />7=> Fio Cinza`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Localizando os pontos de solda do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios na ECU, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Não inverter os fios.jpg`},

{title: `Todos os acessorios conectados:`, 
description: `Atenção<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a ECU, evitando danos ao mesmo e ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0098 Reset ECU Bosch/Memória 35P08/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando o Reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Citroen`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Citroen`, `>BOS 0281012474`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BOS 0281012474`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;Cabo`,
`MCU/PINCA&nbsp;na&nbsp;ECU`,
`Segundo&nbsp;Manual.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Resetando&nbsp;ECU.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
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
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,``,]
},
{ label: `Erro na gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória, `,`Mau contato da pinça com o OBDMap, `,`Memória ou ECU com problema, `,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória, `,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos, `,`Conferir se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo. `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
