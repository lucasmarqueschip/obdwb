//Capa
nomeCarga = "Programação de Chaves e Telecomandos Mitsubishi Imob2 e Alarme2 (Outlander, Lancer, ASX 10-16)";
revCarga = "Rev. 4";
dataManual = "Abril 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para o veículo.`,
`Programação de até 4 telecomandos para o veículo.`,
`<obs>`,
`Observação:`,
` Se o veículo tiver somente um telecomando programado, durante a programação do primeiro será necessário acompanhar os flashes do telecomando como explicado no passo 13 ou no vídeo explicativo, pois a mensagem de "Telecomando programado" não aparecerá. A partir do segundo telecomando programado, a mensagem "Telecomando programado" será exibida.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mitsubishi",
model: "ASX 2.0",
years: "2011 a 2018"
},
{
manufacturer: "Mitsubishi",
model: "Lancer 2.0",
years: "2011 a 2018"
},
{
manufacturer: "Mitsubishi",
model: "Lancer Evolution 2.0",
years: "2010 a 2014"
},
{
manufacturer: "Mitsubishi",
model: "Outlander 2.0",
years: "2010 a 2014"
},
{
manufacturer: "Mitsubishi",
model: "Outlander 2.4",
years: "2010 a 2011"
},
{
manufacturer: "Mitsubishi",
model: "Outlander 3.0",
years: "2010 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) dedicado para Mitsubishi. De acordo com a carga OBD0231.", 
image: "/images/Transponders/PCF7936 (ID46) Dedicado Mitsubishi.jpg"},

{title: "", 
description: "", 
ballon: "Telecomando utilizado.", 
image: "/images/Chaves e Telecomandos/Chave Mitsubishi Telecomando.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na posição A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`Lancer`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`Lancer`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 1`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro no Transponder *`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;Transponder&nbsp;*`,
`<br />`,
],
causes: [
`Transponder inválido. `,`O transponder já se encontra programado e travado. `,`O transponder utilizado não está dedicado para Mitsubishi.`,],
solutions: [
`Utilize um transponder correto conforme solicitado no manual. `,`Utilize transponder dedicado para Mitisubishi novo. `,`Utilize a carga OBD0231 para realizar a dedicação do transponder.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`O veículo selecionado está incorreto. `,`Veículo fora da aplicação. `,],
solutions: [
`Selecione o veículo correto. `,`Contate o suporte técnico. `,``,]
},

{ label: `Acesso Negado! *`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!&nbsp;*`,
`<br />`,
`<br />`,
],
causes: [
`O veículo selecionado está incorreto. `,`Veículo fora da aplicação. `,],
solutions: [
`Selecione o veículo correto. `,`Contate o suporte técnico. `,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado! *`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!&nbsp;*`,
`<br />`,
`<br />`,
],
causes: [
`O veículo selecionado está incorreto.`,`Veículo fora da aplicação.`,``,``,``,``,],
solutions: [
`Selecione o veículo correto.`,`Contate o suporte técnico.`,``,``,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
