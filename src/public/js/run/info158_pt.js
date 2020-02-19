//Capa
nomeCarga = "Programação de chaves Gol G6 painel Marelli";
revCarga = "Rev. 6";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programa até 8 chaves para o veículo.`,
`<obs>`,
`Observação1: `,
`É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam programadas elas não funcionarão no veículo.`,
`Observação2: `,
`Alguns painéis necessitam a programação de ao menos duas chaves, caso contrário, podem ocorrer falhas aleatórias no veículo como:`,
`   - Não mostrar km;`,
`   - Mostar 0-1 (zero chaves programadas) e a chave assim mesmo realizar a partida no veículo;`,
`   - O sistema de alarme não funcionar corretamente;`,
`   - Vidro elétrico não funcionar.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Gol G6 1.0",
years: "2013 a 2017"
},
{
manufacturer: "VW",
model: "Gol G6 1.6",
years: "2013 a 2017"
},
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2014 a 2017"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2014 a 2017"
},
{
manufacturer: "VW",
model: "Saveiro G6 1.6",
years: "2013 a 2017"
},
{
manufacturer: "VW",
model: "Voyage G6 1.0",
years: "2013 a 2017"
},
{
manufacturer: "VW",
model: "Voyage G6 1.6",
years: "2013 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID48-CAN (TP23).jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Gol G6, Voyage e Saveiro fica localizada na área A5 e a tomada de diagnóstico do veículo Fox fica localizado na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6`, `>Marelli`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`&nbsp;Use&nbsp;o&nbsp;Transp.`,
`ID48&nbsp;CAN&nbsp;(TP23)`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOVO!`,
`<br />`,
],
help: `Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de`,
`Chaves:&nbsp;*`,
`<br />`,
],
help: `Escolha o número que deseja programar.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira a próxima chave que deseja programar.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
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
`Verificar aplicação.`,]
},

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
