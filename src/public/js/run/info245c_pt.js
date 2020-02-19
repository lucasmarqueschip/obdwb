//Capa
nomeCarga = "Programação de chaves de presença Mitsubishi KOS1 Tipo2 (L200 16-17)";
revCarga = "Rev. 2";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para o veículo L200 Sport.`,
`<obs>`,
`Observação: É necessário ter uma chave de presença válida no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mitsubishi",
model: "L200 Sport 2.4",
years: "2016 a 2017"
},
{
manufacturer: "Mitsubishi",
model: "L200 Sport 3.5",
years: "2016 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Chave de presença utilizada.", 
image: "/images/Chaves e Telecomandos/Chave de presença Mitsubishi.jpg"},

{title: "", 
description: "", 
ballon: "O slot do veículo está localizado na posição F5.", 
image: "/images/Tomada de Diagnostico/Carro/F5.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Localizando o slot no veículo:", 
description: "", 
ballon: "O slot do veículo está localizado na posição F5.", 
image: "/images/Tomada de Diagnostico/Carro/F5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`L200`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`L200`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chave de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
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

{ label: `Saldo Web Service Insuficiente!`,
screens: [
`&nbsp;&nbsp;&nbsp;Saldo&nbsp;Web`,
`&nbsp;&nbsp;&nbsp;&nbsp;Service`,
`&nbsp;Insuficiente!`,
`<br />`,
],
causes: [
`O crédito total disponível se esgotou.`,],
solutions: [
`Entrar em contato com o comercial, ou com o suporte.`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo fora da aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Chave Invalida! <OK>`,
screens: [
`&nbsp;`,
`Chave&nbsp;Invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Chave não compatível com o sistema do veículo.`,`Chave não foi inserida corretamente no slot do veículo.`,],
solutions: [
`Insira uma chave válida com o sistema do veículo.`,`Insira corretamente a chave no slot.`,``,]
},

{ label: `Chave ja programada no veiculo <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Chave&nbsp;ja`,
`&nbsp;programada&nbsp;no`,
`&nbsp;&nbsp;veiculo&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave inserida ja se encontra registrada no veículo.`,],
solutions: [
`Insira uma chave ainda não registrada no veículo.`,]
},

{ label: `Chave nao Registrada! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Chave&nbsp;nao`,
`Registrada!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A primeira chave necessária para realizar a adição de chaves, não se encontra no Slot.`,`O veículo não possui uma chave válida necessária para a realização do procedimento.`,],
solutions: [
`Inserir a chave válida do veículo no Slot.`,]
},

{ label: `Erro! Chave ja registrada em outro veiculo <OK>`,
screens: [
`&nbsp;Erro!&nbsp;Chave&nbsp;ja`,
`&nbsp;&nbsp;&nbsp;registrada`,
`em&nbsp;outro&nbsp;veiculo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`A chave inserida encontra-se registrada em outro veículo.`,``,],
solutions: [
`Insira uma chave virgem no slot.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
