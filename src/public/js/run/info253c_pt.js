//Capa
nomeCarga = `Manual Carga -  OBD0253<br />Programação de chaves BSI-3 via OBD`;
revCarga = `Rev. 2`;
dataManual = `Julho 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Teste de compatibilidade`,
`Programação de no máximos 5 chaves`,
``,
`<obs>`,
`Observação:`,
`- Deve apresentar todas as chaves no procedimento se não as chaves não apresentadas não iram funcionar no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `208 1.2`,
years: `2013 a 2017`
},
{
manufacturer: `Peugeot`,
model: `208 1.5`,
years: `2013 a 2017`
},
{
manufacturer: `Peugeot`,
model: `208 1.6`,
years: `2013 a 2017`
},
{
manufacturer: `Peugeot`,
model: `2008 1.6`,
years: `2015 a 2017`
},
{
manufacturer: `Peugeot`,
model: `308 1.6`,
years: `2015 a 2017`
},
{
manufacturer: `Peugeot`,
model: `308 2.0`,
years: `2015 a 2017`
},
{
manufacturer: `Citroen`,
model: `C4 Lounge`,
years: `2014 a 2017`
},
{
manufacturer: `Peugeot`,
model: `408`,
years: `2015 a 2017`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `T19 (ID46) com lock dedicado a Dodge, este transponder pode ser preparado com a carga OBD0192.`, 
image: `/images/Transponders/ID-46.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal Connect`, 
image: `/images/Connect/Acessórios/Adaptador A4.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo Universal.`, 
image: `/images/Acessórios/Cabo Universal.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo fica localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
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
`Chassi:*****************&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a ECU é original do veiculo.`
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
`Use&nbsp;transponder`,
`ID46&nbsp;virgem!`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair&nbsp;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Senha:0000`,
`<br />`,
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
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignição&nbsp;com&nbsp;a&nbsp;`,
`chave&nbsp;*&nbsp;&lt;OK&gt;`,
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
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A4,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro na Programacao! <OK>`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
` `,`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,``,``,],
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
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`É necessário que o transponder tenha passado pelo procedimento de geração, ou que ele já esteja válido no veículo antes da apresentação. `,],
solutions: [
`·	Realize o procedimento de geração do transponder ou entre em contato com o suporte técnico `,``,]
},
{ label: `Use Adaptador A4!`,
screens: [
`&nbsp;`,
`Use&nbsp;Adaptador&nbsp;A4!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Iniciou o procedimento com cabo incorreto.`,],
solutions: [
`·	Inicie novamente procedimento com cabo correto.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
