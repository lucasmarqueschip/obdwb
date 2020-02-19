//Capa
nomeCarga = "Leitura da Senha da UCH Tipo 2 ( 93C66 ) - Clio II, Logan e Sandero via OBD";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha: Permite ler a senha de 12 dígitos que se encontra no calculador do veículo através da tomada de diagnóstico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Clio ll 1.0 16V",
years: "2004 a 2011"
},
{
manufacturer: "Renault",
model: "Clio II 1.6 16V",
years: "2004 a 2011"
},
{
manufacturer: "Renault",
model: "Logan 1.0 16V",
years: "2007 a 2011"
},
{
manufacturer: "Renault",
model: "Logan 1.6 16V",
years: "2007 a 2011"
},
{
manufacturer: "Renault",
model: "Sandero 1.6",
years: "2007 a 2011"
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
description: "A tomada de diagnóstico dos veículos Clio II está localizada na posição F6.<br />A tomada de diagnóstico dos veículos Logan e Sandero está localizada na área I5.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/E5-F5-L5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura da senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 2`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faca&nbsp;o`,
`&nbsp;&nbsp;procedimento`,
`&nbsp;&nbsp;com&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;desligada!`,
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
`Senha:`,
`************`,
`<br />`,
],
help: `Anote a senha.`
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

{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;nao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encontrada!`,
`<br />`,
],
causes: [
`O calculador do veículo não é o modelo 93C66.`,``,],
solutions: [
`Verificar se o calculador do veículo é o modelo 93C66.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
