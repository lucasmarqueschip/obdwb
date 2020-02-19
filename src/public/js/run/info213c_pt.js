//Capa
nomeCarga = "Geração de chaves Iveco BC 95160 (Daily)";
revCarga = "Rev. 2";
dataManual = "Dezembro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`A leitura do PIN Code.`,
`Geração de até 8 chaves para veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Iveco",
model: "Daily 3.0",
years: "2013 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

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

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando o BC do veículo:", 
description: "O BC fica localizado na posição A5 no veículo.<br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando o BC:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 2.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 3.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Localizando a área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU no BC;<br />1 => Fio Amarelo<br />2 => Fio Verde<br />3 => Fio Preto<br />4 => Fio Azul<br />5 => Fio Vermelho<br />6 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 3.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Atenção: Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a placa do BC, evitando danos ao módulo e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Iveco`], help: `Tecle OK`, menu: 1000},
{lines: [`Daily`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

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
`Mau contato no cabo MCU com o BC,`,`BC ou memória com problema,`,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes.`,]
},

{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BC,`,`Mau contato do cabo MCU com o OBDMap,`,`BC ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na memória, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes .`,]
},

{ label: `Arquivo do BC incorreto! Consulte Manual para continuar!`,
screens: [
`&nbsp;Arquivo&nbsp;do&nbsp;BC`,
`&nbsp;&nbsp;&nbsp;incorreto!`,
`Consulte&nbsp;Manual`,
`para&nbsp;continuar!`,
],
causes: [
`O arquivo é diferente da aplicação ou está corrompido.`,],
solutions: [
`Consulte suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
