//Capa
nomeCarga = "Programação de Telecomando Azera/Veracruz";
revCarga = "Rev. 1";
dataManual = "Agosto 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 2 telecomandos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Hyundai",
model: "Azera 3.3",
years: "2010 a 2010"
},
{
manufacturer: "Hyundai",
model: "Veracruz 3.8",
years: "2010 a 2010"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Telecomando utilizado:", 
description: "", 
ballon: "Utilize a chave original do HB20 e transponder ID60 dedicado Hyundai.", 
image: "/images/Chaves e Telecomandos/Telecomando Hyundai.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na área B5.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/B5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Hyundai`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hyundai`, `>Alarme 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`, `>Tipo 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;Podem&nbsp;ser`,
`&nbsp;programados&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;maximo&nbsp;2`,
`telecomandos&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Press.&nbsp;LOCK&nbsp;dos`,
`&nbsp;&nbsp;telecomandos`,
`&nbsp;alternadamente`,
`&nbsp;&nbsp;por&nbsp;1s.&nbsp;cada`,
],
help: `Pressione o botão LOCK dos telecomandos alternadamente por 1 segundo cada.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
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

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`Defeito no carro, parte elétrica, etc.`,``,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, etc.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
