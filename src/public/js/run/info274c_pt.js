//Capa
nomeCarga = "Adaptação BC Imob5 com ECU GM Delco E83";
revCarga = "Rev. 1";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adaptação do BC Imob 5 em veículos que utilizam a ECU GM Delco E83, tornando possível a sua substituição no veículo.`,
`<obs>`,
`Observação:`,
`O BC será casado H a ECU, o carro irá liberar partida, porém pode ocorrer de ser necessário a`,
`utilização de um equipamento de diagnóstico para realizar a parametrização do BC no veículo,`,
`para obter o perfeito funcionamento.`,
`Atenção:`,
`Para o funcionamento correto do BC adaptado é necessário obrigatoriamente que ele possua a`,
`mesma numeração do BC original do veículo e seja do mesmo modelo, ano e motor do veículo,`,
`caso contrário o funcionamento não será garantido, podendo ocorrer falhas diversas.`,
`Essa função tem como objetivo a correção de defeitos. A Chiptronic NÃO se responsabiliza pelo`,
`uso ilícito da função, sendo de total responsabilidade do usuário.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2013 a 2015"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2012 a 2015"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2013 a 2015"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2014"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2013 a 2016"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Programador JTAG01. Necessário para realizar a<br />leitura e gravação do arquivo<br />na ECU", 
image: "/images/Acessórios/Jtag.JPG"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a Central", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/ECU Delco E83 costas.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/ECU Delco E83 frente.jpg"},

{title: "", 
description: "", 
ballon: "Região A<br />Região B<br />Região C", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Placa ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região A", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pontos de Soldagem A - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região B", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pontos de Soldagem B - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do Programador<br />JTAG01 na ordem indicada na<br />Região C", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pontos de Soldagem C - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Todos os fios soldados.jpg"},

