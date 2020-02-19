//Capa
nomeCarga = "Geração de chaves Mercedes PLD FR1 Modelo E via OBD";
revCarga = "Rev. 3";
dataManual = "Abril 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de chaves para os veículos que utilizam o sistema PLD FR1 com a PLD Modelo E.`,
`   É necessário que a PLD tenha um dos seguintes códigos; 22B, 23E e 23F. Pode-se identificar o modelo e código da PLD através da função "Identificação da PLD" na Página 08. Para outros códigos encontrados consulte suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mercedes",
model: "Actros",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "Acello",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "Axor",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "Atego",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "O 500 RSD/2436",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "O 500 RS/1836",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "OF 1721",
years: "2012 a 2014"
},
{
manufacturer: "Mercedes",
model: "Atron",
years: "2012 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder T5/NOVA (Epóxi).", 
image: "/images/Transponders/Transponder T5 como ID20.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o cabo OBD 24v + D2. Conecta o OBDMap ao veículo para o procedimento via diagnose.", 
image: "/images/Acessórios/Cabo OBD 24v.jpg"},

{title: "", 
description: "", 
ballon: "Adaptador D4. Usado somente nos casos em que a entrada de diagnose não é OBD.", 
image: "/images/Acessórios/Adaptador D4..jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para geração de chaves.<br />Obs. 1. Para a identificação da PLD não é obrigatório o Módulo de Transponder estar conectado.<br />Obs. 2. O uso do adaptador A4 depende do conector de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0187 PLD/Todos os acessórios.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "O conector de diagnostico fica localizado na área A4 ou na área E4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Caminhão/A4-E4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes Truck`], help: `Tecle OK`, menu: 1000},
{lines: [`Atron`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Identificação`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes Truck`], help: `Tecle OK`, menu: 1000},
{lines: [`Atron`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo E`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a geração de chaves:`,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo OBD24V e adaptador D2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é T5 virgem.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder,`,`Conferir o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder ou para deixá-lo virgem (ID 20) caso seja necessário.`,]
},

{ label: `PLD incorreta!`,
screens: [
`&nbsp;`,
`&nbsp;PLD&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`Código da PLD não corresponde a aplicação,`,`Utilizando função incorreta no OBDMap.`,],
solutions: [
`Conferir aplicação,`,`Conferir código da PLD através da função "Identificação da PLD" na Página XX.`,`Consultar o suporte técnico.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
