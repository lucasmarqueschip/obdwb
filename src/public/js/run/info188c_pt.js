//Capa
nomeCarga = "Programação de chaves e Telecomando VW Imob2b (New Beetle)";
revCarga = "Rev. 1";
dataManual = "Novembro 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha,`,
`Programação de até 8 chaves,`,
`Apagar falhar do painel`,
`Programação do telecomando.`,
`<obs>`,
`Observação:  `,
` É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam reprogramadas, elas não funcionarão no veículo. No procedimento do telecomando, só será possível a programação de um.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "New Beetle 2.0",
years: "1999 a 2002"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder:", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`New Beetle`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`New Beetle`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`New Beetle`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

]},{title: `Apagando falhas do Painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`New Beetle`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de falhas`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Apagando falhas do Painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Apagando falhas do Painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
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

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,`Consulte o suporte técnico.`,]
},

{ label: `Erro ao Apagar Falhas!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;ao`,
`&nbsp;Apagar&nbsp;Falhas!`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
