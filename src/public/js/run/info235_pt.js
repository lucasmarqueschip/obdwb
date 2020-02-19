//Capa
nomeCarga = "Programação de Chaves Ford F-150 Americana";
revCarga = "Rev. 2";
dataManual = "Dezembro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves para o veículo.`,
`Adiciona chaves para o veículo.`,
`<obs>`,
`Observações: `,
`- No procedimento de programação de chaves todas as chaves existentes são apagadas.`,
`- Ainda no procedimento de programação de chaves, é necessário ter no mínimo  duas chaves em mãos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "F-150 6.0",
years: "2011 a 2013"
},
{
manufacturer: "Ford",
model: "F-150 6.2",
years: "2011 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize um transponder ID 4D63 especial (40 bits).", 
image: "/images/Transponders/ID 4D63 T32 especial.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na área C5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação ou adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 5`, `>F150 (CHILE)`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Programar&nbsp;Chaves`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`<br />`,
],
help: `As chaves já programadas serão apagadas. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Tenha&nbsp;em&nbsp;maos&nbsp;02`,
`&nbsp;&nbsp;chaves&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
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
`Aguarde:&nbsp;**&nbsp;Min.`,
`Tempo&nbsp;-&nbsp;**&nbsp;Min.`,
`<br />`,
],
help: `Aguarde o tempo mostrado no display.`
},
{lines: [
`Desconecte&nbsp;o&nbsp;`,
`OBDMap&nbsp;-&nbsp;ligue&nbsp;e&nbsp;`,
`desl.&nbsp;a&nbsp;ignicao&nbsp;`,
`com&nbsp;2&nbsp;chaves`,
],
help: `Desconecte o OBDMap, ligue e desligue a ignição com as 2 chaves existentes.`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`Adicionar&nbsp;Chaves`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
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
`Aguarde:&nbsp;**&nbsp;Min.`,
`Tempo&nbsp;-&nbsp;**&nbsp;Min.`,
`<br />`,
],
help: `Aguarde o tempo mostrado no display.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;Programada!`,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo fora da aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
