//Capa
nomeCarga = "TOYOTA Corolla - Programação de Chaves e Telecomandos";
revCarga = "Rev. 4";
dataManual = "Fevereiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
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
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Corolla fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando o apagamento das chaves existentes PATS 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
}, {title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
}, {title: `Apagando o Telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Apagar telecmd`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`ATENCAO!&nbsp;Fechar`,
`todas&nbsp;as&nbsp;portas!`,
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
`Aperte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`juntos&nbsp;4x&nbsp;e&nbsp;`,
`Aperte&nbsp;&nbsp;&nbsp;1x`,
`<br />`,
],
help: `Aperte Abrir/Fechar juntos 4x e Abrir 1x (Abrir e Fechar estão simbolizados por
cadeados aberto e fechado no visor do OBDMAP).`
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
}, {title: `Programando o Telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [``, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`ATENCAO!&nbsp;Fechar`,
`todas&nbsp;as&nbsp;portas!`,
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
`Pulse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;juntos`,
`4x&nbsp;e&nbsp;Pulse&nbsp;&nbsp;&nbsp;1x`,
`<br />`,
],
help: `Aperte Abrir/Fechar juntos 4x e Abrir 1x (Abrir e Fechar estão simbolizados por
cadeados aberto e fechado no visor do OBDMAP)`
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
