//Capa
nomeCarga = `Manual Carga -  OBD0266<br />Programação de chaves de presença FCA(Jeep Renegade 15-19, Fiat Toro 16-19, Argo e Cronos 18-19)`;
revCarga = `Rev. 1`;
dataManual = `Outubro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
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
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = false;
services = 
[
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Jeep`], help: `Tecle OK`, menu: 1000},
{lines: [`Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1 Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},
{lines: [
`Aperte&nbsp;o&nbsp;Botão&nbsp;START/STOP`,
`(para&nbsp;ligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
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
help: `Tecle OK!`
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
}, {title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Jeep`], help: `Tecle OK`, menu: 1000},
{lines: [`Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1 Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`Aperte&nbsp;o&nbsp;Botão&nbsp;START/STOP`,
`(para&nbsp;ligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Senha:&nbsp;*****`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
`<br />`,
],
help: `Selecione o procedimento que
deseja realizar, nessa parte iremos
programar chaves. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;chave&nbsp;original!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Segure&nbsp;o&nbsp;botão&nbsp;@&nbsp;da&nbsp;chave&nbsp;por&nbsp;3&nbsp;`,
`segundos`,
`<br />`,
],
help: `Segure o botão UNLOCK durante 1
segundo por 3 vezes.`
},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
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
help: `Chave foi programada Tecle <OK> para
voltar para o passo 12.`
},
]
}, {title: `Realizando apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Jeep`], help: `Tecle OK`, menu: 1000},
{lines: [`Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1 Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`Aperte&nbsp;o&nbsp;Botão&nbsp;START/STOP`,
`(para&nbsp;ligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Senha:&nbsp;*****`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
`<br />`,
],
help: `Selecione o procedimento que deseja
realizar, nessa parte iremos apagar chaves.
Tecle OK!`
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
`O&nbsp;sistema&nbsp;exige&nbsp;uma&nbsp;chave&nbsp;a&nbsp;ser&nbsp;`,
`programada&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;chave&nbsp;original!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Aperte&nbsp;o&nbsp;Botão&nbsp;START/STOP`,
`(para&nbsp;ligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Segure&nbsp;o&nbsp;botão&nbsp;@`,
`durante&nbsp;1&nbsp;segundo`,
`por&nbsp;tres&nbsp;vezes`,
`<br />`,
],
help: `Segure o botão UNLOCK durante 1
segundo por 3 vezes.`
},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
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
help: `Chave foi programada Tecle <OK> para
voltar para o passo 11.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,]
},
{ label: `Saldo Web Service Insuficiente!`,
screens: [
`Saldo&nbsp;Web`,
`Service`,
`Insuficiente!`,
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
`Erro&nbsp;interno&nbsp;código:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},
{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;`,
`Senha&nbsp;não&nbsp;encontrada!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Arquivo da ECU está corrompido,`,`Arquivo inválido da ECU,`,`A senha da ECU pode estar resetada.`,],
solutions: [
]
},
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
{ label: `Acesso Negado! ** `,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Tempo Excedido! `,
screens: [
`&nbsp;`,
`Tempo&nbsp;Excedido!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi excedido.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Chave invalida! <OK>`,
screens: [
`&nbsp;`,
`Chave&nbsp;inválida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel.`,`Verificar se o número de chaves programadas esta coerente com a mostrado no painel.`,]
},
{ label: `Erro na Programacao! `,
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
{ label: `Falha na Programacao!`,
screens: [
`&nbsp;`,
`Falha&nbsp;na`,
`Programação!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro ao apagar chaves! `,
screens: [
`&nbsp;`,
`Erro&nbsp;ao&nbsp;apagar&nbsp;chaves!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
