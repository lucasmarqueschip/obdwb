//Capa
nomeCarga = "Geração de chaves Mercedes PLD FR1 Modelo C e D via OBD";
revCarga = "Rev. 4";
dataManual = "Outubro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de chaves para os veículos que utilizam o sistema PLD FR1 com a PLD Modelo C ou D.`,
``,
`É necessário que a PLD tenha um dos seguintes códigos; 06A, 60A ou 56E. Pode-se identificar o modelo e código da PLD através da função "Identificação da PLD" na Página 08. Para outros códigos encontrados consulte suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mercedes",
model: "Acello 915C",
years: "2005 a 2011"
},
{
manufacturer: "Mercedes",
model: "Atego",
years: "2005 a 2011"
},
{
manufacturer: "Mercedes",
model: "Axor",
years: "2005 a 2011"
},
{
manufacturer: "Mercedes",
model: "1944S",
years: "2005 a "
},
{
manufacturer: "Mercedes",
model: "1938S",
years: "2005 a "
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder T5/NOVA (Epóxi).", 
image: "/images/Transponders/Transponder T5 como ID20.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o cabo OBD 24v + D2. Conecta o OBDMap ao veículo para o procedimento via diagnose.", 
image: "/images/Acessórios/Cabo OBD 24v.jpg"},

{title: "", 
description: "", 
ballon: "Adaptador D4. Usado somente nos casos em que a entrada de diagnose não é OBD.", 
image: "/images/Acessórios/Adaptador D4..jpg"},

{title: "Todos os acessórios conectados:", 
description: "Todos os acessórios conectados para geração de chaves.<br />Obs. 1. Para a identificação da PLD não é obrigatório o Módulo<br />de Transponder estar conectado.<br />Obs. 2. O uso do adaptador A4 depende do conector de<br />diagnose do veículo.<br />", 
ballon: "Todos os acessórios conectados para geração de chaves.<br />Obs. 1. Para a identificação da PLD não é obrigatório o Módulo de Transponder estar conectado.<br />Obs. 2. O uso do adaptador A4 depende do conector de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0187 PLD/Todos os acessórios.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "O conector de diagnostico fica localizado na área A4 ou na área E4.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Caminhão/A4-E4.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`PLD&nbsp;Invalida!`,
`Codigo:&nbsp;***`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;A&nbsp;PLD&nbsp;esta`,
`&nbsp;descodificada!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;PLD&nbsp;nao`,
`&nbsp;&nbsp;Habilitada!`,
`&nbsp;&nbsp;Codigo:&nbsp;***`,
`Contate&nbsp;Suporte!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;PLD&nbsp;Invalido!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Hardware&nbsp;ECU&nbsp;nao`,
`Reconhecido!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilize&nbsp;somente`,
`Cabo&nbsp;OBD&nbsp;24V`,
`<br />`,
],
help: `Caso não utilize o cabo OBD24V neste
procedimento o OBDMap irá queimar.`
},
]
}, {title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilize&nbsp;somente`,
`Cabo&nbsp;OBD&nbsp;24V`,
`<br />`,
],
help: `Caso não utilize o cabo OBD24V neste
procedimento o OBDMap irá queimar.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;A&nbsp;bateria&nbsp;deve`,
`estar&nbsp;carregada.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK.`
},
]
}, {title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Utilize`,
`&nbsp;Adaptador&nbsp;D2&nbsp;+`,
`&nbsp;&nbsp;&nbsp;Modulo&nbsp;de`,
`&nbsp;&nbsp;Transponder`,
],
help: `Em alguns veículos será necessário o uso do adaptador D4 conectado ao OBD24V.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Utilize`,
`&nbsp;Adaptador&nbsp;D2&nbsp;+`,
`&nbsp;&nbsp;&nbsp;Modulo&nbsp;de`,
`&nbsp;&nbsp;Transponder`,
],
help: `Em alguns veículos será necessário o uso do adaptador D4 conectado ao
OBD24V.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Identificando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLD...`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Codigo&nbsp;PLD:`,
`***`,
`<br />`,
],
help: `Exibe a Identificação da PLD.`
},
]
}, {title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Modelo:&nbsp;C&nbsp;ou&nbsp;D`,
`Codigo&nbsp;PLD:&nbsp;***`,
`<br />`,
],
help: `Tecle OK`
},
]
}, {title: `Realizando a Identificação da PLD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Identificacao`,
`&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>PLD FR 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`, `>Modelo C ou D`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C ou D`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ignicao!`,
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;4&nbsp;s.`,
`<br />`,
],
help: `Desligue a ignição logo após os 4
segundos.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ignicao!`,
`<br />`,
],
help: `Desligue a ignição imediatamente.`
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;T5/NOVA.`,
`&nbsp;(OK)&nbsp;p/&nbsp;prog..`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`&nbsp;Grav.&nbsp;T5/Nova`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`(OK)&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Se for escolhido gerar outra chave tecle OK e volte ao Passo 17, senão, tecle Volta para finalizar.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo OBD24V e adaptador D2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é T5 virgem.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder,`,`Conferir o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder ou para deixá-lo virgem (ID 20) caso seja necessário.`,]
},

{ label: `PLD incorreta!`,
screens: [
`&nbsp;`,
`&nbsp;PLD&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`Código da PLD não corresponde a aplicação,`,`Utilizando função incorreta no OBDMap.`,],
solutions: [
`Conferir aplicação,`,`Conferir código da PLD através da função "Identificação da PLD" na Página XX,`,`Consultar o suporte técnico.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
