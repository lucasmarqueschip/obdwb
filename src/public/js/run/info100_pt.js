//Capa
nomeCarga = "Reset das ECU’s Valeo V42 (Renault Clio, Sandero e Kangoo 1.6 2010-2011) e Hitachi ECCS2 (Nissan Tiida e Sentra 1.6 e 2.0 2007-2011) com memória 95640";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU Valeo V42 e Hitachi ECCS2.`,
`Com esta carga é possível fazer o reset das ECU's, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Clio 1.6",
years: "2010 a 2011"
},
{
manufacturer: "Renault",
model: "Sandero 1.6",
years: "2010 a 2011"
},
{
manufacturer: "Renault",
model: "Kangoo 1.6",
years: "2010 a 2011"
},
{
manufacturer: "Nissan",
model: "Tiida 1.6",
years: "2007 a 2011"
},
{
manufacturer: "Nissan",
model: "Tiida 2.0",
years: "2007 a 2011"
},
{
manufacturer: "Nissan",
model: "Sentra 1.6",
years: "2007 a 2011"
},
{
manufacturer: "Nissan",
model: "Sentra 2.0",
years: "2007 a 2011"
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

{title: "Identificando e desmontando a ECU Valeo V42:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Identificando e desmontando a ECU Valeo V42.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave torx para retirar os parafusosfixadores que prendem atampa da ECU.", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Desmontando a ECU Valeo V42.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Desmontando a ECU Valeo V42 2.jpg"},

{title: "Localizando e conectando a pinça na memória 95640:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Memória 95640/Localizando e conectando a pinça na memória 95640.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Memória 95640/Conectando a pinça na memória 95640.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Memória 95640/Conectando a pinça na memória 95640 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Memória 95640/Todos os acessórios conectados.jpg"},

{title: "Identificando a ECU Hitachi ECCS2:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Identificando a ECU Hitachi ECCS2.jpg"},

{title: "Localizando a memória 95640:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0100 Valeo V42 e Hitachi/Localizando a memória 95640.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Reset da ECU Valeo V42`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Valeo V42`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Valeo V42`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95640&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
]
}, {title: `Reset da ECU Hitachi ECCS2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Nissan`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Nissan`, `>Hitachi ECCS2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hitachi ECCS2`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95640&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
]
}, {title: `Reset da ECU Valeo V42`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Valeo V42`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Valeo V42`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Reset da ECU Hitachi ECCS2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Nissan`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Nissan`, `>Hitachi ECCS2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hitachi ECCS2`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Reset da ECU Valeo V42`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Valeo V42`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Valeo V42`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Reset da ECU Hitachi ECCS2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Nissan`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Nissan`, `>Hitachi ECCS2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hitachi ECCS2`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
othersMessage = [{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU e da memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`ECU ou memória com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da ECU e da memória.`,]
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
