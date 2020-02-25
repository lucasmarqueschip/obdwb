//Capa
nomeCarga = `Manual Carga -  OBD0210<br />Programação de chaves de presença Hyundai Keyless1`;
revCarga = `Rev. 4`;
dataManual = `Outubro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do número de chaves de presença programadas no veículo.`,
`Programação de até 4 chaves de presença para os veículos contidos na aplicação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Hyundai`,
model: `Ix35`,
years: `2010 a 2017`
},
{
manufacturer: `Hyundai`,
model: `Veloster`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Sonata`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Elantra`,
years: `2012 a 2013`
},
{
manufacturer: `KIA`,
model: `Sportage 2.0`,
years: `2012 a `
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Chave de presença utilizada`, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/keyless kia hyundai.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
{title: `Realizando a leitura do número de chaves de presenças`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Hyundai`], help: `Tecle OK`, menu: 1000},
{lines: [`Veloster`], help: `Tecle OK`, menu: 1000},
{lines: [`Número de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Deixe&nbsp;a&nbsp;ignição&nbsp;em&nbsp;posição&nbsp;OFF`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Abra&nbsp;a&nbsp;porta&nbsp;do&nbsp;`,
`motorista!&nbsp;&lt;OK&gt;`,
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Numero de chaves atualmente programadas no veículo. Tecle OK!`
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
help: ``
},
]
}, {title: `Realizando a programação das chaves de presenças Tipo 1 (Veículos ix35 e Sonata)`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Hyundai`], help: `Tecle OK`, menu: 1000},
{lines: [`ix35`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`ATENCAO:&nbsp;Não`,
`insira&nbsp;a&nbsp;senha`,
`errada&nbsp;mais&nbsp;que`,
`3x.&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`O&nbsp;veículo&nbsp;poderá`,
`ficar&nbsp;bloqueado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Deixe&nbsp;a&nbsp;ignição&nbsp;em&nbsp;posição&nbsp;OFF`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair&nbsp;`,
`<br />`,
],
help: `As chaves de presença já programadas serão apagadas.Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Escolha o número de chaves a serem programadas. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Digite a senha do veículo (Obtida por meio da concessionária). Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave&nbsp;no&nbsp;Slot&nbsp;e`,
`tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Retire&nbsp;a&nbsp;chave`,
`do&nbsp;slot&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Se escolhido programar mais de uma chave siga ao passo 16, caso contrário ao passo 17.Tecle OK!`
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
`Insira&nbsp;próxima`,
`chave&nbsp;no&nbsp;slot`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Insira a próxima chave a ser programada no slot. Tecle OK!`
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Numero de chaves atualmente programadas no veículo. Tecle OK!`
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
help: ``
},
]
}, {title: `Realizando a programação das chaves de presenças Tipo 2 (Veículos Elantra e Veloster)`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Hyundai`], help: `Tecle OK`, menu: 1000},
{lines: [`Veloster`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Deixe&nbsp;a&nbsp;ignição&nbsp;em&nbsp;posição&nbsp;OFF`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair&nbsp;`,
`<br />`,
],
help: `As chaves de presença já programadas serão apagadas.Tecle OK!`
},
{lines: [
`&nbsp;`,
`Abra&nbsp;a&nbsp;porta&nbsp;do&nbsp;`,
`motorista!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Durante o procedimento, mantenha a porta do motorista aberta. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Escolha o número de chaves a serem programadas. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Digite a senha do veículo (Obtida por meio da concessionária). Tecle OK!`
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
`Pressione&nbsp;o`,
`botão&nbsp;START&nbsp;com`,
`a&nbsp;própria&nbsp;chave`,
`por&nbsp;2&nbsp;segundos`,
],
help: `Pressione o Botão START com a chave a ser programada durante 2 segundos. Tecle OK! Se escolhido programar mais de uma chave, siga ao passo 16, caso contrário ao passo 17.`
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
`com&nbsp;a&nbsp;próxima`,
`chave!!!`,
`<br />`,
],
help: `Utilizando a próxima chave a ser programada, volte ao passo 14.`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Numero de chaves atualmente programadas no veículo. Tecle OK!`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico`,``,]
},
{ label: `Erro na Programacao!`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas.`,``,``,],
solutions: [
`Conferir a senha digitada,`,`Aguardar 1hr com a ignição ligada e tentar novamente com a senha correta.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
