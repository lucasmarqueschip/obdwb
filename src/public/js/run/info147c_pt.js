//Capa
nomeCarga = `Manual Carga -  OBD0147<br />Apagar e programar Nissan Nats 6 Proximity (With Key) (chaves)`;
revCarga = `Rev. 2`;
dataManual = `Janeiro 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 novos telecomandos no sistema Nats6, habilitando a função de aproximação (proximity), como também o apagamento de todos os telecomandos no sistema, deixando desabilitada a função de aproximação dos mesmos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Livina 1.6`,
years: `2012 a 2013`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8`,
years: `2012 a 2013`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8`,
years: `2012 a 2013`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0`,
years: `2012 a 2013`
},
{
manufacturer: `Nissan`,
model: `Frontier 2.5`,
years: `2012 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção:`, `Para que seja possível realizar a função de programação do telecomando, o transponder deve estar codificado no BC. <font color="red">(Carga não inclusa)</font><br/><br/><font color="red">Observações:</font><br/> 1. Para realizar a programação do telecomando, é necessário que ele esteja dentro do veículo;<br/>2. Se houver um segundo telecomando, o mesmo deve estar longe do veículo durante a programação, não pode haver 2 telecomandos no próximo ao veículo durante o procedimento, somente um de cada vez;<br/>3. Em alguns casos, o mesmo telecomando poderá ser programado em dois ou mais veículos; <br/>4. Para realizar a programação é necessário inserir a chave válida na ignição do veículo.`, undefined);




resources = [
{title: `Chave utilizada:`, 
description: ``, 
ballon: `Telecomando do Nissan.`, 
image: `/images/Funções Específicas/OBD0147 Programar e apagar Nissa Nats 6 Proximity (With Key)/Telecomando do Nissan.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do Livina e do Tiida ficam localizadas na área A5 da imagem.<br />A tomada de diagnóstico do Sentra fica localizada na área B5 da imagem.<br />A tomada de diagnóstico do Frontier fica localizada na área D6 da imagem.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-B5-D6.jpg`},
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
{title: `Realizando a programação do telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Sentra`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Programar?`,
`<br />`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o cabo universal + adaptador A3.`
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
`Pressione&nbsp;o`,
`Telecomando!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (OK) SIM para programar mais
telecomandos ou selecione (X) NAO para finalizar o procedimento.`
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
}, {title: `Apagando o telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Sentra`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Apagar?`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
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
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na Programacao!`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca;`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento.`,`O telecomando não está no interior do veículo;`,`A chave não está na ignição;`,`A programação não foi completada;`,`O transponder não está programado no carro;`,`Defeito no carro, parte elétrica, sensores de aproximação.`,`Sistema travado por um procedimento anterior.`,],
solutions: [
`Verifique a bateria do telecomando;`,`Verifique as antenas do sistema de aproximação no teto do veículo;`,`Coloque o telecomando no interior do veículo;`,`Coloque a chave na ignição;`,`Verificar se o transponder está programado ao veículo;`,`Refazer o procedimento novamente;`,`Verificar parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,`Desligue e ligue o interruptor de energia que se encontra na caixa de fusível no lado esquerdo do volante.`,]
},
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3 ou A1 dependendo da opração que vai realizar,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
