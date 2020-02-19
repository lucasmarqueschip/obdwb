//Capa
nomeCarga = "Leitura de senha ECU GM Delco E83 tipo 2 (Imob 5) via OBD";
revCarga = "Rev. 1";
dataManual = "Novembro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha de 4 dígitos dos veículos que possuem a ECU Delco E83 tipo 2 conforme a aplicação, a senha é utilizada para programação de chaves;`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2013 a 2015"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2012 a 2015"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2013 a 2015"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2014"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Tracker 1.8",
years: "2014 a 2015"
},
];
applicationObs = createObs("Atenção!", "Existem outros veículos que utilizam a ECU Delco E83, porém somente é possível ler a senha com esta carga nos veículos da aplicação acima.", undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "Área A5: Cobalt, Cruze, Onix, Prisma, Sonic, Spin e Tracker.<br />Área C5: S10 Flex<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chassi:*********`,
`********&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a ECU é original do veiculo.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Nesse passo em alguns casos o OBDMap pode indicar “Desligue a Chave e tecle <OK>”, e alguns momentos depois indicar “Ligue a Chave e tecle <OK>”,e continuar o procedimento.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Anote a Senha`
},
{lines: [
`&nbsp;`,
`&nbsp;ECU&nbsp;Invalida!`,
`<br />`,
`<br />`,
],
help: ``
},
]}
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios,`,`Sistema do veículo diferente da aplicação dessa carga.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de leitura da ECU.`,],
solutions: [
`Verificar aplicação.`,`Contate suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
