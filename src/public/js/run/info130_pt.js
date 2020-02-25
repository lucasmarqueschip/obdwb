//Capa
nomeCarga = `Manual Carga -  OBD0130<br />Programação de Chaves GM5`;
revCarga = `Rev. 9`;
dataManual = `Julho 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 6 chaves para o veículo. <br />É necessário ter em mãos todas as chaves a serem apresentadas, inclusive as que já estavam programadas. Caso elas não sejam apresentadas, elas não funcionarão no veículo.<obs><font color="red">Observação:</font> Esta função não deve ser utilizada em veículos Camaro e em veículos com o sistema Keyless (chave de presença), se ela for utilizada, pode causar danos ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2018`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2011 a 2018`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2011 a 2018`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2012 a 2019`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2012 a 2019`
},
{
manufacturer: `GM`,
model: `Prisma 1.0`,
years: `2013 a 2018`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `2013 a 2018`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2014`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2012 a 2018`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2012 a 2018`
},
{
manufacturer: `GM`,
model: `S10 2.8 Diesel`,
years: `2012 a 2018`
},
{
manufacturer: `GM`,
model: `Tracker 1.8`,
years: `2014 a 2015`
},
{
manufacturer: `GM`,
model: `TrailBlazer 2.8 Diesel`,
years: `2013 a 2013`
},
{
manufacturer: `GM`,
model: `TrailBlazer 3.6 Gasolina`,
years: `2013 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder e chave utilizado`, 
description: ``, 
ballon: `Utilize o transponder ID46 GM. Dedicado para GM.`, 
image: `/images/Chaves e Telecomandos/ID46 GM.jpg`},

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
description: `A tomada de diagnóstico dos veículos Cobalt, Cruze, Onix, Spin, Sonic e Tracker está localizada na área A5.<br />A tomada de diagnóstico dos veículos S10 e Trailblazer está localizada na área C5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;ID46&nbsp;GM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Insira a senha. Esta senha pode ser encontrada no cartão de segurança do
veículo.`
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;min.`,
`<br />`,
],
help: `Aguarde o tempo de 10 minutos.`
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Abra,&nbsp;feche&nbsp;a`,
`porta&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;seg.`,
`<br />`,
],
help: `Aguarde o tempo de 45 segundos.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;`,
`ser&nbsp;programada`,
`<br />`,
],
help: `Ligue a ignição com a chave que será programada.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;seg.`,
`<br />`,
],
help: `Aguarde o tempo de 10 segundos.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Para programar mais chaves tecle (OK) SIM e volte ao passo 14, ou tecle (X) NÃO para finalizar a programação.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `<font color="red">Observação:</font> Caso a luz de code continue acesa ao final da programação, retirar a bateria do carro por 30 segundos e liga-la novamente após o período.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha foi digitada incorretamente.`,],
solutions: [
`Verificar se a senha está correta.`,]
},
{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`A chave pode já estar programada,`,`O transponder não é ID46 GM.`,],
solutions: [
`Verificar se o transponder está dedicado para GM.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
