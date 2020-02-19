//Capa
nomeCarga = "Leitura de senha Hyundai SMARTRA-3 HB20 (2013-2019) via cabo MCU";
revCarga = "Rev. 1";
dataManual = "Fevereiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha do imobilizador do Hyundai HB20.`,
`          ATENÇÃO!`,
`Antes de retirar o Imobilizador do veículo, certifique-se que a bateria esteja desconectada. E só após reconectar o imobilizador no veículo reconecte a bateria.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Hyundai",
model: "HB20 1.0",
years: "2013 a 2019"
},
{
manufacturer: "Hyundai",
model: "HB20 1.6",
years: "2013 a 2019"
},
];
applicationObs = createObs("Somente veículos equipados com o imobilizador SMARTRA-3 (microcontrolador STM8AF6266TA).", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Localizando o imobilizador do veículo:", 
description: "", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Identificando o imobilizador:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0238 HB20/Caixinha.jpg"},

{title: "Localizando o microcontrolador:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0238 HB20/Identificando.jpg"},

{title: "", 
description: "", 
ballon: "Microcontrolador<br />STM8AF6266TA", 
image: "/images/Funções Específicas/OBD0238 HB20/IdentificandoImo.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0238 HB20/Imobilizador.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0238 HB20/Soldados.JPG"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0238 HB20/Todos Conectadosjpg.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Hyundai`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hyundai`, `>Imob HB20`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob HB20`, `>Ler senha?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;MCU&nbsp;no&nbsp;imob.`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;senha`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Senha:&nbsp;******`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do Imobilizador. <OK> p/ repetir`,
screens: [
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador.`,
`<br />`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
],
causes: [
`Mau contato dos fios do cabo MCU com o Imobilizador;`,`Imobilizador com problema;`,`Os fios do cabo MCU podem ter sido ligados errado;`,`Mau contato do cabo MCU com o OBDMap.`,],
solutions: [
`Conferir correta ligação do cabo MCU;`,`Conferir se o cabo MCU esta bem conectado ao OBDMAP.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
