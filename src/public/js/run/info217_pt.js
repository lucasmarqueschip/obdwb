//Capa
nomeCarga = "Leitura de Senha ECU GM VHC com BCM via OBD (Chile e México)";
revCarga = "Rev. 2";
dataManual = "Fevereiro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha de 4 dígitos da ECU usada para realizar a programação de chaves Opel 2  dos veículos contidos na aplicação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Corsa III NB PWR 1.6 (Chile)",
years: "2010 a 2011"
},
{
manufacturer: "GM",
model: "Chevy 1.6 (México)",
years: "2006 a 2010"
},
];
applicationObs = createObs("Observação: ECUs testadas: FKRP, FKBB, FAHZ, FJBR e FKBC.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "Cabo universal + adaptador A1.<br />", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Todos os acessórios conectados no OBDMap. <br />", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura da senha de 4 dígitos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Delco VHC BCM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco VHC BCM`, `>Corsa3/Chevy`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa3/Chevy`, `>Ler senha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Identificacao&nbsp;da`,
`ECU:&nbsp;****&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Identificação da ECU. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`IMO&nbsp;OK!`,
`<br />`,
],
help: `Senha de 4 dígitos lida da central é igual a
senha do imobilizador. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chassi:&nbsp;********`,
`*********`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de leitura da ECU.`,],
solutions: [
`Verificar aplicação,`,`Contate o suporte técnico.`,]
},

{ label: `Senha: **** IMO nao presente`,
screens: [
`&nbsp;`,
`Senha:&nbsp;****`,
`IMO&nbsp;nao&nbsp;presente`,
`<br />`,
],
causes: [
`O imobilizador não está instalado no veículo.`,`Defeito no imobilizador.`,`Mau contato entre o Imobilizador e o plug.`,],
solutions: [
`Confira a conexão do imobilizador Opel 2.`,`Conferir parte elétrica do veículo.`,]
},

{ label: `Senha: **** IMO Falha!`,
screens: [
`&nbsp;`,
`Senha:&nbsp;****`,
`IMO&nbsp;Falha!`,
`<br />`,
],
causes: [
`ECU não casada com o imobilizador.`,`Senha incorreta.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
