//Capa
nomeCarga = `Manual Carga -  OBD0118<br />Geração de Transponder Mercedes PLD FR 1 C e D (Acelo/Axor/Atego/Série 12,14,15,19,21,24,25,33)`;
revCarga = `Rev. 2`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar chaves para caminhões Mercedes que utilizam a PLD do modelo C ou modelo D como mostra na Página 6. `,
`Nesse procedimento será necessário levantar pinos da memória da PLD, caso não seja levantado esses pinos haverá o risco de corrompimento do arquivo da memória.`,
``,
`- Os módulos descritos nesse manual também podem ser chamados de MR, porém em todo o manual será tratado como PLD.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Mercedes`,
model: `Acello 915C`,
years: `2005 a 2010`
},
{
manufacturer: `Mercedes`,
model: `Atego`,
years: `2005 a 2010`
},
{
manufacturer: `Mercedes`,
model: `Axor`,
years: `2005 a 2010`
},
{
manufacturer: `Mercedes`,
model: `1944S`,
years: `2005 a 2005`
},
{
manufacturer: `Mercedes`,
model: `1938S`,
years: `2005 a 2005`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Nem todos os veículos na faixa de ano citados acima possuem os modelos de PLD citados. Alguns sistemas mais antigos que utilizam estes mesmos modelos de PLD não possuem sistema de imobilizador.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder T5/NOVA (Epóxi).`, 
image: `/images/Transponders/Transponder T5 como ID20.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar a BC ao OBDMap.`, 
image: `/images/Acessórios/Cabo MCU1.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `A ferramenta G1 é utilizada para levantar os pinos da memória da PLD.`, 
image: `/images/Acessórios/Ferramenta G1 -1.jpg`},

{title: ``, 
description: ``, 
ballon: `Ferro de solda.`, 
image: `/images/Acessórios/ferro_de_Solda2.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Chave CERTO.jpg`},

{title: `PLD de modelo C:`, 
description: `Retire a PLD do caminhão e leve-a para bancada.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/PLD com uma memória.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos de soldagem, foi separado em área A e área B.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Localizado os pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Localizado os pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Localizado os pontos de soldagem 3.jpg`},

{title: `Levantando o pino 3 da memória da PLD modelo C:`, 
description: ``, 
ballon: `Ao lado mostra o pino 3 da memória que deve ser obrigatoriamente levantado da placa para efetuar o procedimento.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Levantando o pino 3 da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Certo: O gancho da ferramenta G1 deve ficar encostado na placa, a fim de puxar o pino 3 da memória pela parte de baixo.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Posicionando o gancho CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `Errado: Não posicione o gancho da ferramenta G1 no "joelho" do pino, isso poderá causar danos no mesmo no<br />momento em que for puxado.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Posicionando o gancho ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Derreta a solda do pino com um soldador, e com a ferramenta G1 posicionada na horizontal puxe o pino para fora.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Derretendo a solda.jpg`},

{title: ``, 
description: ``, 
ballon: `É necessário levantar um pouco mais o pino que o procedimento anterior, pois senão, no momento de soldar o cabo MCU a solda no pino pode encostar-se à placa, causando um curto. Atenção: Não levantar demais o pino, pois pode quebrá-lo.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Levantando o pino um pouco mais.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe do pino levantado após o procedimento anterior. Observe que a distância do pino para a placa é ideal para a soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Observe a distância.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe do fio roxo soldado no pino 3 da memória. OBS.: Após soldado o fio roxo no terminal da memória, tome o máximo de cuidado ao manuseá-lo, pois qualquer movimento brusco ocasionará a ruptura do terminal.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Fio roxo soldado.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado na PLD de Modelo C. Atenção: Não inverter ou soldar os fios em outras posições.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Cabo MCU soldado.jpg`},

{title: `Todos os acessórios conectados na PLD de modelo C:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a PLD, evitando danos a PLD e ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo C/Todos os acessórios conectados.jpg`},

{title: `PLD de modelo D:`, 
description: `Retire a PLD do caminhão e leve-a para bancada.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/PLD com duas memórias.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos de soldagem, foi separado em área A e área B.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Localizando pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Localizando pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Localizando pontos de soldagem 3.jpg`},

