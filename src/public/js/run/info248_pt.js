//Capa
nomeCarga = "Reset do Imobilizador Toyota Imob3 via OBD (Corolla 12-14, Hilux 09-14, Rav-4 09-12)";
revCarga = "Rev. 6";
dataManual = "Abril 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Teste de compatibilidade`,
`Reset do Imobilizador `,
`Bypass no sistema, deixando aberto para gravar duas novas chaves mestra ou escrava`,
`Leitura do número de falhas do imobilizador`,
`Apagamento de falhas passadas no imobilizador`,
`Otimização do reset do imobilizador quando a função não for bem sucedida`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Toyota",
model: "Corolla 1.8",
years: "2012 a 2014"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0",
years: "2012 a 2014"
},
{
manufacturer: "Toyota",
model: "Hilux 2.7",
years: "2009 a 2014"
},
{
manufacturer: "Toyota",
model: "Hilux SW4 2.7",
years: "2009 a 2015"
},
{
manufacturer: "Toyota",
model: "Rav4 2.4",
years: "2009 a 2012"
},
{
manufacturer: "Toyota",
model: "Hilux SW4 3.0 Diesel",
years: "2012 a 2015"
},
{
manufacturer: "Toyota",
model: "Etios",
years: "2014 a 2018"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Para o veículo Corolla utilize o transponder ID 4D70.", 
image: "/images/Transponders/4D-70.jpg"},

{title: "", 
description: "", 
ballon: "Para os veículos Hilux, SW4 e RAV-4 utilize o transponder ID4D-67G (80bits).", 
image: "/images/Transponders/Hilux 4D67.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/B5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Imob3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob3`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Resetar?`, `>Compativel?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`compativel!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
]
}, {title: `Realizando o Reset do imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Imob3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob3`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Resetar?`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
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
`Numero&nbsp;de&nbsp;falhas`,
`Imobilizador:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Numero de falhas no imobilizador.`
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
`Use&nbsp;Transponder:`,
`Corolla:&nbsp;ID4D&nbsp;70`,
`Hilux:&nbsp;ID4D&nbsp;67G`,
`Rav-4:&nbsp;ID4D&nbsp;67G`,
],
help: `   Tecle OK!`
},
{lines: [
`Ligue&nbsp;a&nbsp;primeira`,
`&nbsp;&nbsp;chave&nbsp;a&nbsp;ser`,
`&nbsp;&nbsp;programada&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Sem&nbsp;ligar!`,
`Insira&nbsp;novamente`,
`&nbsp;&nbsp;a&nbsp;chave&nbsp;1&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;OK!`,
],
help: ``
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
`&nbsp;&nbsp;Imobilizador`,
`&nbsp;&nbsp;&nbsp;Resetado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Sem&nbsp;ligar!`,
`Insira&nbsp;a&nbsp;segunda`,
`chave,&nbsp;espere&nbsp;5s`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
],
help: ``
},
{lines: [
`Insira&nbsp;a&nbsp;chave&nbsp;1&nbsp;`,
`Ligue&nbsp;e&nbsp;desligue&nbsp;`,
`rapidamente&nbsp;por&nbsp;`,
`5x&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Nesse instante a luz do imobilizador que estava piscando deverá apagar`
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
othersMessage = [{ label: `Veiculo incompativel!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`<br />`,
],
causes: [
`O veículo não faz parte da aplicação desse software`,],
solutions: [
`Verifique se existe outra carga que realize o serviço nesse veículo`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,``,``,]
},

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
` O veículo não aceitou a chave de acesso`,],
solutions: [
`Repita o procedimento`,`Faça uma revisão no sistema de imobilizador do veículo`,`Confira com o suporte técnico se o software está na última versão`,`Caso esse erro persistir, o software do veículo é diferente ou existe algum problema ele. Acione o suporte técnico`,``,]
},

{ label: `Erro de Operacao`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;Operacao`,
`<br />`,
],
causes: [
`Existe algum problema com o veículo`,`Aplicação inválida`,],
solutions: [
`Repita o procedimento`,`Verifique a aplicação`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
