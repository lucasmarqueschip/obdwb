//Capa
nomeCarga = `Manual Carga -  OBD0275<br />Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83`;
revCarga = `Rev. 1`;
dataManual = `Fevereiro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`- Adaptação do Painel Imob4 (Agile e Montana) em veículos que utilizam a ECU GM Delco E83,`,
`tornando possível a sua substituição no veículo.`,
`<obs>`,
`Observação:`,
`O Painel será casado com a ECU, o carro irá liberar partida, porém pode ser necessário a utilização`,
`de um equipamento de diagnóstico para realizar a parametrização do Painel no veículo, para obter`,
`o perfeito funcionamento.`,
`Atenção:`,
`Para o funcionamento correto do painel adaptado é necessário obrigatoriamente que ele`,
`possua a mesma numeração do painel original do veículo, e seja do mesmo modelo, ano e`,
`motor do veículo, caso contrário o funcionamento não será garantido, podendo ocorrer`,
`falhas diversas.`,
`Essa função tem como objetivo a correção de defeitos. A Chiptronic NÃO se responsabiliza pelo`,
`uso ilícito da função, sendo de total responsabilidade do usuário.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Agile 1.4`,
years: `2010 a 2014`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2011 a 2015`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Programador JTAG01. Necessário para realizar a<br />leitura e gravação do arquivo<br />na ECU`, 
image: `/images/Acessórios/Jtag.JPG`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Todos os acessórios conectados.jpg`},

