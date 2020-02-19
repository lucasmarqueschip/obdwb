//Capa
nomeCarga = "Geração de Chaves e Telecomandos Fiat Code 2 BC 326 via OBD";
revCarga = "Rev. 11";
dataManual = "Outubro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de até 8 transponders com ou sem telecomando via OBD em veículos que utilizam o Body Computer 326 (BC 326).`,
`Esta função é feita por diagnose e utiliza o Módulo de Transponder conectado ao OBDMap.`,
` <obs>`,
`Observação 1:`,
` O transponder / telecomando ficará dedicado ao veículo, não podendo ser utilizado em outro veículo. (É possível desbloquear o transponder para reutilizá-lo em outro veículo usando a função de desbloqueio conforme a Página 14)`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Novo Palio 1.0",
years: "2011 a 2014"
},
{
manufacturer: "Fiat",
model: "Novo Palio 1.4",
years: "2011 a 2014"
},
{
manufacturer: "Fiat",
model: "Grand Siena 1.4",
years: "2012 a 2014"
},
{
manufacturer: "Fiat",
model: "Grand Siena 1.6",
years: "2012 a 2014"
},
];
applicationObs = createObs("Observação 2: O veículo deve utilizar o BC 326. Utilize a função de identificação dos BCs FIAT para identificar o sistema conforme descrito na Página 13.", undefined, undefined)



resources = [
{title: "Identificando os transponders e telecomandos:", 
description: "Pode-se utilizar na programação:<br />1 - Chave seca com PCF7936 virgem<br />2 - Chave com telecomando com PCF7946 virgem:<br />Com CI de 8 pinos: Compatível apenas para o Pálio e Grand Siena.<br />Com CI de 10 pinos: Compatível apenas para o Bravo.<br />Com CI de 16 pinos<br />", 
ballon: "Chave com telecomando montada.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Chave com telecomando.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br />1 - Chave seca com PCF7936 virgem<br />2 - Chave com telecomando com PCF7946 virgem:<br />Com CI de 8 pinos: Compatível apenas para o Pálio e Grand Siena.<br />Com CI de 10 pinos: Compatível apenas para o Bravo.<br />Com CI de 16 pinos<br />", 
ballon: "PCF7936 (ID46) (Virgem).", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/PCF7936 (ID46) virgem.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br />1 - Chave seca com PCF7936 virgem<br />2 - Chave com telecomando com PCF7946 virgem:<br />Com CI de 8 pinos: Compatível apenas para o Pálio e Grand Siena.<br />Com CI de 10 pinos: Compatível apenas para o Bravo.<br />Com CI de 16 pinos<br />", 
ballon: "PCF7936 (ID46) (Virgem).", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/PCF7946 (ID 46) Chip.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br />1 - Chave seca com PCF7936 virgem<br />2 - Chave com telecomando com PCF7946 virgem:<br />Com CI de 8 pinos: Compatível apenas para o Pálio e Grand Siena.<br />Com CI de 10 pinos: Compatível apenas para o Bravo.<br />Com CI de 16 pinos<br />", 
ballon: "Telecomando com PCF7946 virgem e com CI de 8 pinos.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Telecomando com PCF794 com 8 pinos.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br />1 - Chave seca com PCF7936 virgem<br />2 - Chave com telecomando com PCF7946 virgem:<br />Com CI de 8 pinos: Compatível apenas para o Pálio e Grand Siena.<br />Com CI de 10 pinos: Compatível apenas para o Bravo.<br />Com CI de 16 pinos<br />", 
ballon: "Telecomando com PCF7946 virgem e com CI de 10 pinos.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Telecomando com PCF7946 (ID46) virgem com 16 pinos.jpg"},

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
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Conectando os acessórios", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conectando os acessórios 1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conectando os acessórios 2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conectando os acessórios 3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conectando os acessórios 4.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conecte o cabo de alimentação ou módulo transponder.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Conecte o cabo na bateria.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/Todos os acessórios conectados.jpg"},

{title: "", 
description: "", 
ballon: "COLOCAR ESSA IMAGEM EM OUTRAS MENSAGENS ERRO DE COMUNICAÇÃO com a seguinte descrição: MÓDULO DE ALARME.", 
image: "/images/Funções Específicas/OBD0180 Geração Fiat BC 326-OBD/OUTRAS MENSAGENS.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o desbloqueio do transponder já programado`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio EVO`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Marelli 326`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
