//Capa
nomeCarga = "Bypass Megamos (chaves)";
revCarga = "Rev. 3";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves.`,
`Esta carga grava um arquivo bypass no imobilizador com o OBDMap, para em seguida efetuar a programação de duas chaves no mesmo veículo, por procedimento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Gol 1.0",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Gol 1.6",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Gol 1.8",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Parati 1.6",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Parati 1.8",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Polo 1.6",
years: "1998 a 2001"
},
{
manufacturer: "VW",
model: "Polo 2.0",
years: "1998 a 2006"
},
{
manufacturer: "VW",
model: "Santana 1.8",
years: "1998 a 2006"
},
{
manufacturer: "VW",
model: "Santana 2.0",
years: "1998 a 2006"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Saveiro 1.8",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Fox 1.0",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Kombi 1.4",
years: "1998 a 2008"
},
{
manufacturer: "VW",
model: "Crossfox 1.6",
years: "1998 a 2008"
},
];
applicationObs = createObs("RESTRIÇÕES: Não são todos os veículos nessa faixa de anos, que utilizam o imobilizador MEGAMOS. Podem ser encontrados também imobilizadores da KOSTAL e DELPHI. Os imobilizadores da DELPHI são idênticos aos imobilizadores da MEGAMOS, mas que só equipam veículos de outros países. Para os veículos com imobilizador DELPHI, o procedimento também pode ser realizado. Já para veículos com imobilizador KOSTAL, o procedimento não é recomendado sob pena de danificar o imobilizador.", "Exemplo: Pode ser encontrado um Gol 1998 com o imobilizador Megamos e uma Parati do mesmo ano com um imobilizador Kostal.", undefined)



resources = [
{title: "", 
description: "", 
ballon: "O Transponder utilizado no sistema Code 2 é<br />o Megamos Crypto 48, tratado neste manual<br />por T48.", 
image: "/images/Transponders/Megamos Crypto 48.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando a caixa do imobilizador:", 
description: "Cada marca de carro citado na introdução, o imobilizador localiza-se em local diferente. Localizar o imobilizador e fazer a identificação do fabricante, conforme a etapa seguinte.", 
ballon: "Uma forma de identificar a caixa do imobilizador MEGAMOS.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/caixa imobilizador2.jpg"},

{title: "Desmontando a caixa do imobilizador:", 
description: "", 
ballon: "Forma correta de abrir a caixa do imobilizador.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/caixa imobilizador3.jpg"},

{title: "", 
description: "", 
ballon: "Remova a placa do imobilizador da caixa.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/caixa imobilizador4.jpg"},

{title: "Identificando o imobilizador MEGAMOS:", 
description: "Identificando a placa do imobilizador MEGAMOS com a memória 93LC56B, usada para fazer esse procedimento.", 
ballon: "Identificação da placa do imobilizador MEGAMOS.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/immoMegamos.jpg"},

{title: "Identificando o imobilizador KOSTAL:", 
description: "Identificando a placa do imobilizador KOSTAL. Ela possui a memória 93LC56B, a mesma usada no imobilizador MEGAMOS E DELPHI, porém o processador é MC68HC. O procedimento descrito neste manual não deve ser realizado com esse imobilizador, sob pena de danificá-lo.", 
ballon: "Placa do imobilizador KOSTAL, com o processador MC68HC.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/immoKostal.jpg"},

{title: "", 
description: "Identificando a placa do imobilizador KOSTAL. Ela possui a memória 93LC56B, a mesma usada no imobilizador MEGAMOS E DELPHI, porém o processador é MC68HC. O procedimento descrito neste manual não deve ser realizado com esse imobilizador, sob pena de danificá-lo.", 
ballon: "As caixas dos imobilizadores são praticamente iguais. Portanto os mesmos devem ser identificados pelo processador ou pela inscrição na placa.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/Immos.jpg"},

{title: "Localizando a memória do imobilizador MEGAMOS:", 
description: "", 
ballon: "Memória 93LC56B.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/Localizando memoria megamos.jpg"},

{title: "Conectando a pinça na memória:", 
description: "", 
ballon: "A indicação do pino 1 da pinça deve coincidir com o pino 1 da memória 93LC56B.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/Conectando a pinca.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/Conectando a pinca2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Conferir a correta posição da pinça na memória. Todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória. Conferir se o conector da pinça está bem conectado no OBDMap. <br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/Todos os acessorios1.jpg"},

{title: "Programação das chaves:", 
description: "", 
ballon: "Com a primeira chave ligue a ignição.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/prog1.jpg"},

{title: "", 
description: "", 
ballon: "A luz do Code piscará uma vez. Em seguida retire a primeira chave.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/prog2.jpg"},

{title: "", 
description: "", 
ballon: "Com a segunda chave ligue a ignição.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/prog3.jpg"},

{title: "", 
description: "", 
ballon: "A luz do Code piscará duas vezes, indicando o termino da gravação da segunda chave. Assim o procedimento estará concluído, e as duas chaves aptas a ligar o veículo.", 
image: "/images/Funções Específicas/OBD0074 Procedimento Bypass/prog4.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando procedimento bypass:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>BYPASS MEGAMOS`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;pinca&nbsp;`,
`na&nbsp;memoria&nbsp;93C56`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: ``
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória, imobilizador ou pinça com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
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

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`O imobilizador está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
