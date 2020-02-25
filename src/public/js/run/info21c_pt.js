//Capa
nomeCarga = `Manual Carga -  OBD0021<br />Geração de Chaves Code 1 702 / 704`;
revCarga = `Rev. 2`;
dataManual = `Fevereiro 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de transponders a partir do Imobilizador.`,
`Adicionar transponders ao Imobilizador.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Brava 1.6`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.5`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio 1.0`,
years: `1998 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio 1.5`,
years: `1997 a 2001`
},
{
manufacturer: `Fiat`,
model: `Palio 1.6`,
years: `1999 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0 8V`,
years: `2001 a 2005`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 8V`,
years: `2002 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Siena 1.5`,
years: `1997 a 2001`
},
{
manufacturer: `Fiat`,
model: `Siena 1.6`,
years: `1999 a 2000`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0`,
years: `2000 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3`,
years: `2003 a 2005`
},
{
manufacturer: `Fiat`,
model: `Strada 1.5`,
years: `1999 a 2004`
},
{
manufacturer: `Fiat`,
model: `Strada Fire 1.3`,
years: `2003 a 2005`
},
{
manufacturer: `Fiat`,
model: `Uno 1.5`,
years: `1996 a 2003`
},
{
manufacturer: `Fiat`,
model: `Uno Mille Fire 1.0`,
years: `2001 a 2005`
},
{
manufacturer: `Fiat`,
model: `Uno Fire 1.3`,
years: `2003 a 2005`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Existem imobilizadores do sistema CODE 1 que tem numeração final diferente de 702 e 704, porém todos os Imobilizadores deste sistema são abrangidos por esta carga.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Imobilizador 702, do sistema CODE 1, utiliza o microcontrolador com máscara IM106.OOC.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/702.jpg`},

{title: ``, 
description: ``, 
ballon: `O Imobilizador 704, do sistema CODE 1, utiliza o microcontrolador com máscara 1K59H.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o transponder T5/NOVA (Epóxi).`, 
image: `/images/Transponders/Transponder T5 como ID20.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: `Conectando o Imobilizador 702 no OBDMap:`, 
description: ``, 
ballon: `Identificando o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i702.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Imobilizador Desmontado.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Azul<br />5 => Fio Roxo<br />6 => Fio Laranja`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos solda.jpg`},

{title: ``, 
description: ``, 
ballon: `É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha na soldagem.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar a posição dos fios. Primeiro solde os fios no Imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados  devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Cabo MCU Soldado.jpg`},

{title: `Conectando o Imobilizador 704 no OBDMap:`, 
description: ``, 
ballon: `Identificando o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i704.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704 desmontada.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Laranja<br />5 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos de soldagem 704.jpg`},

{title: ``, 
description: ``, 
ballon: `É aconselhável raspar todos os pontos necessários antes de soldar para retirar a resina, pois ela atrapalha a soldagem.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina 704.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar a posição dos fios. Primeiro solde os fios no Imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o Imobilizador e assim evitando danos ao Imobilizador e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios 704.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Imobilizador.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Fios Soldados 704.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `É importante apertar bem os parafusos fixadores de todos os conectores para evitar possível mau contato.`, 
image: `/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Equipamentos Conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

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
{lines: [
`GERAR&nbsp;T11&nbsp;CODE&nbsp;1&nbsp;A&nbsp;`,
`PARTIR&nbsp;DO&nbsp;`,
`IMOBILIZADOR`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`Imob.&nbsp;Code&nbsp;1&nbsp;702`,
`<br />`,
],
help: `Selecione Imob. Code 1 702 
ou Imob. Code 1 704`
},
{lines: [
`Conecte&nbsp;o&nbsp;imobilizador`,
`através&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`PIN:&nbsp;*****`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Anote o PIN.`
},
{lines: [
`&nbsp;`,
`GERAR&nbsp;MESTRE`,
`<br />`,
`<br />`,
],
help: `Utilize esta opção para fazer um clone da chave mestra (vermelha) do
veículo a partir do Imobilizador, tecle OK.`
},
{lines: [
`&nbsp;`,
`GERAR&nbsp;CHAVE&nbsp;AZUL`,
`<br />`,
`<br />`,
],
help: `Utilize esta opção para fazer um clone de uma chave escrava (azul) do veículo a partir do Imobilizador, tecle OK.`
},
{lines: [
`POSICIONE&nbsp;`,
`TRANSPONDER`,
`T5&nbsp;E&nbsp;TECLE&nbsp;OK`,
`<br />`,
],
help: `Posicione o transponder T5 no Módulo de
Transponder, Tecle OK!`
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T5...`,
`AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Se desejar gerar um próximo transponder tecle OK e volte ao passo 12, senão tecle (X) VOLTA para encerrar o procedimento.`
},
]
}, {title: `Adicionar chaves ao Imobilizador 702 / 704:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Neste procedimento é possível adicionar chave escrava (azul) ao Imobilizador sem a necessidade de passar as outras chaves que já estejam em funcionamento no veículo.`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`ADICIONAR&nbsp;T11&nbsp;AO`,
`IMOB.&nbsp;(CH.&nbsp;AZUL)`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`Imob.&nbsp;Code&nbsp;1&nbsp;702`,
`<br />`,
],
help: `Selecione Imob. Code 1 702 
ou Imob. Code 1 704`
},
{lines: [
`Conecte&nbsp;o&nbsp;imobilizador`,
`através&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Neste momento está sendo feita a leitura da quantidade de chaves programadas no Imobilizador.`
},
{lines: [
`CHAVES&nbsp;`,
`PROGRAMADAS:&nbsp;*/8`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Quantidade de chaves programadas no Imobilizador, (no máximo 8 chaves), tecle OK.`
},
{lines: [
`POSICIONE&nbsp;`,
`TRANSPONDER`,
`T11&nbsp;E&nbsp;TECLE&nbsp;OK`,
`<br />`,
],
help: `Posicione o transponder T11 no Módulo de Transponder, tecle OK!`
},
{lines: [
`&nbsp;`,
`LENDO...`,
`AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Gravar&nbsp;nova&nbsp;chave`,
`<br />`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap realiza a gravação da nova chave no imobilizador`
},
{lines: [
`CHAVES&nbsp;`,
`PROGRAMADAS:&nbsp;*/*`,
`&lt;OK&gt;&nbsp;PARA&nbsp;OUTRO!`,
`<br />`,
],
help: `Quantidade de chaves programadas
no Imobilizador, (no máximo 8 chaves). Tecle (X) VOLTA para encerrar o procedimento ou tecle OK para prosseguir e volte ao passo 10º`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na leitura do Imobilizador`,
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
`ERRO&nbsp;GRAVAR&nbsp;T5!`,
`(OK)&nbsp;PARA&nbsp;REPETIR.`,
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
`OU&nbsp;INVÁLIDO!`,
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
`IMOBILIZADOR`,
`INCOMPATIVEL!`,
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
`<br />`,
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
`ERRO&nbsp;LEITURA&nbsp;T11!`,
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
`REPETIDO!`,
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
`CHAVES&nbsp;`,
`PROGRAMADAS.:*/8`,
`IMOBILIZADOR&nbsp;LOTADO&nbsp;`,
`!`,
],
causes: [
`Foi adicionado o número máximo de chaves ao imobilizador.`,],
solutions: [
]
},
{ label: `IMOB. LOTADO APAGAR AZUIS ? (X)NAO / (OK)SIM`,
screens: [
`&nbsp;`,
`APAGAR&nbsp;AZUIS&nbsp;?`,
`(X)NÃO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
causes: [
`O Imobilizador está com o número máximo de chaves, não há espaço para adicionar chaves. Para apagar todas as chaves escravas (Azuis) e assim permitir a adição de novas chaves tecle (OK)SIM, senão tecle (X)NAO.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