{title: `Levantando o pino 1 da memória da PLD modelo D:`, 
description: ``, 
ballon: `Ao lado mostra o pino 1 da memória que deve ser obrigatoriamente levantado da placa para efetuar o procedimento.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Pino 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Certo: O gancho da ferramenta G1 deve ficar encostada na placa, a fim de puxar o pino 1 da memória pela parte de baixo.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Gancho CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `Errado: Não posicione o gancho da ferramenta G1 no "joelho" do pino, isso poderá causar danos no mesmo no momento em que for puxado.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Gancho ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Derreta a solda do pino com um soldador, e com a ferramenta G1 posicionada na horizontal puxe o pino para fora.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Derretendo a solda.jpg`},

{title: ``, 
description: ``, 
ballon: `É necessário levantar um pouco mais que o procedimento anterior o pino da memória, pois no momento em que será soldado o cabo MCU no pino, a solda poderá acidentalmente encostar-se à placa, causando assim um curto.<br />Atenção: Não levante demais o pino, pois poderá quebrá-lo.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Levanta um pouco mais.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe do pino 1 levantado. Observe que a distância do pino para a placa é ideal para a soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Detalhe do pino 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe do fio amarelo soldado no pino 1 da memória. OBS.: Após soldado o fio amarelo no terminal da memória tome o máximo de cuidado ao manuseá-lo, pois qualquer movimento brusco ocasionará a ruptura do terminal.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Fio amarelo soldado.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado na PLD de Modelo D. Atenção: Não inverter ou soldar os fios em outras posições.`, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/MCU soldado.jpg`},

{title: `Todos os acessórios conectados na PLD de modelo D:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a PLD, evitando danos a PLD e ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0118 Geração de transponder Mercedes PLD FR 1 C e D/PLD Modelo D/Todos os acessórios conectados.jpg`},
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
{title: `Gerar transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mercedes Truck`], help: `Tecle OK`, menu: 1000},
{lines: [`1944`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`PLD FR 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Modelo C`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Utilize&nbsp;o&nbsp;Módulo`,
`de&nbsp;Transponder&nbsp;e`,
`o&nbsp;cabo&nbsp;MCU&nbsp;neste`,
`procedimento`,
],
help: `Tecle OK!`
},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;na&nbsp;PLD`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;PLD`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;T5/NOVA.`,
`(OK)&nbsp;para&nbsp;prog..`,
`<br />`,
],
help: `Posicione o transponder no módulo
de transponder como mostra na Página 5`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;T5/Nova`,
`Aguarde...`,
`<br />`,
],
help: `Não remova o transponder durante
esse procedimento.`
},
{lines: [
`Gravação&nbsp;&nbsp;Concluida!`,
`Número&nbsp;de&nbsp;Transponders&nbsp;pré-codificados:&nbsp;`,
`*`,
`Deseja&nbsp;pré-codificar&nbsp;mais?`,
`&lt;OK&gt;&nbsp;Para&nbsp;outro`,
`&lt;Volta&gt;&nbsp;Próxima&nbsp;etapa`,
],
help: `Para gerar mais de um trasponder insira o próximo no módulo e volte ao Passo 10 ou tecle VOLTAR para finalizar.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;GRAVAR&nbsp;T5!`,
`(OK)&nbsp;PARA&nbsp;REPETIR.`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é T5 virgem.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga do módulo de transponder para identificar o transponder ou para deixá-lo virgem (ID 20) caso seja necessário.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com a PLD,`,`Mau contato no cabo MCU com o OBDMap,`,`PLD com problema.`,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},
{ label: `A PLD esta descodificada!`,
screens: [
`&nbsp;`,
`A&nbsp;PLD&nbsp;está`,
`descodificada!`,
`<br />`,
],
causes: [
`A PLD está provavelmente descodificada,`,`O sistema não possui imobilizador.`,],
solutions: [
]
},
{ label: `Arquivo da PLD Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`PLD&nbsp;Inválido!`,
`<br />`,
],
causes: [
`A PLD está com o arquivo corrompido.`,],
solutions: [
]
},
{ label: `PLD incorreta!`,
screens: [
`&nbsp;`,
`PLD&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A PLD está com um arquivo modificado,`,`Modelo de PLD incorreta.`,],
solutions: [
`Verificar o modelo correto da PLD.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
