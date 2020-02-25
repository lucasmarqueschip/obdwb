//Capa
nomeCarga = `Manual Carga -  OBD0208<br />Programação de Telecomando MITSUBISHI Alarme 1`;
revCarga = `Rev. 4`;
dataManual = `Outubro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
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
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte o cabo universal ao adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = true;
services = 
[{title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubishi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubishi`, `>Alarme1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme1`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`Os&nbsp;telecomandos`,
`&nbsp;ja&nbsp;programados`,
`&nbsp;serao&nbsp;apagados`,
`(X)Nao&nbsp;/(OK)Sim`,
],
help: `Todos os telecomandos já programados serão apagados, tendo assim que reprogramá-los novamente.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Press.&nbsp;Ò&nbsp;por&nbsp;2s.`,
`Press.&nbsp;Ò&nbsp;por&nbsp;2s.`,
`Press.&nbsp;Ò`,
`<br />`,
],
help: `Pressione o botão "Abrir" do telecomando por 2 segundos, pressione o botão "Fechar" do telecomando por 2 segundos. Por fim aperte o botão "Abrir" novamente.`
},
{lines: [
`N.&nbsp;telecomandos:`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;&nbsp;&nbsp;(OK)Sim`,
],
help: `Número de telecomandos programados, OK para programar mais ou VOLTA para finalizar.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
