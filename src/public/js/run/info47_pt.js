//Capa
nomeCarga = "Leitura Partida de Emergência, Leitura de Chave Mestra - 4AFB/59FB/4SF e Reset 4AFB";
revCarga = "Rev. 1";
dataManual = "Abril 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código ERA e código eletrônico das Centrais 4AFB.P1, 4AFB.PF,  4AFB.PK, 4AFB.UB2, 4AFB.UF1, 4AFB.UG, 4AFB.UN, 4SF e 59FB.`,
`Leitura da Partida de Emergência e chave Mestra.`,
`Reset da Central 4AFB.`,
`<obs>`,
`Observação: Nas Centrais IAW4SF e IAW 4AFB, conseguimos realizar a leitura somente uma vez. Para ler novamente a Senha do Módulo, deve desconectar o OBDMap ou desenergizar a central, retirando o Jacaré do Cabo de Diagnose que acompanha o Kit da bateria por alguns instantes. Esta é uma característica da comunicação destes módulos.`,

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
model: "Fiorino 1.5",
years: "1997 a 2000"
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
years: "2000 a 2005"
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
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na área A4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},

{title: "Identificando e desmontando a ECU IAW 4AFB", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 1.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave Torx para remover os parafusos da ECU.", 
image: "/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 2.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda faça uma alavanca para ter acesso a placa da ECU.", 
image: "/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 3.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Localizando a memória.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Pinça conectada.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura do Código Eletrônico (chave Mestra)`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 4AFB.P1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 4AFB.P1`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: ``,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 4AFB.PF`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 4AFB.PF`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;Cod.&nbsp;ERA:`,
`****************`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Tecle OK!`
},
{title: `Partida de emergência`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>Part. Emergen.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`COD.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Digite o código eletrônico.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Tente&nbsp;a&nbsp;partida`,
`&nbsp;&nbsp;&nbsp;&nbsp;por&nbsp;10&nbsp;seg.`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o reset da ECU IAW 4AFB:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>IAW 4AFB`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`IAW 4AFB`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `ECU resetada.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Erro na leitura!`,
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
