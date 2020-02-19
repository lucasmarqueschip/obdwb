//Capa
nomeCarga = "Descodificar ECU VW MP9.0";
revCarga = "Rev. 1";
dataManual = "Abril 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Descodifica a ECU VW MP9.0.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Gol 1.0",
years: "1999 a 2003"
},
{
manufacturer: "VW",
model: "Kombi",
years: "1999 a 2004"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Identificando e desmontando a ECU MP9.0", 
description: "Este procedimento é válido para dois modelos desta ECU, externamente elas são iguais, internamente elas diferem pela placa de circuito. Podem também ser encontrados dois modelos de memória, a 24C02 e a B58253. A posição da soic e do jumper a ser feito não muda.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/ECU 1.jpg"},

{title: "", 
description: "Este procedimento é válido para dois modelos desta ECU, externamente elas são iguais, internamente elas diferem pela placa de circuito. Podem também ser encontrados dois modelos de memória, a 24C02 e a B58253. A posição da soic e do jumper a ser feito não muda.", 
ballon: "Retire a tampa de proteção da ECU para acesso ao circuito.", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/ECU 2.jpg"},

{title: "", 
description: "Este procedimento é válido para dois modelos desta ECU, externamente elas são iguais, internamente elas diferem pela placa de circuito. Podem também ser encontrados dois modelos de memória, a 24C02 e a B58253. A posição da soic e do jumper a ser feito não muda.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/ECU 3.jpg"},

{title: "Procedimento de jumper na central", 
description: "O circuito da central provoca interferência na programação da memória, então é necessário fazer um jumper no cristal da central conforme mostrado abaixo:<br /><br />Observação: Este procedimento é válido para os dois modelos de centrais, pois a posição do jumper não muda. <br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/Jumper.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Observação: Este procedimento é válido para os dois modelos de centrais, pois a posição da memória não muda. <br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/Localizando a memória.jpg"},

{title: "", 
description: "Observação: Este procedimento é válido para os dois modelos de centrais, pois a posição da memória não muda. <br />", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0050 -  Descodificar ECU MP9.0  VW/Pinça conectada.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a descodificação da central MP9.0`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch MP9.0`], help: `Tecle OK`, menu: 1000},
{lines: [`Descodificação da ECU`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A ECU ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,`Conferir o bom estado da memória e central.`,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mal contato da pinça com a memória,`,`Mal contato da pinça com o OBDMap,`,`Memória ou central com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da memória e central,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mal contato da pinça com a memória,`,`Mal contato da pinça com o OBDMap,`,`Central ou memória com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da memória e central,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`Memória ou central com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da memória e da central.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
