//Capa
nomeCarga = `Manual Carga -  OBD0223<br />Programação de Chaves Hyundai / KIA Imob1 Tipo 3 (HR 13-15, Sorento 2012, Bongo 2013)`;
revCarga = `Rev. 6`;
dataManual = `Setembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Hyundai`,
model: `HR 2.5`,
years: `2013 a 2018`
},
{
manufacturer: `KIA`,
model: `Bongo 2.5`,
years: `2013 a 2018`
},
{
manufacturer: `KIA`,
model: `Sorento 2.4`,
years: `2012 a 2012`
},
{
manufacturer: `KIA`,
model: `Soul 1.6`,
years: `2013 a 2013`
},
{
manufacturer: `KIA`,
model: `Sportage 2.0`,
years: `2013 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 Philips Virgem.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na área A5.<br />`, 
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
{title: `Realizando o teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
]
}, {title: `Realizando a Programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Hyundai`], help: `Tecle OK`, menu: 1000},
{lines: [`HR`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Digite o número de chaves que deseja programar.`
},
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
`Retire&nbsp;a&nbsp;chave`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;e&nbsp;ligue&nbsp;a`,
`próxima&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave, tecle OK e volte ao Passo 11.`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves programadas no veículo. Tecle OK!`
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
{ label: `Veiculo incompativel! `,
screens: [
`Veiculo`,
`incompativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},
{ label: `Erro interno codigo: ** `,
screens: [
`&nbsp;`,
`Erro&nbsp;interno&nbsp;código:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},
{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`	Conferir se a bateria está carregada,`,`	Conferir parte elétrica do veículo, fusíveis, etc,`,`	Conferir se utiliza cabo universal e adaptador A3,`,`	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`	Repita o procedimento,`,`	Caso o erro persista, informe ao suporte as questões acima.`,]
},
{ label: `Senha Incorreta! `,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},
{ label: `Erro na Programacao! `,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
``,`A senha inserida está incorreta, `,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;`,
`Senha&nbsp;não&nbsp;encontrada!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`? O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`? A função pode estar desatualizada`,],
solutions: [
`? Caso o veículo esteja nos anos de aplicação, contate o suporte`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. `,],
solutions: [
`Conferir a senha digitada,`,`Aguardar 1 hora com a ignição ligada e tentar novamente com a senha correta.`,``,]
},
{ label: `Use cabo CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;cabo&nbsp;CAN!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo utilizado está incorreto.`,],
solutions: [
`Utilize adaptador A3 ou cabo CAN.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
