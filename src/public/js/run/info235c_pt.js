//Capa
nomeCarga = "Programação de Chaves Ford F-150 Americana";
revCarga = "Rev. 2";
dataManual = "Dezembro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves para o veículo.`,
`Adiciona chaves para o veículo.`,
`<obs>`,
`Observações: `,
`- No procedimento de programação de chaves todas as chaves existentes são apagadas.`,
`- Ainda no procedimento de programação de chaves, é necessário ter no mínimo  duas chaves em mãos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "F-150 6.0",
years: "2011 a 2013"
},
{
manufacturer: "Ford",
model: "F-150 6.2",
years: "2011 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize um transponder ID 4D63 especial (40 bits).", 
image: "/images/Transponders/ID 4D63 T32 especial.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na área C5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação ou adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`F150`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

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

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo fora da aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
