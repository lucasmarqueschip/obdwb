//Capa
nomeCarga = "Programação de Telecomando GM (sistemas GM Alarme 2, GM Alarme 2009  e GM Alarme Meriva)";
revCarga = "Rev. 1";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagamento de telecomando.`,
`Programação de telecomando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8",
years: "2002 a 2011"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "2002 a 2011"
},
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Meriva 1.8",
years: "2002 a 2010"
},
{
manufacturer: "GM",
model: "Meriva 1.8 16V",
years: "2002 a 2010"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Montana 1.4 New",
years: "2010 a 2011"
},
{
manufacturer: "GM",
model: "Prisma",
years: "2009 a 2011"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2005 a 2011"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2005 a 2011"
},
{
manufacturer: "GM",
model: "Zafira 2.0",
years: "2002 a 2011"
},
{
manufacturer: "GM",
model: "Zafira 2.0 16V",
years: "2002 a 2011"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Celta e Prisma estão localizadas na área A4.<br />A tomada de diagnóstico do veículo Vectra está localizada na área A5.<br />A tomada de diagnóstico do veículo Montana pode estar localizado na área F5 ou F9.<br />A tomada de diagnóstico dos veículos Astra e Zafira estão localizadas nas áreas F9.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4 - A5 - F5 - F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
];
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Conferir a senha digitada.`,]
},

{ label: `Tempo de espera: ** minutos`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera:`,
`**&nbsp;minutos`,
`<br />`,
],
causes: [
`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas.`,],
solutions: [
`Contate o suporte técnico.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão travar ou destravar não foi pressionado no tempo devido.`,],
solutions: [
`Pressionar o telecomando no momento indicado pelo OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
