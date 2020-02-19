//Capa
nomeCarga = "Geração de Chaves Code 1 702 / 704";
revCarga = "Rev. 2";
dataManual = "Fevereiro 2015";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de transponders a partir do Imobilizador.`,
`Adicionar transponders ao Imobilizador.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Brava 1.6",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Fiorino 1.5",
years: "1997 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio 1.0",
years: "1998 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio 1.5",
years: "1997 a 2001"
},
{
manufacturer: "Fiat",
model: "Palio 1.6",
years: "1999 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.0 8V",
years: "2001 a 2005"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.3 8V",
years: "2002 a 2005"
},
{
manufacturer: "Fiat",
model: "Siena 1.0",
years: "1997 a 2000"
},
{
manufacturer: "Fiat",
model: "Siena 1.5",
years: "1997 a 2001"
},
{
manufacturer: "Fiat",
model: "Siena 1.6",
years: "1999 a 2000"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0",
years: "2000 a 2005"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.3",
years: "2003 a 2005"
},
{
manufacturer: "Fiat",
model: "Strada 1.5",
years: "1999 a 2004"
},
{
manufacturer: "Fiat",
model: "Strada Fire 1.3",
years: "2003 a 2005"
},
{
manufacturer: "Fiat",
model: "Uno 1.5",
years: "1996 a 2003"
},
{
manufacturer: "Fiat",
model: "Uno Mille Fire 1.0",
years: "2001 a 2005"
},
{
manufacturer: "Fiat",
model: "Uno Fire 1.3",
years: "2003 a 2005"
},
];
applicationObs = createObs("Observação: Existem imobilizadores do sistema CODE 1 que tem numeração final diferente de 702 e 704, porém todos os Imobilizadores deste sistema são abrangidos por esta carga.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "O Imobilizador 702, do sistema CODE 1, utiliza o microcontrolador com máscara IM106.OOC.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/702.jpg"},

{title: "", 
description: "", 
ballon: "O Imobilizador 704, do sistema CODE 1, utiliza o microcontrolador com máscara 1K59H.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o transponder T5/NOVA (Epóxi).", 
image: "/images/Transponders/Transponder T5 como ID20.jpg"},

{title: "Acessórios utilizados:", 
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

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Conectando o Imobilizador 702 no OBDMap:", 
description: "", 
ballon: "Identificando o Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i702.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave de fenda para destravar o Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Imobilizador Desmontado.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Azul<br />5 => Fio Roxo<br />6 => Fio Laranja", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos solda.jpg"},

{title: "", 
description: "", 
ballon: "É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha na soldagem.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar a posição dos fios. Primeiro solde os fios no Imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados  devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU soldado no Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Cabo MCU Soldado.jpg"},

{title: "Conectando o Imobilizador 704 no OBDMap:", 
description: "", 
ballon: "Identificando o Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i704.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave de fenda para destravar o Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704 desmontada.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Laranja<br />5 => Fio Verde", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos de soldagem 704.jpg"},

{title: "", 
description: "", 
ballon: "É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha a soldagem.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina 704.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar a posição dos fios. Primeiro solde os fios no Imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios 704.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU soldado no Imobilizador.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Fios Soldados 704.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "É importante apertar bem os parafusos fixadores de todos os conectores para evitar possível mau contato.", 
image: "/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Equipamentos Conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de transponder T11 em um T5 a partir do Imobilizador 702 / 704`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},{title: `Adicionar chaves ao Imobilizador 702 / 704:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Neste procedimento é possível adicionar chave escrava (azul) ao Imobilizador sem a necessidade de passar as outras chaves que já estejam em funcionamento no veículo.`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do Imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o Imobilizador, `,`Mau contato no cabo MCU com o OBDMap, `,`Imobilizador com problema ou arquivo corrompido.`,],
solutions: [
`Conferir a correta posição dos fios no Imobilizador e se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},

{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
`Transponder mal posicionado na antena do Módulo de Transponder, `,`Transponder defeituoso ou de outro modelo. `,],
solutions: [
`Confira o transponder utilizado, pode-se utilizar a função Identificar Transponder da carga Módulo de Tranponder para identificar o tipo de transponder.`,]
},

{ label: `ARQUIVO RESETADO OU INVALIDO!`,
screens: [
`&nbsp;`,
`ARQUIVO&nbsp;RESETADO`,
`&nbsp;&nbsp;OU&nbsp;INVALIDO!`,
`<br />`,
],
causes: [
`O Imobilizador é virgem ou foi utilizada a opção de reset, ou o Imobilizador está com problema.`,],
solutions: [
]
},

{ label: `IMOBILIZADOR INCOMPATIVEL!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;IMOBILIZADOR`,
`&nbsp;&nbsp;INCOMPATIVEL!`,
`<br />`,
],
causes: [
`O Imobilizador pode ser um modelo CODE 2 (caixa cinza) que foi ligado por engano como se fosse um CODE 1 (704).`,],
solutions: [
]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do Imobilizador`,`Cabo MCU ou Imobilizador com problema. `,],
solutions: [
`Conferir a correta posição dos fios na placa, se estiver ligado corretamente pode ser o Imobilizador ou o cabo MCU com problema.`,]
},

{ label: `ERRO LEIT. T11!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;LEIT.&nbsp;T11!`,
`<br />`,
`<br />`,
],
causes: [
`Transponder mal posicionado na antena do Módulo de Transponder, `,`Transponder defeituoso ou de outro modelo, ex: o transponder T5 pode ser configurado como um T11, porém se ele estiver com outra configuração, ou gravado com um cabeçalho diferente de (FA BE) ou (FB BE) apresentará este erro.`,],
solutions: [
`Confira o transponder utilizado, pode-se utilizar a função Identificar Transponder da carga Módulo de Tranponder para identificar o tipo de transponder.`,]
},

{ label: `REPETIDO!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;REPETIDO!`,
`<br />`,
`<br />`,
],
causes: [
`O transponder apresentado já se encontra válido no Imobilizador.`,],
solutions: [
]
},

{ label: `CHAVES PROG.:8/8 IMOB. LOTADO !`,
screens: [
`&nbsp;`,
`CHAVES&nbsp;PROG.:8/8`,
`&nbsp;IMOB.&nbsp;LOTADO&nbsp;!`,
`<br />`,
],
causes: [
`Foi adicionado o número máximo de chaves ao imobilizador.`,],
solutions: [
]
},

{ label: `IMOB. LOTADO APAGAR AZUIS ? (X)NAO / (OK)SIM`,
screens: [
`IMOB.&nbsp;LOTADO`,
`APAGAR&nbsp;AZUIS&nbsp;?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
causes: [
`O Imobilizador está com o número máximo de chaves, não há espaço para adicionar chaves. Para apagar todas as chaves escravas (Azuis) e assim permitir a adição de novas chaves tecle (OK)SIM, senão tecle (X)NAO.`,],
solutions: [
]
},

{ label: `ARQUIVO RESETADO OU INVALIDO!`,
screens: [
`&nbsp;`,
`ARQUIVO&nbsp;RESETADO`,
`&nbsp;&nbsp;OU&nbsp;INVALIDO!`,
`<br />`,
],
causes: [
`O Imobilizador é virgem ou foi utilizada a opção de reset, `,`Imobilizador está com problema.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
