//Capa
nomeCarga = "HSFI 2010 - Leitura de Senha e Gravação do Chassi";
revCarga = "Rev. 2";
dataManual = "Junho 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha de 4 dígitos.`,
`Gravação de chassi em ECU's novas.`,
`<obs>`,
`Observação: Com a carga OBD0045 - Opel2 e a senha da ECU é possível programar chaves e fazer o reset da ECU.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2010 a 2013"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2010 a 2012"
},
{
manufacturer: "GM",
model: "Meriva 1.4",
years: "2010 a 2013"
},
{
manufacturer: "GM",
model: "Classic 1.0",
years: "2010 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Celta, do Classic e do Prisma fica localizada na área A5.<br />A tomada de diagnóstico da Meriva fica localizada na área F9.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5 - F9.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando Leitura da senha e do chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>HSFI 2010`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`HSFI 2010`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Senha&nbsp;1:&nbsp;****`,
`Chassi.:&nbsp;*******`,
`**********`,
`<br />`,
],
help: `Anote a senha. Com ela é possível programar chaves e fazer o reset da ECU, utilizando a carga OPEL2.`
},
]
}, {title: `Realizando a Gravação de Chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>HSFI 2010`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`HSFI 2010`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Confirma?`,
`<br />`,
`<br />`,
],
help: `Certifique-se de que o
chassi correto foi inserido
e então Tecle OK, ou
tecle VOLTA para corrigir.`
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
`Digite:`,
`<br />`,
`<br />`,
],
help: `Utilize as teclas para cima e para baixo para inserir o chassi que será gravado no veiculo.`
},
{lines: [
`&nbsp;`,
`Confirma:*******`,
`**********`,
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
`&nbsp;&nbsp;Chassi`,
`&nbsp;&nbsp;&nbsp;Programado!`,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
