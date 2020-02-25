//Capa
nomeCarga = `Manual Carga -  OBD0079<br />Sprinter - Programação de Chaves`;
revCarga = `Rev. 3`;
dataManual = `Novembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar a chave nº 1 ou nº 2 diretamente no arquivo do imobilizador, de forma que possa arrancar o veículo, dispensando qualquer procedimento de apresentação.`,
``,
`O sistema de imobilização da Mercedes Sprinter permite duas chaves programadas simultaneamente. O transponder utilizado é o Temic ID12 (T12). Quando se tem uma chave funcionando é possível fazer cópias por clonagem do transponder. (a carga do módulo de transponders do OBDMap realiza esta tarefa).`,
`A programação de um transponder na 1ª ou 2ª posição automaticamente desprograma o transponder previamente gravado na mesma posição.`,
`Como só dois transponders podem ser programados, uma 3ª chave só pode ser feita por clonagem.`,
`Esta carga também é útil quando se faz a correção do start error em um veículo e as chaves originais não funcionam, para reprogramar as mesmas.`,
`Os transponders Temic ID12 não são muito comuns, mas pode-se utilizar transponders T5 ou NOVA configurada como ID12. É necessário que o transponder seja gravado com cabeçalho e checksum corretos. Para produzir estes transponders, pode-se utilizar a função "randomizar ID12" da carga do módulo de transponders.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Mercedes`,
model: `Sprinter 2.2`,
years: `2001 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações:`, ``, `Somente veículos equipados com imobilizador Temic com micros HC08, de máscaras J66D ou L52H, acompanhados de ECU com memória 35P08.`);
applicationObs += createObs(`A condição descrita acima atende, pelo que sabemos a totalidade dos veículos comercializados no Brasil, porém existem veículos equipados com outras combinações descritas abaixo:`, `Imobilizador com micro HC08 (J66D ou L52H) e ECU com memória 24C04.`, `Imobilizador com micro HC05 e ECU com memória 24C04.`);
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Chave tipo torx T15. Necessária para a desmontagem da ECU.`, 
image: `/images/Acessórios/Chave tipo torx T15.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg`},

{title: `Localizando o imobilizador do veículo:`, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Com auxílio da chave torx T5, remova os dois parafusos como indica a foto.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Desprenda a moldura do painel como mostra a foto.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 2.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Remova os dois parafusos como indica a foto.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 3.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Remova a tampa superior do painel.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 4.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Remova os dois parafusos que prendem o painel do veículo.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 5.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `O imobilizador é fixado atrás do painel por duas travas plásticas.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/imobilizador fixado.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />`, 
ballon: `Remova o conector que liga o imobilizador.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/imobilizador fixado 2.jpg`},

{title: `Desmontando o imobilizador:`, 
description: ``, 
ballon: `Com auxílio de uma chave de fenda de tamanho médio, faça uma alavanca nas travas que prendem a tampa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Desmontando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de uma chave Philips, remova os parafusos da placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Desmontando o imobilizador 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Imobilizador removido da caixa.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Imobilizador removido da caixa.jpg`},

{title: `Identificando o imobilizador J66D`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando o imobilizador J66D.jpg`},

{title: `Localizando os pontos para soldagem`, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Preto<br />2=> Fio Roxo<br />3=> Fio Laranja<br />4=> Fio Verde<br />5=> Fio Amarelo<br />6=> Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando os pontos a serem soldados.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando os pontos a serem soldados 2.jpg`},

{title: `Todos os acessórios conectados :`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para<br />trás como na foto, para que não tenham contato com o<br />imobilizador, evitando danos ao imobilizador e ao OBDMap<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Todos os acessórios conectados.jpg`},

{title: `Identificando o imobilizador L52H`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Identificando o imobilizador L52H.jpg`},

{title: `Localizando os pontos para soldagem:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Preto<br />2=> Fio Roxo<br />3=> Fio Laranja<br />4=> Fio Verde<br />5=> Fio Amarelo<br />6=> Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Localizando os pontos para soldagem 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para<br />trás como na foto, para que não tenham contato com o<br />imobilizador, evitando danos ao imobilizador e ao OBDMap<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Programando a Chave Nº1:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>Sprinter`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Sprinter`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;imob.`,
`atraves&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`Temic&nbsp;ou&nbsp;T5&nbsp;ID12`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;&nbsp;&nbsp;ID12&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;ID12`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Selecione:`,
`Gravar&nbsp;Chave&nbsp;N:1`,
`<br />`,
],
help: `Insira a 1ª chave ou transponder no copo branco do módulo de transponder
como mostra na Página 05.`
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;Imob.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Programando a Chave Nº2:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mercedes`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mercedes`, `>Sprinter`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Sprinter`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;imob.`,
`atraves&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`Temic&nbsp;ou&nbsp;T5&nbsp;ID12`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;&nbsp;&nbsp;ID12&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;ID12`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Selecione:`,
`Gravar&nbsp;Chave&nbsp;N:2`,
`<br />`,
],
help: `Insira a 2ª chave ou transponder no copo branco do módulo de transponder
como mostra na Página 05.`
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;Imob.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]}
];
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
`Os fios foram soldados em outros pontos do imobilizador,`,`O cabo MCU ou imobilizador está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `ERRO GRAV. IMOB.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;GRAV.&nbsp;IMOB.`,
`<br />`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do imobilizador,`,`O cabo MCU ou imobilizador está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Erro na leitura do ID12!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;ID12!`,
`<br />`,
],
causes: [
`O transponder utilizado não é um ID12 ou defeituoso,`,`Se estiver utilizando transponder T5 ou NOVA, verificar se está gravado com ID12 previamente.`,],
solutions: [
`Utilizar transponder ID12,`,`Verificar se o transponder T5 ou NOVA está gravada como ID12 previamente.`,]
},
{ label: `Frame do ID12 incompativel!`,
screens: [
`&nbsp;`,
`&nbsp;Frame&nbsp;do&nbsp;ID12`,
`&nbsp;incompativel!`,
`<br />`,
],
causes: [
`O transponder utilizado é um ID12, porém os dados não estão compatíveis (cabeçalho ou checksum). Esta mensagem só deve ocorrer para T5 ou NOVA, quando os dados estiverem fora do formato exigido.`,],
solutions: [
`Se o transponder utilizado é um ID12 original, então está defeituoso. Utilize outro transponder. Se o transponder é um T5 ou NOVA, utilize a opção "Randomizar ID12" no menu especial do módulo de transponder .`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
