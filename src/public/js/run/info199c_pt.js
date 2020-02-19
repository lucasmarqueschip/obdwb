//Capa
nomeCarga = "Leitura de senha e programação de chaves de presença Imob GEN4";
revCarga = "Rev. 2";
dataManual = "Fevereiro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha de 4 dígitos dos veículos da aplicação;`,
`Apagamento de todas as chaves do sistema;`,
`Adição de chaves para os veículos contidos na aplicação;`,
``,
``,
`Todos os serviços são realizados pela tomada de diagnose OBD2.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Freemont 2.4",
years: "2012 a 2014"
},
{
manufacturer: "Dodge",
model: "Journey 2.4 Aut (Chile)",
years: "2013 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Chave utilizada:", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/chave freemont.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área A5.<br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Procedimento para realização do Passo 11 da programação de chaves.", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/Leitura de senha e programação de chaves de presença Immo GEN4 via OBD/Originals/freemont.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura da senha de 4 dígitos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Dodge`], help: `Tecle OK`, menu: 1000},
{lines: [`Journey`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`GEN4 FREEMONT`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Dodge`], help: `Tecle OK`, menu: 1000},
{lines: [`Journey`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`GEN4 FREEMONT`], help: `Tecle OK`, menu: 1000},
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico`,``,]
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

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`A senha digitada está incorreta.`,],
solutions: [
`Repita o procedimento de leitura de senha.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no`,
`&nbsp;&nbsp;Procedimento!`,
`<br />`,
],
causes: [
`A chave não foi apagada com sucesso.`,``,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Erro na adaptacao!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;adaptacao!`,
`<br />`,
],
causes: [
`A chave não foi adaptada com sucesso.`,],
solutions: [
`Repita o procedimento`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
