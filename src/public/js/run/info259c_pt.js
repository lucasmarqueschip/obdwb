//Capa
nomeCarga = `Manual Carga -  OBD0259<br />Programação de chaves Renault UCH Continental (14-18)`;
revCarga = `Rev. 0`;
dataManual = `Março 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de 4 chaves`,
`Apagamento de falhas `,
`Teste de Compatibilidade`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Duster 1.6`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Duster 2.0`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Duster Oroch 1.6`,
years: `2016 a 2019`
},
{
manufacturer: `Renault`,
model: `Duster Oroch 2.0`,
years: `2016 a 2019`
},
{
manufacturer: `Renault`,
model: `Logan 1.0`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Logan 1.6`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Sandero 1.0`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2014 a 2019`
},
{
manufacturer: `Renault`,
model: `Sandero RS 2.0`,
years: `2015 a 2019`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Telecomando utilizado:`, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chave Reanult UCH.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: `A tomada de diagnóstico do veículo fica localizada na área L4.`, 
image: `/images/Tomada de Diagnostico/Carro/I4.jpg`},

{title: `Instruções de como retirar o fusível B 5 amperes:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0259/FUSIVEL.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Duster`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-4 Continental`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;falhas&nbsp;passadas...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
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
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remova&nbsp;a&nbsp;chave&nbsp;da&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
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
`LENDO...`,
`AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`**&nbsp;segundos`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguardando&nbsp;`,
`dados...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada`,
`Aperte&nbsp;&lt;OK&gt;&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Número&nbsp;de&nbsp;chaves:&nbsp;*`,
`Deseja&nbsp;programar&nbsp;mais&nbsp;chaves?`,
`(X)&nbsp;NAO&nbsp;&nbsp;&nbsp;(OK)&nbsp;SIM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Duster`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-4 Continental`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro na Programacao! <OK>`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha Incorreta! <OK>`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},
{ label: `Saldo Web Service Insuficiente!`,
screens: [
`Saldo&nbsp;Web`,
`Service`,
`Insuficiente!`,
`<br />`,
],
causes: [
`O crédito total disponível se esgotou.`,],
solutions: [
`Entrar em contato com o comercial, ou com o suporte.`,]
},
{ label: `Transponder Rejeitado! <OK>`,
screens: [
`&nbsp;`,
`Transponder&nbsp;Rejeitado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Veiculo incompativel!`,
screens: [
`Veiculo`,
`incompativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
