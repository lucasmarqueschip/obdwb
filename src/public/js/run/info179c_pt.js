//Capa
nomeCarga = "Geração de transponder Mercedes PLD modelo E";
revCarga = "Rev. 1";
dataManual = "Maio 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de chaves para caminhões Mercedes que utilizam a PLD do modelo E.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mercedes",
model: "Actros",
years: "2012 a 2013"
},
{
manufacturer: "Mercedes",
model: "Acello",
years: "2012 a 2013"
},
{
manufacturer: "Mercedes",
model: "Atego",
years: "2012 a 2013"
},
{
manufacturer: "Mercedes",
model: "Atron",
years: "2012 a 2013"
},
{
manufacturer: "Mercedes",
model: "Axor",
years: "2012 a 2013"
},
];
applicationObs = createObs("Observação: Nem todos os veículos na faixa de ano citados acima possuem os modelos de PLD citados.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder T5/NOVA (Epóxi).", 
image: "/images/Transponders/Transponder T5 como ID20.jpg"},

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
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg"},

{title: "Identificando PLD de modelo E:", 
description: "Retire a PLD do caminhão e leve-a para bancada. O modelo E de PLD tem como característica principal possuir uma memória 95640, porém esta característica não é suficiente para identificar o modelo da PLD, será necessário comparar se a placa é igual à mostrada neste manual.", 
ballon: "Identificando memória e PLD modelo E.", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/Pld.jpg"},

{title: "", 
description: "Retire a PLD do caminhão e leve-a para bancada. O modelo E de PLD tem como característica principal possuir uma memória 95640, porém esta característica não é suficiente para identificar o modelo da PLD, será necessário comparar se a placa é igual à mostrada neste manual.", 
ballon: "Memória 95640", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/memoriaPld.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/Localzando ponto de soldagem.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU na Área 1:<br />1 => Fio Vermelho", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/soldagemArea1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando pontos a serem soldado os fios do cabo MCU na Área 2:<br />2 => Fio Preto<br />3 => Fio Roxo<br />4 => Fio Azul<br />5 => Fio Amarelo<br />6 => Fio Cinza<br />7 => Fio Verde", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/soldagemArea2.jpg"},

{title: "", 
description: "", 
ballon: "Observação: Não trocar as posições dos fios. Primeiro solde os fios na PLD, depois ligue o cabo Não trocar as<br />posições dos fios. Primeiro solde os fios na PLD, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/Fios soldados.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0179 PLD Modelo E/Todos acessorios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes Truck`], help: `Tecle OK`, menu: 1000},
{lines: [`Actros`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo E`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é T5 virgem.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder ou para deixá-lo virgem (ID 20) caso seja necessário.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com a PLD,`,`Mau contato no cabo MCU com o OBDMap,`,`PLD com problema.`,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},

{ label: `PLD incorreta!`,
screens: [
`&nbsp;`,
`&nbsp;PLD&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A PLD esta com um arquivo modificado,`,`Modelo de PLD incorreta.`,],
solutions: [
`Verificar o Modelo correto da PLD.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
