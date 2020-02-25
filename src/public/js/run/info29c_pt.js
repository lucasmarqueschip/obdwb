//Capa
nomeCarga = `Manual Carga -  OBD0029<br />FIAT CODE 2 FASE 3 (senha e chaves)`;
revCarga = `Rev. 5`;
dataManual = `Julho 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 8 transponders para os veículos que possuem painel Marelli ou painel VDO.`,
`<obs>`,
`Observação 1: É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já`,
`estavam programadas. Caso elas não sejam programadas elas não funcionarão no veículo.`,
``,
``,
`<obs>`,
`Observação 2: A geração de transponders no painel Marelli é feita no veículo, sem a necessidade`,
`de retirar o painel. Já a geração de transponder no painel VDO é feita em bancada, havendo a`,
`necessidade de retirar o painel do veículo; e após colocar o painel novamente no veículo, a`,
`programação de chaves deve ser efetuada.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Palio 1.0`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Palio 1.4`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Palio1.8`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Siena 1.4`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Siena 1.8`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Strada 1.4`,
years: `2008 a 2010`
},
{
manufacturer: `Fiat`,
model: `Strada 1.8`,
years: `2008 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder utilizado no sistema<br />Code 2 é o Megamos Crypto 48<br />virgem, tratado neste manual por<br />ID48.`, 
image: `/images/Transponders/Megamos Crypto 48.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo Fiat para alimentar o módulo de transponder.<br />Obs: A Bateria fica localizada atrás da capa plástica do degrau do lado do motorista.`, 
image: `/images/Acessórios/Cabo Fiat.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Identificando o modelo do painel sem desmontar`, 
description: `O modo de gerar transponders para o sistema CODE 2 FASE 3 é diferente do painel VDO para o painel Marelli. Primeiro é preciso saber se o veículo realmente utiliza o sistema de imobilizador no painel. Certifique-se que o veículo não utilize caixa de imobilizador ou body computer, caso utilize o veículo não usa sistema de imobilizador no painel. <br /><br /><br /><br /><br /><br /><br /><br /><br />`, 
ballon: `Geralmente os painéis com o sistema CODE 2 FASE 3 são como este.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Display Painel.jpg`},

{title: ``, 
description: `O modo de gerar transponders para o sistema CODE 2 FASE 3 é diferente do painel VDO para o painel Marelli. Primeiro é preciso saber se o veículo realmente utiliza o sistema de imobilizador no painel. Certifique-se que o veículo não utilize caixa de imobilizador ou body computer, caso utilize o veículo não usa sistema de imobilizador no painel. <br /><br /><br /><br /><br /><br /><br /><br /><br />`, 
ballon: `Detalhe do ponteiro de um painel Marelli. Pode-se ver a base branca no centro.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Ponteiro Marelli.jpg`},

{title: ``, 
description: `O modo de gerar transponders para o sistema CODE 2 FASE 3 é diferente do painel VDO para o painel Marelli. Primeiro é preciso saber se o veículo realmente utiliza o sistema de imobilizador no painel. Certifique-se que o veículo não utilize caixa de imobilizador ou body computer, caso utilize o veículo não usa sistema de imobilizador no painel. <br /><br /><br /><br /><br /><br /><br /><br /><br />`, 
ballon: `Detalhe do ponteiro de um painel VDO. Não se vê a base branca no centro.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Ponteiro VDO.jpg`},

{title: `Identificando o modelo do painel desmontando a peça`, 
description: `Abaixo se pode ver a identificação do painel na tampa traseira. A marca do fabricante é visível, além disso, o modelo Marelli utiliza tampa branca e o VDO tampa preta. <br /><br />`, 
ballon: `Vista traseira do painel VDO.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/ID Painel VDO.jpg`},

{title: ``, 
description: `Abaixo se pode ver a identificação do painel na tampa traseira. A marca do fabricante é visível, além disso, o modelo Marelli utiliza tampa branca e o VDO tampa preta. <br /><br />`, 
ballon: `Vista traseira do painel Marelli.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/ID Painel Marelli.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: `Conectando os acessórios`, 
description: ``, 
ballon: `Conecte o módulo de transponder no OBDMap.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Conecte Módulo de transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Conecte Módulo de transponder 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Conecte o Cabo Fiat.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Todos os acessórios conectados.jpg`},

