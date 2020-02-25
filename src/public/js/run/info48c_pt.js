//Capa
nomeCarga = `Manual Carga -  OBD0048<br />Renault calculador 1 93C46 (senha e chaves)`;
revCarga = `Rev. 6`;
dataManual = `Janeiro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos da memória 93C46 do calculador 1,`,
`Reset do calculador 1;`,
`Programação de chaves. Esta função programa apenas uma chave no veículo. Para adicionar mais chaves é necessário fazer clones da chave válida utilizando a carga básica do módulo de transponder do OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio 1.0`,
years: `1999 a 2002`
},
{
manufacturer: `Renault`,
model: `Clio 1.6`,
years: `1999 a 2002`
},
{
manufacturer: `Renault`,
model: `Twingo 1.0`,
years: `1999 a 2002`
},
{
manufacturer: `Renault`,
model: `Kangoo 1.6`,
years: `1999 a 2007`
},
{
manufacturer: `Renault`,
model: `Master 2.5`,
years: `1999 a 2007`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações: O calculador 1 NOVO (com memória 93C56) vem a substituir o calculador 1 antigo (com memória 93C46) nos casos de necessidade de troca, pois o calculador antigo apresenta alguns problemas. Neste caso pode ser encontrado o calculador 1 93C56 na faixa de ano descrita acima. Originalmente o transponder vem incluso no interior do telecomando e dedicado ao telecomando, ou seja, assim que são programadas as chaves o telecomando automaticamente já estará habilitado aquele veículo.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder T33 dedicado para Peugeot.`, 
image: `/images/Transponders/T33.jpg`},

{title: ``, 
description: ``, 
ballon: `Telecomando do calculador 93C46. Dedicado ao transponder.`, 
image: `/images/Chaves e Telecomandos/Telecomando do calculador 93C46.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Identificando e desmontando o calculador Clio 1 93C46:`, 
description: ``, 
ballon: `Calculador do Clio 1 93C46.`, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Calculador.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de uma chave de fenda remova a placa da caixa do calculador.`, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Removendo a placa.jpg`},

{title: ``, 
description: ``, 
ballon: `Placa removida da caixa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Placa Removida.jpg`},

{title: `Identificando a memória 93C46`, 
description: `O circuito do calculador provoca interferência na operação de reset e leitura de senha, deve-se realizar um jumper na placa para efetuar a operação. <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Identificando Memoria.jpg`},

{title: ``, 
description: `O circuito do calculador provoca interferência na operação de reset e leitura de senha, deve-se realizar um jumper na placa para efetuar a operação. <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Jumper.jpg`},

{title: `Conectando a pinça soic na memória 93C46`, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Conectando a Pinca.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada.`, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Pinca Conectada.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0048 Renault calculador 1 93C46/Todos os equipamentos conectados.jpg`},
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
{title: `Realizando a Leitura do calculador Clio 1 93C46`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;93C46`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando o reset do calculador Clio 1 93C46`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset do imobilizador`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;93C46`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
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
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave`,
`Programada!`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto!`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A BSI ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`·	Mau contato da pinça com a memória,`,`·	Mau contato da pinça ou cabo MCU com o OBDMap,`,`·	Módulo com problema,`,`·	A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`·	Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`·	Conferir a correta soldagem do cabo MCU,`,`·	Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`·	Conferir bom estado do módulo,`,`·	Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
