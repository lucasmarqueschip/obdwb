//Capa
nomeCarga = "Leitura de Senha do Painel Magnetti Marelli via Pinça ou Cabo MCU";
revCarga = "Rev. 6";
dataManual = "Maio 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Ler a senha de 4 dígitos que se encontra no painel do veículo.`,
`Com a senha lida é possível realizar a programação de chaves utilizando a carga OBD0001.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Gol 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Voyage 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Voyage 1.6",
years: "2009 a 2012"
},
];
applicationObs = createObs("Painéis suportados:", "Com soic 24C16", "820A")createObs("820C", "820E", "820R")createObs("821K", "827N", "827M")createObs("Com processador 9S12HZ256:", "823A", "823K")createObs("826A", undefined, undefined)



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

{title: "Identificando e desmontando os painéis:", 
description: "Esta carga abrange sete modelos de painéis, os procedimentos a seguir aplicam aos modelos de painéis 820A, 820E, 820Q, 820B, 820R, 820C e 821K.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando todos os painéis.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU no painel:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Cinza<br />2=> Fio Verde<br />3=> Fio Preto<br />4=> Fio Vermelho", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Não inverter os fios.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o painel, evitando danos ao mesmo e ao OBDMap.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados.jpg"},

{title: "Localizando e conectando a pinça na memória 24C16:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando e conectando a pinça na memória 24C161.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando e conectando a pinça na memória 24C162.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Conectando a pinça na memória 24C16.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória 24C16.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Conectando a pinça na memória 24C16 2.jpg"},

{title: "Todos os acessorios conectados:", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem ao painel.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados 6.jpg"},

{title: "Identificando e desmontando o painel 827N:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e desmontando o painel 827N1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e desmontando o painel 827N2.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e desmontando o painel 827N3.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Tendo acesso a placa.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU no painel 827N:", 
description: "", 
ballon: "Localizando área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 827N.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Preto<br />2=> Fio Vermelho<br />3=> Fio Verde<br />4=> Fio Cinza", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 827N 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Não inverter.jpg"},

{title: "Todos os acessórios conectados :", 
description: "Atenção<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o painel, evitando danos ao mesmo e ao OBDMap.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados 5.jpg"},

{title: "Identificando e conectando a pinça na memória 24C16 no painel", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e conectando a pinça na memória 24C16 no painel (Processador 9S12HZ256)1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e conectando a pinça na memória 24C16 no painel (Processador 9S12HZ256)2.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e conectando a pinça na memória 24C16 no painel (Processador 9S12HZ256) 2.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Conectando a pinça na memória 24C16 no painel (Processador 9S12HZ256) 2.jpg"},

{title: "Todos os acessórios conectados  :", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e<br />nem ao painel.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados 2.jpg"},

{title: "Identificando e desmontando o painel 823A e 823K", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e desmontando o painel 823A e 823K (Processador 9S12HZ256).jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Tendo acesso a placa 2.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU no painel 823A e 823K", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 823A e 823K.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Preto<br />3=> Fio Verde<br />4=> Fio Amarelo", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 823A e 823K 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Não inverter os fios 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem ao painel.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados 3.jpg"},

{title: "Identificando e desmontando o painel 822A", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Identificando e desmontando o painel 822A (Processador 9S12HZ256).jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Tendo acesso a placa 3.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU no painel 822A", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 822A (Processador 9S12HZ256).jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Verde<br />2=> Fio Preto<br />3=> Fio Amarelo<br />4=> Fio Vermelho", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Localizando os pontos de soldagem do cabo MCU no painel 822A (Processador 9S12HZ256) 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar as posições dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Não inverter os fios 3.jpg"},

{title: "Todos os acessórios conectados :", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem ao painel.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0101 Leitura de senha painel Magneti Marelli/Todos os acessórios conectados4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura da senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Marelli`], help: `Tecle OK`, menu: 1000},
{lines: [`soic 24C16`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura de senha no painel 823A, 823K e 822A`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Marelli`], help: `Tecle OK`, menu: 1000},
{lines: [`Proc 9S12HZ256`], help: `Tecle OK`, menu: 1000},
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
`Mau contato do cabo MCU ou pinça com o painel,`,`Mau contato no cabo MCU ou pinça com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Conferir a correta posição da pinça na memória,`,`Verificar se existe resina ou resíduo de solda nos terminais da memória (no caso da pinça)`,`Verificar se os parafusos que prendem o cabo MCU ou pinça no OBDMap estão bem fixos.`,``,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`·	A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,``,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,``,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no Painel,`,`O cabo MCU ou painel está com problema,`,`Mau contato na pinça com a memória,`,`Painel ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Verificar a correta posição dos fios no painel,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Cod.Painel: **** Cod.Acesso: ****`,
screens: [
`&nbsp;`,
`Cod.Painel:&nbsp;****`,
`Cod.Acesso:&nbsp;****`,
`<br />`,
],
causes: [
],
solutions: [
`Contate o suporte técnico.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato do cabo MCU ou pinça com o painel,`,`Mau contato no cabo MCU ou pinça com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,``,``,],
solutions: [
`Conferir a correta posição da pinça na memória,`,`Verificar se existe resina ou resíduo de solda nos terminais da memória (no caso da pinça)`,`Verificar se os parafusos que prendem o cabo MCU ou pinça no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
