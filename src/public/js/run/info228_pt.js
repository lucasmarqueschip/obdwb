//Capa
nomeCarga = "Programação de Chaves Nissan Nats Siemens sem Necessidade da Senha (X-Trail 06-07)";
revCarga = "Rev. 2";
dataManual = "Agosto 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves.`,
`<obs>`,
`Observação:`,
` A senha é obtida automaticamente através dos dados contidos na etiqueta do imobilizador, que são inseridos no OBDMap durante a programação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Nissan",
model: "X-Trail 2.0",
years: "2006 a 2007"
},
{
manufacturer: "Nissan",
model: "X-Trail 2.5",
years: "2006 a 2007"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder ID4D-60.", 
image: "/images/Transponders/4D60 Epox - Sem especificação.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Localizando o imobilizador do veículo:", 
description: "O imobilizador do veículo está integrado ao cilindro de ignição na área D4.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D4.jpg"},

{title: "Instruções da senha", 
description: "O procedimento de realizar o cálculo da senha, é realizado a partir de uma etiqueta que se encontra colada no imobilizador do veículo.   <br />Abaixo segue um exemplo de etiqueta, onde está contida 3 informações em destaque, que são necessárias para realizar o procedimento.<br /><br /><br /><br /><br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0228 Leitura de senha e programação de chaves Nissan Nats Siemens/nats6.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura e programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Nissan`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Nissan`, `>Nats 6 Siemens`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6 Siemens`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Veja&nbsp;informacoes`,
`do&nbsp;imobilizador`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`&nbsp;&nbsp;Mexico`,
`<br />`,
],
help: `Selecione o local de origem do imobilizador. Informação em destaque azul no exemplo de etiqueta, conforme a Página 7.`
},
{lines: [
`&nbsp;`,
`Codigo&nbsp;1:`,
`000000`,
`<br />`,
],
help: `Insira o código de destaque em vermelho no exemplo de etiqueta conforme a Página 7.`
},
{lines: [
`&nbsp;`,
`Codigo&nbsp;2:&nbsp;`,
`0000`,
`<br />`,
],
help: `Insira o código de destaque em verde no exemplo de etiqueta conforme a Página 7.`
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;Transp.`,
`ID4D-60&nbsp;virgem!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Selecione o número de chaves que serão programadas no veículo. Tecle OK!`
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave&nbsp;*`,
`e&nbsp;Tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`por&nbsp;5&nbsp;seg,&nbsp;desl.`,
`&nbsp;&nbsp;a&nbsp;chave&nbsp;por`,
`5&nbsp;segundos&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK! Se for a última chave a ser programada siga o próximo passo, senão, volte ao Passo 15.`
},
{lines: [
`&nbsp;Ligue&nbsp;o&nbsp;motor`,
`por&nbsp;30&nbsp;segundos`,
`para&nbsp;finalizar&nbsp;a`,
`programacao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
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

{ label: `Entrada de valores Invalidos!`,
screens: [
`&nbsp;&nbsp;&nbsp;Entrada&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;valores`,
`&nbsp;&nbsp;&nbsp;Invalidos!`,
`<br />`,
],
causes: [
`Informações intruduzidas do imobilizador estão erradas,`,`Imobilizador incompátivel.`,],
solutions: [
`Reinsira as informações do imobilizador,`,`Contate o suporte técnico.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Repita o procedimento,`,`Conferir parte elétrica do carro, fusíveis,  etc.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
