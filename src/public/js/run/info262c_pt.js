//Capa
nomeCarga = `Manual Carga -  OBD0262<br />Leitura de senha Kia ECU Me17.9.11 Imob1 Tipo3 via OBD (Soul 13-13)`;
revCarga = `Rev. 1`;
dataManual = `Julho 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apaga as falhas passadas da ECU`,
`Leitura do número de falhas presentes da ECU`,
`Testa a compatibilidade do sistema`,
`Realiza a leitura de senha via OBD para os modelos da aplicação`,
`Brinde especial: Apaga chaves antigas`,
`Brinde especial: Adiciona novas chaves`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `KIA`,
model: `Soul 1.6`,
years: `2013 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Alguns veículos não possuem transponders e nesse caso essa carga`, `não é necessária.`, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 Philips Virgem.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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
{title: `Realizando o teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Kia`], help: `Tecle OK`, menu: 1000},
{lines: [`Soul`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},
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
}, {title: `Realizando a leitura de senha via OBD`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Kia`], help: `Tecle OK`, menu: 1000},
{lines: [`Soul`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
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
`Apagando&nbsp;falhas&nbsp;passadas...`,
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
help: `   Tecle OK!`
},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Número&nbsp;de&nbsp;Falhas:`,
`ECU:&nbsp;**&nbsp;`,
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
help: `   Mostra o número de chaves`
},
{lines: [
`&nbsp;`,
`LENDO...`,
`AGUARDE...`,
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
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Deseja&nbsp;programar&nbsp;chaves?`,
`&lt;X&gt;&nbsp;Nao&nbsp;&lt;OK&gt;&nbsp;Sim`,
`<br />`,
],
help: `   Caso deseje programar
   chaves pressione OK caso
   contrário pressione VOLTA`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair&nbsp;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada`,
`Aperte&nbsp;&lt;OK&gt;&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `   Tecle OK!`
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
`Número&nbsp;de&nbsp;chaves:&nbsp;*`,
`Deseja&nbsp;programar&nbsp;mais&nbsp;chaves?`,
`(X)&nbsp;NAO&nbsp;&nbsp;&nbsp;(OK)&nbsp;SIM`,
`<br />`,
],
help: `Caso teclar VOLTA, siga para o Passo 23`
},
{lines: [
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada&nbsp;`,
`rapidamente`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `ATENÇÃO!
Caso demore para ligar a chave, ocorrerá "Erro Time Out"`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Caso for programar mais chaves o OBDMap irá retornar para o Passo 21`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluido!`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Procedimento realizado com sucesso!`
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
`Repita o procedimento, inserindo a partir da segunda chave o mais rápido possível`,]
},
{ label: `Transponder ja Programado! `,
screens: [
`&nbsp;`,
`Transponder&nbsp;já&nbsp;Programado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já foi inserido no mesmo processo de programação`,],
solutions: [
`Organize os transponders e repita o procedimento`,]
},
{ label: `Sem sinal da antena! `,
screens: [
`Erro:&nbsp;Sem&nbsp;sinal&nbsp;da&nbsp;antena!`,
`1.&nbsp;Conferir&nbsp;os&nbsp;fusíveis`,
`2.&nbsp;Conferir&nbsp;parte&nbsp;elétrica&nbsp;do&nbsp;veículo`,
`3.&nbsp;Checar&nbsp;alimentação&nbsp;e&nbsp;comunicação&nbsp;com&nbsp;`,
`o&nbsp;módulo&nbsp;da&nbsp;antena`,
`4.&nbsp;Trocar&nbsp;módulo&nbsp;da&nbsp;antena`,
`5.&nbsp;Checar&nbsp;comunicação&nbsp;do&nbsp;pino&nbsp;da&nbsp;ECU`,
`Dica:&nbsp;`,
`Caso&nbsp;desejado&nbsp;e&nbsp;seja&nbsp;possível,&nbsp;utilize&nbsp;`,
`o&nbsp;Multigiga&nbsp;para&nbsp;auxiliar&nbsp;nesses&nbsp;`,
`casos.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Fusíveis queimados`,`Defeito na parte elétrica do carro`,`Circuito da antena aberto`,`Defeito no módulo da antena`,`Defeito no pino de comunicação da ECU`,],
solutions: [
`Conferir os fusíveis`,`Conferir parte elétrica do veículo`,`Checar alimentação e comunicação com o módulo da antena`,`Trocar módulo da antena`,`Checar comunicação do pino da ECU`,`Dica: Caso desejado e seja possível, utilize o Multigiga para auxiliar nesses casos.`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A programação de chaves falhou por um erro desconhecido`,`O comportamento do veículo não está normal`,],
solutions: [
`Scaneie os erros apresentados no veículo, principalmente nos módulos de ECU,`,`carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Corrija todas as falhas`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,`Dica: Se possível, isole os problemas utilizando o Multigiga na bancada com a ECU e a Antena`,`do veículo`,]
},
{ label: `Transponder Rejeitado ou nao encontrado! `,
screens: [
`Transponder&nbsp;Rejeitado&nbsp;ou&nbsp;não&nbsp;`,
`encontrado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder inserido não é válido`,`Não existe transponder dentro da chave`,`Transponder de má qualidade`,],
solutions: [
`Verifique o tranponder que está na chave`,`Use um transponder confiável e repita o procedimento`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
