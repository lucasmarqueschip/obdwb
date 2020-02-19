//Capa
nomeCarga = "Desbloqueio de Imobilizador Ativo Gol G6 Painel Marelli (14-16) (chaves)";
revCarga = "Rev. 2";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Desbloqueio do painel Marelli do Gol G6 quando ele indica imobilizador ativo, podendo assim realizar a programação de chaves utilizando a carga OBD0158.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Gol 1.0",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Gol 1.6",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Voyage 1.0",
years: "14 a 16"
},
{
manufacturer: "VW",
model: "Voyage 1.6",
years: "14 a 16"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Reazliando o desbloqueio do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Desbloquear?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Desbloquear?`, `>Marelli`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli`, `>Gol`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Chassi:*********`,
`********&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se o painel é original do veiculo.`
},
{lines: [
`Pain:&nbsp;GOL`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Ao final do procedimento é necessario realizar as seguintes operações:
1º- Desligue a bateria aguarde 10s e ligue novamente
2º- Programar as chaves, utilizando novos transponders (ID48 CAN G6)`
},
]}
];
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

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel pode não ser da fabricante Marelli.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Tempo de espera!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera!`,
`<br />`,
`<br />`,
],
causes: [
`O painel está em tempo de espera.`,],
solutions: [
` Deixar o painel ligado por 10 minutos e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 hora e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 dia e tentar fazer o procedimento sem desligar;`,]
},

{ label: `Pain: Invalido Data: ******** Serial: ******** Cod: **********`,
screens: [
`Pain:&nbsp;Invalido`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
causes: [
`O veiculo não corresponde a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
