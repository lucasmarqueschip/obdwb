//Capa
nomeCarga = `Manual Carga -  OBD0133<br />Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD`;
revCarga = `Rev. 6`;
dataManual = `Novembro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via diagnóstico nos veículos que possuem sistema de imobilizador NATS 6 e NATS 6 CAN`,
`Programa até 4 chaves nos veículos que possuem sistema de imobilizador NATS 6 e NATS 6 CAN.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Frontier 2.5`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `Versa 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `March 1.0`,
years: `2016 a 2017`
},
{
manufacturer: `Nissan`,
model: `March 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8`,
years: `2009 a 2013`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0`,
years: `2005 a 2013`
},
{
manufacturer: `Nissan`,
model: `Gran Livina`,
years: `2009 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações:`, `- Essa carga não faz Livina 1.6, pois esse veículo utiliza sistema Renault.<br />- Para realizar a programação de chaves do veículo March 1.0 2011 à 2015 com sistema Renault, utilize a carga OBD0224.`, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o Transponder PCF7936 - ID46 - Virgem!`, 
image: `/images/Transponders/Transponder PCF7936 Carvão.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos Tiida, Versa, Sentra, Livina e Grand Livina fica localizada na área A5.<br />A tomada de diagnóstico do veículo Frontier fica localizada na área D6.<br />A tomada de diagnóstico do veículo March fica localizada na área C5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-D6.jpg`},

{title: `Ligue o interruptor na caixa de fusivel`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0133 Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD/OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO.jpg`},
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
{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura dos dados`], help: `Tecle OK`, menu: 1000},
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
`Código&nbsp;BCM:&nbsp;*****`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Esse é o código Alfanumérico da BCM. Ele deve ser enviado para o suporte técnico para obter a senha. Com a senha
será possível realizar a programação de chaves. <a href= "#s0step0">Interruptor desligado</a>
`
},
]
}, {title: `Realizando a programação de chaves Nats 6`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada. É possível programar até 4 chaves, utilizamos como exemplo a
programação de 2 chaves.`
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Insira a senha que foi passada pelo suporte técnico.`
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
`Insira&nbsp;chave&nbsp;n`,
`e&nbsp;ligue&nbsp;ignição!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Insira&nbsp;e&nbsp;ligue`,
`a&nbsp;chave&nbsp;*`,
`por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: `Ligue a ignição e aguarde 5 segundos, verifique no painel se a luz do code irá piscar 5 vezes. Logo após, desligue a
ignição e aguarde mais 5 segundos e tecle OK.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;chave&nbsp;n`,
`e&nbsp;ligue&nbsp;ignição!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Ligue&nbsp;a&nbsp;chave`,
`por&nbsp;5&nbsp;segundos,&nbsp;desligue`,
`a&nbsp;chave&nbsp;por`,
`5&nbsp;segundos&nbsp;&lt;OK&gt;`,
],
help: `Ligue a ignição e aguarde 5 segundos, verifique no painel se a luz do code irá piscar 5 vezes. Logo após, desligue a
ignição e aguarde mais 5 segundos e tecle OK.`
},
{lines: [
`Ligue&nbsp;o&nbsp;motor`,
`por&nbsp;30&nbsp;segundos`,
`para&nbsp;finalizar&nbsp;a`,
`programação&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a programação de chaves Nats 6 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.`
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Insira a senha que foi passada pelo suporte técnico.`
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
`Insira&nbsp;e&nbsp;ligue`,
`a&nbsp;chave&nbsp;*`,
`por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: `Insira a primeira chave na ignição do veículo.`
},
{lines: [
`Número&nbsp;de&nbsp;chaves:&nbsp;*`,
`Deseja&nbsp;programar&nbsp;mais&nbsp;chaves?`,
`(X)&nbsp;NAO&nbsp;&nbsp;&nbsp;(OK)&nbsp;SIM`,
`<br />`,
],
help: `Para realizar a programação de mais de uma chave tecle <OK> repetindo o
procedimento anterior inserindo a próxima chave.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;`,
`ligue&nbsp;a&nbsp;chave!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;cabo&nbsp;CAN!`,
`<br />`,
`<br />`,
],
causes: [
`O adaptador A3 pode não estar conectado no OBDMap.`,],
solutions: [
`Verificar a conexão do adaptador A3 com o OBDMap.`,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`<a href= "#resource4">Interruptor desligado</a>`,`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,``,``,``,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1 ou A3, dependendo da operação que realizará, consulte os acessórios utilizados,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações,`,`Desligue e ligue o interruptor de energia que se encontra na caixa de fusível no lado esquerdo do volante.`,]
},
{ label: `Senha incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;incorreta!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A senha digitada é inválida. (Caso tenha digitado a senha incorreta a luz do code irá acender, porém não irá apagar as chaves válidas e não será possível programar nova chave)`,],
solutions: [
`Conferir a senha com o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
