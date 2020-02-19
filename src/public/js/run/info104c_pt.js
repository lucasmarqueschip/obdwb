//Capa
nomeCarga = "Leitura de Senha e Programação de Chaves do Painel VW VDO IMOB3";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha.`,
`Permite ler a senha de 4 dígitos via diagnóstico, dos painéis do Golf.`,
``,
`Programação de chaves.`,
`Permite programar até 8 chaves no mesmo veículo. As chaves que não forem apresentadas e já estavam programadas não funcionarão neste veículo, portanto é necessário estar sempre com as chaves a serem programadas.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Golf 1.6",
years: "2002 a 2012"
},
{
manufacturer: "VW",
model: "Golf 1.8",
years: "2002 a 2012"
},
];
applicationObs = createObs("Painéis: 826A, 806B, 826D, 846C e 846D.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área E6 e F6 da imagem.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/E6-F6.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Cod.Painel:**** Cod.Acesso:****`,
screens: [
`&nbsp;`,
`Cod.Painel:****`,
`Cod.Acesso:****`,
`<br />`,
],
causes: [
`Foi encontrado outro modelo de painel, e o mesmo não esta indicado na aplicação da carga,`,`A senha do painel poderá ser lida, mediante o código de acesso.`,],
solutions: [
`Contate o suporte técnico e indique o modelo do painel do veículo, eles passarão um código de acesso. Digite o código corretamente e espere alguns segundos, e a senha será mostrada no visor do OBDMap.`,]
},

{ label: `Erro Cod. Acesso Contate Suporte!`,
screens: [
`&nbsp;`,
`Erro&nbsp;Cod.&nbsp;Acesso`,
`Contate&nbsp;Suporte!`,
`<br />`,
],
causes: [
`O código de acesso foi digitado incorretamente.`,],
solutions: [
`Digite o código de acesso corretamente, caso não de certo, contate o suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`O painel não pode ser lido por essa carga.`,],
solutions: [
` `,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;nao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encontrada!`,
`<br />`,
],
causes: [
`O modelo do painel possui a senha em outro endereço,`,`Arquivo do painel corrompido,`,`Arquivo inválido do painel,`,`O painel pode estar resetado.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
