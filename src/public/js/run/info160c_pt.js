//Capa
nomeCarga = "Leitura e programação de Key Cards Renault Megane 2 (senha e chaves)";
revCarga = "Rev. 3";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha da BSI através do cabo MCU. Esse procedimento é válido para todos os veículos Megane 2ª geração (1.6) que utilizam este modelo de BSI.`,
`Programação de até 4 Key Cards no veículo via OBD.`,
`<obs>`,
`Observação: `,
`É necessário ter em mãos todas as Key Cards a serem apresentados, inclusive as que já estavam programadas. Caso elas não sejam apresentadas elas não funcionarão no veículo.`,
``,
` Os módulos podem ser tratados como calculador ou BSI, porém em todo o manual será tratado como BSI.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Megane 2 1.6",
years: "2006 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize a chave do tipo Key Card.", 
image: "/images/Funções Específicas/OBD0160 Programação Key Cards Megane 2/Utilize a chave do tipo Key Card.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Área de solda do cabo MCU.", 
image: "/images/Funções Específicas/OBD0160 Programação Key Cards Megane 2/Localizando os pontos de soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU;<br />1 => Fio Amarelo<br />2 => Fio Verde<br />3 => Fio Preto<br />4 => Fio Vermelho", 
image: "/images/Funções Específicas/OBD0160 Programação Key Cards Megane 2/Identificando os pontos.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU.", 
image: "/images/Funções Específicas/OBD0160 Programação Key Cards Megane 2/Soldado os fios do cabo MCU.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico do veículo citado acima fica localizada na área E6.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/E6.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura de senha da BSI:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Megane`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-3`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de Key Cards:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-3`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
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
`Mau contato na pinça com a memória;`,`BSI com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da BSI.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BSI,`,`Mau contato do cabo MCU com o OBDMap,`,`BSI com problema.`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir bom estado da BSI.`,]
},

{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Erro no codigo de Seguranca!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;codigo`,
`&nbsp;&nbsp;de&nbsp;Seguranca!`,
`<br />`,
],
causes: [
`O código foi digitado errado.`,],
solutions: [
`Insira o código correto.`,``,``,``,`Observação para iniciar a programação com um Card já programado: Para realizar a programação com um Card já programado, deve-se pisar no freio, apertar o botão START/STOP e soltar o pedal do freio antes que o carro dê a partida.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
