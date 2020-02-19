//Capa
nomeCarga = "Programação de Chaves e Telecomandos Mitsubishi Imob2 e Alarme2 (Outlander, Lancer, ASX 10-16)";
revCarga = "Rev. 4";
dataManual = "Abril 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
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
ballon: "Conecte o cabo universal ao adaptador A3.", 
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
obdmap = true;
services = 
[{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubshi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubshi`, `>Imob2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob2`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Prog.&nbsp;chaves?`,
`ASX`,
`Lancer`,
`Outlander`,
],
help: `Selecione ASX, Lancer ou Outlander e tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;apagadas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `Todas as chaves já programadas no veículo serão apagadas. Tecle OK para continuar ou VOLTA para sair.`
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
`Chave&nbsp;programada`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle OK para programar outra chave ou tecle VOLTA para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;com&nbsp;a&nbsp;prox&nbsp;`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Insira e ligue a próxima chave, e tecle OK!`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves programadas no veículo. Tecle OK!`
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
}, {title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubshi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubshi`, `>Alarme 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 2`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Selecione:`,
`ASX`,
`Lancer`,
`Lancer&nbsp;Evo`,
],
help: `Selecione ASX, Lancer, Lancer Evo ou Outlander e tecle OK!`
},
{lines: [
`Os&nbsp;telecomandos`,
`&nbsp;ja&nbsp;programados`,
`&nbsp;serao&nbsp;apagados`,
`(X)Nao&nbsp;/(OK)Sim`,
],
help: `Os telecomandos já programados no veículo serão apagados. Tecle OK para continuar ou tecle VOLTA para sair.`
},
{lines: [
`&nbsp;`,
`Siga&nbsp;orientacoes`,
`&nbsp;&nbsp;&nbsp;do&nbsp;manual!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Maximo&nbsp;de&nbsp;4`,
`Telecomandos&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`N.&nbsp;Telecomando:`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*`,
`<br />`,
],
help: `Número de telecomandos já programados no veículo. Tecle OK!`
},
{lines: [
`&nbsp;Pres&nbsp;**&nbsp;por&nbsp;4s`,
`Solte&nbsp;**&nbsp;por&nbsp;1s`,
`&nbsp;Pres&nbsp;*&nbsp;por&nbsp;2s`,
`&lt;VOLTA&gt;&nbsp;-&nbsp;Sair`,
],
help: `1 - Pressione e segure os botões LOCK e UNLOCK por quatro segundos (ou quatro flashes da chave).
2 - Solte os dois botões, e espere por 1 segundo.
3 - Aperte UNLOCK por 2 segundos (ou dois flashes da chave).

Em OBDMaps com display de 2 linhas, não aparecerá essa mensagem no display, sendo necessário acompanhar o procedimento descrito acima. 

PARA DÚVIDAS NO PROCEDIMENTO, CONSULTE O VÍDEO EXPLICATIVO.`
},
{lines: [
`&nbsp;`,
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Tlcmd&nbsp;prog.:&nbsp;*&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
`<br />`,
],
help: `Número de telecomandos programados. Tecle OK para programar mais ou tecle VOLTA para finalizar.`
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
