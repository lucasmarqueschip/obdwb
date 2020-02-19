//Capa
nomeCarga = "TOYOTA Corolla - Programação de Chaves e Telecomandos";
revCarga = "Rev. 4";
dataManual = "Fevereiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adicionar chaves. `,
` Apagar chaves. `,
` Programar telecomando. `,
` Apagar telecomando. `,
`<obs>`,
`Observações: `,
`- A função de apagar as chaves no sistema imobilizador, preserva apenas a chave válida que efetuou o procedimento. `,
`- Durante o procedimento para apagar o telecomando, o telecomando que você utilizar para fazer o procedimento permanecerá programado. `,
`- Para testar o telecomando programado, é necessário retirar a chave do contato. `,
`- O telecomando programado em um carro pode ser programado em outro carro, ou seja, não bloqueia quando programado.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Toyota",
model: "Corolla 1.6 (Chaves)",
years: "2009 a 2010"
},
{
manufacturer: "Toyota",
model: "Corolla 1.8 (Chaves)",
years: "2009 a 2012"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0 (Chaves)",
years: "2011 a 2012"
},
{
manufacturer: "Toyota",
model: "Corolla 1.6 (Telecomando)",
years: "2009 a 2010"
},
{
manufacturer: "Toyota",
model: "Corolla 1.8 (Telecomando)",
years: "2009 a 2016"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0 (Telecomando)",
years: "2011 a 2016"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Para o veículo Corolla utilize o transponder ID 4D70.", 
image: "/images/Transponders/4D-70.jpg"},

{title: "", 
description: "", 
ballon: "Para veículos com essa chave, esta carga realiza a programação de chaves e telecomando.", 
image: "/images/Chaves e Telecomandos/Programação Telecomando.jpg"},

{title: "", 
description: "", 
ballon: "Para veículos com essa chave, esta carga realiza somente a programação do telecomando. Para programação de chaves, utilize a carga OBD0083.", 
image: "/images/Chaves e Telecomandos/Programação Telecomando 2.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Corolla fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o apagamento das chaves existentes PATS 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corola`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corola`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Apagando o Telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corola`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de telecomandos`], help: `Tecle OK`, menu: 1000},

]},{title: `Programando o Telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corola`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de telecomandos`], help: `Tecle OK`, menu: 1000},

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

{ label: `Use adaptador A3!`,
screens: [
`&nbsp;`,
`Use&nbsp;adaptador&nbsp;`,
`A3!`,
`<br />`,
],
causes: [
`Não esta usando cabo universal + adaptador A3,`,`Mau contato no cabo universal + adaptador A3 ao OBDMap.`,],
solutions: [
`Verificar se utiliza cabo universal + adaptador A3,`,`Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,`Verificar bom estado do cabo universal e adaptador A3,`,`Verificar se os parafusos que prendem o cabo universal + adaptador A3 no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
