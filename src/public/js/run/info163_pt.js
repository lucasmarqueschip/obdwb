//Capa
nomeCarga = "Reset ECU IAW 6LP1";
revCarga = "Rev. 2";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU IAW 6LP1 `,
`O procedimento é realizado via OBD. Porém será necessário retirar a ECU do veículo para soldar dois resistores na mesma a fim de coloca-la em boot, depois de concluído o reset será necessário a remoção dos resistores.`,
`<obs>`,
`Observação: `,
`A ECU não se auto codifica no veículo, será necessário após o reset realizar sua adaptação no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "Xsara Picasso 2.0 16v",
years: "2000 a 2011"
},
{
manufacturer: "Peugeot",
model: "206 2.0 16v",
years: "2000 a 2011"
},
{
manufacturer: "Peugeot",
model: "307 2.0 16v",
years: "2000 a 2011"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Utilize dois resistores de 560 OHM.", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Resistor 560 Ohm.jpg"},

{title: "Identificando a ECU IAW 6LP1:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Identificando a ECU IAW 6LP1.jpg"},

{title: "Localizando a região para soldar os resistores:", 
description: "", 
ballon: "Identificando a área de soldagem dos resistores.", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Localizando a região para soldar os resistores.jpg"},

{title: "", 
description: "", 
ballon: "Solde o resistor de 560 OHM nos pontos indicados", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Localizando a região para soldar os resistores 2.jpg"},

{title: "", 
description: "", 
ballon: "Solde o segundo resistor de 560 OHM nos pontos indicados.", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Localizando a região para soldar os resistores 3.jpg"},

{title: "", 
description: "", 
ballon: "Resistores soldados na placa ECU.", 
image: "/images/Funções Específicas/OBD0163 Reset ECU IAW 6LP1/Resistores soldados na placa ECU.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando Reset 6LP1`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>IAW 6LP1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 6LP1`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
