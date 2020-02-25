//Capa
nomeCarga = `Manual Carga -  OBD0105<br />Reset da ECU IAW 4CF`;
revCarga = `Rev. 3`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código eletrônico,`,
`Reset da ECU IAW 4CF,`,
`Com esta carga é possível realizar a leitura do código eletrônico e o reset da ECU, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Uno Fire Economy 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.3`,
years: `2010 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Nem todos os veículos relacionados aos anos citados acima possuem a ECU IAW 4CF. Verifique a etiqueta da ECU para identificá-la.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU IAW 4CF:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Identificando e desmontando a ECU IAW 4CF.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx para retirar os parafusos da ECU.`, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Desmontando a ECU IAW 4CF.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa da ECU.`, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Desmontando a ECU IAW 4CF 2.jpg`},

{title: `Localizando e conectando a pinça na memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Localizando e conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Conectando a pinça na memória 95320 2.jpg`},

{title: `Todos os acessorios conectados:`, 
description: `Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0105 Reset ECU IAW 4CF/Todos os acessórios conectados.jpg`},
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
{title: `Realizando a leitura do código eletrônico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiorino`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4CF`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de codigo eletronico`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95320`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Código&nbsp;Eletrônico:`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiorino`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4CF`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Digite&nbsp;Chassi:`,
`<br />`,
`<br />`,
],
help: `Insira o chassi do veículo para que seja
possível realizar o procedimento de reset.`
},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95320`,
`segundo&nbsp;o&nbsp;manual`,
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
help: `ECU resetada.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`ECU ou memória com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU e da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`ECU ou Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da ECU e da memória.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar nos terminais correspondentes da memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU e da memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Arquivo resetado ou invalido <OK>`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;resetado`,
`ou&nbsp;inválido&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`ECU resetada ou está com o arquivo corrompido, porém mesmo assim será exibido o código eletrônico encontrado.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
