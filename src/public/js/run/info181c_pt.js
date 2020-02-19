//Capa
nomeCarga = "Geração de chaves Fiat Code 2 BC 95160 ID48 via OBD";
revCarga = "Rev. 3";
dataManual = "Maio 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de até 8 transponders via OBD em veículos que utilizam o Body Computer Marelli 95160 ID48 (BC 95160 ID48).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Punto T-Jet 1.4",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Punto 1.4",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Punto 1.6",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Punto 1.8",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Linea T-Jet 1.4",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Linea 1.8",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Linea 1.9",
years: "2008 a 2014"
},
{
manufacturer: "Fiat",
model: "Stilo 1.8",
years: "2008 a 2011"
},
{
manufacturer: "Fiat",
model: "Stilo 2.4",
years: "2008 a 2011"
},
];
applicationObs = createObs("Observação: O veículo deve utilizar o BC 95160 ID48, utilize a função de identificação dos BCs FIAT para identificar.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Conectando os acessórios", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 1.1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 2.2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 3.3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 4.4.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 5.5.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Conectando os acessórios 6.6.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0181 Geração de transponder Fiat Code 2 BC 95160 ID48 via diagnose/Todos os acessorios 1.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração e a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Punto`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Marelli 95160 ID48`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! Veja o Manual`,
screens: [
`Erro&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;Veja&nbsp;o&nbsp;Manual`,
],
causes: [
`Sistema em modo de programação devido a uma operação anterior,`,`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Desconectar o OBDMap do conector OBD, desligar a bateria, aguardar 10`,`segundos e ligar novamente.`,`Verificar parte elétrica do carro, fusíveis, etc, `,`Verificar se utiliza cabo universal e adaptador A3,`,`Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,`Verificar atualização mais recente com suporte técnico, talvez esta carga tenha`,`tido alterações.`,`Tente realizar o procedimento com a chave de ignição desligada. Ligue-a, volte a desligar e realize o procedimento. Veja passo 7.`,]
},

{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder não está corretamente posicionado no módulo de transponder,`,`O transponder utilizado não é ID48,`,`Mau contato no cabo Fiat com o módulo de transponder ou do jacaré vermelho com a bateria.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação,`,`Conferir conexão do cabo Fiat com o módulo de transponder e do jacaré vermelho com a bateria.`,]
},

{ label: `Body Computer não suportado!`,
screens: [
`&nbsp;`,
`Body&nbsp;Computer`,
`não&nbsp;suportado!`,
`<br />`,
],
causes: [
`Body Computer não corresponde à aplicação.`,],
solutions: [
`Verifique aplicação.`,]
},

{ label: `Codigo do BCM: ******`,
screens: [
`&nbsp;`,
`&nbsp;Codigo&nbsp;do&nbsp;BCM:`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******`,
`<br />`,
],
causes: [
`Body Computer não corresponde à aplicação.`,],
solutions: [
`Verifique aplicação.`,]
},

{ label: `BCM LOTADO!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;BCM&nbsp;LOTADO!`,
`<br />`,
`<br />`,
],
causes: [
`O Body Computer já está com 8 chaves programadas.`,],
solutions: [
`Apagar todas as chaves antigas, e programar novamente todas as que forem ser utilizadas.`,]
},

{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Sistema em modo de programação.`,`Sistema travado por algum procedimento anterior.`,],
solutions: [
`Desconectar o OBDMap do conector OBD, desligar a bateria, aguardar 10 segundos e ligar novamente.`,`Tente realizar o procedimento com a chave de ignição desligada. Ligue-a, volte a desligar e realize o procedimento. Veja passo 7.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
