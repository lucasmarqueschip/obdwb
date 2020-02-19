//Capa
nomeCarga = "Ford Pats 2 (chaves)";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar chaves.`,
`Adicionar novas chaves: o número máximo de chaves permitidas nesse sistema é de 8 chaves.`,
`Mostrar o número de chaves programadas na ECU.`,
`Desbloqueio da Central EEC-V "ANIL".`,
`<obs>`,
`Observações:`,
``,
`- Procedimentos via OBD em carros que possuem o módulo de injeção ECC-V, com sistema Pats 2.`,
`- O processo de novas chaves pode ser usado quando o cliente perdeu uma das chaves e está apenas com a reserva. Desse modo, a chave perdida não funcionará mais. Apenas as chaves gravadas através do processo de adicionar novas chaves estarão habilitadas.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Courier 1.3",
years: "1998 a 1999"
},
{
manufacturer: "Ford",
model: "Courier 1.4 16v",
years: "1998 a 1999"
},
{
manufacturer: "Ford",
model: "Fiesta 1.0",
years: "1996 a 2002"
},
{
manufacturer: "Ford",
model: "KA 1.0",
years: "1999 a 2002"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID4C de vidro para adicionar novas chaves.", 
image: "/images/Transponders/ID4C.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo Ford conectado ao OBDMap para realizar os procedimentos via OBD.", 
image: "/images/Acessórios/cabo ford.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados fica localizada na área A7.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A7.jpg"},

{title: "Luz de CODE:", 
description: "Durante o procedimento de APAGAR CHAVE e ADICIONAR NOVA CHAVE, a luz de code deverá ficar apagada.<br />", 
ballon: "Quando a ignição é ligada, a luz de code se acende para verificar se o transponder é o codificado para o veículo em questão.", 
image: "/images/Funções Específicas/OBD0025 Ford Pats 2/Luz 1.jpg"},

{title: "", 
description: "Durante o procedimento de APAGAR CHAVE e ADICIONAR NOVA CHAVE, a luz de code deverá ficar apagada.<br />", 
ballon: "Se o transponder é reconhecido, logo a luz de code se apaga.Caso contrário, a luz fica piscando.", 
image: "/images/Funções Específicas/OBD0025 Ford Pats 2/Luz 2.jpg"},

{title: "Identificando a Central", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0025 Ford Pats 2/Identificando a central.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Retire a tampa de proteção para acesso ao circuito.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0025 Ford Pats 2/localizando a memória.jpg"},

{title: "", 
description: "Retire a tampa de proteção para acesso ao circuito.", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0025 Ford Pats 2/pinça conectada.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando procedimento para apagar chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`PWM ID: 4C`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Procedimento para adicionar novas chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`PWM ID: 4C`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando leitura do número de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`PWM ID: 4C`], help: `Tecle OK`, menu: 1000},
{lines: [`Número de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando desbloqueio da central EEC-V "ANIL"`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`EEC - V ANIL`], help: `Tecle OK`, menu: 1000},
{lines: [`Destravar`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Numero de Chaves Excedido!`,
screens: [
`&nbsp;`,
`Numero&nbsp;de`,
`Chaves&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O número máximo de 8 chaves programadas no veículo foi excedido.`,``,``,``,],
solutions: [
]
},

{ label: `Erro no Imobilizador!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;Imobilizador!`,
`<br />`,
],
causes: [
`Central bloqueada ou imobilizador com problema.`,],
solutions: [
`Caso o problema seja na central será necessário que se faça o reset,`,`Caso o problema seja no imobilizador será necessário trocar ou reparar o mesmo. `,]
},

{ label: `Erro de Protocolo!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Protocolo!`,
`<br />`,
],
causes: [
],
solutions: [
`Repita o procedimento,`,`Caso o erro insista em ocorrer, contate o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
