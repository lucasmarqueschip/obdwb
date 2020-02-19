//Capa
nomeCarga = "Preparação de transponders e programação de chaves Fox 2013 painel VDO (Imob 7)";
revCarga = "Rev. 4";
dataManual = "Janeiro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Esta carga faz a programação de chaves para o painel VDO com memória 24C32 e sistema VW Imob7 (com o hardware do painel igual ao mostrado no manual . Para isso é necessário primeiramente preparar as chaves utilizando a pinça/MCU e o módulo de transponder com o painel em bancada. Depois de preparado as chaves ainda é necessário fazer a programação de chaves. Temos basicamente duas situações de programações de chaves:`,
``,
`1ª Situação - Adição de chaves:`,
`É necessário utilizar uma "chave válida", ou seja, uma chave que já esteja programada no veículo para iniciar o procedimento, e em seguida passar pelo procedimento as outras chaves que foram preparadas em bancada e as demais chaves que já estavam funcionando.`,
``,
`2ª Situação - Perda de todas as chaves:`,
`Neste caso para iniciar a programação é necessário utilizar uma chave que foi preparada pela função "1ª chave válida", esta chave não dará a partida no veículo antes da programação, mas será aceita como uma chave válida para iniciar o procedimento de programação.`,
``,
`A programação de chaves apaga todas as chaves no início do procedimento, portanto é necessário passar pelo procedimento todas as chaves que se deseja manter funcionando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2013 a 2013"
},
];
applicationObs = createObs("Observação: Somente para painel igual ao mostrado neste manual.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48-CAN (Dedicado a VW).", 
image: "/images/Transponders/Transponder Megamos ID48-CAN VW.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Retirando o painel do veículo:", 
description: "", 
ballon: "Remova a capa que protege os 2 parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Retirando o painel do veículo.jpg"},

{title: "", 
description: "", 
ballon: "Remova os 2 parafusos fixadores do painel.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Removendo o painel.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, remova o conector do painel.<br />Observação: É aconselhável utilizar uma flanela sobre a capa superior do volante para evitar danos no momento de retirar o painel.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Removendo o painel 2.jpg"},

{title: "Identificando o painel:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Identificando o painel.jpg"},

{title: "Procedimento via pinça", 
description: "Localizando e conectando a pinça na memória 24C32:", 
ballon: "", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando e conectando a pinça na memória 24C32.jpg"},

{title: "", 
description: "Localizando e conectando a pinça na memória 24C32:", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Conectando a pinça na memória 24C32.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Todos os acessórios conectados.jpg"},

{title: "Procedimento via cabo MCU:", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
ballon: "Área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando os pontos de soldagem do cabo MCU.jpg"},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU;<br />1 => Fio Verde<br />2 => Fio Vermelho<br />3 => Fio Cinza<br />4 => Fio Preto", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando os pontos de soldagem do cabo MCU 2.jpg"},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
ballon: "Cabo MCU conectado no painel.", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Cabo conectado no painel.jpg"},

{title: "Todos os acessorios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Todos os acessórios conectados2.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Fox fica localizada na área C5 da imagem.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a preparação da primeira chave válida:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a preparação de outras chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,`Transponder  com problema;`,`O transponder utilizado não é um ID48 virgem;`,`Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder;`,`Utilizar um transponder ID48 virgem;`,`Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
},

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,`O arquivo do painel esta corrompido.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Painel ou memória com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,`Curto entre os fios do cabo MCU,`,`Cabo MCU soldado em posição errada.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do Painel;`,`Conferir a correta soldagem do cabo MCU.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`A pinça foi conectada em outro componente,`,`Memória ou Painel com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do Painel.`,]
},

{ label: `Erro grav Painel <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav&nbsp;Painel`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU ou pinça com o painel,`,`Mau contato do cabo MCU ou pinça com o OBDMap, Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do cabo MCU no painel,`,`Verificar se os parafusos que prendem o cabo MCU ou a pinça no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},

{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`A pinça foi conectada em outro componente,`,`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir boa fixação da pinça ou cabo MCU com o OBDMap.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`A chave não está na ignição,`,`Defeito no carro, parte elétrica,`,`Transponder não preparado,`,`Transponder não compatível com o veículo,`,`Transponder utilizado não é o ID48-CAN,`,`A chave utilizada para iniciar o procedimento não é uma chave válida para o veículo.`,],
solutions: [
`Coloque a chave na ignição,`,`Refazer o procedimento novamente,`,`Verificar se o transponder utilizado é o ID48-CAN preparado e compatível com o veículo,`,`Verificar se a primeira chave utilizada está válida para o veículo,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
