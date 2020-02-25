//Capa
nomeCarga = `Manual Carga -  OBD0116<br />Clonagem das BC’s Fiat (Palio, Siena, Stilo, Strada e Punto) (casamento)`;
revCarga = `Rev. 3`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Clonar um Body Computer (BC), ou seja copiar o arquivo de um BC e gravar em outro BC. Isso pode ser útil em casos onde o BC original apresenta algum problema de hardware e deve ser substituído por outro.`,
``,
`<obs>`,
`Observação: É necessário que o arquivo do BC de origem esteja correto e que o hardware, mesmo com problema, permita a leitura do arquivo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Doblo (BC Delphi 93LC66 com trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Palio (BC Delphi 93LC66 com trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Siena (BC Delphi 93LC66 com trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Doblo (BC Delphi 93LC66 sem trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Palio (BC Delphi 93LC66 sem trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Siena (BC Delphi 93LC66 sem trava elétrica)`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Stilo (BC Marelli MC912DG128A)`,
years: `2003 a 2003`
},
{
manufacturer: `Fiat`,
model: `Stilo (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Doblo (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Palio (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Siena (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Strada (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Idea (BC Marelli MC9S12DG256B)`,
years: `2004 a 2007`
},
{
manufacturer: `Fiat`,
model: `Stilo (BC Marelli 95160)`,
years: `2008 a 2012`
},
{
manufacturer: `Fiat`,
model: `Punto (BC Marelli 95160)`,
years: `2008 a 2012`
},
{
manufacturer: `Fiat`,
model: `Linea (BC Marelli 95160)`,
years: `2008 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar a BC ao OBDMap.`, 
image: `/images/Acessórios/Cabo MCU1.jpg`},

{title: `Identificando e desmontando o BC Delphi 93LC66 sem trava elétrica:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 SEM TRAVA ELÉTRICA/Identificando o BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 SEM TRAVA ELÉTRICA/Soltando as travas do BC.jpg`},

{title: `Identificando a memória 93LC66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 SEM TRAVA ELÉTRICA/Identificando a memória 93LC66.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `O modelo desse BC, a placa não ocupa toda a caixa.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 SEM TRAVA ELÉTRICA/Localizando os pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6=> Fio Cinza`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 SEM TRAVA ELÉTRICA/Localizando os pontos de soldagem 2.jpg`},

{title: `Identificando e desmontando o BC Delphi 93LC66 com trava elétrica:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 COM TRAVA ELÉTRICA/Identificando o BC Delphi 93LC66.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 COM TRAVA ELÉTRICA/Soltando as travas do BC 93LC66.jpg`},

{title: `Identificado a memória 93LC66`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 COM TRAVA ELÉTRICA/Identificando a memória 93LC66 1.jpg`},

{title: `Localizando os pontos para soldagem do cabo MCU:`, 
description: ``, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 COM TRAVA ELÉTRICA/Localizando os pontos de soldagem 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6=> Fio Cinza`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI DELPHI 93LC66 COM TRAVA ELÉTRICA/Localizando os pontos de soldagem 4.jpg`},

{title: `Identificando e desmontando o BC Marelli MC912DG128A:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Identificando o BC Marelli MC 912DG128A.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Abrindo o BC Marelli MC 912DG128A.jpg`},

{title: `Identificando o processador MC912DG128A:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Identificando o processador MC912DG128A.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU :`, 
description: ``, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Localizando os pontos de soldagem MC912DG128A - 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Localizando os pontos de soldagem MC912DG128A - 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC912DG128A/Localizando os pontos de soldagem MC912DG128A - 3.jpg`},

{title: `Identificando e desmontando o BC Marelli MC9S12DG256B (Veículo Stilo 2004 a 2007):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Identificando o BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Soltando as travas do BC.jpg`},

{title: `Identificando o microcontrolador MC9S12DG256B:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Identificando o microcontrolador.jpg`},

{title: `Localizando os pontos de soldagem do cabo  MCU:`, 
description: ``, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.<br />Os fios que não estiverem sendo usados devem ser dobrados para trás, para que não tenham contato com o<br />BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (STILO)/Pontos de soldagem 3.jpg`},

{title: `Identificando e desmontando o BC Marelli MC9S12DG256B (Linha Fiat):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Identificando o BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Abrindo o BC.jpg`},

{title: `Identificando o microcontrolador MC9S12DG256B :`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Identificando o microcontrolador.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Localizando os pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5=> Fio Azul`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Localizando os pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Algumas placas possuem o desenho um pouco diferente da anterior. Ao lado é mostrado outro modelo, altera principalmente os pontos de referencia em volta do ponto 1:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5=> Fio Azul`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Localizando os pontos de soldagem 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.<br />Os fios que não estiverem sendo usados devem ser dobrados para trás, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI MC 9S12DG256B (FIAT)/Localizando os pontos de soldagem 4.jpg`},

{title: `Identificando e desmontando o BC Marelli 95160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Identificando o BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Abrindo o BC.jpg`},

{title: `Identificando a memória 95160 (516WP):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Identificando a memória.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Localizando os pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5 => Fio Azul<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Localizando os pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que<br />não estiverem sendo usados devem ser dobrados para trás, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/BC MARELLI  95160/Localizando os pontos de soldagem 3.jpg`},

{title: ``, 
description: `Atenção: Neste ponto do procedimento não remova a fonte de alimentação do OBDMap. Se a fonte for removida o procedimento terá de ser feito novamente.<br />Desconecte o cabo MCU do OBDMap (Não remova a fonte de alimentação)<br />Dessolde o cabo MCU do BC de ORIGEM,<br />Solde o cabo MCU no BC de DESTINO,<br />Conecte o cabo MCU no OBDMap e siga os passos abaixo.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0116 Clonagem das BC's Fiat (Palio, Siena, Stilo, Strada e Punto)/Não remova a fonte.jpg`},
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
{title: `Realizando a clonagem do BC`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Body Computers`], help: `Tecle OK`, menu: 1000},
{lines: [`Clonagem`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`BC&nbsp;Delphi&nbsp;93LC66`,
`<br />`,
],
help: `Selecione o modelo do BC:
BC Delphi 93LC66
BC Marelli 128
BC Marelli 256
BC Marelli 95160`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;BC&nbsp;de`,
`ORIGEM&nbsp;segundo&nbsp;o`,
`manual&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Conecte o cabo MCU no BC que será
copiado o arquivo.`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;BC.`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Leitura`,
`Concluida!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Desconecte&nbsp;cabo`,
`MCU&nbsp;do&nbsp;BC&nbsp;de`,
`ORIGEM&nbsp;segundo`,
`o&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;BC&nbsp;de`,
`DESTINO&nbsp;segundo`,
`manual&lt;OK&gt;`,
],
help: `Conecte o cabo MCU no BC em que será
gravado o arquivo copiado anteriormente.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;BC.`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Operação`,
`Concluida!`,
`<br />`,
],
help: `O arquivo de origem foi copiado no BC de
destino.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no BC,`,`BC está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no BC.`,]
},
{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravação`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir.`,
`<br />`,
],
causes: [
`Mau contato do cabo MCU com o BC,`,`Mau contato no cabo MCU com o OBDMap,`,`BC com problema.`,],
solutions: [
`Verificar correta posição do cabo MCU no BC,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},
{ label: `Arquivo invalido`,
screens: [
`&nbsp;`,
`ARQUIVO&nbsp;INVÁLIDO`,
`DO&nbsp;MÓDULO`,
`<br />`,
],
causes: [
`O Arquivo do BC pode estar corrompido.`,],
solutions: [
]
},
{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas,`,`BC com problema ou arquivo corrompido.`,],
solutions: [
`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar correta posição do cabo MCU no BC.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
