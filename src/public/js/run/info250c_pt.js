//Capa
nomeCarga = `Manual Carga -  OBD0250<br />Auto Ajuste de telecomando Peugeot BSI 1 (206 04-12, 207 07-12)`;
revCarga = `Rev. 1`;
dataManual = `Dezembro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
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
ballon: `Cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

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

obdmap = false;
services = 
[
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Tecle OK!`
},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;`,
`a&nbsp;chave`,
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
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
{lines: [
`Confira&nbsp;a&nbsp;bateria&nbsp;e&nbsp;a&nbsp;frequencia&nbsp;do&nbsp;`,
`telecomando!`,
`Nota:&nbsp;Muito&nbsp;importante&nbsp;para&nbsp;o&nbsp;sucesso&nbsp;`,
`do&nbsp;procedimento`,
],
help: `Muito importante para o sucesso do procedimento`
},
{lines: [
`AVISO!E&nbsp;crucial&nbsp;O&nbsp;bom&nbsp;estado&nbsp;do&nbsp;`,
`telecomando&nbsp;para&nbsp;essa&nbsp;operacao!`,
`Nota:`,
`Caso&nbsp;haja&nbsp;dúvida&nbsp;o&nbsp;procedimento&nbsp;pode&nbsp;`,
`falhar`,
],
help: `Caso haja dúvida o procedimento pode falhar`
},
{lines: [
`ATENCAO!&nbsp;Sera&nbsp;pedido&nbsp;um&nbsp;tempo&nbsp;de&nbsp;5s&nbsp;`,
`para&nbsp;pressionar&nbsp;o&nbsp;`,
`telecomando.`,
`Nota:&nbsp;Caso&nbsp;não&nbsp;seja&nbsp;respeitado,&nbsp;o&nbsp;`,
`procedimento&nbsp;deve&nbsp;ser&nbsp;reiniciado`,
],
help: `Caso não seja respeitado, o procedimento deve ser reiniciado`
},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Tecle OK!`
},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;`,
`a&nbsp;chave`,
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
`a&nbsp;chave`,
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
`Número&nbsp;de&nbsp;Falhas`,
`Presentes:&nbsp;**`,
`Tecle&nbsp;OK`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;`,
`a&nbsp;chave`,
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
`e&nbsp;tecle&nbsp;OK`,
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
`Pressione&nbsp;o&nbsp;Telecomando!`,
`Tempo:&nbsp;*`,
`Nota:&nbsp;Pressionar&nbsp;o&nbsp;telecomando&nbsp;em&nbsp;3&nbsp;`,
`segundos&nbsp;para&nbsp;confirmar&nbsp;a&nbsp;`,
`compatibilidade`,
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
`compatível`,
`<br />`,
],
help: ``
},
{lines: [
`BSI&nbsp;Reajustada`,
`Tipo:&nbsp;*`,
`Sistema:&nbsp;VS&nbsp;*`,
`Farol&nbsp;de&nbsp;Milha:&nbsp;**`,
`Tipos&nbsp;existentes:`,
`A&nbsp;-&nbsp;Sistema&nbsp;antigo(VS&nbsp;1)&nbsp;sem&nbsp;faróis&nbsp;de&nbsp;`,
`milha`,
`B&nbsp;-&nbsp;Sistema&nbsp;antigo(VS&nbsp;1)&nbsp;com&nbsp;presença&nbsp;`,
`de&nbsp;faróis&nbsp;de&nbsp;milha`,
`C&nbsp;-&nbsp;Sistema&nbsp;novo(VS&nbsp;2)&nbsp;sem&nbsp;faróis&nbsp;de&nbsp;`,
`milha`,
`D&nbsp;-&nbsp;Sistema&nbsp;novo(VS&nbsp;2)&nbsp;com&nbsp;presença&nbsp;de&nbsp;`,
`faróis&nbsp;de&nbsp;milha`,
],
help: `A: Sistema antigo(VS 1) sem faróis milha
B: Sistema antigo(VS 1) com faróis milha
C: Sistema novo(VS 2) sem faróis milha
D: Sistema novo(VS 2) com faróis milha`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,``,]
},
{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`Erro&nbsp;interno&nbsp;código:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro! Telecomando Incompativel X-Sair OK-Outro`,
screens: [
`Erro!`,
`Telecomando`,
`Incompatível`,
`&lt;OK&gt;&nbsp;Outro?`,
`Nota:&nbsp;O&nbsp;telecomando&nbsp;que&nbsp;foi&nbsp;pressionado&nbsp;`,
`no&nbsp;procedimento&nbsp;não&nbsp;foi&nbsp;`,
`reconhecido&nbsp;em&nbsp;nenhum&nbsp;dos&nbsp;quatro&nbsp;`,
`parâmetros&nbsp;da&nbsp;BSI`,
],
causes: [
`Bateria do telecomando descarregada`,`Mau funcionamento do telecomando`,`O Telecomando não é compatível com o carro`,`Problema na BSI`,],
solutions: [
`Se o telecomando possuir leds, verificar se acende ao apertar todos os botões`,`Medir a bateria do telecomando`,`Verificar frequência do telecomando`,`Verificar se o circuito do telecomando está funcionando`,`Verificar se o circuito da BSI está funcionando`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
