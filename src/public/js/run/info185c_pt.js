//Capa
nomeCarga = "Programação de telecomandos Fiat CODE2 (OBD)";
revCarga = "Rev. 5";
dataManual = "Janeiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar os telecomandos dos modelos da linha Fiat citados abaixo.`,
` O número máximo de telecomandos programados por veículos são oito, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Punto 1.4/1.8",
years: "2009 a 2012"
},
{
manufacturer: "Fiat",
model: "Idea 1.4/1.8",
years: "2011 a 2015"
},
{
manufacturer: "Fiat",
model: "Stilo 1.8/2.4",
years: "2001 a 2011"
},
{
manufacturer: "Fiat",
model: "Linea 1.4/1.8/1.9",
years: "2009 a 2012"
},
];
applicationObs = createObs("Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga.", undefined, undefined)



resources = [
{title: "", 
description: "Atenção: Só é possível programar os telecomandos originais que já venham montada na chave<br />"Canivete"<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0185 Programação de telecomandos Fiat CODE2 (OBD)/Exemplos de telecomandos.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo CAN ou cabo Universal + adaptador A3.", 
image: "/images/Acessórios/Cabo CAN.jpg"},

{title: "", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados fica localizada entre a área A5 e B5.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-B5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Punto`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
