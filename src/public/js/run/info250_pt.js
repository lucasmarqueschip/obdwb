//Capa
nomeCarga = `Manual Carga -  OBD0250<br />Auto Ajuste de telecomando Peugeot BSI 1 (206 04-12, 207 07-12)`;
revCarga = `Rev. 1`;
dataManual = `Dezembro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Auto ajuste no telecomando`,
`Teste de Compatibilidade`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4`,
years: `2004 a 2012`
},
{
manufacturer: `Peugeot`,
model: `207 1.6`,
years: `2007 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Telecomando utilizado:`, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/telecomando peugeot 206 207.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A2.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{lines: [
`Utilize`,
`&nbsp;Adaptador&nbsp;A2`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Desligue&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Confira&nbsp;a`,
`&nbsp;&nbsp;bateria&nbsp;e&nbsp;a`,
`&nbsp;frequencia&nbsp;do`,
`&nbsp;&nbsp;telecomando!`,
],
help: `Muito importante para o sucesso do procedimento`
},
{lines: [
`AVISO!E&nbsp;crucial&nbsp;`,
`O&nbsp;bom&nbsp;estado&nbsp;do&nbsp;`,
`telecomando&nbsp;para&nbsp;`,
`essa&nbsp;operacao!`,
],
help: `Caso haja dúvida o procedimento pode falhar`
},
{lines: [
`ATENCAO!&nbsp;Sera&nbsp;`,
`pedido&nbsp;um&nbsp;tempo&nbsp;`,
`de&nbsp;5s&nbsp;para&nbsp;press&nbsp;`,
`o&nbsp;telecomando.`,
],
help: `Caso não seja respeitado, o procedimento deve ser reiniciado`
},
{lines: [
`Utilize`,
`&nbsp;Adaptador&nbsp;A2`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Desligue&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave`,
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
`Ligue&nbsp;a&nbsp;Chave`,
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
`Desligue&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave`,
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
`Ligue&nbsp;a&nbsp;Chave`,
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
`Numero&nbsp;de&nbsp;Falhas`,
`&nbsp;Presentes:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;Tecle&nbsp;Ok`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`&nbsp;&nbsp;Pressione&nbsp;o`,
`&nbsp;&nbsp;Telecomando!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Tempo:&nbsp;*`,
],
help: `Pressionar o telecomando em 3 segundos para confirmar a compatibilidade`
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compativel`,
`<br />`,
],
help: ``
},
{lines: [
`BSI&nbsp;Reajustada`,
`Tipo:&nbsp;*`,
`Sistema:&nbsp;VS&nbsp;*`,
`Farol&nbsp;Milha:&nbsp;**`,
],
help: `A: Sistema antigo(VS 1) sem faróis milha
B: Sistema antigo(VS 1) com faróis milha
C: Sistema novo(VS 2) sem faróis milha
D: Sistema novo(VS 2) com faróis milha`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Veiculo incompativel!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
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
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,``,]
},
{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro! Telecomando Incompativel X-Sair OK-Outro`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Erro!`,
`&nbsp;&nbsp;Telecomando`,
`&nbsp;&nbsp;Incompativel`,
`X-Sair&nbsp;&nbsp;OK-Outro`,
],
causes: [
`Bateria do telecomando descarregada`,`Mau funcionamento do telecomando`,`O Telecomando não é compatível com o carro`,`Problema na BSI`,],
solutions: [
`Se o telecomando possuir leds, verificar se acende ao apertar todos os botões`,`Medir a bateria do telecomando`,`Verificar frequência do telecomando`,`Verificar se o circuito do telecomando está funcionando`,`Verificar se o circuito da BSI está funcionando`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