{title: `Desmontando o painel VDO`, 
description: ``, 
ballon: `Com uma chave de fenda, levante a trava da tampa do painel.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Desmontando Painel 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Painel desmontado.`, 
image: `/images/Funções Específicas/OBD0029 CODE 2 FASE 3/Desmontando Painel 2.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU no painel:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU: <br />1 => Fio Verde <br />2 => Fio Preto <br />3 => Fio Vermelho <br />4 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Pontos de soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar a posição dos fios. Primeiro solde os fios no painel, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o painel e assim evitando danos ao painel e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Cabo MCU soldado no painel.jpg`},
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
{title: `Realizando o procedimento de identificação:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Outra maneira de identificar o modelo do painel é conectando o OBDMap no veículo através do cabo universal + adaptador A3 e módulo de transponder para fazer o procedimento de leitura, como se fosse o painel Marelli. Se ler o código eletrônico é painel Marelli, se não ler é provável que seja painel VDO.`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`CODIGO&nbsp;ELETRONICO:&nbsp;`,
`*****`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Painel identificado corretamente como Marelli.`
},
]
}, {title: `Realizando Geração de Transponder Painel Marelli`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Marelli`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;cabo&nbsp;CAN!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`o&nbsp;módulo&nbsp;de`,
`transponder&nbsp;e`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`o&nbsp;cabo&nbsp;FIAT&nbsp;ou&nbsp;a`,
`fonte&nbsp;do&nbsp;OBDMAP,`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`segundo&nbsp;o`,
`manual.`,
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
`Código&nbsp;Eletrônico:`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Dedicar&nbsp;T48?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM&nbsp;&nbsp;`,
`<br />`,
],
help: `Selecione (OK) SIM para gerar transponder e siga o próximo passo ou (X) NAO para programar chaves e vá ao Passo 18.`
},
{lines: [
`POSICIONE&nbsp;`,
`TRANSPONDER`,
`E&nbsp;TECLE&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T48`,
`AGUARDE.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Gerar&nbsp;outro&nbsp;ID48`,
`(X)Não&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Sim: retorne ao passo 14.
Não: Siga o próximo passo.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;chaves&nbsp;?`,
`(X)NÃO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (X) NAO para cancelar o procedimento, ou (OK) SIM para iniciar a programação de chaves.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`CHAVES&nbsp;`,
`PROGRAMADAS:&nbsp;*/8`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Número de chaves programadas nesse procedimento.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (X) NAO para finalizar procedimento, ou (OK) SIM para programar mais chaves.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;`,
`próxima&nbsp;chave!`,
`<br />`,
],
help: `Tecle OK e retorne ao Passo 20.`
},
]
}, {title: `Realizando a Geração de Transponder Painel VDO`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`PIN:&nbsp;*****`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Anote o PIN.`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Programadas:&nbsp;`,
`*/*&nbsp;OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves já programadas. Tecle OK!`
},
{lines: [
`Chaves&nbsp;geradas`,
`deverão&nbsp;ser`,
`apresentadas`,
`por&nbsp;dispositivo`,
`de&nbsp;diagnóstico,`,
`OK&nbsp;para&nbsp;prosseguir!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Posicione o transponder T48 no Módulo de Transponder, tecle OK!`
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T48`,
`AGUARDE.`,
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
help: `Chave programada (OK) para programar outra ou (VOLTA) para finalizar o procedimento.`
},
]
}, {title: `Realizando a Programação de Chaves via Diagnóstico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
`Digite&nbsp;código&nbsp;eletrônico`,
`<br />`,
`<br />`,
],
help: `Digite o código eletrônico (PIN) que foi lido no momento da preparação do transponder.`
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
`Número&nbsp;de&nbsp;Chaves:&nbsp;*/*`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;SIM(OK)`,
`<br />`,
],
help: `Aperte (OK) para programar mais e
(VOLTA) para finalizar o procedimento.`
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
{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;bloqueado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder T48 virgem.`,``,]
},
{ label: `Transponder ja Programado!`,
screens: [
`&nbsp;`,
`Transponder`,
`Programado!`,
`<br />`,
],
causes: [
`O transponder já está programado.`,``,],
solutions: [
`Utilize um transponder T48 virgem.`,``,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`não&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o T48.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder T48. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},
{ label: `Erro grav. T48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;T48`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Transponder mal posicionado na antena do Módulo de Transponder, `,`Transponder defeituoso,`,`Transponder incorreto.`,],
solutions: [
`Conferir posição do transponder;`,`Checar o transponder utilizado. Para isso poderá ser utilizada a função "Identificar Transponder", que faz parte do pacote de funções básicas do módulo de transponder.`,]
},
{ label: `FALHA AO REMOVER LOCK DO T48!`,
screens: [
`&nbsp;`,
`FALHA&nbsp;AO&nbsp;REMOVER`,
`LOCK&nbsp;DO&nbsp;T48!`,
`<br />`,
],
causes: [
`O Transponder já havia sido dedicado e protegido contra gravação. Normalmente isto ocorre com transponders originais do veículo ou fornecidos pela montadora. O OBDMap consegue na maioria dos casos remover esta proteção, mesmo quando der esta mensagem de falha, pode-se tentar novamente.`,],
solutions: [
`Repita o procedimento,`,`O transponder pode ser substituído,`,`Se o transponder era válido no veículo não é necessário passá-lo pelo procedimento de geração, caso tenha selecionado NÃO apagar as chaves anteriores, a chave com LOCK funcionará normalmente mesmo apresentando este erro,`,`Se foi selecionado apagar as chaves anteriores é necessário apresentar a chave com LOCK por diagnóstico junto com as demais chaves depois de geradas.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato dos fios do cabo MCU com o painel,`,`Painel com problema,`,`Os fios do cabo MCU foram soldados em posições incorretas.`,],
solutions: [
`Conferir a correta soldagem dos fios do cabo MCU,`,`Conferir bom estado do painel.`,]
},
{ label: `Codigo Incorreto!`,
screens: [
`Código`,
`Incorreto!`,
`&lt;OK&gt;`,
`<br />`,
],
causes: [
`O código eletrônico digitado não é o correto.`,],
solutions: [
`Digite o código lido no procedimento de geração de transponder.`,``,]
},
{ label: `Erro na leitura do Painel!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Painel!`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o painel,`,`Mau contato no cabo MCU com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios no painel,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `ERRO COD. N2`,
screens: [
`&nbsp;`,
`ERRO&nbsp;CODIGO&nbsp;N2`,
`<br />`,
`<br />`,
],
causes: [
`Mal contato do cabo universal com a tomada de diagnóstico,`,`Mal contato do módulo de transponder com o OBDMap,`,`Mal contato do adaptador A3 com o OBDMap,`,`Painel fora da aplicação.`,``,],
solutions: [
`Conferir conexão do cabo universal com a tomada de diagnóstico,`,`Conferir conexão do módulo de transponder com o OBDMap,`,`Conferir conexão do adaptador A3 com o OBDMap,`,`Verificar aplicação.`,``,``,]
},
{ label: `ERRO COD. N3`,
screens: [
`&nbsp;`,
`ERRO&nbsp;CODIGO&nbsp;N3`,
`<br />`,
`<br />`,
],
causes: [
`Mal contato do cabo universal com a tomada de diagnóstico,`,`Mal contato do módulo de transponder com o OBDMap,`,`Mal contato do adaptador A3 com o OBDMap,`,`Painel fora da aplicação.`,``,``,``,],
solutions: [
`Conferir conexão do cabo universal com a tomada de diagnóstico,`,`Conferir conexão do módulo de transponder com o OBDMap,`,`Conferir conexão do adaptador A3 com o OBDMap,`,`Verificar aplicação.`,``,``,]
},
{ label: `Transponder ja Programado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;já&nbsp;Programado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já está programado.`,],
solutions: [
`Utilize um transponder T48 virgem.`,``,``,``,``,``,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`Transponder&nbsp;nao`,
`Encontrado!`,
`&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o T48.`,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder T48. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`É necessário que o transponder tenha passado pelo procedimento de geração, ou que ele já esteja válido no veículo antes da programação. `,],
solutions: [
]
},
{ label: `COD. Eletronico Incorreto!`,
screens: [
`&nbsp;`,
`Código&nbsp;Eletrônico`,
`Incorreto!`,
`<br />`,
],
causes: [
`O código eletrônico digitado não é o correto.`,],
solutions: [
`Digite o código lido no procedimento de geração de transponder.`,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`Comunicação!`,
`<br />`,
],
causes: [
` Defeito no carro, parte elétrica,`,` Atualização antiga do OBDMap,`,` Má conexão dos acessórios.`,],
solutions: [
` Verificar parte elétrica do carro, fusíveis, etc,`,` Verificar se utiliza cabo universal e adaptador A3,`,` Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,` Verificar atualização mais recente com suporte técnico, talvez esta carga tenha tido`,`alterações.`,]
},
{ label: `BCM Cheia!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;BCM&nbsp;Cheia!`,
`<br />`,
`<br />`,
],
causes: [
` O BCM ja está com 8 chaves programadas.`,],
solutions: [
`Apagar todas as chaves antigas, e programar novamente todas as que forem ser`,`utilizadas.`,]
},
{ label: `Body Computer nao suportado!`,
screens: [
`&nbsp;`,
`Body&nbsp;Computer`,
`não&nbsp;suportado!`,
`<br />`,
],
causes: [
` BC não corresponde a aplicação.`,],
solutions: [
` Verifique aplicação.`,]
},
{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;ID48`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
` Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,` Transponder  com problema;`,` O transponder utilizado não é um ID48 virgem;`,` Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
` Conferir a correta posição do transponder no módulo de transponder;`,` Utilizar um transponder ID48 virgem;`,` Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
},
{ label: `ERRO! Aguarde 5 minutos e tente novamente <OK>`,
screens: [
`ERRO!`,
`Aguarde&nbsp;5`,
`minutos&nbsp;e&nbsp;tente`,
`novamente`,
`&lt;OK&gt;`,
],
causes: [
` O BCM está com defeito.`,],
solutions: [
` Desligue e ligue da bateria, tente novamente depois de 5 minutos.`,]
},
{ label: `BC DESCONHECIDO! COD: ** ** ** ** ** ** ** **`,
screens: [
`BC&nbsp;DESCONHECIDO!`,
`COD:&nbsp;**&nbsp;**&nbsp;**&nbsp;**`,
`**&nbsp;**&nbsp;**&nbsp;**`,
`<br />`,
],
causes: [
` Este BC não inclui em nossa tabela de aplicação.`,],
solutions: [
` Verificar aplicação,`,` Consulte o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
