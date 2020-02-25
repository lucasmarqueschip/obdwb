//Capa
nomeCarga = `Manual Carga -  OBD0082<br />Leitura de Senha do Painel Agile / Montana`;
revCarga = `Rev. 2`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Ler a senha do imobilizador de 4 dígitos que se encontra no painel do veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Agile 1.4`,
years: `2010 a 2011`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2011 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Com esta carga é possível realizar somente a leitura de senha do painel. Para realizar a programação de chaves é necessário utilizar a carga OBD0057 - GM Agile - Programação de Chaves.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na<br />foto, para que não tenham contato com o painel, evitando danos ao painel e ao<br />OBDMap.<br />`, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na<br />foto, para que não tenham contato com o painel, evitando danos ao painel e ao<br />OBDMap.<br />`, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na<br />foto, para que não tenham contato com o painel, evitando danos ao painel e ao<br />OBDMap.<br />`, 
ballon: `Ferro de solda.`, 
image: `/images/Acessórios/ferro_de_Solda2.jpg`},

{title: `Passos para remover o painel do veículo:`, 
description: ``, 
ballon: `Passo 1: Remova os 3 parafusos que prendem a capa protetora da coluna de direção.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 2: Desprenda as travas da capa de proteção.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 3: Remova a parte superior da capa protetora.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 4: Remova o acabamento do miolo de ignição.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 4.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 5: Remova a parte inferior da capa de proteção.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 5.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 6: Para facilitar a remoção dos próximos parafusos, pressione as duas travas simultaneamente até que a chave do limpador se desprenda. Observação: Siga este exemplo para remover a chave de seta do lado esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 6.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 7: Remova o parafuso do lado esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 7.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 8: Remova o parafuso do lado direito do volante.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 8.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 9: Utilize uma chave Allen para remover o parafuso que fica na moldura do painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 9.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 10: Remova a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 10.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 11: Remova os dois parafusos superiores que prendem o painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 11.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 12: Remova o parafuso inferior que prende o painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 12.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 13: Levante o painel e remova os conectores que o prendem.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 13.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 14: Utilize um alicate de corte pra cortar a presilha plástica que prende o conector 1.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 14.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 15: Use uma chave de fenda para soltar a trava do conector 1.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 15.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 16: Solte a trava do conector 2 do painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Removendo Painel 16.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: `Retire o painel do veículo e leve-o para bancada.`, 
ballon: `Painel retirado do veículo.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Identificando Painel 1.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.`, 
ballon: `Localizando as 8 travas que prendem a tampa do painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Identificando Painel 2.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.`, 
ballon: `Com o auxílio de uma chave de fenda, solte as travas do painel.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Identificando Painel 3.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Soldagem MCU1.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Soldagem MCU2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o painel, evitando danos ao painel e ao OBDMap.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0082 Leitura de Senha Painel Agile/Todos Acessorios Conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando Leitura de Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;Painel&nbsp;`,
`atraves&nbsp;do&nbsp;cabo&nbsp;`,
`MCU/Pinca.&nbsp;Seg.`,
`o&nbsp;Manual.&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `A senha lida poderá ser utilizada para realizar a programação de chaves.
Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do Painel!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;do&nbsp;Painel!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o painel,`,`Mau contato no cabo MCU com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios no painel,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do painel,`,`O cabo MCU ou o painel está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no painel,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `ARQUIVO DO PAINEL INVALIDO`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;ARQUIVO&nbsp;DO`,
`PAINEL&nbsp;INVALIDO`,
`<br />`,
],
causes: [
`O arquivo lido do painel é invalido ou não reconhecido.`,],
solutions: [
]
},
{ label: `ERRO TIMEOUT PP`,
screens: [
`&nbsp;`,
`ERRO&nbsp;TIMEOUT&nbsp;PP`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO TIMEOUT PG.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;TIMEOUT&nbsp;PG.`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO INT. COD.E1`,
screens: [
`&nbsp;`,
`ERRO&nbsp;INT.&nbsp;COD.E1`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO INT. COD.E2`,
screens: [
`&nbsp;`,
`ERRO&nbsp;INT.&nbsp;COD.E2`,
`<br />`,
`<br />`,
],
causes: [
`O problema está relacionado a erros internos do equipamento.`,],
solutions: [
`Desligue-o e ligue-o novamente, se o erro persistir contate o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
