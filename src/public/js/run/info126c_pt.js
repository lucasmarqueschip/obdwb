//Capa
nomeCarga = "Programação Alarme JAC ( J2 / J3 / J5 / J6 )";
revCarga = "Rev. 3";
dataManual = "Julho 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar os telecomandos dos modelos da linha JAC citados abaixo.`,
`O número máximo de telecomandos programados por veículos são três, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "JAC",
model: "J2 1.4",
years: "2012 a 2013"
},
{
manufacturer: "JAC",
model: "J3 1.4",
years: "2009 a 2012"
},
{
manufacturer: "JAC",
model: "J5 1.5",
years: "2009 a 2012"
},
{
manufacturer: "JAC",
model: "J6 2.0",
years: "2009 a 2012"
},
];
applicationObs = createObs("Observações:", "- Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga.", "- Só é possível programar os telecomandos originais, e os telecomandos existentes serão apagados automaticamente.")



resources = [
{title: "", 
description: "", 
ballon: "Exemplo de telecomando.", 
image: "/images/Chaves e Telecomandos/Chaves Jac.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize cabo universal Connect", 
image: "/images/Acessórios/Cabo JC.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados acima fica localizada na área A5.<br /><br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação dos telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`JAC`], help: `Tecle OK`, menu: 1000},
{lines: [`J5`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
