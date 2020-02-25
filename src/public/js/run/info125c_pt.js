//Capa
nomeCarga = `Manual Carga -  OBD0125<br />Programação Alarme Hyundai / Kia ( Tucson / I-30 / Soul / Sorento )`;
revCarga = `Rev. 7`;
dataManual = `Julho 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar os telecomandos dos modelos da linha Hyundai e Kia citados abaixo.`,
`O número máximo de telecomandos programados por veículos são dois, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Hyundai`,
model: `Tucson`,
years: `2008 a 2014`
},
{
manufacturer: `Hyundai`,
model: `I-30`,
years: `2008 a 2011`
},
{
manufacturer: `Hyundai`,
model: `HB20`,
years: `2013 a 2017`
},
{
manufacturer: `Hyundai`,
model: `Azera`,
years: `2009 a 2009`
},
{
manufacturer: `Hyundai`,
model: `Elantra 5L 1999CC Automático`,
years: `2016 a 2016`
},
{
manufacturer: `KIA`,
model: `Cerato`,
years: `2013 a 2013`
},
{
manufacturer: `KIA`,
model: `Soul`,
years: `2010 a 2012`
},
{
manufacturer: `KIA`,
model: `Sorento`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação:`, `Para programar o I-30, é necessário retirar a chave da ignição antes de pressionar o botão do telecomando. <br />Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga. <br /> <font color="red"><b>Atenção:</b></font> <br />Só é possível programar os telecomandos originais, e os telecomandos existentes serão apagados automaticamente.`, undefined);




resources = [
{title: `Exemplos de telecomandos`, 
description: ``, 
ballon: `Utilize a chave original do HB20 e transponder ID60 dedicado Hyundai.`, 
image: `/images/Chaves e Telecomandos/Telecomando Hyundai.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Telecomando Kia.jpg`},

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
description: `A tomada de diagnóstico dos veículos citados acima fica localizada na área A5.<br /> <br /><br />`, 
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
{title: `Realizando a Programação dos telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Hyundai`], help: `Tecle OK`, menu: 1000},
{lines: [`Tucson`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e programar telecomando`], help: `Tecle OK`, menu: 1000},
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
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Pressione&nbsp;o`,
`Telecomando!`,
`<br />`,
],
help: `Nesta etapa o botão LOCK ou UNLOCK do telecomando deve ser pressionado.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Para programar mais telecomandos tecle OK e retorne ao passo 7 ou tecle VOLTA para finalizar o procedimento.`
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
{ label: `Pressione o Telecomando`,
screens: [
`&nbsp;`,
`Pressione&nbsp;o`,
`Telecomando`,
`<br />`,
],
causes: [
`Telecomando sem bateria,`,`Bateria do telecomando ruim,`,`Telecomando sem frequência.`,],
solutions: [
`Verificar se há bateria no telecomando,`,`Trocar bateria do telecomando,`,`Trocar o telecomando.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
