//Capa
nomeCarga = "Leitura de senha e programação de chaves Jeep Compass (2008-2014)";
revCarga = "Rev. 1";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de 10 dígitos do Part Number via OBD, para checar a aplicação da carga.`,
`Leitura da senha de 4 dígitos via OBD para veículos que utilizam o sistema CAN 3.`,
`Apagar todas as chaves do veículo via OBD. As chaves apagadas poderão ser programadas`,
`novamente com a função de programação de chaves.`,
`Programação de até 5 chaves via OBD do sistema CAN 3.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Jeep",
model: "Compass",
years: "2008 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [];
instruction = [];
obdmap = true;
services = 
[]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
