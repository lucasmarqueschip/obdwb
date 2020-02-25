//Capa
nomeCarga = `Manual Carga -  OBD0146<br />Leitura de Senha GM IMMO5`;
revCarga = `Rev. 5`;
dataManual = `Dezembro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via pinça e via diagnose.<br/><font color="red"><obs>Observação:</font><br/>A leitura de senha via diagnose é possível realizar somente no veículo Cruze, para os demais veículos a leitura de senha é realizada via pinça ou cabo MCU.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Camaro 6.2 2SS Coupé V8`,
years: `2011 a 2011`
},
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2011 a 2018`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2011 a 2013`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `S10 2.8 Diesel`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `Tracker 1.8`,
years: `2014 a 2014`
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
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo Cruze fica localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Localizando o BC do veículo:`, 
description: `O BC do veículo Onix, Spin, Sonic, Cobalt, TrailBrazer, Tracker e S10 fica localizado na área A5.<br />O BC do veículo Camaro fica localizado na área C5.<br />O BC do veículo Cruze fica localizado na área F6.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-F6.jpg`},

{title: `Identificando o BC com memória 25160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 25160/Identificando o BC com memória 25160.jpg`},

{title: `Identificando a memória 25160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 25160/Identificando a memória 25160.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte a fonte de alimentação ao OBDMap,<br />2. Conecte a pinça ao OBDMap,<br />3. Conecte a pinça na memória.<br /><br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (página 15).<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 25160/Todos os acessórios conectados.jpg`},

{title: `Identificando o BC com memória 24C16:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 24C16/Identificando o BC com memória 24C16.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 24C16/Identificando o BC com memória 24C16 2.jpg`},

{title: `Identificando a memória 24C16:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 24C16/Identificando a memória 24C16.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 24C16/Conectando a memória 24C16.jpg`},

{title: `Todos os acessórios conectados  :`, 
description: `1. Conecte a fonte de alimentação ao OBDMap,<br />2. Conecte a pinça ao OBDMap,<br />3. Conecte a pinça na memória.<br /><br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (página 16).`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 24C16/Todos os acessórios conectados 3.jpg`},

{title: `Identificando o BC com memória 95320:`, 
description: `Observação: Este BC somente pode ser conectado através do cabo MCU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 95320/Identificando o BC com memória 95320.jpg`},

{title: `Identificando a memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 95320/Identificando a memória 95320.jpg`},

{title: `Localizando os pontos de solda BC com memória 95320:`, 
description: ``, 
ballon: `Visualização dos pontos a serem soldados.`, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 95320/Localizando os pontos de solda BC 95320 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Verde<br />4=> Fio Azul<br />5=> Fio Cinza<br />6=> Fio Preto`, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 95320/Localizando os pontos de solda BC 95320 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldados os fios do cabo MCU no BC.`, 
image: `/images/Funções Específicas/OBD0146 Leitura de senha GM Immo 5/Memória 95320/Localizando os pontos de solda BC 95320 3.jpg`},

{title: `Todos os acessórios conectados :`, 
description: `1. Conecte a fonte de alimentação ao OBDMap,<br />2. Conecte o cabo MCU ao OBDMap,<br />3. Conecte o cabo MCU no BC.<br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (página 16).`, 
, 

];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura de senha via diagnose:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`SENHA:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>soic 24c16`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`soic 24c16`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;pinca`,
`na&nbsp;memoria&nbsp;24C16`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
help: `Anote a senha.`
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
{ label: `ERRO na leitura do BC!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BC!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`BC com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira,`,`Estar utilizando a pinça com o BC com memória 95320.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do BC,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira,`,`Verificar acessório utilizado para cada tipo de BC, pinça ou MCU.`,``,``,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Cabo MCU não soldado corretamente,`,`Curto entre os fios do cabo MCU,`,`BC com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir bom estado do BC.`,``,``,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
