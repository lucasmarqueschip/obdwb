//Capa
nomeCarga = "Leitura de Senha e Gravação de Chassi GM ECU M1.5.5";
revCarga = "Rev. 1";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos.`,
`Gravação de chassi.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8 (alc)",
years: "2000 a 2004"
},
{
manufacturer: "GM",
model: "Astra 1.8",
years: "1998 a 2004"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "1998 a 2004"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "\GM\Astra\Chaves\Opel 2\Bosch M1.5.5\Leitura de senha<br />", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "\GM\Astra\Chaves\Opel 2\Bosch M1.5.5\Leitura de senha<br />", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área F9.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a Leitura de Senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a Gravação de Chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Astra`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch M1.5.5`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Senha Resetada!`,
screens: [
`&nbsp;`,
`Senha`,
`&nbsp;&nbsp;&nbsp;Resetada!`,
`<br />`,
],
causes: [
`A ECU pode estar resetada,`,`O arquivo da ECU pode estar corrompido,`,`Arquivo da ECU inválido.`,],
solutions: [
]
},

{ label: `Erro de Comunicacao!`,
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
