//Capa
nomeCarga = `Manual Carga -  OBD0129<br />Leitura de Senha Painel Magneti Marelli G5 via OBD`;
revCarga = `Rev. 1`;
dataManual = `Dezembro 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha do painel G5 Magneti Marelli via OBD.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos citados anteriormente fica localizada na área A5.<br /><br />`, 
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
{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Marelli`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
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
`Senha:&nbsp;****`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Anote a senha. Ela será utilizada para realizar a programação de chaves.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;não&nbsp;encontrada!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A versão do painel pode ser invalida,`,`O painel pode ser VDO.`,],
solutions: [
]
},
{ label: `Tempo de espera!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O painel pode estar bloqueado.`,``,],
solutions: [
`Deixar o painel energizado (chave ligada) por uma hora para desbloqueá-lo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
