//Capa
nomeCarga = `Manual Carga -  OBD0037<br />Leitura de Senha e Gravação de Chassi GM ECU ME7.9.6`;
revCarga = `Rev. 1`;
dataManual = `Março 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos.`,
`Gravação de chassi.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 2.0 Flex`,
years: ` a 2004 a 2009`
},
{
manufacturer: `GM`,
model: `Corsa 1.0 Flex`,
years: `2005 a 2009`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2009`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2009`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 Flex`,
years: `2004 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A1.<br />Para realizar o emparelhamento<br />da BSI.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos Astra e Zafira fica localizada na área F9.<br />A tomada de diagnóstico do veículo Corsa fica localizada na área F5.<br />A tomada de diagnóstico do veículo Vectra fica localizada na área A5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5 - F5 - F9.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a Leitura de Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me796`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me796`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Senha1:&nbsp;****`,
`Senha2:&nbsp;****`,
`<br />`,
],
help: `Será exibido duas senhas, mas somente uma delas é a correta! Anote as duas senhas lidas.`
},
{lines: [
`&nbsp;`,
`Chassi:*********`,
`********`,
`<br />`,
],
help: `Chassi lido da ECU.`
},
]
}, {title: `Realizando a Gravação de Chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me796`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me796`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Digite:*********`,
`********`,
`<br />`,
],
help: `Utilize as teclas para cima e para baixo para inserir o chassi que será gravado no veiculo.`
},
{lines: [
`&nbsp;`,
`Confirma:*******`,
`**********`,
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
`&nbsp;&nbsp;Chassi`,
`&nbsp;&nbsp;&nbsp;Programado!`,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Senha1: Resetada Senha2: ****`,
screens: [
`&nbsp;`,
`Senha1:&nbsp;Resetada`,
`Senha2:&nbsp;****`,
`<br />`,
],
causes: [
`A ECU pode estar resetada,`,`O arquivo da ECU pode estar corrompido,`,`Arquivo da ECU inválido.`,],
solutions: [
]
},
{ label: `Senha1: **** Senha2: Resetada`,
screens: [
`&nbsp;`,
`Senha1:&nbsp;****`,
`Senha2:&nbsp;Resetada`,
`<br />`,
],
causes: [
`A ECU pode estar resetada,`,`O arquivo da ECU pode estar corrompido,`,`Arquivo da ECU inválido.`,],
solutions: [
]
},
{ label: `Senha1: Resetada Senha2: Resetada`,
screens: [
`&nbsp;`,
`Senha1:&nbsp;Resetada`,
`Senha2:&nbsp;Resetada`,
`<br />`,
],
causes: [
`A ECU pode estar resetada,`,`O arquivo da ECU pode estar corrompido,`,`Arquivo da ECU inválido.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
