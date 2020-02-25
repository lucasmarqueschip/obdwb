//Capa
nomeCarga = `Manual Carga -  OBD0094<br />Leitura da Senha do Alarme GM1 (93255733) via Cabo MCU e Programação TLCMD OBD2`;
revCarga = `Rev. 6`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no módulo de alarme via cabo MCU.`,
` Apagar telecomando via diagnóstico.`,
` Programar telecomando via diagnóstico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 1.8`,
years: `1998 a 2001`
},
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `1998 a 2001`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Telecomando do Astra.`, 
image: `/images/Chaves e Telecomandos/Telecomando Astra.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo universal + adaptador A1.<br />Para realizar o emparelhamento<br />da BSI.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Retirando o módulo de alarme do veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/parafuso fixador.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Utilize uma chave torx.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Levante a parte esquerda da moldura.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Utilize uma chave biela.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire o módulo de Alarme.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire os dois conectores do modulo.jpg`},

{title: `Identificando e desmontando o módulo de Alarme:`, 
description: `Retire o módulo de Alarme do veículo e leve-o para bancada.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire o módulo de Alarme do veículo e leve-o para bancada.jpg`},

{title: ``, 
description: `Retire o módulo de Alarme do veículo e leve-o para bancada.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/remova a placa da caixa do modulo.jpg`},

{title: `Localizando os pontos para soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Localizando os pontos para soldagem do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Identificando os pontos a 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Não trocar as posições dos fios.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Todos os acessorios conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo fica localizada na área F9.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/F9.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando Leitura de Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme1 HC05`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme1 HC05`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;cabo&nbsp;`,
`MCU&nbsp;no&nbsp;modulo&nbsp;de&nbsp;`,
`alarme&nbsp;segundo&nbsp;o`,
`manual&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
help: `Anote a senha, a mesma será utilizada
para programar o telecomando.`
},
]
}, {title: `Realizando o apagamento do telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme1 HC05`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme1 HC05`, `>Apagar telecmd`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Utilize a senha lida anteriormente.
Tecle OK.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apagado!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme1 HC05`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme1 HC05`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:`,
`****`,
`<br />`,
],
help: `Utilize a senha lida anteriormente. 
Tecle OK.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pressione&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;`,
`varias&nbsp;vezes!`,
`<br />`,
],
help: `Os símbolos no display indicam os botões travar e destravar do
telecomando.`
},
{lines: [
`&nbsp;`,
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
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
`Mau contato no cabo MCU com o módulo de Alarme,`,`Mau contato no cabo MCU com o OBDMap,`,`Módulo de Alarme com problema ou arquivo corrompido.`,``,``,],
solutions: [
`Verificar a correta posição dos fios no módulo de Alarme,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,``,]
},
{ label: `ARQUIVO INVALIDO DO MODULO`,
screens: [
`&nbsp;`,
`ARQUIVO&nbsp;INVALIDO`,
`&nbsp;&nbsp;&nbsp;DO&nbsp;MODULO`,
`<br />`,
],
causes: [
`O arquivo do módulo de alarme está corrompido.`,],
solutions: [
]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no módulo de Alarme,`,`O cabo MCU ou o módulo de Alarme está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no módulo de Alarme,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
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
`A senha inserida está incorreta.`,``,],
solutions: [
`Inserir senha correta.`,]
},
{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão travar ou destravar não foi pressionado no tempo devido.`,],
solutions: [
`Pressionar o telecomando no momento indicado pelo OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
