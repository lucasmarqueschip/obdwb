//Capa
nomeCarga = "Programação de Chaves de Presença Mitsubishi (ASX e New Outlander 14-16)";
revCarga = "Rev. 2";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves de presença para os veículos ASX e New Outlander.`,
`<obs>`,
`Observação: `,
` É necessário ter uma chave de presença válida no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mitsubishi",
model: "ASX 2.0",
years: "2014 a 2016"
},
{
manufacturer: "Mitsubishi",
model: "New Outlander 2.0",
years: "2014 a 2016"
},
{
manufacturer: "Mitsubishi",
model: "New Outlander 2.2",
years: "2016 a 2016"
},
{
manufacturer: "Mitsubishi",
model: "New Outlander 3.0",
years: "2014 a 2016"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Chave de presença utilizada.", 
image: "/images/Chaves e Telecomandos/Chave de presença Mitsubishi.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos fica localizada na área A5.<br /><br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Localizando o slot no veículo:", 
description: "O slot do veículo New Outlander está localizado na posição F5 e slot do veículo ASX está localizado na posição H4.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/F5 - H4.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubshi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubshi`, `>Keyless 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Keyless 1`, `>ASX/Outlander`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ASX/Outlander`, `>Compativel?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Ligue&nbsp;e&nbsp;desligue`,
`&nbsp;a&nbsp;ignicao&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Conectando`,
`&nbsp;&nbsp;no&nbsp;servidor`,
`&nbsp;Chiptronic...`,
`<br />`,
],
help: `Aguarde alguns instantes.`
},
{lines: [
`Serao&nbsp;debitados`,
`&nbsp;***c&nbsp;do&nbsp;saldo`,
`&nbsp;&nbsp;&lt;OK&gt;&nbsp;Aceitar`,
`&nbsp;&lt;Volta&gt;&nbsp;Negar`,
],
help: `Créditos a serem debitados do saldo.
<OK> para Confirmar.
<VOLTA> para Cancelar.
`
},
{lines: [
`&nbsp;`,
`&nbsp;USB&nbsp;conectado!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;Parcelas:**/**`,
`Valor&nbsp;do&nbsp;servico`,
`&nbsp;&nbsp;&nbsp;***c&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Saldo total disponível, número de parcelas do serviço, valor a ser cobrado pelo serviço.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Veículo compativel com o software!`
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;&nbsp;Servico&nbsp;Web`,
`&nbsp;Liberado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O serviço está liberado, e não será cobrado créditos.`
},
]
}, {title: `Realizando a programação de chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubshi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubshi`, `>Keyless 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Keyless 1`, `>ASX/Outlander`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ASX/Outlander`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;apagadas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `Tecle OK para prosseguir a programação ou tecle VOLTA para sair.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;e&nbsp;desligue`,
`&nbsp;a&nbsp;ignicao&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Ligue e desligue a ignição e tecle OK!`
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
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves já programadas no veículo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;proximity`,
`&nbsp;&nbsp;no&nbsp;slot&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira a chave de presença no slot e tecle OK!`
},
{lines: [
`&nbsp;`,
`CHAVES&nbsp;PROG:&nbsp;*/*`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (VOLTA) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Ins&nbsp;prox&nbsp;chv&nbsp;no`,
`slot&nbsp;em&nbsp;60s&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira a próxima chave de presença no slot em 60 segundos e tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
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

{ label: `Chave fora do slot ou senha modificada!`,
screens: [
`&nbsp;Chave&nbsp;fora&nbsp;do`,
`&nbsp;slot&nbsp;ou&nbsp;senha`,
`&nbsp;&nbsp;modificada!`,
`<br />`,
],
causes: [
`Chave de presença incorreta,`,`Chave de presença fora do slot,`,`Senha do veículo modificada.`,``,``,],
solutions: [
`Utilizar chave de presença correta,`,`Deixar a chave no slot durante a programação,`,`Contate o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
