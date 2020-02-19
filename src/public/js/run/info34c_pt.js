//Capa
nomeCarga = "Leitura de senha ME 7.9.9 (Astra\Vectra\Zafira 2010) via OBD";
revCarga = "Rev. 1";
dataManual = "Maio 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via OBD. Para a programação de chaves poder utilize a carga "Opel 2" da carga básica.`,
`Gravação de chassi. Nos casos de troca de ECU defeituosa, esta carga poderá ser usada para fazer o casamento da informação do chassi.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 2.0 Flex",
years: "2009 a 2010"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2009 a 2010"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2009 a 2010"
},
{
manufacturer: "GM",
model: "Zafira 2.0 Flex",
years: "2009 a 2010"
},
];
applicationObs = createObs("Atenção: Esta carga realiza o procedimento apenas nos veículos que possuem o ano de", "fabricação 2009 e 2010 (não é confiável ver a numeração do chassi pelo vidro do veículo).", undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Astra e Zafira fica localizada E9/F9,<br />A tomada de diagnóstico do Vectra fica localizada A5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-E9-F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Vectra`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.9`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 3 - Vectra 2009`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Vectra`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.9`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Gravação de chassi`,
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
