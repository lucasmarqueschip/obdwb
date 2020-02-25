//Capa
nomeCarga = `Manual Carga -  OBD0128<br />Programação de Chaves Ford New Fiesta`;
revCarga = `Rev. 1`;
dataManual = `Dezembro 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar chaves antigas`,
`Programar até 5 chaves`,

];
introObs = createObs(`Observação:`, `Sempre quando as chaves são apagadas é necessário ter no mínimo duas novas chaves para que o sistema entre novamente em funcionamento.`, ``)


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `New Fiesta 1.6`,
years: `2012 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Transponder Texas Crypto ID4D-DST Plus.`, 
image: `/images/Transponders/ID4D-DST Plus.jpg`},

{title: `Chave utilizada:`, 
description: ``, 
ballon: `Transponder já montado na chave.`, 
image: `/images/Chaves e Telecomandos/ID4D-DST Plus na chave.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo CAN ou cabo Universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo CAN.jpg`},

{title: ``, 
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
description: `A tomada de diagnóstico do veículo está localizada na área A5.<br />`, 
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
[{title: `Apagar chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;2&nbsp;Transp.`,
`ID4D&nbsp;DST+&nbsp;Ford`,
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
`&nbsp;`,
`Aguarde...`,
`<img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" />`,
`<br />`,
],
help: `Aguarde 10 minutos para liberar o acesso de segurança.`
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
`Segure&nbsp;a&nbsp;chave`,
`em&nbsp;posicao&nbsp;de`,
`partida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Tecle&nbsp;OK`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5`,
`<br />`,
],
help: `Será realizada uma contagem regressiva de 5 segundos. Neste tempo a
chave deve ser mantida em posição de partida na ignição.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;outra`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Insira a próxima chave.
Tecle OK!`
},
{lines: [
`Segure&nbsp;a&nbsp;chave`,
`em&nbsp;posicao&nbsp;de`,
`partida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Tecle&nbsp;OK`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5`,
`<br />`,
],
help: `Será realizada uma contagem regressiva de 5 segundos. Neste tempo a chave deve ser mantida em posição de partida na ignição.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]
}, {title: `Programar chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`N FIESTA 12-12`, `>Adicionar chaves`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;`,
`ID4D&nbsp;DST+&nbsp;Ford`,
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
`&nbsp;`,
`Aguarde...`,
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
help: `Aguarde 10 minutos para liberar o acesso de segurança.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Versão incompatível.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Erro de operacao!`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;`,
`Erro&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;operacao!`,
`<br />`,
],
causes: [
`A ECU não está casada com o painel,`,`O transponder pode não ser o ID4D DST + Ford,`,`Transponder pode estar programado.`,],
solutions: [
`Usar ECU e painel casados,`,`Verificar o transponder e trocá-lo por um ID4D + Ford, caso não seja este.`,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`<br />`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo pode não ser CAN ou adaptador A3,`,`O cabo ou adaptador pode estar com defeito`,],
solutions: [
`Verificar se é o cabo CAN ou adaptador A3,`,`Verificar a conexão do cabo CAN ou adaptador A3 com o Obdmap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
