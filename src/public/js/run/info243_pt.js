//Capa
nomeCarga = "Geração de Transponder VW Imob6 painel Marelli Tipo 3 (UP 17-18)";
revCarga = "Rev. 4";
dataManual = "Abril 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de chaves via OBD, deixando pronto para dar partida no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "UP!",
years: "2017 a 2018"
},
];
applicationObs = createObs("Observação: Esta carga não é compatível com alguns veículos modelo TSI. Para garantir a aplicação do", "veículo, deve-se realizar a função teste de compatibilidade.", undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48-CAN (Dedicado a VW).", 
image: "/images/Transponders/Transponder Megamos ID48-CAN VW.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `> Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [` Outros`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Marelli`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli`, `>Tipo 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falhas:`,
`&nbsp;ECU:**&nbsp;Imob:**`,
`ABS:**&nbsp;Airbag:**`,
`&nbsp;Painel:**&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;mobile!`,
`<br />`,
],
help: `Inicialize o aplicativo no dispositivo móvel.`
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
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falha!`,
`Transp.&nbsp;Magic&nbsp;1`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`Pain:&nbsp;Invalido`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
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
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;&nbsp;Servico&nbsp;Web`,
`&nbsp;Liberado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O serviço está liberado, e não será cobrado créditos.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Trasnponder`,
`&nbsp;&nbsp;&nbsp;Invalido!`,
`<br />`,
],
help: ``
},
{lines: [
`Use&nbsp;Mod.&nbsp;Transp.`,
`+&nbsp;Cabo&nbsp;Fiat&nbsp;+&nbsp;A3`,
`Segundo&nbsp;o&nbsp;Manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Utilize o Modulo de transponder ligado na
bateria com o cabo Fiat, mais o A3 com o
Universal ligado no conector OBD do veículo.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;A&nbsp;bateria&nbsp;deve`,
`estar&nbsp;carregada.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Cuidado, se a bateria estiver fraca pode causar problemas no painel. Tecle OK.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`Chassi:*********`,
`********&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a ECU é original do veiculo.`
},
{lines: [
`Pain:&nbsp;UP!`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
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
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;ID48&nbsp;virgem&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (Volta) para finalizar o procedimento.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3 ,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder Megamos ID 48. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Tempo de espera!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera!`,
`<br />`,
`<br />`,
],
causes: [
`Quando já foi digitada senha errada na hora de programar chaves;`,`Não foi encontrada a senha no painel ou painel invalido;`,`Painel com arquivo corrompido.`,],
solutions: [
` Deixar o painel ligado por 10 minutos e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 hora e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 dia e tentar fazer o procedimento sem desligar;`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
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

{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
