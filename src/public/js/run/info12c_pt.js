//Capa
nomeCarga = `Manual Carga -  OBD0012<br />Linha FOX (telecomando)`;
revCarga = `Rev. 1`;
dataManual = `Fevereiro 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Destravar o tempo de espera do modulo de alarme,`,
` Programar telecomando, sem a necessidade de se aguardar o tempo de bloqueio do modulo de alarme`,
`<obs>`,
`Observação:`,
`É possível realizar a programação de no máximo dois`,
`telecomandos no mesmo veículo, sendo que estes devem ser`,
`apresentados pelo mesmo procedimento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Fox 1.0`,
years: `2008 a 2010`
},
{
manufacturer: `VW`,
model: `Fox 1.6`,
years: `2008 a 2010`
},
{
manufacturer: `VW`,
model: `Crossfox 1.6`,
years: `2008 a 2010`
},
{
manufacturer: `VW`,
model: `Spacefox 1.6`,
years: `2008 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Telecomando dos carros da linha FOX.`, 
image: `/images/Chaves e Telecomandos/Telecomando FOX.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},

{title: `Procedimento para adicionar os telecomandos`, 
description: ``, 
ballon: `1º Retire o cabo<br />Universal da tomada<br />de diagnóstico.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 1.jpg`},

{title: ``, 
description: ``, 
ballon: `2º Ligue a ignição do<br />veículo com uma<br />chave mecânica, esta<br />chave não precisa ter<br />um telecomando.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 2.jpg`},

{title: ``, 
description: ``, 
ballon: `3º Feche todos os<br />vidros e portas. E saia<br />do veículo.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 3.jpg`},

{title: ``, 
description: ``, 
ballon: `4º Gire a chave uma<br />vez para destrancar a<br />porta (sentido antihorário).`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 4.jpg`},

{title: ``, 
description: ``, 
ballon: `5º Gire a chave uma<br />vez para trancar a<br />porta (sentido horário).`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 5.jpg`},

{title: ``, 
description: ``, 
ballon: `6º Gire a chave para<br />destrancar a porta, e<br />com a chave girada<br />mantenha o botão<br />LOCK pressionado por<br />20 segundos e em<br />seguida solte e<br />pressione novamente<br />por 1 segundo, assim<br />as travas das portas<br />serão acionadas.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 6.jpg`},

{title: ``, 
description: ``, 
ballon: `7º Ao programar o<br />telecomando as travas<br />das portas irão travar e<br />destravar assim<br />confirmando a<br />apresentação.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 7.jpg`},

{title: ``, 
description: `Logo em seguida já fazer o próximo telecomando, para que não acione o<br />tempo de bloqueio do modulo de alarme.<br />`, 
ballon: `Mantendo a chave<br />mecânica na ignição,<br />continue a programar o<br />próximo telecomando.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/mantenha chave mecanica.jpg`},

{title: ``, 
description: `Logo em seguida já fazer o próximo telecomando, para que não acione o<br />tempo de bloqueio do modulo de alarme.<br />`, 
ballon: `1º Gire a chave uma<br />vez para destrancar a<br />porta (sentido antihorário).<br />Insira a<br />mesma chave só vai<br />mudar o telecomando.<br />Veja mais fotos abaixo.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Gire a chave.jpg`},

{title: ``, 
description: `Logo em seguida já fazer o próximo telecomando, para que não acione o<br />tempo de bloqueio do modulo de alarme.<br />`, 
ballon: `2º Gire a chave uma<br />vez para trancar a<br />porta (sentido horário).`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Gire a chave2.jpg`},

{title: ``, 
description: `Logo em seguida já fazer o próximo telecomando, para que não acione o<br />tempo de bloqueio do modulo de alarme.<br />`, 
ballon: `3º Gire a chave para<br />destrancar a porta, e<br />com a chave girada<br />mantenha o botão LOCK<br />pressionado por 20<br />segundos e em seguida<br />solte e pressione<br />novamente por 1<br />segundo, assim as<br />travas das portas serão<br />acionadas.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/Procedimento para adicionar os telecomandos 10.jpg`},

{title: ``, 
description: `Logo em seguida já fazer o próximo telecomando, para que não acione o<br />tempo de bloqueio do modulo de alarme.<br />`, 
ballon: `4º Ao programar o<br />telecomando as travas<br />das portas irão travar e<br />destravar assim<br />confirmando a<br />apresentação.`, 
image: `/images/Funções Específicas/OBD0012 Linha Fox/trava e destrava2.jpg`},
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
{title: `Destravando o tempo de espera do modulo de alarme`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Destravar`], help: `Tecle OK`, menu: 1000},
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
`Aguarde...`,
`<br />`,
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
