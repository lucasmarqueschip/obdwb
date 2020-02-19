//Capa
nomeCarga = "Geração de Transponder (TPD) Suzuki (Gran Vitara e Swift de 06 a 10)";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar transponder.`,
`Com esta função é possível gerar uma ou duas chaves para veículos Suzuki que possuam memória EEPROM S-93A56A na ECU.`,
``,
`A ECU do veículo tem capacidade de armazenar 4 chaves, porém o OBDMAP realiza a programação de novas chaves somente nas posições 3 e 4, não alterando ou apagando as chaves já programadas nas posições 1 e 2.`,
`No caso de gravação de 1 chave, ela será programada na posição 3 da ECU, ou seja, manterá as chaves 1 e 2, porém a chave que estava na posição 3 será apagada automaticamente.`,
`No caso de gravação de 2 chaves, elas serão programadas nas posições 3 e 4 da ECU, ou seja, manterá as chaves das posições 1 e 2 porém as chaves das posições 3 e 4 serão apagadas automaticamente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Suzuki",
model: "Grand Vitara",
years: "2006 a 2010"
},
{
manufacturer: "Suzuki",
model: "Swift",
years: "2006 a 2010"
},
];
applicationObs = createObs("Observação: Podendo existir veículos em anos superior a 2010.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder<br />PCF7936(ID46) dedicado<br />Renault.<br />Utilize a carga OBD0192 para<br />realizar a dedicação", 
image: "/images/Transponders/ID46 Chery.jpg"},

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
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT-Chave Suzuki CERTO.jpg"},

{title: "Localizando e identificando a ECU:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Identificando a ECU 1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Identificando a ECU 2.jpg"},

{title: "Localizando a memória S-93A56A:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Localizando a memória S-93A56A.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Conectando a pinça.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Pinça conectada.jpg"},

{title: "Todos os acessórios conectados:", 
description: "1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça no OBDMap,<br />4. Conecte a pinça na memória do módulo.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0114 Geração de transponder (TPD) Suzuki/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Suzuki`], help: `Tecle OK`, menu: 1000},
{lines: [`Swift`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Denso`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro na leitura da memoria!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;da&nbsp;memoria!`,
`<br />`,
],
causes: [
`A pinça não está conectada corretamente na memória.`,],
solutions: [
`Verifique a conexão da pinça com a memória.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 5.`,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
`O transponder não pode ser programado, pois se encontra bloqueado ou em uma codificação diferente.`,],
solutions: [
`Insira o transponder PCF7936 virgem e reinicie o procedimento.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF793.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 5.`,]
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
`Conferir a correta posição do transponder no Módulo de Transponder,`,` Verifique o transponder que está sendo utilizado.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
