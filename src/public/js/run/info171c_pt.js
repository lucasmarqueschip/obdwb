//Capa
nomeCarga = "Programação de Telecomando Alarme VW4 (Amarok)";
revCarga = "Rev. 5";
dataManual = "Novembro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 telecomandos para o veículo.`,
`<obs>`,
`  Obs. 1:`,
` É necessário ter em mãos todos os telecomandos a serem programados, inclusive os que já estavam programados. Caso eles não sejam reprogramados, não funcionarão no veículo.`,
`   Obs. 2:`,
` No caso do Jetta a programação do telecomando deve ser feita com a porta fechada, porém para finalizar o procedimento é necessário retirar a chave da ignição e colocar a chave no cilindro da porta, com a porta ainda fechada. Assim o procedimento poderá ser feito de 3 maneiras:`,
`  1- Com o auxílio de uma segunda pessoa,`,
`  2- Uma pessoa apenas realizando o procedimento fora do veículo, e acessando a chave na ignição pela janela,`,
`  3- Uma pessoa apenas realizando o procedimento dentro do veículo, e acessando o cilindro da porta também pela janela.`,
``,
`Procedimento de programação do telecomando do Jetta:`,
`  1- Inicie o procedimento seguindo as instruções no OBDMAP,`,
`  2- Ao aparecer a mensagem "Inicie a adaptação" (Passo 11) retire a chave da ignição,`,
`  3- Insira a chave no cilindro da porta com o botão abrir do telecomando pressionado, e ainda com este pressionado gire a chave no cilindro no sentido de destravar,`,
`  4- Repita o item 3 para todos os telecomandos a serem programados.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Jetta 2.0",
years: "2010 a 2014"
},
{
manufacturer: "VW",
model: "Amarok 2.0",
years: "2010 a 2017"
},
{
manufacturer: "VW",
model: "Tiguan 2.0",
years: "2010 a 2014"
},
{
manufacturer: "VW",
model: "UP!",
years: "2014 a 2016"
},
];
applicationObs = createObs("Obs.: Não faz veículos que utilizam chave de presença (com botão START/STOP).", undefined, undefined)



resources = [
{title: "Telecomandos utilizados:", 
description: "", 
ballon: "O Jetta e Tiguan utilizam telecomando com 3 botões com código 5K0 837 202 AD.", 
image: "/images/Funções Específicas/OBD0171 Programação de Telecomando Alarme VW4/Telecomandos utilizados.jpg"},

{title: "", 
description: "", 
ballon: "A Amarok utiliza telecomando com 2 botões com código 7E0 837 202 AD.", 
image: "/images/Funções Específicas/OBD0171 Programação de Telecomando Alarme VW4/Telecomandos utilizados 2.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Jetta, Amarok e Tiguan ficam localizadas na área A5 da imagem.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de Telecomando Amarok:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Amarok`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 1`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de Telecomando Jetta:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de Telecomando Tiguan:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Tiguan`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

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

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão UNLOCK do telecomando e/ou a tecla OK do OBDMap não foram pressionados dentro do tempo especificado.`,],
solutions: [
`Repetir o procedimento.`,``,`Obs: Se o procedimento for concluído e não programar, verificar o telecomando:`,`Telecomandos corretos:`,`5K0 837 202 AD (Jetta Gol)`,`7E0 837 202 AD (Amarok)`,``,`Telecomandos Errados:`,`5K0 837 202 AJ`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo CAN pode não estar conectado no OBDMap.`,],
solutions: [
`Verificar a conexão do cabo CAN com o OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
