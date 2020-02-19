//Capa
nomeCarga = "Hilux Prado (chaves)";
revCarga = "Rev. 6";
dataManual = "Novembro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adicionar chaves no sistema de imobilizador: é necessário ter uma chave válida no veículo.`,
`Apagar chaves: cancela todas as chaves, deixando válida apenas a chave que está na ignição, é necessário ter uma chave válida no veículo.`,
`Reset do imobilizador: reseta o imobilizador cancelando todas as chaves, o tempo para realizar o reset é de aproximadamente 30 minutos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Toyota",
model: "Hilux 2.4",
years: "2005 a 2008"
},
{
manufacturer: "Toyota",
model: "Hilux 3.0",
years: "2006 a 2006"
},
{
manufacturer: "Toyota",
model: "Hilux SW4 3.0",
years: "2007 a 2008"
},
{
manufacturer: "Toyota",
model: "Prado 2.4",
years: "2005 a 2008"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Para os veículos Hilux, SW4 e RAV-4 utilize o transponder ID4D-67G (80bits).", 
image: "/images/Transponders/Hilux 4D67.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnósticos da Hilux e Prado ficam localizadas na área D6.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D6.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;mobile!`,
`<br />`,
],
help: `Inicialize o aplicativo no dispositivo móvel.`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`&nbsp;Add.&nbsp;Chaves?`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`&nbsp;Saldo:***.***c`,
`&nbsp;Parcelas:**/**`,
`Valor&nbsp;do&nbsp;servico`,
`&nbsp;&nbsp;&nbsp;***c&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Saldo total disponível, número de parcelas do serviço, valor a ser cobrado pelo serviço.Tecle OK!`
},
{lines: [
`Serao&nbsp;debitados`,
`&nbsp;***c&nbsp;do&nbsp;saldo`,
`&nbsp;&nbsp;&lt;OK&gt;&nbsp;Aceitar`,
`&nbsp;&lt;Volta&gt;&nbsp;Negar`,
],
help: `Créditos a serem debitados do saldo.
<OK> para Confirmar.
<VOLTA> para Cancelar.
`
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
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;**&nbsp;Minutos`,
`Tempo&nbsp;-&nbsp;**&nbsp;Min.`,
`<br />`,
],
help: `Aguarde o tempo mostrado no display.`
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
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o apagamento das chaves existentes PATS 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;no&nbsp;inicio`,
`uma&nbsp;chave&nbsp;valida`,
`<br />`,
],
help: `Tem que haver uma chave já programada para realizar o procedimento.`
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira, ligue a chave e Tecle OK em no
máximo 10 segundos.`
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos.`
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
}, {title: `Realizando o reset do Imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [``, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Tempo&nbsp;-&nbsp;&nbsp;**&nbsp;min.`,
`<br />`,
],
help: `Aguarde aproximadamente 30 minutos.`
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
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
