//Capa
nomeCarga = `Manual Carga -  OBD0208<br />Programação de Telecomando MITSUBISHI Alarme 1`;
revCarga = `Rev. 4`;
dataManual = `Outubro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programa telecomandos para os veículos Mitsubishi que utilizam o sistema Alarme1.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Mitsubishi`,
model: `L200 Triton 2.4`,
years: `2013 a 2017`
},
{
manufacturer: `Mitsubishi`,
model: `L200 Triton  3.2`,
years: `2008 a 2017`
},
{
manufacturer: `Mitsubishi`,
model: `L200 Triton 3.5`,
years: `2008 a 2017`
},
{
manufacturer: `Mitsubishi`,
model: `Pajero Dakar 3.2`,
years: `2013 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Esta carga não funciona para veículos com partida START/STOP.`, undefined, undefined);




resources = [
{title: `Telecomando utilizado:`, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/tlcmd mit.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos está localizada na área D6.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D6.jpg`},
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
{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`L200`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`Os&nbsp;telecomandos`,
`já&nbsp;programados`,
`serão&nbsp;apagados`,
`(X)Não&nbsp;/(OK)Sim`,
],
help: `Todos os telecomandos já programados serão apagados, tendo assim que reprogramá-los novamente.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Ligue a ignição e tecle OK!`
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
`Pressione&nbsp;Ò&nbsp;por&nbsp;2&nbsp;`,
`segundos`,
`Pressione&nbsp;Ò&nbsp;por&nbsp;2&nbsp;`,
`segundos`,
`Pressione&nbsp;Ò`,
],
help: `Pressione o botão "Abrir" do telecomando por 2 segundos, pressione o botão "Fechar" do telecomando por 2 segundos. Por fim aperte o botão "Abrir" novamente.`
},
{lines: [
`Número&nbsp;de&nbsp;`,
`telecomandos:&nbsp;*`,
`Programar&nbsp;mais?`,
`(X)Não&nbsp;&nbsp;&nbsp;(OK)Sim`,
],
help: `Número de telecomandos programados, OK para programar mais ou VOLTA para finalizar.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
