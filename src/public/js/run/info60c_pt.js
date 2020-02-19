//Capa
nomeCarga = "Ford Ranger 2.3 Gasolina (chaves e casamento)";
revCarga = "Rev. 3";
dataManual = "Junho 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar chaves;`,
`Adicionar chaves (máximo 5 chaves);`,
`Sincronismo entre a ECU e o painel do veículo.`,
`<obs>`,
`Observações:`,
`Apague todas as chaves do imobilizador e programe 2 novas chaves para que seja possível fazer o sincronismo;`,
`O veículo Ford Ranger 2.3 Gasolina, utiliza o transponder T32 especial (4D ID:63). Depois de programado o transponder fica dedicado a um único veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "RANGER 2.3 GASOLINA",
years: "2008 a 2010"
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
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o apagamento das chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`RANGER G 08-10`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o procedimento para adicionar chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`RANGER G 08-10`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o sincronismo entre a ECU e o painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`RANGER G 08-10`], help: `Tecle OK`, menu: 1000},
{lines: [`Sincronismo de módulos`], help: `Tecle OK`, menu: 1000},

]},];
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

{ label: `Erro de Tempo Excedido!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`&nbsp;Tempo&nbsp;Excedido!`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,`Desconecte a báteria e faça o procedimento novamente`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
