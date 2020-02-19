//Capa
nomeCarga = "Renault Scénic mudança de caixas e reset do imobilizador";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Função 1: Mudança para Caixa 1`,
`Realiza a mudança lógica para a Caixa 1, o transponder que será utilizado é o 4D64`,
``,
`Função 2: Mudança para Caixa 2`,
`Realiza a mudança lógica para a Caixa 2, o transponder que será utilizado é o 4D60. Esta função é recomendada quando começa a acontecer problemas com a caixa 1`,
``,
`Função 3: Reset UCH 2`,
`Efetua o reset na UCH, impossibilitando a leitura da senha após este serviço. O imobilizador fica apto para funcionar em outro veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Scenic 1.6",
years: "1999 a 2008"
},
{
manufacturer: "Renault",
model: "Scenic 2.0",
years: "1999 a 2008"
},
];
applicationObs = createObs("Observação:", "Está carga faz somente as funções troca de caixas e reset, para realizar a leitura e a programação de chaves é necessário usar a carga Mégane Scénic Leitura e programação de chaves.", undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Instruções de como retirar o fusível B 5 amperes:", 
description: "", 
ballon: "Abra a tampa da caixa de fusíveis e use a pinça para retirar o fusível B5.", 
image: "/images/Funções Específicas/OBD0076 - Renault Scénic mudança de caixas e reset do imobilizador/Como retirar o fusível 1.jpg"},

{title: "", 
description: "", 
ballon: "Fusível B 5 amperes identificado.", 
image: "/images/Funções Específicas/OBD0076 - Renault Scénic mudança de caixas e reset do imobilizador/Como retirar o fusível 2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte a pinça no fusível B 5. E puxe o fusível para fora da caixa.", 
image: "/images/Funções Específicas/OBD0076 - Renault Scénic mudança de caixas e reset do imobilizador/Como retirar o fusível 3.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Mudança para caixa 1:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Scenic`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Scenic`, `>Mudar p/ caixa1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Desligue&nbsp;ignicao`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Mudança para caixa 2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Scenic`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Scenic`, `>Mudar p/ caixa2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
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
`Desl.&nbsp;a&nbsp;ignicao`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Reset do imobilizador:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Scenic`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Scenic`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`CUIDADO!&nbsp;Leia&nbsp;a`,
`&nbsp;senha&nbsp;e&nbsp;anote`,
`&nbsp;antes&nbsp;do&nbsp;reset`,
`&nbsp;&nbsp;senao&nbsp;a&nbsp;UCH`,
],
help: ``
},
{lines: [
`<br />`,
`sera&nbsp;perdida!!!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Faca&nbsp;o`,
`&nbsp;&nbsp;&nbsp;Procedimento!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`com&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;desligada!`,
`<br />`,
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
`Retire&nbsp;o&nbsp;fusivel`,
`B&nbsp;5&nbsp;amperes!`,
`<br />`,
],
help: `Para informações de como retirar o fusível B 5 consulte a pag. 5.`
},
{lines: [
`<br />`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;o&nbsp;fusivel`,
`dentro&nbsp;de&nbsp;30s`,
`<br />`,
],
help: `Caso ultrapasse o tempo de 30s poderá
aparecer à mensagem “Erro de comunicação”.`
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
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,`Tempo de 30 segundos para colocar o fusível expirado.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Colocar o fusível antes de 30 segundos.`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
