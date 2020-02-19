//Capa
nomeCarga = "Leitura e gravação ECU GM Delco E83";
revCarga = "Rev. 2";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura e gravação do arquivo de 2048Kbytes da memória Flash do microcontrolador da ECU`,
`GM Delco E83.`,
`<obs>`,
`Observações:`,
`Esta função não tem o objetivo de verificar o conteúdo do arquivo e nem sua utilização e sim`,
`realizar a gravação ou leitura do arquivo de forma segura na ECU, portanto o conteúdo do`,
`arquivo e sua utilização é de total responsabilidade do usuário.`,
`Os veículos listados abaixo podem conter a ECU E83 Delco, antes de iniciar o procedimento`,
`verifique a ECU do veiculo`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Agile 1.4",
years: "2010 a 2014"
},
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2012 a 2016"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2012 a 2016"
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
years: "2012 a 2015"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2014"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2012 a 2016"
},
{
manufacturer: "GM",
model: "Tracker 1.8",
years: "2014 a 2015"
},
{
manufacturer: "GM",
model: "TrailBlazer 3.6 Gasolina",
years: "2013 a 2013"
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
ballon: "Cabo USB. Necessário para<br />realizar o backup do<br />arquivo", 
image: "/images/Acessórios/Cabo USB.jpg"},

{title: "Software utilizado", 
description: "", 
ballon: "Software OBDMap Suite", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/AtalhoOBDMapSuite.jpg"},

{title: "Identificando a ECU.", 
description: "", 
ballon: "Identificando na<br />etiqueta que a ECU<br />é uma E83 ACDelco", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/ECU Delco E83 costas.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/ECU Delco E83 frente.jpg"},

{title: "Localizando os pontos para soldagem:", 
description: "", 
ballon: "Região A<br />Região B<br />Região C", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Placa ECU Delco E83.jpg"},

{title: "Pontos de solda Região A", 
description: "", 
ballon: "Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região A", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Pontos de Soldagem A - ECU Delco E83.jpg"},

{title: "Pontos de solda Região B", 
description: "", 
ballon: "Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região B", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Pontos de Soldagem B - ECU Delco E83.jpg"},

{title: "Pontos de solda Região C", 
description: "", 
ballon: "Solde os fios do<br />Programador<br />JTAG01 na<br />ordem indicada<br />na<br />Região C", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Pontos de Soldagem C - ECU Delco E83.jpg"},

{title: "Todos os fios soldados", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Todos os fios soldados.jpg"},

{title: "Passos na tela do OBDMap Suite", 
description: "", 
ballon: "Após abrir o software clique<br />sobre ler para que seja feito a<br />leitura do arquivo atualmente<br />existente na central", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até o Software<br />comunicar com o OBDMap", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até o Software e o<br />OBDMap terminar a<br />comunicação com a ECU", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até a conclusão da<br />leitura do arquivo", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Salve o arquivo lido com um<br />nome de fácil identificação e<br />em um lugar de sua<br />preferência e onde não possa<br />ser apagado com facilidade.", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Procedimento concluído<br />com sucesso. Pressione<br />VOLTA no OBDMap para<br />sair da função", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 6 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Após abrir o software,<br />clique sobre o botão<br />abrir para selecionar o<br />arquivo correto que<br />deseja gravar na Central", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "É muito importante realizar<br />o backup do arquivo<br />original da ECU antes de<br />realizar o processo de<br />gravação, pois executado<br />este processo o arquivo<br />que estava na ECU será<br />perdido. Portanto caso não<br />tenha o backup do arquivo<br />original da ECU, realize-o<br />antes executar o processo<br />de gravação, evitando<br />transtornos futuros.", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Clique em confirmar se<br />tudo estiver nos<br />conformes", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde enquanto o<br />software e o OBDMap<br />realizam a gravação do<br />arquivo", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde<br />enquanto é<br />realizada a<br />comunicação<br />com a ECU", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até a<br />conclusão da<br />gravação", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Gravação Passo 6 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Procedimento<br />concluído com<br />sucesso. Pressione<br />VOLTA no OBDMap<br />para sair da função", 
image: "/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Leitura Passo 7 - OBDMapSuite.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura da central no OBDMap:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Programador`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Programador`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Delco E83`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco E83`, `>Ler/Grav. ECU`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Conecte&nbsp;cabo&nbsp;USB`,
`&nbsp;&nbsp;&nbsp;no&nbsp;OBDMap`,
`<br />`,
],
help: ``
},
{lines: [
`Conecte&nbsp;o&nbsp;Prog.`,
`&nbsp;JTAG01&nbsp;na&nbsp;ECU`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Software`,
`&nbsp;&nbsp;OBDMap&nbsp;Suite`,
`Programador&nbsp;JTAG&nbsp;`,
`ECU&nbsp;Delco&nbsp;GM&nbsp;E83`,
],
help: `Para sair da função
pressione o VOLTA`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
