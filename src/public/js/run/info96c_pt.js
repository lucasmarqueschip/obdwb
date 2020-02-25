//Capa
nomeCarga = `Manual Carga -  OBD0096<br />Casamento do Painel 826A VDO com ECU ME7.5.10 (Golf 2002 a 2008) via Pinça`;
revCarga = `Rev. 4`;
dataManual = `Novembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Casamento entre painel e ECU.`,
`Esta função permite realizar o casamento caso necessário substituir a ECU.`,
` Casamento entre ECU e painel.`,
`Esta função permite realizar o casamento caso necessário substituir o painel.`,
` Casamento do KIT (ECU e painel).`,
`Esta função permite permite realizar o casamento caso necessário substituir a ECU e o painel.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Golf 1.6`,
years: `2002 a 2008`
},
{
manufacturer: `VW`,
model: `Golf 1.8`,
years: `2002 a 2008`
},
{
manufacturer: `VW`,
model: `Golf 2.0`,
years: `2002 a 2008`
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
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Identificando e desmontando o painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando as 6 travas que prendem a tampa do painel.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Localizando as travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do painel.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Soltando as travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Retire os 4 ponteiros do painel.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Retire os 4 ponteiros do painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Retire a membrana do painel, e gire-o pra solta-lo das travas.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Retire a membrana do painel.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: `Solte as travas que pendem a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Soltando as travas 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Retire a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Retire a moldura do painel.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU no painel:`, 
description: ``, 
ballon: `Localizando área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Localizando os pontos de soldagem do cabo MCU no painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Cinza<br />2=> Fio Amarelo<br />3=> Fio Preto<br />4=> Fio Vermelho<br />5=> Fio Roxo<br />6=> Fio Azul`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Localizando os pontos de soldagem do cabo MCU no painel 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Não trocar as posições dos fios.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o painel, evitando danos ao mesmo e ao OBDMap.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Todos os acessórios conectados.jpg`},

{title: `Localizando e conectando a pinça na memória 93C86:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 93C86/Localizando e conectando a pinça na memória 93C86.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 93C86/Conectando a pinça na memória 93C86.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 93C86.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 93C86/Conectando a pinça na memória 93C86 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem ao painel.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 93C86/Todos os acessórios conectados.jpg`},

{title: `Identificando e desmontando a ECU ME7.5.10:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Identificando e desmontando a ECU ME7.5.10.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Retirando os Parafusos.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Retirando os Parafusos 2.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU:<br />1=> Fio Cinza<br />2=> Fio Verde<br />3=> Fio Azul<br />4=> Fio Amarelo<br />5=> Fio Preto<br />6=> Fio Vermelho<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios na ECU, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Não trocar as posições dos fios.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a ECU, evitando danos ao mesmo e ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/ECU ME7.5.10/Todos os acessórios conectados.jpg`},

{title: `Localizando e conectando a pinça na memória 95040:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 95040/Conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 95040.`, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 95040/Conectando a pinça na memória 95040 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0096 Casamento do Golf/Memória 95040/Todos os acessórios conectados.jpg`},
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
{title: `Realizando o Casamento da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.10`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptacao do modulo`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;Cabo`,
`MCU/PINCA&nbsp;na&nbsp;ECU`,
`Segundo&nbsp;Manual.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 9) ou pinça no painel (Página 11) e tecle OK!`
},
{lines: [
`&nbsp;`,
`Identificando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painel...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Leitura&nbsp;Concluída.`,
`Desconecte&nbsp;o&nbsp;`,
`Cabo&nbsp;MCU/PINCA.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Remova apenas o cabo MCU ou Pinça do OBDMap e Tecle OK! 
OBS.: Não remova a fonte, se ela for removida, todo o procedimento terá de ser feito novamente.`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 15) ou
pinça na ECU (Página 17) e tecle OK!`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;ECU!`,
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
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando o casamento do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO 826A`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptacao do modulo`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;Cabo&nbsp;`,
`MCU/PINCA&nbsp;no&nbsp;Painel&nbsp;`,
`Segundo&nbsp;Manual&nbsp;Tecle`,
`&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 15) ou
pinça na ECU (Página 17) e tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;ECU...`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Leitura&nbsp;Concluída.`,
`Desconecte&nbsp;o&nbsp;`,
`Cabo&nbsp;MCU/PINCA.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Remova apenas o cabo MCU ou Pinça do OBDMap e Tecle OK!
OBS.: Não remova a fonte, se ela for removida, todo o procedimento terá de ser feito novamente.`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 9) ou pinça no painel (Página 11).`
},
{lines: [
`&nbsp;`,
`Identificando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painel...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;KM&nbsp;do&nbsp;veículo.&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`KM:`,
`<br />`,
`<br />`,
],
help: `Digite a quilometragem desejada.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
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
help: ``
},
]
}, {title: `Realizando o casamento do KIT`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Golf`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.10`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptação do KIT`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;Cabo`,
`MCU/PINCA&nbsp;na&nbsp;ECU`,
`Segundo&nbsp;Manual.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 9) ou pinça no painel (Página 11) e tecle OK!`
},
{lines: [
`&nbsp;`,
`Identificando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painel...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Digite&nbsp;Chassi:`,
`<br />`,
`<br />`,
],
help: `Digite o chassi do veículo e tecle OK!`
},
{lines: [
`&nbsp;`,
`Escolha&nbsp;a&nbsp;senha&nbsp;&nbsp;para&nbsp;o&nbsp;`,
`Kit.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Digite a senha desejada.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;KM&nbsp;do&nbsp;veículo.&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`KM:`,
`<br />`,
`<br />`,
],
help: `Digite a quilometragem desejada.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Gravação&nbsp;Concluída.&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`Cabo&nbsp;MCU/PINCA.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Remova apenas o cabo MCU ou Pinça do OBDMap e tecle OK!
OBS.: Não remova a fonte, se ela for removida, todo o procedimento terá de ser feito novamente.`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Conecte o cabo MCU (Página 15) ou
pinça na ECU (Página 17) e tecle OK!`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;ECU!`,
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
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro grav. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;ECU!`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU ou pinça com a ECU,`,`Mau contato do cabo MCU ou pinça com o OBDMap,`,`ECU com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do cabo MCU na ECU,`,`Verificar se os parafusos que prendem o cabo MCU ou a pinça no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos no painel ou na ECU,`,`O cabo MCU, painel ou ECU está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no painel e na ECU,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Erro leit Painel <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leitura&nbsp;Painel`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU ou pinça com o painel,`,`Mau contato do cabo MCU ou pinça com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do cabo MCU no painel,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Erro grav Painel <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;Painel`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU ou pinça com o painel,`,`Mau contato do cabo MCU ou pinça com o OBDMap, `,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do cabo MCU no painel,`,`Verificar se os parafusos que prendem o cabo MCU ou a pinça no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Cod.Painel:**** Cod.Acesso:`,
screens: [
`&nbsp;`,
`Código&nbsp;Painel:****`,
`Código&nbsp;Acesso:0000`,
`<br />`,
],
causes: [
],
solutions: [
`Contate o suporte técnico.`,]
},
{ label: `ATENCAO! Contate Suporte Tec. para obter o Cod. de Acesso`,
screens: [
`ATENCAO!`,
`Contate&nbsp;o&nbsp;Suporte&nbsp;`,
`Técnico&nbsp;para&nbsp;obter`,
`o&nbsp;Código&nbsp;de&nbsp;Acesso`,
],
causes: [
],
solutions: [
`Contate o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
