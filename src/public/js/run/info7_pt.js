//Capa
nomeCarga = "Leitura e Programação de Chaves Peugeot 206 - 207 - C3";
revCarga = "Rev. 6";
dataManual = "Julho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da Senha da BSI via Pinça.`,
`Programação de chaves via diagnostico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Peugeot",
model: "206 1.4",
years: "2004 a 2010"
},
{
manufacturer: "Peugeot",
model: "207 1.4",
years: "2007 a 2015"
},
{
manufacturer: "Citroen",
model: "C3 1.4",
years: "2002 a 2012"
},
{
manufacturer: "Citroen",
model: "C3 1.5",
years: "2002 a 2012"
},
{
manufacturer: "Citroen",
model: "Picasso 1.6",
years: "2006 a 2006"
},
{
manufacturer: "Citroen",
model: "Picasso 2.0",
years: "2006 a 2006"
},
];
applicationObs = createObs("O veículo deve utilizar o mesmo tipo de BSI com hardware igual o mostrado na página 6", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) virgem.", 
image: "/images/Transponders/PCF7936 Philips Virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A2.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área:<br />A BSI fica localizada na área B4.<br />No Citroen C3 o conector OBD fica localizado na área A4.<br />No Peugeot o conector OBD fica localizado na área F6 como mostra na figura abaixo.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4-B4-F6.jpg"},

{title: "Conectando a pinça no BSI:", 
description: "Observação: Retire o verniz sobre a memória para evitar mau contato.<br /><br /><br />", 
ballon: "Localizando a memória no BSI.", 
image: "/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Localizando a m emória no BSI.jpg"},

{title: "", 
description: "Observação: Retire o verniz sobre a memória para evitar mau contato.<br /><br /><br />", 
ballon: "Identificando o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Identificando o pino 1.jpg"},

{title: "", 
description: "Observação: Retire o verniz sobre a memória para evitar mau contato.<br /><br /><br />", 
ballon: "Pinça conectada na memória. O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Pinça conectada a memória.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>BSI Peugeot 206`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI Peugeot 206`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha. Ela será utilizada para a
programação de chaves.`
},
]
}, {title: `Realizando o a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>206`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`206`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Use`,
`&nbsp;Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: ``
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
`&nbsp;&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;mais&nbsp;chaves?`,
`<br />`,
],
help: `Tecle OK para mais chaves ou VOLTA  para sair.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`BSI ou memória com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
},

{ label: `Curto!`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A BSI ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Arquivo da BSI invalido`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da&nbsp;BSI&nbsp;`,
`invalido`,
`<br />`,
],
causes: [
`A BSI está com o arquivo corrompido.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