{title: `Identificando a Central`, 
description: ``, 
ballon: `Identificando na<br />etiqueta que a ECU<br />é uma E83 ACDelco`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/ECU Delco E83 costas.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/ECU Delco E83 frente.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Região A<br />Região B<br />Região C`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Placa ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do Programador JTAG01 na ordem indicada na Região A`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Pontos de Soldagem A - ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do Programador JTAG01 na ordem indicada na Região B`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Pontos de Soldagem B - ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do Programador JTAG01 na ordem indicada na Região C`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Pontos de Soldagem C - ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Todos os fios soldados.jpg`},

{title: `Passos para remover o painel do veículo:`, 
description: ``, 
ballon: `Passo 1: Remova os 3<br />parafusos que prendem a<br />capa protetora da coluna de<br />direção.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 2: Desprenda as<br />travas da capa de proteção.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 3: Remova a parte<br />superior da capa protetora.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 4: Remova o<br />acabamento do miolo de<br />ignição.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 4.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 5: Remova a parte<br />inferior da capa de<br />proteção.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 5.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 6: Para facilitar a remoção dos<br />próximos parafusos, pressione as<br />duas travas simultaneamente até<br />que a chave do limpador se<br />desprenda<br /><obs><br />Observação: Siga este exemplo<br />para remover a chave de seta do<br />lado esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 6.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 7: Remova o<br />parafuso do lado<br />esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 7.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 8: Remova o parafuso<br />do lado direito do volante.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 8.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 9: Utilize uma chave<br />Allen para remover o<br />parafuso que fica na<br />moldura do painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 9.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 10: Remova a<br />moldura do painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 10.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 11: Remova os dois<br />parafusos superiores que<br />prendem o painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 11.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 12: Remova o<br />parafuso inferior que<br />prende o painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 12.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 13: Levante o painel<br />e remova os conectores<br />que o prendem.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 13.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 14: Utilize um alicate<br />de corte pra cortar a presilha<br />plástica que prende o<br />conector 1.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 14.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 15: Use uma chave<br />de fenda para soltar a<br />trava do conector 1.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 15.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 16: Solte a trava do conector 2 do painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Passo 16.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Painel retirado do veículo.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Painel retirado do veículo.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Localizando as 8 travas que prendem a tampa do painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Localizando travas do painel.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Com o auxílio de uma chave de fenda, solte as travas do painel.`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Soltando travas do painel.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo A:`, 
description: ``, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Pontos de soldagem do painel modelo A.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os fios do cabo MCU soldados, coloque para atrás os fios não utilizados para evitar problemas`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Fios do cabo MCU soldados no painel modelo A.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo B:`, 
description: ``, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Pontos de soldagem do painel modelo B.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0275 - Adaptação Painel Imob4 (Agile e Montana) com ECU GM Delco E83/Fios do cabo MCU soldados no painel modelo B.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a adaptação do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Immob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Immob 4 Agile`, `>Delco E83`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco E83`, `>Adaptar Painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Termo&nbsp;de&nbsp;uso!`,
`Essa&nbsp;funcao&nbsp;tem`,
`como&nbsp;objetivo&nbsp;a`,
`&nbsp;&nbsp;correcao&nbsp;de`,
`&nbsp;&nbsp;defeitos.&nbsp;A`,
`&nbsp;Chiptronic&nbsp;NAO`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;se`,
`&nbsp;responsabiliza`,
`&nbsp;&nbsp;&nbsp;&nbsp;pelo&nbsp;uso`,
`&nbsp;&nbsp;&nbsp;ilicito&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;funcao,`,
`&nbsp;Sendo&nbsp;de&nbsp;total`,
`responsabilidade`,
`&nbsp;&nbsp;do&nbsp;usuario.`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Li&nbsp;e&nbsp;entendi&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;os&nbsp;termos.&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;&nbsp;Nao&nbsp;Aceito&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;Aceito`,
],
help: `Tecle OK para aceitar
Tecle VOLTA para negar`
},
{lines: [
`Conecte&nbsp;o&nbsp;Prog.`,
`&nbsp;JTAG01&nbsp;na&nbsp;ECU`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Lendo&nbsp;ECU...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Conecte&nbsp;o&nbsp;HW0067`,
`e&nbsp;MCU&nbsp;no&nbsp;painel`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`<br />`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;Corrigir&nbsp;KM?`,
`&nbsp;(X)Nao&nbsp;(OK)Sim`,
`<br />`,
],
help: `O novo Painel não terá o mesmo
odometro que o Painel original. Para
corrigir o KM aperte o botão OK, caso não
deseje corrigir aperte o botão Volta`
},
{lines: [
`&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Digite&nbsp;KM:`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;000001`,
`<br />`,
],
help: `Digite o KM correto do veículo!`
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
`ATENCAO!&nbsp;Caso&nbsp;a`,
`chave&nbsp;nao&nbsp;ligue,`,
`&nbsp;programe&nbsp;novas`,
`&nbsp;&nbsp;chaves&nbsp;&lt;OK&gt;`,
],
help: `Caso o veículo não possua uma chave válida deve-se realizar a programação de chaves`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `O casamento foi realizado, porém caso algum defeito físico exista na ECU, Painel ou no sistema elétrico, o carro não irá funcionar`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Arq. do Painel Corrompido! Prosseguir ? (X)Nao (OK)Sim`,
screens: [
`&nbsp;Arq.&nbsp;do&nbsp;Painel`,
`&nbsp;&nbsp;Corrompido!`,
`&nbsp;&nbsp;Prosseguir&nbsp;?`,
`(X)Nao&nbsp;&nbsp;&nbsp;(OK)Sim`,
],
causes: [
],
solutions: [
]
},
{ label: `A adaptacao do Painel verifica e modifica apenas algumas regioes do arquivo. Caso informacoes nao relacionadas com o procedim. estejam incorretas o veiculo NAO ira funcionar!`,
screens: [
`&nbsp;A&nbsp;adaptacao&nbsp;do&nbsp;`,
`Painel&nbsp;verifica&nbsp;`,
`&nbsp;&nbsp;e&nbsp;modifica&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;apenas&nbsp;algumas&nbsp;`,
`&nbsp;&nbsp;&nbsp;regioes&nbsp;do&nbsp;&nbsp;&nbsp;`,
`&nbsp;arquivo.&nbsp;Caso&nbsp;&nbsp;`,
`informacoes&nbsp;nao&nbsp;`,
`&nbsp;&nbsp;relacionadas&nbsp;&nbsp;`,
`com&nbsp;o&nbsp;procedim.&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;estejam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;incorretas&nbsp;o&nbsp;&nbsp;`,
`&nbsp;&nbsp;veiculo&nbsp;NAO&nbsp;&nbsp;&nbsp;`,
`&nbsp;ira&nbsp;funcionar!`,
],
causes: [
],
solutions: [
]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o painel;`,`• Painel com problema;`,`• Os fios do cabo MCU podem ter sido ligados errado no painel.`,`• Má conexão entre OBDmap, HW0067 e cabo MCU;`,`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU.`,],
solutions: [
`• Conferir correta ligação do cabo MCU.`,`• Conferir correta ligação do programador JTAG01.`,]
},
{ label: `Erro leit. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leit.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU;`,`• Mau contato do programador JTAG01 com o OBDMap.`,],
solutions: [
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP`,``,]
},
{ label: `Arquivo do painel Invalido! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;Arquivo&nbsp;do`,
`painel&nbsp;Invalido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`• O arquivo do painel não é compatível;`,`• O arquivo do painel está corrompido;`,],
solutions: [
`• Verificar se o modelo do Painel é compatível com o apresentado neste manual.`,]
},
{ label: `Erro leit Painel <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leit&nbsp;Painel`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o painel;`,`• Painel com problema ou com arquivo corrompido;`,`• Os fios do cabo MCU podem ter sido ligados errado no painel;`,`• Má conexão entre OBDmap, HW0067 e cabo MCU;`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir conexão entre cabo MCU, HW0067e OBDMAP.`,]
},
{ label: `Erro grav Painel <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav&nbsp;Painel`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o painel;`,`• Os fios do cabo MCU podem ter sido ligados errado no painel;`,`• Má conexão entre OBDmap, HW0067 e cabo MCU;`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir conexão entre cabo MCU, HW0067e OBDMAP.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
