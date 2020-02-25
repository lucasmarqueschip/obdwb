//Capa
nomeCarga = `Manual Carga -  OBD0088<br />Leitura de Senha e Programação de Chaves do Audi Painel 932M Crypto`;
revCarga = `Rev. 3`;
dataManual = `Janeiro 2020`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha.`,
`Realiza a leitura da senha do painel criptografado de 4 dígitos através da tomada de diagnóstico.`,
``,
`Programação de chaves.`,
`Permite programar até 8 chaves no mesmo veículo. As chaves que não forem apresentadas e já estavam programadas não funcionarão neste veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Audi`,
model: `A3 1.6`,
years: `2002 a 2004`
},
{
manufacturer: `Audi`,
model: `A3 1.8`,
years: `2002 a 2004`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID48 (T42) crypto.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Transponder ID48.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A1.<br />Para realizar o emparelhamento<br />da BSI.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico do veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na posição A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 1: Remova o pólo negativo da bateria por 10 segundos.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Solução erro na leitura 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 2: Volte o pólo negativo da bateria e repita a função de leitura de senha.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Solução erro na leitura 2.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Identificando o modelo de painel:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>ID. Painel VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`ID:&nbsp;çççççççççççç`,
`COD:çççççççççççç`,
`<br />`,
],
help: `Painel identificado.`
},
]
}, {title: `Realizando a Leitura de Senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Audi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Audi`, `>Pain. VDO 932M`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain. VDO 932M`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha, pois a mesma será necessária para programação de chaves.`
},
{lines: [
`Erro&nbsp;na&nbsp;leitura!`,
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;bateria!`,
`<br />`,
],
help: `O OBDMap não conseguiu ler os dados do painel.`
},
{lines: [
`<br />`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
help: `O arquivo do painel é inválido.`
},
{lines: [
`Painel&nbsp;Invalido!`,
`OK&nbsp;-&nbsp;Continua`,
`VOLTA&nbsp;-&nbsp;Sair`,
`<br />`,
],
help: `Tecle OK para realizar a leitura de senha ou tecle VOLTA para voltar para o menu anterior.`
},
]
}, {title: `Realizando a Programação de Chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Audi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Audi`, `>Pain. VDO 932M`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain. VDO 932M`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilize&nbsp;o`,
`transponder&nbsp;ID48`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Utilize a senha lida anteriormente e Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;2`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada.`
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
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`Insira&nbsp;a&nbsp;proxima&nbsp;`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Insira a segunda chave. 
Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Erro&nbsp;na&nbsp;leitura!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Desligue e ligue a bateria!`,
screens: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;bateria!`,
`<br />`,
],
causes: [
`O OBDMap não conseguiu ler os dados do painel.`,],
solutions: [
`ACRESCENTAR DUAS ÚLTIMAS IMAGENS (PASSO 1 E PASSO 2) BATERIA.`,]
},
{ label: `Painel Invalido!`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `OK - Continuar VOLTA - Sair`,
screens: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Continuar`,
`VOLTA&nbsp;-&nbsp;Sair`,
`<br />`,
],
causes: [
`O painel deste veículo não possui o processador com final 932M.`,],
solutions: [
` `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
