//Capa
nomeCarga = "Reset da ECU BOSCH 0281016223 (Ducato 10-14)";
revCarga = "Rev. 1";
dataManual = "Agosto 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do Código Eletrônico,`,
`Reset da ECU BOSCH 0281016223.`,
`Esta carga realiza a leitura do código eletrônico e o reset da ECU com numeração 51872711 e 51889158, deixando-a virgem, pronta para codificar automaticamente com um novo veículo.`,
``,
`Atenção!`,
`Se após o procedimento a luz de injeção fique acesa, dar partida no veiculo e aguardar alguns minutos, desligue o veiculo, aguarde alguns segundos, ao ligar o veiculo novamente a luz ira se apagar.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "Jumper 2.3 Multijet",
years: "2010 a 2014"
},
{
manufacturer: "Fiat",
model: "Ducato 2.3 Multijet",
years: "2010 a 2014"
},
{
manufacturer: "Peugeot",
model: "Boxer 2.3 Multijet",
years: "2010 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Identificando a ECU.", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/ECU.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/id 1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/id 2.jpg"},

{title: "Localizando a memória 95640:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/ECU 2.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/memoria.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o Reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Ducato`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch 0281016223`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do módulo.`,]
},

{ label: `ATENCAO! ECU desconhecida Deseja contin.? (X) NAO (OK) SIM`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`ECU&nbsp;desconhecida`,
`&nbsp;Deseja&nbsp;contin.?`,
`(X)&nbsp;NAO&nbsp;(OK)&nbsp;SIM`,
],
causes: [
`A ECU não corresponde a aplicação, continuar o procedimento não significa que o Reset ira funcionar corretamente.`,],
solutions: [
`Conferir a aplicação.`,`Consulte o Suporte Técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
