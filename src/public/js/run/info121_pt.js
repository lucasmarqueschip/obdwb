//Capa
nomeCarga = `Manual Carga -  OBD0121<br />Leitura de Senha Calculador Master 2 Criptografado`;
revCarga = `Rev. 1`;
dataManual = `Julho 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza a leitura de senha de 12 dígitos que se encontra no calculador Master 2 criptografado.`,
`Com a senha lida é possível programar até 8 chaves no veículo utilizando a carga OBD0189 (item não incluso). É necessário programar todas as chaves, inclusive as já existentes, ou elas não funcionarão mais no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Master 2.5`,
years: `2010 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações:`, `Este módulo é encontrado nos veículos Master que possuem a chave idêntica a do veículo Clio 2. <br />O calculador indicado nessa carga deve ser identificado exclusivamente pela sua placa que deve ser idêntico ao mostrado nas imagens na página 6.`, undefined);




resources = [
{title: `Chave utilizada:`, 
description: ``, 
ballon: `Chave da Renault Master.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Chave da Renault Master.jpg`},

{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Transponder ID46 preparado para Renault (T25).`, 
image: `/images/Transponders/ID-46 - Renault.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo Universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Identificando e desmontando o calculador Master 2 criptografado`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Identificando o calculador Master 2 criptrografado.jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando as 6 travas que prendem a tampa do módulo.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Desmontando o módulo.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, solte as travas da caixa.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Desmontando o módulo 2.jpg`},

{title: `Identificando a placa do calculador:`, 
description: ``, 
ballon: `Identificando a posição da memória na placa.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Identificando a placa do calculador.jpg`},

{title: ``, 
description: ``, 
ballon: `Memória 93C66.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Memória 93C66.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Localizando área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Localizando os pontos de soldagem do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no módulo:<br />1 => Fio Amarelo<br />2 => Fio Roxo<br />3 => Fio Preto<br />4 => Fio Azul<br />5 => Fio Vermelho<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios no calculador, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Não inverter os fios.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a placa do módulo, evitando danos ao módulo e ao OBDMap.<br /><br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0121 Leitura de senha calculador Master 2 criptografado/Todos os acessórios conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do Renault Master fica localizada na posição A4 da foto abaixo.<br />Conecte o cabo universal + adaptador A1 na tomada de diagnóstico do veículo.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 2 Master`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 2 Master`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;Modulo`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
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
`Senha:&nbsp;`,
`************`,
`<br />`,
],
help: `A senha de 12 dígitos foi lida com sucesso. Com a senha lida é possível
realizar a programação de chaves.`
},
]
}, {title: `Realizando a programação de chaves com senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 2 Master`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 2 Master`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`************`,
`<br />`,
],
help: `Insira a senha lida anteriormente.`
},
{lines: [
`&nbsp;`,
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Insira&nbsp;a&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`OK-Gravar&nbsp;mais?`,
`Volta-&nbsp;Finaliza?`,
`<br />`,
],
help: `Para programar mais chaves tecle OK e volte ao passo 9, ou tecle VOLTA para concluir o procedimento.`
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Senha: ************ (!)`,
screens: [
`&nbsp;`,
`Senha:`,
`************&nbsp;(!)`,
`<br />`,
],
causes: [
`A senha foi encontrada, mas o arquivo provavelmente foi gravado na memória de maneira incorreta. Isso só irá ocorrer se este módulo tenha sido regravado anteriormente e implicara no não funcionamento do veículo.`,],
solutions: [
`Certificar que o arquivo da memória esteja gravado em organização 16 bits.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o módulo,`,`Mau contato no cabo MCU com o OBDMap,`,`Módulo com problema.`,],
solutions: [
`Verificar a correta posição dos fios no módulo.`,]
},
{ label: `Erro na leitura da memoria!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;da&nbsp;memoria!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o módulo,`,`Mau contato no cabo MCU com o OBDMap,`,`Módulo com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios do módulo,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},
{ label: `Arquivo Invalido!`,
screens: [
`&nbsp;`,
`Arquivo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invalido!`,
`<br />`,
],
causes: [
`O arquivo encontrado não foi reconhecido como um arquivo válido para este módulo.`,],
solutions: [
`O arquivo pode estar corrompido.`,]
},
{ label: `Calculador Incompativel!`,
screens: [
`&nbsp;`,
`Calculador`,
`Incompativel!`,
`<br />`,
],
causes: [
`O calculador reconhecido não é valido para esta função.`,],
solutions: [
`Verifique a correta aplicação da carga.`,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Inserir senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
