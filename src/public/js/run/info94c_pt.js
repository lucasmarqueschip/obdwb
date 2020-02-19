//Capa
nomeCarga = "Leitura da Senha do Alarme GM1 (93255733) via Cabo MCU e Programação TLCMD OBD2";
revCarga = "Rev. 6";
dataManual = "Julho 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no módulo de alarme via cabo MCU.`,
` Apagar telecomando via diagnóstico.`,
` Programar telecomando via diagnóstico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8",
years: "1998 a 2001"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "1998 a 2001"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Telecomando do Astra.", 
image: "/images/Chaves e Telecomandos/Telecomando Astra.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Retirando o módulo de alarme do veículo:", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, retire a tampa que protege o parafuso fixador.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/parafuso fixador.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave torx para retirar o parafuso que prende a moldura M1.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Utilize uma chave torx.jpg"},

{title: "", 
description: "", 
ballon: "Levante a parte esquerda da moldura M2 e puxe a moldura M1 para fora do console.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Levante a parte esquerda da moldura.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave biela "L" 10 mm para remover a porca que prende o módulo de alarme.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Utilize uma chave biela.jpg"},

{title: "", 
description: "", 
ballon: "Retire o módulo de alarme do console.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire o módulo de Alarme.jpg"},

{title: "", 
description: "", 
ballon: "Retire os dois conectores que prendem o módulo de alarme.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire os dois conectores do modulo.jpg"},

{title: "Identificando e desmontando o módulo de Alarme:", 
description: "Retire o módulo de Alarme do veículo e leve-o para bancada.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Retire o módulo de Alarme do veículo e leve-o para bancada.jpg"},

{title: "", 
description: "Retire o módulo de Alarme do veículo e leve-o para bancada.<br />", 
ballon: "Com o auxílio de uma chave de fenda, remova a placa da caixa do módulo de alarme.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/remova a placa da caixa do modulo.jpg"},

{title: "Localizando os pontos para soldagem do cabo MCU:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Localizando os pontos para soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Laranja<br />3=> Fio Amarelo<br />4=> Fio Preto<br />5=> Fio Verde<br />6=> Fio Roxo<br />7=> Fio Azul", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Identificando os pontos a 1.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no módulo de Alarme, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Não trocar as posições dos fios.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Atenção: Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o módulo de Alarme, evitando danos ao mesmo e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0094 Leitura da senha do alarme GM1/Todos os acessorios conectados.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área F9.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando Leitura de Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Astra`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento do telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Astra`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de telecomandos`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Astra`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de telecomandos`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o módulo de Alarme,`,`Mau contato no cabo MCU com o OBDMap,`,`Módulo de Alarme com problema ou arquivo corrompido.`,``,``,],
solutions: [
`Verificar a correta posição dos fios no módulo de Alarme,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,``,]
},

{ label: `ARQUIVO INVALIDO DO MODULO`,
screens: [
`&nbsp;`,
`ARQUIVO&nbsp;INVALIDO`,
`&nbsp;&nbsp;&nbsp;DO&nbsp;MODULO`,
`<br />`,
],
causes: [
`O arquivo do módulo de alarme está corrompido.`,],
solutions: [
]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no módulo de Alarme,`,`O cabo MCU ou o módulo de Alarme está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no módulo de Alarme,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,``,],
solutions: [
`Inserir senha correta.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão travar ou destravar não foi pressionado no tempo devido.`,],
solutions: [
`Pressionar o telecomando no momento indicado pelo OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
