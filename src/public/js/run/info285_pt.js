//Capa
nomeCarga = "OBD0285 - Programação de chaves Ford Pats4 Ecosport 2015-2017";
revCarga = "Rev. 2";
dataManual = "Dezembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza teste de compatibilidade do veículo`,
`Apagamento com reprogramação de 2 chaves para o veículo. `,
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "EcoSport 1.6",
years: "2015 a 2017"
},
{
manufacturer: "Ford",
model: "EcoSport 2.0",
years: "2015 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "O transponder utilizado no sistema, pode ser tanto o ID 4D63 como o ID 4D63 DST+", 
image: "/images/Transponders/ID-4D.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>Pats7`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats7`, `>prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;Passadas`,
`<br />`,
],
help: ``
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
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
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`Numero&nbsp;de&nbsp;falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;BSI:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Número de Falhas presentes no módulo BSI`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Selecione:`,
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
],
help: `<menu = 0>`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;X&gt;&nbsp;Sair`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;Tenha&nbsp;em&nbsp;maos`,
`&nbsp;&nbsp;&nbsp;02&nbsp;chaves!`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`Use&nbsp;transponder`,
`ID4D-63&nbsp;especial`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
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
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
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
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`Ligue&nbsp;a&nbsp;primeira`,
`&nbsp;&nbsp;chave&nbsp;a&nbsp;ser`,
`&nbsp;&nbsp;programada&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`&nbsp;Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;da&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`Ligue&nbsp;a&nbsp;segunda`,
`&nbsp;&nbsp;chave&nbsp;a&nbsp;ser`,
`&nbsp;&nbsp;programada&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},

{ label: `Erro na Programacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Erro comunicacao ou veiculo incompativel! `,
screens: [
`Erro&nbsp;comunicacao`,
`&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Passar um scaner de diagnóstico no veículo`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},

{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`BC não compatível com a aplicação,`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Verificar com suporte técnico uma possível atualização`,]
},

{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},

{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
`&nbsp;&nbsp;rede&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
