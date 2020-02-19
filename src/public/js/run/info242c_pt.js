//Capa
nomeCarga = "Programação de chaves Ford Truck Pats 2 Diesel Tipo 3";
revCarga = "Rev. 3";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar e Programar até 4 chaves no sistema PATS (são necessário no mínimo 2 chaves para o procedimento).`,
`<obs>`,
`Observação:`,
`O transponder utilizado deve ser ID4D-60 somente o de vidro.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Cargo 2429",
years: "2013 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID4D60 (T32) de Vidro.", 
image: "/images/Transponders/ID4D-60.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Acessórios/Adaptador DD-FTV01.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 mais DD-FTV01.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizado na posição B4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Caminhão/B4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Cargo`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Diesel Tipo 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza o cabo universal, adaptador A1 e Adaptador DD-FTV01.`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O veículo está imobilizado.`,`O veículo está fora da aplicação.`,`O veículo está com algum defeito elétrico.`,],
solutions: [
`Tente novamente.`,`Verifique a aplicação.`,`Entre em contato com o suporte.`,]
},

{ label: `Operacao com Avaria!`,
screens: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;com&nbsp;Avaria!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,],
solutions: [
`Entre em contato com o suporte`,``,]
},

{ label: `Modo de Acesso Codificado Nao Suportado!!!`,
screens: [
`&nbsp;Modo&nbsp;de&nbsp;Acesso`,
`&nbsp;Codificado&nbsp;Nao`,
`&nbsp;&nbsp;Suportado!!!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,],
solutions: [
`Entre em contato com o suporte`,``,``,``,]
},

{ label: `Operacao Sem Exito!`,
screens: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sem&nbsp;Exito!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,``,],
solutions: [
`Entre em contato com o suporte`,``,``,``,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
