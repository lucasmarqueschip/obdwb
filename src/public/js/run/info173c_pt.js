//Capa
nomeCarga = "Geração de chaves para VW Fox 2013 Imob 5 Painel Marelli";
revCarga = "Rev. 1";
dataManual = "Março 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de até 8 chaves para o painel Magneti Marelli com microcontrolador 9S12XHZ256 e sistema VW Imob7 (com o hardware do painel igual ao mostrado na Página 6). Para realizar o procedimento é necessário utilizar o cabo MCU e o módulo de transponder com o painel em bancada, após o procedimento as chaves já estarão funcionando no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2012 a 2013"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2012 a 2013"
},
];
applicationObs = createObs("Observação: Somente para painel igual ao mostrado na Página 6.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID48-CAN (TP23).jpg"},

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

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "Utilize uma chave de fenda para soltar as 7 travas que prendem a capa do painel.", 
image: "/images/Funções Específicas/OBD0173 Geração de chaves para VW Fox 2013 Imob 7 Painel Marelli/Identificando e desmontando o painel.jpg"},

{title: "Conectando o cabo MCU:", 
description: "Localizando os pontos de soldagem do cabo MCU:<br />", 
ballon: "Área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0173 Geração de chaves para VW Fox 2013 Imob 7 Painel Marelli/Conectando o cabo MCU.jpg"},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:<br />", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho<br />2 => Fio Amarelo<br />3 => Fio Preto<br />4 => Fio Verde", 
image: "/images/Funções Específicas/OBD0173 Geração de chaves para VW Fox 2013 Imob 7 Painel Marelli/Identificando os pontos a serem soldados.jpg"},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:<br />", 
ballon: "Cabo MCU conectado no painel.", 
image: "/images/Funções Específicas/OBD0173 Geração de chaves para VW Fox 2013 Imob 7 Painel Marelli/Cabo MCU conectado.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0173 Geração de chaves para VW Fox 2013 Imob 7 Painel Marelli/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Marelli`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração da primeira chave`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,`Transponder  com problema;`,`O transponder utilizado não é um ID48 virgem;`,`Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder;`,`Utilizar um transponder ID48 virgem;`,`Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
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

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

{ label: `Falha ao remover Lock do ID48!`,
screens: [
`&nbsp;`,
`Falha&nbsp;ao&nbsp;remover`,
`&nbsp;Lock&nbsp;do&nbsp;ID48!`,
`<br />`,
],
causes: [
`O transponder utilizado não é um ID48 virgem.`,],
solutions: [
`Utilize um transponder ID48 virgem`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
