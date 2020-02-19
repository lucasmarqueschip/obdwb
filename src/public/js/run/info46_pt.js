//Capa
nomeCarga = "Leitura de Senha e Programação de Chaves via OBD VW Immo 1";
revCarga = "Rev. 5";
dataManual = "Dezembro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha.`,
`Programação de até 8 chaves.`,
`<obs>`,
`Observação: Todas as chaves existentes devem ser programadas em um único procedimento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2002 a 2009"
},
{
manufacturer: "VW",
model: "Crossfox 1.6",
years: "2002 a 2009"
},
{
manufacturer: "VW",
model: "Spacefox 1.6",
years: "2002 a 2009"
},
{
manufacturer: "VW",
model: "Gol 1.0",
years: "1999 a 2003"
},
{
manufacturer: "VW",
model: "Gol 1.0 Flex",
years: "2005 a 2007"
},
{
manufacturer: "VW",
model: "Kombi",
years: "1999 a 2004"
},
{
manufacturer: "VW",
model: "Parati 1.6",
years: "2000 a 2009"
},
{
manufacturer: "VW",
model: "Parati 1.8",
years: "2000 a 2009"
},
{
manufacturer: "VW",
model: "Santana 2.0",
years: "1998 a 2005"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "2002 a 2009"
},
{
manufacturer: "VW",
model: "Saveiro 1.8",
years: "2002 a 2009"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Gol 1.0, Polo 1.6, Polo 2.0 e Saveiro 1.6 e 1.8 está localizada na posição A4.<br />A tomada de diagnóstico dos veículos Fox 1.0 e 1.6, Gol 1.0 flex e Polo 1.6 flex está localizada na posição B5.<br />A tomada de diagnóstico do veículo Kombi está localizada na área Q da segunda imagem.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4-B5.jpg"},

{title: "", 
description: "A tomada de diagnóstico dos veículos Gol 1.0, Polo 1.6, Polo 2.0 e Saveiro 1.6 e 1.8 está localizada na posição A4.<br />A tomada de diagnóstico dos veículos Fox 1.0 e 1.6, Gol 1.0 flex e Polo 1.6 flex está localizada na posição B5.<br />A tomada de diagnóstico do veículo Kombi está localizada na área Q da segunda imagem.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/image_3H.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Kostal`,
`Senha:&nbsp;****`,
`<br />`,
],
help: `Exibe a senha de 4 dígitos e a identificação do imobilizador: Megamos ou Kostal.`
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada.`
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
`No&nbsp;final&nbsp;da`,
`prog.&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>Adaptar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
