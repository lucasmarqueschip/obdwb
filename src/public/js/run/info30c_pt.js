//Capa
nomeCarga = `Manual Carga -  OBD0030<br />PSA 2 (casamento e telecomando)`;
revCarga = `Rev. 3`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza o emparelhamento da BSI.`,
`Realiza o teste do telecomando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4`,
years: `2002 a 2010`
},
{
manufacturer: `Peugeot`,
model: `207 1.4`,
years: `2002 a 2013`
},
{
manufacturer: `Peugeot`,
model: `207 1.6`,
years: `2002 a 2013`
},
{
manufacturer: `Citroen`,
model: `C3 1.5`,
years: `2002 a 2013`
},
{
manufacturer: `Citroen`,
model: `C3 1.6`,
years: `2002 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `Nos veículos Citroen o conector de diagnóstico fica localizado na área A4;<br />Nos veículos Peugeot o conector de diagnóstico fica localizado na área B5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4-B5.jpg`},
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
{title: `Realizando o emparelhamento da BSI`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`206`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 5NP2.02`], help: `Tecle OK`, menu: 1000},
{lines: [`Solução do Modo ECO`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A1!`,
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
`&nbsp;`,
`Senha:0000`,
`<br />`,
`<br />`,
],
help: `Digite corretamente a senha.`
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
`Emparelhamento`,
`Concluido!`,
`<br />`,
],
help: `A BSI foi emparelhada com sucesso.`
},
{lines: [
`&nbsp;`,
`Aguarde`,
`10&nbsp;segundos!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Dê&nbsp;partida.`,
`Tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde`,
`30&nbsp;segundos!`,
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
]
}, {title: `Realizando teste de telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`206`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Teste de telecomandos`], help: `Tecle OK`, menu: 1000},
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
`Pressione&nbsp;o`,
`Telecomando!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Telecomando&nbsp;`,
`já&nbsp;Habilitado!`,
`<br />`,
],
help: `Telecomando já programado e funcional para o veículo.`
},
{lines: [
`&nbsp;`,
`Telecomando`,
`compatível`,
`<br />`,
],
help: `Telecomando não programado, mas compativel para o véculo.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Senha Incorreta!`,
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
{ label: `BSI ja Emparelhada!`,
screens: [
`&nbsp;`,
`BSI&nbsp;já`,
`Emparelhada!`,
`<br />`,
],
causes: [
`A BSI já esta emparelhada.`,],
solutions: [
`BSI já esparelhada, não necessita de um novo emparelhamento`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
