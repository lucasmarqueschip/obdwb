//Capa
nomeCarga = `Manual Carga -  OBD0078<br />Reset 4AFB / 59FB / 49F`;
revCarga = `Rev. 2`;
dataManual = `Maio 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código eletrônico das ECU's IAW 4AFB e IAW 59FB.`,
`Com o código lido é possível realizar a partida de emergência e a programação de chaves.`,
``,
`Reset das ECU's IAW 4AFB, IAW 59FB e IAW 49F.`,
`Com esta função é possível resetar a ECU, deixando ela virgem, pronta para se codificar com um novo veículo.`,

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
model: `Doblo 1.8`,
years: `2003 a 2006`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0`,
years: `2001 a 2009`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 8V`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0`,
years: `2000 a 2009`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Strada Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Mille Fire`,
years: `2001 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Nem todos os veículos relacionados acima possuem as ECU's 49FB, 59FB e 49F. Verifique a etiqueta da ECU para identificá-la.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo C1. Conecta a pinça ao OBDMap.`, 
image: `/images/Acessórios/Cabo C1.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando a ECU 4AFB:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Identificando a ECU 4AFB.jpg`},

{title: `Desmontando a ECU 4AFB:`, 
description: ``, 
ballon: `Com o auxílio de uma chave torx T15, retire os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Desmontando a ECU 4AFB.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Desmontando a ECU 4AFB 2.jpg`},

{title: `Localizando a memória 95160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Localizando a memória 95160.jpg`},

{title: `Conectando a pinça na memória 95160:`, 
description: ``, 
ballon: `Conecte a pinça na memória 95160.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Conectando a pinça na memória 95160.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Conectando a pinça na memória 95160 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br /><br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Todos os acessórios conectados.jpg`},

{title: `Identificando a ECU 59FB:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Identificando a ECU 59FB.jpg`},

{title: `Desmontando a ECU 59FB:`, 
description: ``, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Desmontando a ECU 59FB.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Desmontando a ECU 59FB 2.jpg`},

{title: `Localizando a memória 95080:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Localizando a memória 95080.jpg`},

{title: `Conectando a pinça na memória 95080:`, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Conectando a pinça na memória 95080.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Todos os acessorios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a placa. Utilize o cabo C1.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Todos os acessórios conectados.jpg`},

{title: `Identificando a ECU 49F:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Identificando a ECU 49F.jpg`},

{title: `Desmontando a ECU:`, 
description: ``, 
ballon: `Com o auxílio de uma chave torx T15, retire os parafusos fixadores para ter acesso à placa da ECU.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Desmontando a ECU 49F 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Desmontando a ECU 49F.jpg`},

{title: `Localizando a memória 95040 na ECU IAW 49F:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Localizando a memória 95040 na ECU IAW 49F.jpg`},

{title: `Conectando a pinça na memória 95040:`, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 95040.`, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Conectando a pinça na memória 95040 2.jpg`},

{title: `Todos os acessórios conectados :`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e a placa, utilize o cabo C1.<br /><br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura do código eletrônico da ECU IAW 4AFB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 4AFB`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 4AFB`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Chave&nbsp;COD.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Dado da chave mestra para sistema
code 1. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Cod.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `O código lido pode ser utilizado para realizar a partida de emergência e a programação de chaves.`
},
]
}, {title: `Realizando o reset da ECU IAW 4AFB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 4AFB`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 4AFB`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `ECU resetada.`
},
]
}, {title: `Realizando a leitura do código eletrônico da ECU IAW 59FB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 59FB.P1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 59FB.P1`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;C1&nbsp;`,
`e&nbsp;pinca&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`Chave&nbsp;COD.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Dado da chave mestra para sistema
code 1. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Cod.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `O código lido pode ser utilizado para realizar a partida de emergência e
a programação de chaves.`
},
]
}, {title: `Realizando o Reset da ECU IAW 59FB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 59FB.P1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 59FB.P1`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;C1&nbsp;`,
`e&nbsp;pinca&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Conecte&nbsp;a&nbsp;pinca&nbsp;`,
`na&nbsp;memoria&nbsp;95080`,
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
]
}, {title: `Realizando o reset da ECU IAW 49F:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 49F`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 49F`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;C1&nbsp;`,
`e&nbsp;pinca&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Conecte&nbsp;a&nbsp;pinca&nbsp;`,
`na&nbsp;memoria&nbsp;95040`,
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`ECU com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECUe da memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,``,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`Verifique...`,
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
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da memória ou ECU.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
