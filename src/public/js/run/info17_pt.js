//Capa
nomeCarga = "Golf Antigo Immo 1- Leitura de Senha";
revCarga = "Rev. 2";
dataManual = "Dezembro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no imobilizador via soquete S1.`,
`<obs>`,
`Observação: Esta carga realiza somente a leitura de senha. Para realizar a programação de chaves ou adaptação da ECU, utilize a carga OBD0069.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Golf 1.6",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 1.8",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 2.0",
years: "1995 a 1999"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Soquete S1. Realiza leitura de senha em microcontroladores.", 
image: "/images/Acessórios/Soquete S1.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "", 
ballon: "Remova os parafusos 1 e 2.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova Parafusus.jpg"},

{title: "", 
description: "", 
ballon: "Remova a capa que protege a caixa de direção.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova CAPA.jpg"},

{title: "", 
description: "", 
ballon: "Remova a moldura que esconde os parafusos 3 e 4.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova Moldura.jpg"},

{title: "", 
description: "", 
ballon: "Remova os parafusos 3 e 4.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova parafusos 2.jpg"},

{title: "", 
description: "", 
ballon: "Remova o parafuso 5.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova parafuso 3.jpg"},

{title: "", 
description: "", 
ballon: "Remova o parafuso 6.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova pafuso 4.jpg"},

{title: "", 
description: "", 
ballon: "Remova a moldura.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Remova moldura inferior.jpg"},

{title: "", 
description: "", 
ballon: "O imobilizador deste veículo encontra-se em um lugar de difícil visualização como mostra a foto abaixo, remova o parafuso que o prende.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Local IMMO.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Immo.jpg"},

{title: "", 
description: "", 
ballon: "A com auxílio de uma chave de fenda, faça uma alavanca na caixa do imobilizador para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Desmontano IMMO.jpg"},

{title: "", 
description: "", 
ballon: "Placa do imobilizador solta da caixa.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Placa IMMO.jpg"},

{title: "Localizando o microcontrolador:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0017 Golf 95/PIC immo.jpg"},

{title: "Conectando o Soquete S1 no microcontrolador:", 
description: "", 
ballon: "Observe que o soquete só se encaixa em uma posição.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Socket IMMO.jpg"},

{title: "", 
description: "", 
ballon: "Soquete S1 conectado. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato.", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Socket Conectado.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0017 Golf 95/Todos os Equipamentos conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a Leitura da Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 2 Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2 Golf 95`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando a Programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Caixa Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Caixa Golf 95`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o`,
`transponder&nbsp;T33!`,
`<br />`,
],
help: ``
},
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
`Senha:`,
`0000`,
`<br />`,
],
help: `Insira a senha que foi lida do imobilizador através da carga OBD0017. Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada, utilize as setas para cima e para baixo.`
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
help: `Primeira chave já programada. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Iniciar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Programacao!`,
`<br />`,
],
help: `Para programar mais chaves siga o procedimento a seguir. Tecle OK!`
},
]
}, {title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Caixa Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Caixa Golf 95`, `>Adaptar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`ECU`,
`&nbsp;&nbsp;Adaptada!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Imobilizador com defeito ou sujeira nos pinos do microcontrolador, `,`Soquete S1 com defeito ou sujeira nos pinos do soquete, `,`Soquete S1 mal encaixado no microcontrolador do imobilizador, `,`Soquete S1 mal encaixado no OBDMap, `,`OBDMap com defeito. `,``,``,],
solutions: [
`Verificar o encaixe correto do Soquete S1 no OBDMap e no microcontrolador, `,`Pressionar o soquete com o dedo para melhorar o encaixe no microcontrolador, `,`Fazer limpeza dos pinos do soquete S1 e do microcontrolador, `,`Verificar se existe algum defeito visível no Soquete S1, na dúvida, consulte o suporte técnico. `,``,``,``,``,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Imobilizador com defeito, `,`Soquete S1 com defeito, `,`Soquete S1 mal encaixado no microcontrolador do imobilizador, `,`Soquete S1 mal encaixado no OBDMap, `,`OBDMap com defeito.`,``,],
solutions: [
`Verificar o encaixe correto do Soquete S1 no OBDMap e no microcontrolador, `,`Verificar se existe algum defeito visível no Soquete S1, na dúvida, consulte o suporte técnico. `,``,``,]
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

{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`Quando inserido a senha errada o imobilizador pode ser bloqueado por 25 minutos, neste caso mesmo digitando a senha correta ele continua acusando senha incorreta. `,``,],
solutions: [
`Deixe a ignição ligada por 25 minutos, e repita o procedimento, certificando que a senha digitada é a correta. `,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
