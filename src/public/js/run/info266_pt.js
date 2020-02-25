//Capa
nomeCarga = `Manual Carga -  OBD0266<br />Programação de chaves de presença FCA(Jeep Renegade 15-19, Fiat Toro 16-19, Argo e Cronos 18-19)`;
revCarga = `Rev. 1`;
dataManual = `Outubro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Testa a compatibilidade do sistema`,
`Apaga chaves antigas`,
`Adiciona novas chaves`,
`A programação do telecomando é automática, desde que compatível com o carro`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Argo 1.0`,
years: `2018 a 2019`
},
{
manufacturer: `Fiat`,
model: `Argo 1.3`,
years: `2018 a 2019`
},
{
manufacturer: `Fiat`,
model: `Argo 1.8`,
years: `2018 a 2019`
},
{
manufacturer: `Fiat`,
model: `Cronos 1.3`,
years: `2018 a 2019`
},
{
manufacturer: `Fiat`,
model: `Toro 1.8`,
years: `2016 a 2019`
},
{
manufacturer: `Fiat`,
model: `Toro 2.4`,
years: `2016 a 2019`
},
{
manufacturer: `Jeep`,
model: `Renegade 1.8`,
years: `2015 a 2019`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Chave utilizada:`, 
description: ``, 
ballon: `Utilize a chave original para<br />realizar a programação de<br />chaves dos veículos Fiat`, 
image: `/images/Chaves e Telecomandos/KEYLESS FIAT.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize a chave original para<br />realizar a programação de<br />chaves do Jeep Renegade`, 
image: `/images/Chaves e Telecomandos/KEYLESS JEEP.JPG`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `Nos veículos o conector de diagnóstico fica localizado na área A4 e A5<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>FCA-1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1`, `>Compativel?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;para&nbsp;ligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Veículo compativel com o software!`
},
]
}, {title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>FCA-1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;para&nbsp;ligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Senha`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Senha:&nbsp;*****`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`Selecione:`,
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
],
help: `Selecione o procedimento que
deseja realizar, nessa parte iremos
programar chaves. Tecle OK!`
},
{lines: [
`&nbsp;Utilize&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;original!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Segure&nbsp;o&nbsp;botao&nbsp;*`,
`da&nbsp;chave&nbsp;por&nbsp;3s`,
`<br />`,
],
help: `Segure o botão UNLOCK durante 1
segundo por 3 vezes.`
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Chave foi programada Tecle <OK> para
voltar para o passo 12.`
},
]
}, {title: `Realizando apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>FCA-1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;para&nbsp;ligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Senha`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Senha:&nbsp;*****`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`Selecione:`,
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
],
help: `Selecione o procedimento que deseja
realizar, nessa parte iremos apagar chaves.
Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`O&nbsp;sistema&nbsp;exige`,
`uma&nbsp;chave&nbsp;a&nbsp;ser`,
`&nbsp;&nbsp;&nbsp;programada`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Utilize&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;original!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;para&nbsp;ligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Segure&nbsp;o&nbsp;botao&nbsp;*`,
`&nbsp;&nbsp;&nbsp;tres&nbsp;vezes`,
`<br />`,
],
help: `Segure o botão UNLOCK durante 1
segundo por 3 vezes.`
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Chave foi programada Tecle <OK> para
voltar para o passo 11.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;no`,
`&nbsp;&nbsp;Transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,]
},
{ label: `Saldo Web Service Insuficiente!`,
screens: [
`&nbsp;&nbsp;&nbsp;Saldo&nbsp;Web`,
`&nbsp;&nbsp;&nbsp;&nbsp;Service`,
`&nbsp;Insuficiente!`,
`<br />`,
],
causes: [
`O crédito total disponível se esgotou.`,],
solutions: [
`Entrar em contato com o comercial, ou com o suporte.`,]
},
{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},
{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;&nbsp;&nbsp;Senha&nbsp;nao`,
`&nbsp;&nbsp;Encontrada!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Arquivo da ECU está corrompido,`,`Arquivo inválido da ECU,`,`A senha da ECU pode estar resetada.`,],
solutions: [
]
},
{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},
{ label: `Senha Incorreta! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},
{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Tempo Excedido! `,
screens: [
`Tempo&nbsp;Excedido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi excedido.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Chave invalida! <OK>`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel.`,`Verificar se o número de chaves programadas esta coerente com a mostrado no painel.`,]
},
{ label: `Erro na Programacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Falha na Programacao!`,
screens: [
`&nbsp;`,
`Falha&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro ao apagar chaves! `,
screens: [
`&nbsp;Erro&nbsp;ao&nbsp;apagar`,
`&nbsp;&nbsp;&nbsp;&nbsp;chaves!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
