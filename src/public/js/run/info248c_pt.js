//Capa
nomeCarga = "Reset do Imobilizador Toyota Imob3 via OBD (Corolla 12-14, Hilux 09-14, Rav-4 09-12)";
revCarga = "Rev. 6";
dataManual = "Abril 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
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
obdmap = false;
services = 
[
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset do imobilizador`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o Reset do imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset do imobilizador`], help: `Tecle OK`, menu: 1000},
{lines: [`By pass`], help: `Tecle OK`, menu: 1000},

]},];
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