{title: "Identificando o BC com memória 24C16:", 
description: "", 
ballon: "Identificando o<br />BC com a<br />memória 24C16", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 24C16 (1).jpg"},

{title: "", 
description: "", 
ballon: "Identificando o<br />BC com a<br />memória 24C16", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 24C16 (2).jpg"},

{title: "", 
description: "", 
ballon: "Localizando a<br />memória<br />24C16", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Localizando a memória 24C16.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Memória 24C16.jpg"},

{title: "", 
description: "", 
ballon: "Posicionando a pinça na memória", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pinça posicionada sobre a memória 24C16.jpg"},

{title: "Identificando o BC com memória 25160:", 
description: "", 
ballon: "Identificando<br />o BC com a<br />memória<br />25160", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 25160 (1).jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 25160 (2).jpg"},

{title: "", 
description: "", 
ballon: "Identificando<br />o pino 1 da<br />memória<br />25160", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Memória 25160.jpg"},

{title: "", 
description: "", 
ballon: "Posicionando a pinça<br />na memoria", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pinça posicionada sobre a memória 25160.jpg"},

{title: "Identificando o BC com memória 95320:", 
description: "", 
ballon: "Identificando<br />o BC com a<br />memória<br />95320", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 95320 (1).jpg"},

{title: "", 
description: "", 
ballon: "Localizando a memória 95320", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 95320 (2).jpg"},

{title: "", 
description: "", 
ballon: "Localizando a memória 95320", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Memória 95320.jpg"},

{title: "", 
description: "", 
ballon: "Indicando a área para soldar o cabo MCU", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Área para se soldar o cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando<br />os pontos a<br />serem<br />soldado os<br />fios do cabo<br />MCU:<br />1=> Fio<br />Vermelho<br />2=> Fio<br />Amarelo<br />3=> Fio Verde<br />4=> Fio Azul<br />5=> Fio Cinza<br />6=> Fio Preto", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando pontos a serem soldados os fios do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Todos os fios soldados", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Fios do cabo MCU já soldados.jpg"},

{title: "Identificando BC com memória 24C32", 
description: "", 
ballon: "Identificação do BC", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 24C32 (1).jpg"},

{title: "", 
description: "", 
ballon: "Localização da memória 24C32", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Identificando o BC com a memória 24C32 (2).jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Memória 24C32.jpg"},

{title: "", 
description: "", 
ballon: "Posicionado a pinça<br />na memoria", 
image: "/images/Funções Específicas/OBD0274 - Adaptação BC Imob5 com ECU GM Delco E83/Pinça posicionada sobre a memória 24C32.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a adaptação da BC`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Onix`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`DELCO E83`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptar BCM`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Arquivo da BC Corrompido! Prosseguir? (X)Nao <OK>Sim`,
screens: [
`&nbsp;Arquivo&nbsp;da&nbsp;BC`,
`&nbsp;&nbsp;Corrompido!`,
`&nbsp;&nbsp;Prosseguir?`,
`&nbsp;(X)Nao&nbsp;&lt;OK&gt;Sim`,
],
causes: [
],
solutions: [
]
},

{ label: `A adaptacao do BC verifica e modifica apenas algumas regioes do arquivo. Caso informacoes nao relacionadas com o procedim. estejam incorretas o veiculo NAO ira funcionar!`,
screens: [
`&nbsp;A&nbsp;adaptacao&nbsp;do`,
`&nbsp;&nbsp;BC&nbsp;verifica`,
`&nbsp;&nbsp;&nbsp;e&nbsp;modifica`,
`&nbsp;apenas&nbsp;algumas`,
`&nbsp;&nbsp;&nbsp;regioes&nbsp;do`,
`&nbsp;arquivo.&nbsp;Caso`,
`informacoes&nbsp;nao`,
`&nbsp;&nbsp;relacionadas`,
`com&nbsp;o&nbsp;procedim.`,
`&nbsp;&nbsp;&nbsp;&nbsp;estejam`,
`&nbsp;&nbsp;incorretas&nbsp;o`,
`&nbsp;&nbsp;veiculo&nbsp;NAO`,
`&nbsp;ira&nbsp;funcionar!`,
],
causes: [
],
solutions: [
]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC.`,`• Má conexão da pinça na memória,`,`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU.`,],
solutions: [
`• Conferir correta ligação do cabo MCU.`,`• Conferir correta ligação do programador JTAG01.`,`• Conferir correta conexão da pinça`,]
},

{ label: `Arquivo da ECU Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;ECU&nbsp;Invalido!`,
`<br />`,
],
causes: [
`• O arquivo da ECU não é compatível;`,`• O arquivo da ECU está corrompido;`,],
solutions: [
`• Verificar se o modelo da ECU é compatível com o apresentado neste manual.`,]
},

{ label: `Erro leit. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leit.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema ou com arquivo corrompido;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU;`,`• Mau contato do programador JTAG01 com o OBDMap.`,],
solutions: [
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP.`,]
},

{ label: `Erro Leitura Do BC! <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;Erro&nbsp;Leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do&nbsp;BC!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema ou com arquivo corrompido;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC;`,`• Mau contato do cabo MCU com o OBDMap.`,`• Mau contato da Pinça com o OBDMap.`,`• Má conexão da pinça na memória.`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir a correta conexão da pinça na memória;`,`• Conferir se a pinça está bem conectada ao OBDMAP.`,`• Conferir se o cabo MCU está bem conectado ao OBDMAP.`,]
},

{ label: `Arquivo Invalido!`,
screens: [
`&nbsp;`,
`Arquivo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invalido!`,
`<br />`,
],
causes: [
`• O arquivo do BC não é compatível;`,`• O arquivo do BC está corrompido;`,``,],
solutions: [
`• Verificar se o modelo do BC é compatível com o apresentado neste manual. `,``,``,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não`,`coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`• Conferir a correta posição da pinça na memória.`,]
},

{ label: `Erro na gravacao do BC! <OK> p/ repetir`,
screens: [
`Erro&nbsp;na&nbsp;gravacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BC!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema ou com arquivo corrompido;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC;`,`• Mau contato do cabo MCU com o OBDMap.`,`• Mau contato da Pinça com o OBDMap.`,`• Má conexão da pinça na memória.`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir a correta conexão da pinça na memória;`,`• Conferir se a pinça está bem conectada ao OBDMAP.`,`• Conferir se o cabo MCU está bem conectado ao OBDMAP`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
