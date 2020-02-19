//Capa
nomeCarga = "Sprinter - Correção Start Error / Casamento";
revCarga = "Rev. 3";
dataManual = "Novembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Corrigir o arquivo corrompido de start error.`,
`Fazer o casamento entre ECU e IMOBILIZADOR (caso necessário substituir a ECU ou IMOBILIZADOR do veículo)`,
``,
`A mensagem "start error" (erro de partida) aparece no painel do veículo, quando há falha elétrica ou mecânica nos componentes relacionados com o sistema de partida. Porém em alguns casos, sob condições particulares, os dados dos arquivos do imobilizador e da ECU são corrompidos. Assim o veículo passa a apresentar a mesma mensagem de falha e o motor não arranca. `,
``,
`Esta carga aplica-se aos casos em que o "start error" seja decorrente de erros de arquivo do imobilizador/ECU e não de falhas mecânicas e elétricas.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mercedes",
model: "Sprinter 2.2",
years: "2001 a 2010"
},
];
applicationObs = createObs("Observações:", "", "Somente veículos equipados com imobilizador Temic com micros HC08, de máscaras J66D ou L52H, acompanhados de ECU com memória 35P08.")createObs("A condição descrita acima atende, pelo que sabemos a totalidade dos veículos comercializados no Brasil, porém existem veículos equipados com outras combinações descritas abaixo:", "", "Imobilizador com micro HC08 (J66D ou L52H) e ECU com memória 24C04.")createObs("Para veículos com tais combinações esta carga não se aplica.", "", "Normalmente quando ocorre a perda de dados dos arquivos, a região da memória do imobilizador que contém as informações das chaves não é afetada, assim após a correção as chaves voltam a funcionar. Porém em alguns casos essas informações também se perdem. Nesses casos , após corrigir os arquivos com esta carga, faz se necessário reprogramar as chaves (transponders), utilizando a carga "OBD0079 - Sprinter - Programação de Chaves". Quando esta carga for utilizada para casamento em função da troca de ECU, pode-se utilizar em seguida a carga "OBD0080 - Sprinter - Leitura e Gravação de Chassi" para corrigir a informação de chassi da nova ECU.")



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Chave tipo torx T15. Necessária para a desmontagem da ECU.", 
image: "/images/Acessórios/Chave tipo torx T15.jpg"},

{title: "Localizando o imobilizador do veículo:", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Com auxílio da chave torx T5, remova os dois parafusos como indica a foto.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Desprenda a moldura do painel como mostra a foto.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 2.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Remova os dois parafusos como indica a foto.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 3.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Remova a tampa superior do painel.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 4.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Remova os dois parafusos que prendem o painel do veículo.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Localizando o imobilizador do veículo 5.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "O imobilizador é fixado atrás do painel por duas travas plásticas.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/imobilizador fixado.jpg"},

{title: "", 
description: "Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Este item ilustra passo a passo o procedimento.<br />", 
ballon: "Remova o conector que liga o imobilizador.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/imobilizador fixado 2.jpg"},

{title: "Desmontando o imobilizador:", 
description: "", 
ballon: "Com auxílio de uma chave de fenda de tamanho médio, faça uma alavanca nas travas que prendem a tampa do imobilizador.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Desmontando o imobilizador.jpg"},

{title: "", 
description: "", 
ballon: "Com auxílio de uma chave Philips, remova os parafusos da placa do imobilizador.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Desmontando o imobilizador 2.jpg"},

{title: "", 
description: "", 
ballon: "Imobilizador removido da caixa.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Imobilizador removido da caixa.jpg"},

{title: "Identificando o imobilizador J66D", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando o imobilizador J66D.jpg"},

{title: "Localizando os pontos para soldagem:", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Preto<br />2=> Fio Roxo<br />3=> Fio Laranja<br />4=> Fio Verde<br />5=> Fio Amarelo<br />6=> Fio Vermelho", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando os pontos a serem soldados.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador J66D/Identificando os pontos a serem soldados 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o imobilizador, evitando danos ao imobilizador e ao OBDMap.<br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0081 Start Error Sprinter/Todos os acessorios conectados.jpg"},

{title: "Identificando o imobilizador L52H", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Identificando o imobilizador L52H.jpg"},

{title: "Localizando os pontos para soldagem", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Preto<br />2=> Fio Roxo<br />3=> Fio Laranja<br />4=> Fio Verde<br />5=> Fio Amarelo<br />6=> Fio Vermelho", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Localizando os pontos para soldagem.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0079 Sprinter Programação de chaves/Imobilizador L52H/Localizando os pontos para soldagem 2.jpg"},

{title: "Todos os acessorios conectados:", 
description: "Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o imobilizador, evitando danos ao imobilizador e ao OBDMap.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0081 Start Error Sprinter/Todos os acessorios conectados2.jpg"},

{title: "Localizando a ECU do veículo", 
description: "A ECU do veículo está localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando e desmontando a ECU", 
description: "", 
ballon: "Com auxílio da chave torx T15, remova os seis parafusos como indica a foto.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Identificando a tampa da ECU.jpg"},

{title: "", 
description: "", 
ballon: "Tampa da ECU removida.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Removendo a tampa da ECU.jpg"},

{title: "Identificando a memória 35P08 da ECU", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Identificando a memória 35P08 da ECU.jpg"},

{title: "Conectando a pinça na memória 35P08", 
description: "", 
ballon: "A indicação do pino 1 da pinçadeve coincidir com o pino 1 da memória 35P08.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Conectando a pinça na memória 35P08.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Conectando a pinça na memória 35P08 2.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados ao OBDMAP.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Todos os acessorios conectados.jpg"},

{title: "Continuar o procedimento usando o cabo MCU", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Preto<br />3=> Fio Cinza<br />4=> Fio Verde<br />5=> Fio Azul<br />6=> Fio Amarelo<br />7=> Fio Roxo", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Leitura e gravação de chassi usando o cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios na ECU, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Leitura e gravação de chassi usando o cabo MCU 2.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados ao OBDMAP.", 
image: "/images/Funções Específicas/OBD0080 Sprinter Leitura e correção de chassi/Todos os acessorios conectados2.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a 1º etapa - Correção do imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes`], help: `Tecle OK`, menu: 1000},
{lines: [`Sprinter`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1 J66D e xL52H`], help: `Tecle OK`, menu: 1000},
{lines: [`Start Error`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a 2º etapa - Correção da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Observação:`], help: `Tecle OK`, menu: 1000},

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

{ label: `Erro grav. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU ou pinça com a ECU,`,`Mau contato do cabo MCU ou pinça com o OBDMap,`,`ECU com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do cabo MCU na ECU,`,`Verificar se os parafusos que prendem o cabo MCU ou a pinça no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `ERRO TIMEOUT PP.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;TIMEOUT&nbsp;PP.`,
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
