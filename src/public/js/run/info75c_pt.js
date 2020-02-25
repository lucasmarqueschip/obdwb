//Capa
nomeCarga = `Manual Carga -  OBD0075<br />Scenic - Leitura de Senha e Programação de Chaves`;
revCarga = `Rev. 2`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha.`,
`Programar até 8 chaves.`,
`<obs>`,
`Observação: É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam reprogramadas, elas não funcionarão no veículo. Ao programar a chave o transponder ficará dedicado ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Scenic 1.6`,
years: `1999 a 2008`
},
{
manufacturer: `Renault`,
model: `Scenic 2.0`,
years: `1999 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: `O veículo Scénic possui duas caixas. Cada caixa possui um transponder diferente. Caixa 1 utiliza o transponder 4D64 do ano 1999 ao ano 2001 e caixa 2 utiliza o transponder 4D60 do ano 2002 ao ano 2008. <br /><br />`, 
ballon: `Utilize o transponder 4D64. Para caixa 1.`, 
image: `/images/Transponders/4D64.jpg`},

{title: ``, 
description: `O veículo Scénic possui duas caixas. Cada caixa possui um transponder diferente. Caixa 1 utiliza o transponder 4D64 do ano 1999 ao ano 2001 e caixa 2 utiliza o transponder 4D60 do ano 2002 ao ano 2008. <br /><br />`, 
ballon: `Utilize o transponder 4D60. Para caixa 2.`, 
image: `/images/Transponders/4D60 Epox.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Instruções de como retirar o fusível B 5 amperes:`, 
description: `Abra a tampa da caixa de fusíveis e use a pinça para retirar o fusível B 5.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Localizando pinça.jpg`},

{title: ``, 
description: `Abra a tampa da caixa de fusíveis e use a pinça para retirar o fusível B 5.<br />`, 
ballon: `Fusível B 5 amperes identificado.`, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Fusivel.jpg`},

{title: ``, 
description: `Abra a tampa da caixa de fusíveis e use a pinça para retirar o fusível B 5.<br />`, 
ballon: `Conecte a pinça no fusível B 5. E puxe o fusível para fora da caixa.`, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Retirando Fusivel.jpg`},

{title: `Programar o telecomando:`, 
description: `O telecomando do veículo Scénic é dedicado ao transponder e a sua programação é feita por procedimento. <br /><br />Pressione o botão do telecomando até que o LED pare de piscar; solte o botão e o pressione por mais 2 vezes, assim confirmando a sua programação. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Led Telecomando.jpg`},

{title: ``, 
description: `O telecomando do veículo Scénic é dedicado ao transponder e a sua programação é feita por procedimento. <br /><br />Pressione o botão do telecomando até que o LED pare de piscar; solte o botão e o pressione por mais 2 vezes, assim confirmando a sua programação. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Telecomando1.jpg`},

{title: ``, 
description: `O telecomando do veículo Scénic é dedicado ao transponder e a sua programação é feita por procedimento. <br /><br />Pressione o botão do telecomando até que o LED pare de piscar; solte o botão e o pressione por mais 2 vezes, assim confirmando a sua programação. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0075 Scénic leitura e programação de chaves/Telecomando2.jpg`},
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
{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Scenic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
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
`Insira&nbsp;a&nbsp;Chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Faça&nbsp;o`,
`Procedimento!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`com&nbsp;a&nbsp;chave`,
`desligada!`,
`<br />`,
],
help: ``
},
{lines: [
`Retire&nbsp;o&nbsp;fusível`,
`B5&nbsp;amperes&nbsp;e`,
`tecle&nbsp;OK!`,
`<br />`,
],
help: `Para informações de como retirar o fusível B 5 consulte a página 6.

`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;o&nbsp;fusível`,
`dentro&nbsp;de&nbsp;30&nbsp;segundos`,
`<br />`,
],
help: `Caso ultrapasse o tempo de 30 segundos poderá aparecer à mensagem “Erro de comunicação”.`
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha, Tecle OK!`
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Scenic`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 1`], help: `Tecle OK`, menu: 1000},
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
`Insira&nbsp;a&nbsp;`,
`próxima&nbsp;chave!`,
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
help: `Utilize a senha que foi lida anteriormente. Tecle OK!
`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves`,
`para&nbsp;programar:1`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Faça&nbsp;o`,
`Procedimento!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`com&nbsp;a&nbsp;chave`,
`desligada!`,
`<br />`,
],
help: ``
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
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
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
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Inserir a senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
