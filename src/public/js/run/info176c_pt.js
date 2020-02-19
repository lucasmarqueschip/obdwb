//Capa
nomeCarga = "Geração de Transponder Fiat BC Marelli 9S12 128/256";
revCarga = "Rev. 5";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de até 8 transponders via OBD em veículos que utilizam microcontrolador MC9S12DG256B e MC912DG128A.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Stilo 1.8 e 2.4",
years: "2003 a 2007"
},
{
manufacturer: "Fiat",
model: "Palio 1.4",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Siena 1.4",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Strada 1.4",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Doblo 1.4",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Idea 1.4",
years: "2004 a 2015"
},
{
manufacturer: "Fiat",
model: "Palio 1.8",
years: "2004 a 2011"
},
{
manufacturer: "Fiat",
model: "Siena 1.8",
years: "2004 a 2011"
},
{
manufacturer: "Fiat",
model: "Strada 1.8",
years: "2004 a 2015"
},
{
manufacturer: "Fiat",
model: "Idea 1.8",
years: "2004 a 2015"
},
{
manufacturer: "Fiat",
model: "Doblo 1.8",
years: "2004 a 2011"
},
{
manufacturer: "Fiat",
model: "Palio 1.6",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Siena 1.6",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Strada 1.6",
years: "2004 a 2007"
},
{
manufacturer: "Fiat",
model: "Idea 1.6",
years: "2004 a 2015"
},
];
applicationObs = createObs("Observação: O veículo deve utilizar o BCM 9S12, utilize a função de identificação das BCs FIAT para identificar seu BCM conforme descrito na página XX.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

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

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Conectando os acessórios", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 1.1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 2.2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 3.3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 4.4.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 5.5.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Conectando os acessórios 6.6.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0176 Geração Fiat Code 2 BC (9S12) via OBD/Todos os acessorios 1.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração e a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Marelli 9S12`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `ERRO! Aguarde 5 minutos e tente novamente`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERRO!`,
`&nbsp;&nbsp;&nbsp;Aguarde&nbsp;5`,
`minutos&nbsp;e&nbsp;tente`,
`&nbsp;&nbsp;&nbsp;novamente`,
],
causes: [
`O BCM esta com defeito.`,],
solutions: [
`Desligue e ligue da bateria, tente novamente depois de 5 minutos.`,]
},

{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,`Transponder  com problema;`,`O transponder utilizado não é um ID48 virgem;`,`Transponder não esta bem posicionado no Módulo de transponder.`,`Mau contato no cabo Fiat com o módulo de transponder ou do jacaré vermelho com a bateria.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder;`,`Utilizar um transponder ID48 virgem;`,`Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,`Conferir conexão do cabo Fiat com o módulo de transponder e do jacaré vermelho com a bateria.`,]
},

{ label: `BC DESCONHECIDO! COD: ** ** ** ** ** ** ** **`,
screens: [
`BC&nbsp;DESCONHECIDO!`,
`COD:&nbsp;**&nbsp;**&nbsp;**&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;**&nbsp;**&nbsp;**`,
`<br />`,
],
causes: [
`Este BC não inclui em nossa tabela de aplicação.`,],
solutions: [
`Verificar aplicação,`,`Consulte o suporte técnico.`,]
},

{ label: `Saldo Web Service Insuficiente!`,
screens: [
`&nbsp;&nbsp;&nbsp;Saldo&nbsp;Web`,
`&nbsp;&nbsp;&nbsp;&nbsp;Service`,
`&nbsp;Insuficiente!`,
`<br />`,
],
causes: [
`O crédito total disponível se esgotou.`,],
solutions: [
`Entrar em contato com o comercial, ou com o suporte.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
