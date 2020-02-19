//Capa
nomeCarga = "Geração de transponder no CN3 Renault UCH3 Tipo2";
revCarga = "Rev. 2";
dataManual = "Novembro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de transponder para chave seca (sem telecomando) dos veículos Renault Master.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Renault",
model: "Master 2.3",
years: "2014 a 2016"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o Transponder CN3 Virgem.", 
image: "/images/Transponders/CN3 Virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

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
image: "/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "O conector de diagnostico fica localizado na área B4.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Caminhão/B4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Master`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-3`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
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
`Sistema em modo de programação devido a uma operação anterior,`,`Defeito no carro, parte elétrica,`,`Atualização antiga do OBDMap,`,`Má conexão dos acessórios.`,],
solutions: [
`Desconectar o OBDMap da tomada de diagnose, desligar a bateria, aguardar 10 segundos e ligar novamente,`,`Verificar parte elétrica do carro, fusíveis, etc,`,`Verificar se utiliza cabo universal e adaptador A3,`,`Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,`Verificar atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é um CN3 virgem.`,`O transponder pode estar defeituoso.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado.`,`Verifique a procedência do transponder.`,``,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder.`,`O transponder encontra-se bloqueado ou com um código que não corresponde a este veículo.`,`O transponder não foi programado pelo OBDMap.`,`O transponder foi programado pelo OBDMap em outro veículo.`,],
solutions: [
`Verificar a correta posição do transponder no Módulo de Transponder.`,`Utilize o transponder correto.`,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
`O transponder utilizado não é um CN3.`,],
solutions: [
`Verifique o transponder que está sendo utilizado.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é um CN3 virgem.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
