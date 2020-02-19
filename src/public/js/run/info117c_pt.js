//Capa
nomeCarga = "Geração de Transponder PLD Modelo A";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar chaves para caminhões Mercedes que utilizam a PLD do modelo A como mostra na Página 6.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mercedes",
model: "1944S",
years: "1998 a 2001"
},
{
manufacturer: "Mercedes",
model: "1938S",
years: "1998 a 2001"
},
];
applicationObs = createObs("Observação: Nem todos os veículos na faixa de ano citados acima possuem os modelos de PLD citados. Alguns sistemas mais antigos que utilizam estes mesmos modelos de PLD não possuem sistema de imobilizador.", undefined, undefined)



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
ballon: "Cabo MCU. Necessário para conectar a BC ao OBDMap.", 
image: "/images/Acessórios/Cabo MCU1.jpg"},

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

{title: "Identificando PLD de modelo A:", 
description: "Retire a PLD do caminhão e leve-a para bancada. O modelo A de PLD tem como característica principal possuir uma memória 93C66, porém esta característica não é suficiente para identificar o modelo da PLD, será necessário comparar se a placa é igual à mostrada neste manual.<br /><br />", 
ballon: "Identificando memória e PLD modelo A.", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Identificando a PLD.jpg"},

{title: "", 
description: "Retire a PLD do caminhão e leve-a para bancada. O modelo A de PLD tem como característica principal possuir uma memória 93C66, porém esta característica não é suficiente para identificar o modelo da PLD, será necessário comparar se a placa é igual à mostrada neste manual.<br /><br />", 
ballon: "Memória 93C66.", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Memória PLD.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Pontos de soldagem 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1 => Fio Vermelho<br />2 => Fio Preto<br />3 => Fio Roxo<br />4 => Fio Azul<br />5 => Fio Amarelo<br />6 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Pontos de soldagem 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios na PLD, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Pontos de soldagem 3.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a PLD, evitando danos a PLD e ao OBDMap.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0117 Geração de transponder PLD Modelo A/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Gerar transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes Truck`], help: `Tecle OK`, menu: 1000},
{lines: [`1944`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo A`], help: `Tecle OK`, menu: 1000},
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
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga do módulo de transponder para identificar o transponder ou para deixá-lo virgem (ID 20) caso seja necessário.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com a PLD,`,`Mau contato no cabo MCU com o OBDMap,`,`PLD com problema.`,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},

{ label: `A PLD esta descodificada!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;A&nbsp;PLD&nbsp;esta`,
`&nbsp;descodificada!`,
`<br />`,
],
causes: [
`A PLD está provavelmente descodificada,`,`O sistema não possui imobilizador.`,],
solutions: [
]
},

{ label: `Arquivo da PLD Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;PLD&nbsp;Invalido!`,
`<br />`,
],
causes: [
`A PLD está com o arquivo corrompido.`,],
solutions: [
]
},

{ label: `PLD incorreta!`,
screens: [
`&nbsp;`,
`&nbsp;PLD&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A PLD está com um arquivo modificado,`,`Modelo de PLD incorreta.`,],
solutions: [
`Verificar o modelo correto da PLD.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
