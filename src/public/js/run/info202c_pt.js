//Capa
nomeCarga = "Programação de chaves Ford Pats 5 (Ranger 13-15)";
revCarga = "Rev. 5";
dataManual = "Outubro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagamento com reprogramação de 2 chaves para o veículo.`,
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Ranger 2.2",
years: "2013 a 2013"
},
{
manufacturer: "Ford",
model: "Ranger 2.5",
years: "2013 a 2016"
},
{
manufacturer: "Ford",
model: "Ranger 3.2",
years: "2013 a 2015"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize um transponder ID 4D63 DST+ dedicado para Ford.", 
image: "/images/Transponders/ID 4D63 DST Dedicado para Ford.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição A4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de novas chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
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
` Repita o procedimento.`,]
},

{ label: `Acesso Negado Aguarde 5:00 min Para Repetir`,
screens: [
`Acesso&nbsp;Negado`,
`Aguarde&nbsp;5:00&nbsp;min`,
`Para&nbsp;Repetir`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Aguarde 5 minutos e repita o procedimento.`,``,]
},

{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Aguarde 5 minutos e repita o procedimento.`,]
},

{ label: `Veiculo fora da Aplicacao!`,
screens: [
`&nbsp;`,
`Veiculo&nbsp;fora&nbsp;da&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aplicacao!`,
`<br />`,
],
causes: [
`O veículo não faz parte da aplicação da carga.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`O transponder utilizado não é válido.`,],
solutions: [
`Utilize um transponder compatível com o veículo.`,]
},

{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`O transponder pode não estar dedicado corretamente para o veículo.`,],
solutions: [
`Verificar detalhes no manual de dedicação OBD0206 - Dedicação do transponder ID4D-63 e D4D DST+ para Ford.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
