//Capa
nomeCarga = "Leitura Opel 2R (senha)";
revCarga = "Rev. 3";
dataManual = "Julho 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha do imobilizador Opel 2R via cabo MCU.`,
`Utilizando a senha lida e a carga "OBD0045 - Opel 2 Completo" do OBDMap, é possível apagar chaves, programar chaves, adaptar ECU e adaptar outro Opel 2R.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Astra 2.0 16V",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Blazer 2.4 Flex",
years: "2006 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2001 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.4",
years: "2003 a 2010"
},
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "2001 a 2009"
},
{
manufacturer: "GM",
model: "Corsa 1.8",
years: "2002 a 2006"
},
{
manufacturer: "GM",
model: "Meriva 1.8",
years: "2002 a 2012"
},
{
manufacturer: "GM",
model: "Meriva 1.8 16V",
years: "2002 a 2012"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2007 a 2009"
},
{
manufacturer: "GM",
model: "Montana 1.8",
years: "2003 a 2009"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2006 a 2012"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2006 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0",
years: "2001 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0 16V",
years: "2001 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "A ferramenta G1 é utilizada para facilitar levantar os pinos do microcontrolador do imobilizador.", 
image: "/images/Acessórios/ferramenta G1.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Sugador de solda. Será necessário para remoção de excesso de solda.", 
image: "/images/Acessórios/sugador de solda.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "", 
ballon: "Identificando o imobilizador.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Identificando e desmontando o imobilizador.jpg"},

{title: "", 
description: "", 
ballon: "Retire a tampa do imobilizador utilizando uma chave de fenda com a ponta fina (3 mm).", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Desmontando o imobilizador.jpg"},

{title: "Retirando a placa da antena", 
description: "", 
ballon: "Tampa do imobilizador removida.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Retirando a placa da antena.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos que será necessário retirar a solda para retirar a antena.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Identificando os pontos para retirada se solda.jpg"},

{title: "", 
description: "", 
ballon: "Apoiar o imobilizador para facilitar o procedimento (na foto foi utilizada uma 3ª Mão). Derreta a solda utilizando o ferro de soldar e com o auxilio do sugador remova a solda dos terminais da antena.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Retirando se solda.jpg"},

{title: "", 
description: "", 
ballon: "Observe que os terminais estão livres, sem nenhum excesso de solda.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Retirando se solda 2.jpg"},

{title: "", 
description: "", 
ballon: "Retirando a placa da antena.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Retirando a antena.jpg"},

{title: "Levantando os pinos do microcontrolador", 
description: "", 
ballon: "Ao lado são mostrados os pinos 2, 26 e 60 do microcontrolador, que devem ser obrigatoriamente levantados da placa para efetuar a leitura do imobilizador.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Levantando os pinos do microcontrolador.jpg"},

{title: "", 
description: "", 
ballon: "Utilize a ferramenta G1 e um soldador para levantar os pinos.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Utilize a ferramenta G1 para levantar.jpg"},

{title: "", 
description: "", 
ballon: "Conectando a ferramenta G1 em um pino do microcontrolador. É importante que a placa esteja apoiada para facilitar o procedimento.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Utilize a ferramenta G1 para levantar o pino.jpg"},

{title: "", 
description: "", 
ballon: "Detalhe de como conectar a ferramenta G1. OBS.: O gancho da ferramenta deve ficar encostado na placa, a fim de puxar o pino pela parte de baixo.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1.jpg"},

{title: "", 
description: "", 
ballon: "Não posicionar o gancho no "joelho" do pino, isto pode quebrar o pino no momento de levantá-lo.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 2.jpg"},

{title: "", 
description: "", 
ballon: "Derreta a solda do pino com o soldador, e com a ferramenta G1 posicionada na horizontal puxe o pino para fora. O pino se levantará e não terá mais contato com a placa.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 3.jpg"},

{title: "", 
description: "", 
ballon: "Detalhe do pino levantado após o procedimento anterior. Observe que a distancia do pino para a placa é muito pequena.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 6.jpg"},

{title: "", 
description: "", 
ballon: "É necessário levantar um pouco mais o pino que o procedimento anterior, pois senão, no momento de soldar o cabo MCU a solda no pino pode encostar na placa, causando um curto. Atenção: Não levantar demais o pino, pois pode quebrá-lo.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 5.jpg"},

{title: "", 
description: "", 
ballon: "Detalhe do pino levantado após o procedimento anterior. Observe que a distâcia do pino para a placa é ideal para a soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 4.jpg"},

{title: "", 
description: "", 
ballon: "Execute a sequência anterior para levantar os 3 pinos mencionados na página 8, pinos (2, 26 e 60).", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 7.jpg"},

{title: "", 
description: "", 
ballon: "Detalhe de um fio do cabo MCU soldado em um pino.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Detalhe de como conectar a G1 8.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU: <br />1 => Fio Verde <br />2 => Fio Preto <br />3 => Fio Vermelho <br />4 => Fio Roxo <br />5 => Fio Laranja <br />6 => Fio Amarelo", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Localizando os pontos para soldar o cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU soldado no imobilizador. Os fios roxo, laranja e verde devem ser soldados nos pinos levantados. Atenção para não inverter os fios ou soldar em outras posições.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Cabo MCU soldado no imobilizador.jpg"},

{title: "Conectando o imobilizador ao OBDMap", 
description: "Depois de o cabo MCU estar soldado no imobilizador conecte-o no OBDMap, em seguida conecte a fonte de alimentação no OBDMap como mostra a foto. <br />Atenção: É importante apertar bem os parafusos fixadores de todos os conectores para evitar possíveis maus contatos. <br /><br />", 
ballon: "Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o imobilizador, assim evitando danos ao imobilizador e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0063 Leitura Opel 2R/Conectando o imobilizador ao OBDMap.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

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
`Mau contato do cabo MCU com o imobilizador,`,`Mau contato do cabo MCU com o OBDMap,`,`Imobilizador com problema ou arquivo corrompido.`,``,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do imobilizador.`,``,]
},

{ label: `Curto!`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do imobilizador,`,`Cabo MCU ou imobilizador está com problema.`,],
solutions: [
`Conferir a correta posição dos fios no imobilizador. `,]
},

{ label: `Imob. virgem ou resetado!`,
screens: [
`&nbsp;`,
`Imob.&nbsp;virgem`,
`&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;resetado!`,
`<br />`,
],
causes: [
`Não foi possível localizar a senha, o imobilizador pode estar virgem ou resetado. `,``,],
solutions: [
]
},

{ label: `Imobilizador imcompativel!`,
screens: [
`&nbsp;`,
`Imobilizador`,
`&nbsp;&nbsp;&nbsp;imcompativel!`,
`<br />`,
],
causes: [
`O imobilizador detectado não é um Opel 2R. `,``,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
