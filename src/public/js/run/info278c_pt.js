//Capa
nomeCarga = `Manual Carga -  OBD0278<br />Programação de chaves Fiat BC Delphi 500 2010-2012`;
revCarga = `Rev. 0`;
dataManual = `Maio 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apaga as falhas passadas da BC`,
`Leitura do número de falhas presentes da BC`,
`Testa a compatibilidade do sistema`,
`Realiza a leitura de senha via OBD `,
`Apaga chaves antigas`,
`Adiciona novas chaves`,
`Précodificação de transponder PCF7936`,
`Précodificação de transponder com telecomando integrado`,
`A programação do telecomando é automática, desde que compatível com o carro`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `500 1.4`,
years: `2010 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Para o sistema Imob4 utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

{title: `Telecomando utilizado:`, 
description: ``, 
ballon: `Chave com telecomando montada.`, 
image: `/images/Chaves e Telecomandos/Chave Bravo.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal Connect`, 
image: `/images/Connect/Acessórios/Adaptador A8.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A8 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},
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
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`500`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Delphi`], help: `Tecle OK`, menu: 1000},
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
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
]
}, {title: `Realizando a programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`500`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Delphi`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
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
`Numero&nbsp;de&nbsp;falhas&nbsp;na&nbsp;BSI:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de Falhas presentes no módulo BSI`
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
`Senha:&nbsp;*****`,
`Tecle&nbsp;&lt;OK&gt;`,
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
`Deseja&nbsp;pre-codificar&nbsp;transponder?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;Não&nbsp;&lt;OK&gt;&nbsp;Sim`,
`<br />`,
],
help: `Apertando <Volta>, siga para o Passo 16
Apertando <OK>, próximo passo`
},
{lines: [
`Dedicar&nbsp;Transponder&nbsp;PCF7936`,
`Dedicar&nbsp;Telecomando&nbsp;com&nbsp;CI&nbsp;8&nbsp;pinos`,
`Dedicar&nbsp;Telecomando&nbsp;com&nbsp;CI&nbsp;10/16&nbsp;pinos`,
`<br />`,
],
help: `Escolha a opção desejada`
},
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
`Lendo&nbsp;Transponder`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;transponder!`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Gravação&nbsp;&nbsp;Concluida!`,
`Número&nbsp;de&nbsp;Transponders&nbsp;pré-codificados:&nbsp;`,
`*`,
`Deseja&nbsp;pré-codificar&nbsp;mais?`,
`&lt;OK&gt;&nbsp;Para&nbsp;outro`,
`&lt;Volta&gt;&nbsp;Próxima&nbsp;etapa`,
],
help: `Transponder pré-codificado. 
Aperte <OK> para pré-codificar mais (Passo 10) ou aperte <VOLTA> e siga para o próximo passo`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;o&nbsp;telecomando`,
`Aguarde...`,
`<br />`,
],
help: `Passo exclusivo quando é selecionado um transponder com telecomando integrado!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão
   apagadas.`
},
{lines: [
`Use&nbsp;transponder&nbsp;pré-codificado&nbsp;ao&nbsp;`,
`carro!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Atenção!`,
`Todas&nbsp;as&nbsp;chaves&nbsp;devem&nbsp;ser&nbsp;apresentadas&nbsp;`,
`no&nbsp;procedimento.&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
],
help: ``
},
{lines: [
`Comece&nbsp;programar&nbsp;as&nbsp;chaves`,
`que&nbsp;já&nbsp;funcionam&nbsp;no&nbsp;veiculo.`,
`Nota:`,
`Caso&nbsp;seja&nbsp;perda&nbsp;de&nbsp;todas&nbsp;as&nbsp;chaves,`,
`não&nbsp;se&nbsp;preocupe,&nbsp;use&nbsp;a&nbsp;chave&nbsp;não`,
`programada&nbsp;que&nbsp;funcionará&nbsp;da&nbsp;mesma`,
`forma,&nbsp;desde&nbsp;que&nbsp;ela&nbsp;seja&nbsp;válida`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
],
help: `Caso seja perda de todas as chaves, não se preocupe, use a chave não programada que funcionará da mesma forma, desde que ela seja válida`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada`,
`Aperte&nbsp;&lt;OK&gt;&nbsp;para&nbsp;prosseguir`,
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
`Programando..`,
`Aguarde...`,
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
help: `Exibe o número de chaves
Apertando <OK> Volte para o Passo 20
Apertando <Volta> próximo Passo.`
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
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Atenção!&nbsp;`,
`As&nbsp;chaves&nbsp;não&nbsp;confirmadas&nbsp;serão&nbsp;`,
`bloqueadas&nbsp;para&nbsp;`,
`esse&nbsp;veículo!&nbsp;`,
`Você&nbsp;Confirma?`,
`&lt;X&gt;&nbsp;Nao&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;&nbsp;Sim`,
],
help: `Atenção! 
As chaves não confirmadas serão bloqueadas para esse veículo!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,``,]
},
{ label: `Erro na Programacao! `,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Nenhuma chave válida foi programada,`,`A programação não foi completada,`,`Ocorreu alguma falha não esperada,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,``,],
solutions: [
`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
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
`Aguardar 1 hora com a ignição ligada e tentar novamente`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder não está precodificado para o carro`,`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Aborte o procedimento e reinicie precodificando o transponder`,`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,``,``,]
},
{ label: `Acesso Negado! ** `,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`BC não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;`,
`Falha&nbsp;na&nbsp;rede&nbsp;CAN!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,``,``,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,``,``,``,]
},
{ label: `Transponder Bloqueado! `,
screens: [
`&nbsp;`,
`Transponder&nbsp;bloqueado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`não&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `Erro grav. TPD <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;TPD`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder não foi inserido corretamente no módulo,`,`O transponder não é um PCF7936 Virgem.`,],
solutions: [
`Verifique a correta posição do transponder no módulo,`,`Para verificar o tipo de transponder, utilize a carga básica do módulo de transponder na função IDENTIFICAR.`,]
},
{ label: `Transponder Incorreto!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;Incorreto!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Selecionado PCF7936 virgem, mas é um transponder com telecomando integrado`,],
solutions: [
`Selecione a opção referente ao telecomando integrado`,]
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
{ label: `Sem comunicacao com o veiculo ou veiculo incompativel!`,
screens: [
`Sem&nbsp;comunicacao&nbsp;com&nbsp;o&nbsp;veiculo&nbsp;`,
`ou&nbsp;veiculo&nbsp;incompativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,]
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
{ label: `Erro Desconhecido (**) `,
screens: [
`&nbsp;`,
`Erro&nbsp;Desconhecido&nbsp;(**)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Ocorreu uma falha não esperada`,],
solutions: [
`Repita o procedimento e se atente as mensagens do OBDMAP`,`Caso persista, contate o suporte técnico`,``,]
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
{ label: `Utilize cabo A8! `,
screens: [
`&nbsp;`,
`Utilize&nbsp;cabo&nbsp;A8!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O acessório conectado não é o adaptador A8`,`O acessório adaptador A8 ou cabo universal  ou obdmap podem estar com defeito`,],
solutions: [
`Conecte o adaptador correto`,`Acione o suporte técnico informando possível defeito de hardware`,``,]
},
{ label: `Conecte o Cabo Fiat com Modulo de Transponder! Aguardando...`,
screens: [
`Conecte&nbsp;o&nbsp;Cabo&nbsp;Fiat&nbsp;com&nbsp;Modulo&nbsp;de&nbsp;`,
`Transponder!`,
`Aguardando...`,
`<br />`,
],
causes: [
`O módulo de transponder não está conectado no OBDMAP`,`O cabo Fiat não está conectado no módulo de transponder (carro)`,`O cabo Fiat não está conectado na bateria (carro)`,`A fonte não está conectada no módulo de transponder (bancada)`,`A fonte não está conectada na energia elétrica (bancada)`,`O OBDMAP pode estar com defeito`,`O módulo de transponder pode estar com defeito`,`O cabo fiat pode estar com defeito`,`A fonte pode estar com defeito`,`A bateria do carro pode estar descarregada`,],
solutions: [
`Verifique todas as conexões`,`Verifique a bateria do carro`,`Caso suspeite de problemas no hardware entre em contato com o suporte técnico`,]
},
{ label: `Erro na gravacao do transponder! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao&nbsp;do&nbsp;transponder!&nbsp;`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder pode não estar na posição indicada`,],
solutions: [
`Insira o transponder no módulo de transponder e procure não movimentá-lo durante a gravação`,]
},
{ label: `Erro interno codigo E*`,
screens: [
`&nbsp;`,
`Erro&nbsp;interno&nbsp;codigo&nbsp;E*`,
`<br />`,
`<br />`,
],
causes: [
`Ocorreu uma falha interna no OBDMAP`,],
solutions: [
`Desligue e ligue o OBDMAP e repita o procedimento`,`Caso continue, contate o suporte técnico`,]
},
{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transponder&nbsp;pode&nbsp;`,
`estar&nbsp;em&nbsp;modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
`<br />`,
],
causes: [
`Transponder já codificado em outro veículo`,],
solutions: [
`Utilize outro um transponder virgem`,]
},
{ label: `Alerta! Nao dar partida com o OBDMAP Conectado `,
screens: [
`Alerta!&nbsp;`,
`Nao&nbsp;dar&nbsp;partida&nbsp;com&nbsp;o&nbsp;OBDMAP&nbsp;Conectado`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Informação para evitar falhas nos módulos CAN devido a pico de tensão`,],
solutions: [
]
},
{ label: `Procedimento Abortado! `,
screens: [
`&nbsp;`,
`Procedimento&nbsp;Abortado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Procedimento cancelado pelo usuário`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
