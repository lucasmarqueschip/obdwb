//Capa
nomeCarga = `Manual Carga -  OBD0230<br />Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-19)`;
revCarga = `Rev. 4`;
dataManual = `Julho 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida.`,
`        Este procedimento é somente via diagnose. É possível adicionar chaves, onde as chaves`,
`anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso`,
`queira manter alguma das chaves antigas, basta reprogramá-las.`,
`Programação de até 8 chaves para o veículo sem chave válida.`,
`É necessário desmontar o painel e coloca-lo em modo de serviço em bancada utilizando o`,
`cabo MCU (Página 17) antes de programar as chaves. É possível adicionar chaves, onde as chaves`,
`anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso`,
`queira manter alguma das chaves antigas, basta reprogramá-las.`,
`<obs>`,
`Observação: `,
`Quando colocar o painel em Modo de Serviço, mas ainda não estiver finalizada a`,
`programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de`,
`programação de chaves. Neste caso é necessário realizar o procedimento de programação por`,
`diagnose até o final, ou utilizar a função de Gravar Backup no painel com acompanhamento do`,
`suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0`,
years: `2017 a 2019`
},
{
manufacturer: `VW`,
model: `Gol 1.6`,
years: `2017 a 2019`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2017 a 2019`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2017 a 2019`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2017 a 2019`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Além da aplicação, o painel do veículo deve ser do fabricante VDO / Continental e ter`, `seu hardware igual aos mostrados em Identificando e desmontando o painel (Página 17) e utilizar`, `Microcontrolador NEC D70F3426 e memória 24C64.`);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder Megamos ID48 virgem! <br />Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!`, 
image: `/images/Transponders/ID 48 NOVO.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na posição A5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/PAINEL GOL.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/PAINEL VISTA LATERAL.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/PARAFUSOS.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/PARTE TRASEIRA.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/PROCESSADOR.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/ONDE SOLDAR.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD230 Programação de Chaves VW Painel VDO Imob6 T6 (Gol 17-17)/FIOS SOLDADOS.jpg`},
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
{lines: [
`&nbsp;`,
`Painel:`,
`Com&nbsp;Chave`,
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
`Número&nbsp;de`,
`Arquivos:&nbsp;*/8`,
`<br />`,
],
help: `O OBDMap salva até 8 arquivos de backup
por segurança, e indica quantos arquivos
já foram salvos.`
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
`Atenção!&nbsp;`,
`A&nbsp;bateria&nbsp;deve&nbsp;estar&nbsp;carregada.`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Cuidado, se a bateria estiver fraca pode
causar problemas no painel. Tecle OK!`
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
`Painel:&nbsp;GOL`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;por&nbsp;até`,
`5&nbsp;minutos...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`Aguarde...`,
`<br />`,
],
help: `Neste momento está sendo feito o backup do arquivo do painel.`
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
`Deseja&nbsp;manter&nbsp;as`,
`chaves&nbsp;já`,
`programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Sim: Siga ao passo 22.
Não: Siga ao passo 20.`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão
apagadas, as que deseja manter devem
ser reprogramadas.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Siga ao passo 32.`
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
`Use&nbsp;Transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Utilize um transponder ID48 Novo.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;próxima&nbsp;chave`,
`Tecle&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Exibe o número de chaves programadas
no veículo no momento.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Não&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e
volte ao passo 23 ou tecle (Volta) para
finalizar o procedimento e siga ao passo
34.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
`&nbsp;`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
{lines: [
`&nbsp;`,
`Painel:`,
`Sem&nbsp;Chave`,
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
`Número&nbsp;de`,
`Arquivos:&nbsp;*/8`,
`<br />`,
],
help: `O OBDMap salva até 8 arquivos de backup
por segurança, e indica quantos arquivos
já foram salvos.`
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
`Atenção!&nbsp;`,
`A&nbsp;bateria&nbsp;deve&nbsp;estar&nbsp;carregada.`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Cuidado, se a bateria estiver fraca pode
causar problemas no painel. Tecle OK!`
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
`Painel:&nbsp;GOL`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;por&nbsp;até`,
`5&nbsp;minutos...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`Aguarde...`,
`<br />`,
],
help: `Neste momento o painel está sendo liberado.`
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
`Deseja&nbsp;manter&nbsp;as`,
`chaves&nbsp;já`,
`programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Sim: Siga ao passo 22.
Não: Siga ao passo 20.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Caso seja a primeira chave siga para o
passo 31.`
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
`Use&nbsp;Transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Utilize um transponder ID48 Novo.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;próxima&nbsp;chave`,
`Tecle&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Exibe o número de chaves programadas
no veículo no momento.
Programar mais?`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Não&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (Volta) para finalizar o procedimento.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
`&nbsp;`,
`Reconecte&nbsp;o`,
`módulo&nbsp;ABS!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
{title: `Realizando procedimento de Modo de Serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`17-19`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
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
`Arquivos:&nbsp;*/8`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
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
`Identificando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painel...`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Mod:&nbsp;******&nbsp;****`,
`Data:&nbsp;**/**/**`,
`HW:**&nbsp;SW:****`,
`*******&nbsp;`,
`********`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Verificando`,
`Painel...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`Aguarde...`,
`<br />`,
],
help: `Neste momento está sendo feito o backup do arquivo do painel.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`Aguarde...`,
`<br />`,
],
help: `Neste momento o painel está sendo liberado.`
},
{lines: [
`&nbsp;`,
`Operação`,
`Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
{lines: [
`Continue&nbsp;o`,
`procedimento&nbsp;via`,
`diagnose.`,
`<br />`,
],
help: `O painel está pronto para ser montado no
veículo. Continue o procedimento
realizando a programação de chaves sem
chave válida (Página 12).`
},
{lines: [
`ATENCÃO!`,
`Antes&nbsp;de`,
`reconectar&nbsp;o`,
`painel&nbsp;no`,
`veículo`,
`certifique-se`,
`que&nbsp;a&nbsp;bateria&nbsp;e`,
`o&nbsp;módulo&nbsp;ABS`,
`estejam`,
`desconectados`,
],
help: `Para evitar danos ao painel e ao modulo de ABS é necessário que a bateria e o modulo de ABS (se existir) estejam desconectados.
Monte novamente o painel no veiculo, conecte a bateria e prossiga com a programação de chaves via diagnose.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Transponder Rejeitado! `,
screens: [
`&nbsp;`,
`Transponder&nbsp;Rejeitado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
`Utilize um transponder ID48 virgem.`,]
},
{ label: `Atencao! Painel e a ECU nao casados!`,
screens: [
`Atenção!`,
`Painel&nbsp;e&nbsp;a&nbsp;ECU`,
`não&nbsp;casados!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`Foi detectado que o painel e a ECU pertencem a veículos diferentes.`,],
solutions: [
`O procedimento de programação de chaves pode ser completado, porém, se o kit não for`,`casado, o veículo não dará partida, e indicará IMOBILIZADOR ATIVADO, IMOBILIZER ou SAFE no`,`display do Painel.`,]
},
{ label: `Memoria cheia, realize o backup do OBDMap.`,
screens: [
`Memória&nbsp;cheia,&nbsp;realize&nbsp;o&nbsp;backup&nbsp;do&nbsp;`,
`OBDMap`,
`e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O OBMap armazena em sua memória o Backup dos arquivos dos 8 últimos procedimentos realizados, por motivo de segurança.`,],
solutions: [
`Com auxilio do suporte técnico, descarregar o arquivo de Backup do OBDMap no computador.`,]
},
{ label: `Procedimento Incompleto!`,
screens: [
`Procedimento&nbsp;`,
`Incompleto!`,
`&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Não foi realizada corretamente a liberação do painel.`,],
solutions: [
`Realizar a liberação do painel.`,`Em caso de dúvida contate o suporte.`,]
},
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
`O veículo não conseguiu identificar o transponder,`,`Transponder com problemas,`,`Antena do veículo com problemas.`,],
solutions: [
`Utilize um transponder ID48 virgem,`,`Verifique a antena do veículo.`,]
},
{ label: `Aguardando chaves ou painel corrompido.`,
screens: [
`Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`corrompido.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`O número de chaves escolhidos não foi o número de chaves programadas,`,`Painel do carro pode estar corrompido.`,],
solutions: [
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,`Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se`,`observa pelo painel do veículo que as chaves não estão sendo adicionadas, pode ser`,`devido ao transponder utilizado não ser o correto.`,`Condição 2: Painel apagado: A bateria está muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,]
},
{ label: `Chave invalida!`,
screens: [
`&nbsp;`,
`Chave&nbsp;inválida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,`O veiculo encontra-se em Modo de Transporte.`,],
solutions: [
`Utilizar uma chave válida.`,]
},
{ label: `Pain: Invalido Data: ******** Serial: ******** Cod: **********`,
screens: [
`Painel:&nbsp;Inválido`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
causes: [
`Painel não compatível com a aplicação.`,``,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Os dados dos paineis sao Incompativeis!`,
screens: [
`Os&nbsp;dados&nbsp;dos`,
`painéis&nbsp;são`,
`Incompatíveis!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`O painel que está no veículo, não é o mesmo que foi colocado em Modo de Serviço.`,],
solutions: [
`Verifique o procedimento correto conforme indica o manual,`,`Em caso de dúvidas, contate o suporte técnico`,]
},
{ label: `Erro na Identificacao <OK> p/ repetir`,
screens: [
`Erro&nbsp;na`,
`Identificação`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},
{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravação`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir.`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},
{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},
{ label: `O Painel esta em Modo de Servico!`,
screens: [
`&nbsp;`,
`O&nbsp;Painel&nbsp;está&nbsp;em`,
`Modo&nbsp;de&nbsp;Serviço!`,
`<br />`,
],
causes: [
`O painel já se encontra em Modo de Serviço, realizado por outro equipamento.`,],
solutions: [
`Em caso de dúvida contate o suporte.`,]
},
{ label: `Erro na Verificacao <OK> p/ repetir`,
screens: [
`Erro&nbsp;na`,
`Verificação`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta soldagem do cabo MCU,`,`Conferir bom estado do painel.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
