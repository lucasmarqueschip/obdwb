//Capa
nomeCarga = "Programação de chaves Dodge CAN3";
revCarga = "Rev. 3";
dataManual = "Janeiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha de 4 dígitos  via OBD para veículos que utilizam o sistema CAN 3.`,
`Programação de até 5 chaves via OBD do sistema CAN 3.`,
`Apagar todas as chaves do veículo via OBD. As chaves apagadas poderão ser programadas novamente com a função de programação de chaves.`,
`Leitura de 10 dígitos do Part Number via OBD, para checar a aplicação da carga.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Dodge",
model: "RAM 2500 5.9",
years: "2006 a 2009"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Chave original.", 
image: "/images/Chaves e Telecomandos/chave dodge manual 2.jpg"},

{title: "", 
description: "", 
ballon: "T19 (ID46) com lock dedicado a Dodge, este transponder pode ser preparado com a carga OBD0192.", 
image: "/images/Transponders/ID-46.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando Leitura do part number do Imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>CAN 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN 3`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`PART&nbsp;NUMBER:`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Códigos suportados:
05026219AG
05026219AE
56040659AJ

OBS.: caso identifique um part number diferente dos citados acima, contate o Suporte.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando Leitura de senha do sistema CAN 3`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>CAN 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN 3`, `>Ler senha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`PART&nbsp;NUMBER:`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Senha:`,
`****`,
`<br />`,
],
help: `Anote a senha, a mesma poderá ser utilizada para realizar a programação de chaves.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o apagamento de todas as chaves no sistema CAN 3`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>CAN 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN 3`, `>Apagar chaves`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
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
help: `Tecle OK!`
},
]
}, {title: `Realizando a programação de chaves no sistema CAN 3`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Dodge`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Dodge`, `>CAN 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN 3`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave&nbsp;&lt;OK&gt;`,
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
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;&nbsp;&nbsp;&nbsp;`,
`Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,``,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,`O sistema não respondeu.`,],
solutions: [
`Verificar aplicação.`,`Desligue a chave, ligue e realize o procedimento novamente.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,`O sistema não respondeu.`,],
solutions: [
`Verificar aplicação.`,`Desligue a chave, ligue e realize o procedimento novamente.`,]
},

{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;nao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encontrada!`,
`<br />`,
],
causes: [
`Arquivo do imobilizador está corrompido,`,`Arquivo inválido do imobilizador,`,`A senha do imobilizador pode estar resetada.`,`Este veículo não está na aplicação.`,],
solutions: [
`Verifique a tabela de aplicação,`,`Certifique-se de que o arquivo do Imobilizador está correto,`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Conferir a senha digitada.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
