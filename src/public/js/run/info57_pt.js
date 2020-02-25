//Capa
nomeCarga = `Manual Carga -  OBD0057<br />GM Agile - Programação de Chaves`;
revCarga = `Rev. 7`;
dataManual = `Julho 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar chaves,`,
`Apagar chaves,`,
`Programar telecomando,`,
`Apagar telecomando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Agile 1.4`,
years: `2010 a 2014`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2011 a 2018`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder usado é o T19 (ID:46). Quando programado no veículo, fica locado (dedicado ao veículo).`, 
image: `/images/Transponders/ID-46 - Agile.jpg`},

{title: ``, 
description: ``, 
ballon: `Para sistema Imob5 e sistema Imob4 (Agile e Montana) a partir de 2013 usa-se o transponder PCF7937A (DEDICADO GM).`, 
image: `/images/Transponders/PCF7937A DEDICADO GM.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo Universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos fica localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Apagando as chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha do imobilizador.`
},
]
}, {title: `Programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha do Imobilizador.`
},
]
}, {title: `Apagando o telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme4 Agile`, `>Apagar telecmd`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha do alarme.`
},
]
}, {title: `Programação do telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme4 Agile`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha do alarme.`
},
{lines: [
`&nbsp;`,
`Pressione&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;Telecomando!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: `Tecle OK`
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
{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`Atenção: Após ter digitado três vezes a senha incorreta, o imobilizador fica travado por 10 minutos e a cada vez digitado a senha incorreta o tempo vai dobrando, não sendo possível realizar o procedimento mesmo digitando a senha correta.`,``,],
solutions: [
`Colocar senha correta.`,``,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`Não esta usando cabo universal + adaptador A3 ou cabo CAN,`,`Mau contato no cabo universal + adaptador A3 ou cabo CAN ao OBDMap.`,],
solutions: [
`Verificar se utiliza cabo universal + adaptador A3 ou cabo CAN,`,`Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,`Verificar bom estado do cabo universal, adaptador A3 e cabo CAN,`,`Verificar se os parafusos que prendem o cabo universal + adaptador A3 ou cabo CAN no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
