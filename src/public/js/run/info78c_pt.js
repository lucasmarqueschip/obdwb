//Capa
nomeCarga = "Reset 4AFB / 59FB / 49F";
revCarga = "Rev. 2";
dataManual = "Maio 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código eletrônico das ECU's IAW 4AFB e IAW 59FB.`,
`Com o código lido é possível realizar a partida de emergência e a programação de chaves.`,
``,
`Reset das ECU's IAW 4AFB, IAW 59FB e IAW 49F.`,
`Com esta função é possível resetar a ECU, deixando ela virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Brava 1.6",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Doblo 1.8",
years: "2003 a 2006"
},
{
manufacturer: "Fiat",
model: "Fiorino 1.3",
years: "2003 a 2009"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.0",
years: "2001 a 2009"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.3 8V",
years: "2003 a 2009"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0",
years: "2000 a 2009"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.3",
years: "2003 a 2009"
},
{
manufacturer: "Fiat",
model: "Strada Fire 1.3",
years: "2003 a 2009"
},
{
manufacturer: "Fiat",
model: "Uno Fire 1.3",
years: "2003 a 2009"
},
{
manufacturer: "Fiat",
model: "Uno Mille Fire",
years: "2001 a 2009"
},
];
applicationObs = createObs("Observação: Nem todos os veículos relacionados acima possuem as ECU's 49FB, 59FB e 49F. Verifique a etiqueta da ECU para identificá-la.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo C1. Conecta a pinça ao OBDMap.", 
image: "/images/Acessórios/Cabo C1.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a ECU 4AFB:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Identificando a ECU 4AFB.jpg"},

{title: "Desmontando a ECU 4AFB:", 
description: "", 
ballon: "Com o auxílio de uma chave torx T15, retire os parafusos fixadores que prendem a tampa da ECU.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Desmontando a ECU 4AFB.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Desmontando a ECU 4AFB 2.jpg"},

{title: "Localizando a memória 95160:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Localizando a memória 95160.jpg"},

{title: "Conectando a pinça na memória 95160:", 
description: "", 
ballon: "Conecte a pinça na memória 95160.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Conectando a pinça na memória 95160.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Conectando a pinça na memória 95160 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 4AFB/Todos os acessórios conectados.jpg"},

{title: "Identificando a ECU 59FB:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Identificando a ECU 59FB.jpg"},

{title: "Desmontando a ECU 59FB:", 
description: "", 
ballon: "Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Desmontando a ECU 59FB.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Desmontando a ECU 59FB 2.jpg"},

{title: "Localizando a memória 95080:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Localizando a memória 95080.jpg"},

{title: "Conectando a pinça na memória 95080:", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Conectando a pinça na memória 95080.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória 95080.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Conectando a pinça na memória 95080 2.jpg"},

{title: "Todos os acessorios conectados:", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a placa. Utilize o cabo C1.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 59FB/Todos os acessórios conectados.jpg"},

{title: "Identificando a ECU 49F:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Identificando a ECU 49F.jpg"},

{title: "Desmontando a ECU:", 
description: "", 
ballon: "Com o auxílio de uma chave torx T15, retire os parafusos fixadores para ter acesso à placa da ECU.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Desmontando a ECU 49F 2.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Desmontando a ECU 49F.jpg"},

{title: "Localizando a memória 95040 na ECU IAW 49F:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Localizando a memória 95040 na ECU IAW 49F.jpg"},

{title: "Conectando a pinça na memória 95040:", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Conectando a pinça na memória 95040.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória 95040.", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Conectando a pinça na memória 95040 2.jpg"},

{title: "Todos os acessórios conectados :", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e a placa, utilize o cabo C1.<br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0078 Reset 4AFB_59FB_49F/ECU 49F/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura do código eletrônico da ECU IAW 4AFB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4AF`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura da chave mestra`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o reset da ECU IAW 4AFB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4AF`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura do código eletrônico da ECU IAW 59FB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 59F`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura da chave mestra`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o Reset da ECU IAW 59FB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 59FB.P1`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o reset da ECU IAW 49F:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 49F`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},];
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`ECU com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECUe da memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,``,]
},

{ label: `Pinca invertida! Verifique...`,
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

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da memória ou ECU.`,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da memória e da ECU,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir o bom estado da memória ou ECU.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Caso a memória já tenha sido ressoldada, conferir se existe excesso de solda em seus terminais.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem`,`encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`ECU ou memória com problema,`,`Pinça foi conectada em outro componente,`,`Não está usando cabo C1.`,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Verificar se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo,`,`Conferir se a pinça e o cabo C1 estão bem conectados no OBDMap.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Caso a memória já tenha sido ressoldada, conferir se existe excesso de solda em seus terminais.`,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato no cabo C1 com o OBDMap ou com a pinça,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente,`,`Não está usando cabo C1.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se a pinça e o cabo C1 estão bem conectados no OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
