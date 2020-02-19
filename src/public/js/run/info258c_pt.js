//Capa
nomeCarga = "Programação de chaves Ford KA (15-18)";
revCarga = "Rev. 5";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves para o veículo.`,
`Adição de chaves para o veículo.`,
`Teste de compatibilidade com o veículo.`,
`<obs>`,
`Observações:`,
`- No procedimento de programação de chaves todas as chaves existentes são apagadas;`,
`- Ainda no procedimento de programação de chaves, é necessário ter no mínimo duas chaves`,
`em mãos;`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "KA 1.0",
years: "2015 a 2018"
},
{
manufacturer: "Ford",
model: "Ranger 2.5",
years: "2016 a 2017"
},
{
manufacturer: "Ford",
model: "KA 1.5",
years: "2015 a 2018"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/Ford KA.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o Teste de Compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`KA`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford Ka 15-18`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento e programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`KA`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford Ka 15-18`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`KA`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford Ka 15-18`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`BCM não compatível com a aplicação.`,``,``,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro ao apagar chaves!`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;ao&nbsp;apagar`,
`&nbsp;&nbsp;&nbsp;&nbsp;chaves!`,
`<br />`,
],
causes: [
`Condições incorretas do veiculo`,``,],
solutions: [
`Realize a função novamente`,`Caso o erro persista contate o suporte tecnico`,]
},

{ label: `Acesso Negado! * <OK>`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`BCM não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,``,``,]
},

{ label: `Chave nao programada!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Chave&nbsp;nao`,
`&nbsp;&nbsp;programada!`,
`<br />`,
],
causes: [
`O veículo não conseguiu identificar o transponder,`,`Transponder com problemas,`,`Antena do veículo com problemas.`,],
solutions: [
`Utilize um transponder ID48 virgem,`,`Verifique a antena do veículo.`,]
},

{ label: `Veiculo incompativel!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`<br />`,
],
causes: [
`O veiculo não é compaivel com a aplicação`,],
solutions: [
`Verifique a tabela de aplicação`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
