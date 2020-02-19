//Capa
nomeCarga = "Sprinter - Leitura e Gravação de Chassi (casamento)";
revCarga = "Rev. 4";
dataManual = "Novembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Corrigir a informação do chassi no arquivo da ECU, em veículos que tenham sofrido a falha "start error" e que tenham tido a informação de chassi alterada.`,
`Nos casos de troca de ECU defeituosa, após o casamento com o imobilizador, usando a carga "OBD0081: Sprinter - Correção Start Error/Casamento" esta carga pode ser usada para fazer o casamento da informação do chassi.`,

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
applicationObs = createObs("Observações:", "", "Somente veículos equipados com imobilizador Temic com micros HC08, de máscaras J66D ou L52H, acompanhados de ECU com memória 35P08.")createObs("A condição descrita acima atende, pelo que sabemos a totalidade dos veículos comercializados no Brasil, porém existem veículos equipados com outras combinações descritas abaixo:", "Imobilizador com micro HC08 (J66D ou L52H) e ECU com memória 24C04.", "Imobilizador com micro HC05 e ECU com memória 24C04.")createObs(undefined, undefined, undefined)



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

{title: "Localizando os pontos de soldagem do cabo MCU:", 
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
{title: `Realizando procedimento de leitura e gravação de chassi:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes`], help: `Tecle OK`, menu: 1000},
{lines: [`Sprinter`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1 J66D e xL52H`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

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
`Os fios foram soldados em outros pontos da ECU,`,`O cabo MCU ou a ECU está com problema.`,],
solutions: [
`Verificar a correta posição dos fios na ECU,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
