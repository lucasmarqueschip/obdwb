//Capa
nomeCarga = "Programação de chaves de presença Ford Pats 6 T2";
revCarga = "Rev. 1";
dataManual = "Setembro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do número de chaves programadas no veículo.`,
`Apagamento de todas as chaves do veículo.`,
`Adição de novas chaves para o veículo.`,
``,
`Observação:`,
` Para o procedimento de adição após o apagamento de todas as chaves, é necessário programar ao menos 2 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Edge SEL 3.5",
years: "2012 a 2014"
},
{
manufacturer: "Ford",
model: "Edge Limited 3.5",
years: "2012 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Chave de presença utilizada", 
description: "", 
ballon: "Utilize chave original.", 
image: "/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Chave.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A9. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A9 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A9 CONECTADOS .jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição C5.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Procedimento para programação da chave de presença via OBD", 
description: "Procedimento para a realização do passo 8 e passo 16 da adição de chaves de presença.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Procedimento 1.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura do número de chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento das chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de novas chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A9,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Erro na Programacao! Repetir? <OK>SIM / (X)NAO`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Repetir?`,
`&lt;OK&gt;SIM&nbsp;/&nbsp;(X)NAO`,
],
causes: [
`O apagamento das chaves não foi concluído com sucesso.`,],
solutions: [
`Repetir o procedimento.`,]
},

{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no`,
`&nbsp;&nbsp;Procedimento!`,
`<br />`,
],
causes: [
`Todas as tentativas de adicionar chave falharam,`,`Defeito no carro, parte elétrica.`,],
solutions: [
`Verifique se a chave utilizada está correta,`,`Conferir parte elétrica do carro, fusíveis, etc.`,]
},

{ label: `Use cabo A9!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Use&nbsp;cabo&nbsp;A9!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo utilizado não está correto.`,],
solutions: [
`Conecte o cabo A9 e repita o procedimento.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
