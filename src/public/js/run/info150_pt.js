//Capa
nomeCarga = "Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307) via pinça";
revCarga = "Rev. 3";
dataManual = "Junho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos da ECU ME 7.4.9 via pinça.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Peugeot",
model: "206 1.4 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "206 1.6 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "207 1.4 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "207 1.6 16V",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "307 1.4 16V",
years: "2008 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando e desmontando a ECU ME 7.4.9:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 1.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave torx para retirar os parafusos fixadores que prendem a tampa da ECU.", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 2.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 3.jpg"},

{title: "Localizando e conectando a pinça na memória 95320:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Localizando a memória 95320 1.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Localizando a memória 95320 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>Bosch Me7.4.9`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.9`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95320`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
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
`Senha:&nbsp;&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`ECU ou memória com problema.`,],
solutions: [
`Verificar a conexão da pinça na memória,`,`Verificar se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
},

{ label: `Arquivo da ECU Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;ECU&nbsp;Invalido!`,
`<br />`,
],
causes: [
`A ECU está com o arquivo corrompido.`,],
solutions: [
]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A ECU ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
