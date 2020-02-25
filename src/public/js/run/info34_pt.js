//Capa
nomeCarga = `Manual Carga -  OBD0034<br />Leitura de senha ME 7.9.9 (Astra\Vectra\Zafira 2010) via OBD`;
revCarga = `Rev. 1`;
dataManual = `Maio 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via OBD. Para a programação de chaves poder utilize a carga "Opel 2" da carga básica.`,
`Gravação de chassi. Nos casos de troca de ECU defeituosa, esta carga poderá ser usada para fazer o casamento da informação do chassi.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 2.0 Flex`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 Flex`,
years: `2009 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Esta carga realiza o procedimento apenas nos veículos que possuem o ano de`, `fabricação 2009 e 2010 (não é confiável ver a numeração do chassi pelo vidro do veículo).`, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo Universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

<<<<<<< .mine
{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E9-F9.jpg`},
=======
{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do Astra e Zafira fica localizada E9/F9,<br />A tomada de diagnóstico do Vectra fica localizada A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E9-F9.jpg`},
>>>>>>> .r6579
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
<<<<<<< .mine
=======
]
}, {title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>ME799 Vectra09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ME799 Vectra09`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
>>>>>>> .r6579
{lines: [
`&nbsp;`,
<<<<<<< .mine
`Aguarde...`,
=======
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
>>>>>>> .r6579
`<br />`,
`<br />`,
],
<<<<<<< .mine
help: ``
=======
help: `Tecle OK!`
>>>>>>> .r6579
},
<<<<<<< .mine
=======
]
}, {title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
>>>>>>> .r6579
{lines: [
`&nbsp;`,
`Senha:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: ``
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
}, {title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>ME799 Vectra09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ME799 Vectra09`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite:*********`,
`********`,
`<br />`,
],
help: `Utilize as teclas para cima e para baixo para inserir o chassi que será gravado no veículo.`
},
<<<<<<< .mine
=======
]
}, {title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
>>>>>>> .r6579
{lines: [
`&nbsp;`,
`Digite:*********`,
`********`,
`<br />`,
],
help: `Utilize as teclas para cima e para baixo para inserir o chassi que será gravado no veículo.`
},
]
}, {title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>ME799 Vectra09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ME799 Vectra09`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
<<<<<<< .mine
`Confirma?******`,
`***********`,
=======
`Confirma?******`,
`***********`,
`<br />`,
],
help: `Certifique-se de que o chassi correto foi inserido e então Tecle OK, ou tecle VOLTA para corrigir.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Chassi:*********`,
`********`,
>>>>>>> .r6579
`<br />`,
],
help: `Certifique-se de que o chassi correto foi inserido e então Tecle OK, ou tecle VOLTA para corrigir.`
},
<<<<<<< .mine
=======
]
}, {title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>ME799 Vectra09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ME799 Vectra09`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
>>>>>>> .r6579
{lines: [
`&nbsp;`,
`&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
<<<<<<< .mine
{lines: [
`&nbsp;`,
`&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
=======
>>>>>>> .r6579
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
