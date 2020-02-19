//Capa
nomeCarga = "Programação de Chaves Honda Civic CR-V (2013 - 2014)";
revCarga = "Rev. 10";
dataManual = "Novembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Identificação da chave que será programada no veículo, se esta é uma chave válida ou não;`,
`Programação de até 8 chaves no veículo.`,
`<obs>`,
`Observação: `,
`É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam reprogramadas, elas não funcionarão no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Honda",
model: "Civic 1.8",
years: "2012 a 2016"
},
{
manufacturer: "Honda",
model: "Civic 2.0",
years: "2012 a 2016"
},
{
manufacturer: "Honda",
model: "CR-V 2.0",
years: "2012 a 2014"
},
{
manufacturer: "Honda",
model: "City 1.5",
years: "2016 a 2017"
},
{
manufacturer: "Honda",
model: "Fit 1.5",
years: "2015 a 2017"
},
{
manufacturer: "Honda",
model: "HR-V",
years: "2016 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilizar chave original, fornecida pela concessionária.", 
image: "/images/Chaves e Telecomandos/Chave Honda.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área B5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/B5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Honda`], help: `Tecle OK`, menu: 1000},
{lines: [`Civic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o teste de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Honda`], help: `Tecle OK`, menu: 1000},
{lines: [`Civic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Teste de chaves`], help: `Tecle OK`, menu: 1000},

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

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`O imobilizador não corresponde à aplicação da carga.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi estourado.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Chave incorreta!`,
screens: [
`&nbsp;`,
`Chave&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A chave utilizada é incompatível com o veículo.`,],
solutions: [
`Verificar se a chave é original.`,]
},

{ label: `Erro na leitura da chave!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;da&nbsp;chave!`,
`<br />`,
],
causes: [
`A antena pode estar com problemas,`,`O carro pode estar com problemas,`,`O transponder pode não ser válido.`,``,``,``,],
solutions: [
`Checar a parte elétrica e componentes do carro, principalmente antena e imobilizador,`,`Confirmar transponder utilizado.`,]
},

{ label: `Chave ja programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`programada!`,
`<br />`,
],
causes: [
`A chave é válida e está programada.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
