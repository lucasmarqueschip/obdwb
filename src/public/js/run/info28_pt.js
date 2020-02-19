//Capa
nomeCarga = "Geração de Transponders e Programação de Chaves Caixa Cinza";
revCarga = "Rev. 2";
dataManual = "Abril 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de transponders.`,
`Adicionar chaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Fiorino 1.3",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.0",
years: "2004 a 2008"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0",
years: "2005 a 2009"
},
{
manufacturer: "Fiat",
model: "Strada 1.3 Fire",
years: "2005 a 2008"
},
{
manufacturer: "Fiat",
model: "Uno Fire 1.3",
years: "2005 a 2008"
},
{
manufacturer: "Fiat",
model: "Uno Mille Fire 1.0",
years: "2005 a 2010"
},
];
applicationObs = createObs("Observações: Carros Fiat que utilizam o Imobilizador 731 / 732 / 928 "Caixa cinza".", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "O Transponder utilizado no sistema Code 2 é<br />o Megamos Crypto 48, tratado neste manual<br />por T48.", 
image: "/images/Transponders/Megamos Crypto 48.jpg"},

{title: "Identificando os acessórios necessários:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Posicionamento do transponder T48 no módulo:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0028 Caixa Cinza/Identificando o Imobilizador flecha.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave de fenda para destravar o Imobilizador.", 
image: "/images/Funções Específicas/OBD0028 Caixa Cinza/Desmontando o Imobilizador.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Laranja<br />5 => Fio Verde", 
image: "/images/Funções Específicas/OBD0028 Caixa Cinza/Localizando os pontos para soldagem.jpg"},

{title: "", 
description: "", 
ballon: "É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina que atrapalha a soldagem. Pode-se usar um estilete, mas com cuidado para não danificar a placa.", 
image: "/images/Funções Específicas/OBD0028 Caixa Cinza/Retirando a resina dos pontos para soldagem.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU soldado no Imobilizador.", 
image: "/images/Funções Específicas/OBD0028 Caixa Cinza/Cabo MCU soldado.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando apresentação de chaves por diagnóstico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>FIAT`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FIAT`, `>CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2`, `>Caixa Cinza`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Caixa Cinza`, `>Tipo 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Cod.&nbsp;Eletronico:`,
`*****`,
`<br />`,
],
help: `Utilize as teclas para cima e para baixo para digitar o código eletrônico, tecle OK!`
},
{lines: [
`&nbsp;`,
`As&nbsp;chaves&nbsp;que`,
`nao&nbsp;forem&nbsp;prog.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`serao&nbsp;apagadas!`,
`<br />`,
`<br />`,
],
help: ``
},
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
`Chaves&nbsp;Prog.:&nbsp;*`,
`Programar&nbsp;mais?`,
`<br />`,
],
help: `Mostra o número de chaves programadas (No máximo 8 chaves).`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Prosseguir&nbsp;`,
`Volta&nbsp;-&nbsp;Finaliza`,
`<br />`,
],
help: `Selecione OK e vá ao passo 16 ou selecione VOLTA  para encerrar o procedimento.`
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Coloque&nbsp;prox.`,
`chave&nbsp;em&nbsp;OFF&nbsp;e`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Tecle&nbsp;OK.`,
`<br />`,
`<br />`,
],
help: `Tecle OK e volte ao passo 14.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Codigo Incorreto`,
screens: [
`&nbsp;`,
`Codigo&nbsp;Incorreto`,
`<br />`,
`<br />`,
],
causes: [
`O código eletrônico digitado está incorreto.`,],
solutions: [
`Digite o código correto.`,]
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
