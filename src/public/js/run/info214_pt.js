//Capa
nomeCarga = "Programação de chaves de presença Ford Pats 6 T2";
revCarga = "Rev. 1";
dataManual = "Setembro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do número de chaves programadas no veículo.`,
`Apagamento de todas as chaves do veículo.`,
`Adição de novas chaves para o veículo.`,
``,
`Observação:`,
` Para o procedimento de adição após o apagamento de todas as chaves, é necessário programar ao menos 2 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Edge SEL 3.5",
years: "2012 a 2014"
},
{
manufacturer: "Ford",
model: "Edge Limited 3.5",
years: "2012 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Chave de presença utilizada", 
description: "", 
ballon: "Utilize chave original.", 
image: "/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Chave.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A9. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A9 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A9 CONECTADOS .jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição C5.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Procedimento para programação da chave de presença via OBD", 
description: "Procedimento para a realização do passo 8 e passo 16 da adição de chaves de presença.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Procedimento 1.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura do número de chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Numero&nbsp;de&nbsp;chaves`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;&nbsp;&nbsp;ignicao.`,
],
help: `Tecle OK`
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
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves de presença
atualmente programadas no veículo.`
},
]
}, {title: `Realizando o apagamento das chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Apagar&nbsp;proximity`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`<br />`,
],
help: `As chaves de presença já programadas
serão apagadas.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;&nbsp;&nbsp;ignicao.`,
],
help: `Tecle OK`
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
`Aguarde:&nbsp;00&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde aproximadamente 10 minutos.`
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
`Chaves&nbsp;apagadas`,
`com&nbsp;sucesso!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`OK-&nbsp;Add&nbsp;chaves?`,
`Volta-&nbsp;Sair?`,
`<br />`,
],
help: `Se selecionado “OK”, siga ao passo 7 da
adição de chaves.
Se selecionado “Volta” siga ao próximo passo.`
},
]
}, {title: `Realizando a adição de novas chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Add&nbsp;Proximity`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;original!`,
`<br />`,
],
help: `Veja a chave utilizada na página 3`
},
{lines: [
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`no&nbsp;slot&nbsp;segundo`,
`&nbsp;o&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Veja posição do slot na página 6. Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;&nbsp;&nbsp;ignicao.`,
],
help: `Tecle OK`
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
`Aguarde:&nbsp;00&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde aproximadamente 10 minutos.`
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
`Chave&nbsp;adicionada`,
`com&nbsp;sucesso!&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Se “SIM”, siga ao próximo passo.
Se “NÃO” siga ao passo 19.`
},
{lines: [
`&nbsp;`,
`&nbsp;Retire&nbsp;a&nbsp;chave`,
`do&nbsp;veiculo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;prox.&nbsp;`,
`chave&nbsp;no&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Insira a próxima chave a ser programada no slot. Tecle OK!`
},
{lines: [
`Pressione&nbsp;o&nbsp;*`,
`&nbsp;&nbsp;de&nbsp;todos&nbsp;os`,
`&nbsp;&nbsp;telecomandos!`,
`<br />`,
],
help: `Pressione o botão abrir do telecomando
de todas as chaves programadas.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves de presença
atualmente programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluido!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Chave&nbsp;nao`,
`&nbsp;&nbsp;programada!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Repetir?`,
`(X)NAO&nbsp;/&nbsp;&lt;OK&gt;SIM`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
],
solutions: [
]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A9,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Erro na Programacao! Repetir? <OK>SIM / (X)NAO`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Repetir?`,
`&lt;OK&gt;SIM&nbsp;/&nbsp;(X)NAO`,
],
causes: [
`O apagamento das chaves não foi concluído com sucesso.`,],
solutions: [
`Repetir o procedimento.`,]
},

{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no`,
`&nbsp;&nbsp;Procedimento!`,
`<br />`,
],
causes: [
`Todas as tentativas de adicionar chave falharam,`,`Defeito no carro, parte elétrica.`,],
solutions: [
`Verifique se a chave utilizada está correta,`,`Conferir parte elétrica do carro, fusíveis, etc.`,]
},

{ label: `Use cabo A9!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Use&nbsp;cabo&nbsp;A9!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo utilizado não está correto.`,],
solutions: [
`Conecte o cabo A9 e repita o procedimento.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
