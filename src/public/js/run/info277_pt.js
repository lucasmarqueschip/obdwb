//Capa
nomeCarga = `Manual Carga -  OBD0277<br />Leitura e gravação Painel Imob4 (Agile e Montana)`;
revCarga = `Rev. 2`;
dataManual = `Janeiro 2020`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura e gravação do arquivo de 2Kbytes da memória 160D0WQ do Painel Imob4 (Agile e Montana).`,
`<obs>`,
`Observações:`,
`Esta função não tem o objetivo de verificar o conteúdo do arquivo e nem sua utilização e sim`,
`realizar a gravação ou leitura do arquivo de forma segura no painel, portanto o conteúdo do`,
`arquivo e sua utilização é de total responsabilidade do usuário.`,

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
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: `Adaptador HW0067<br />conectado no cabo<br />MCU e no OBDMap`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Adaptador HW0067 conectado.JPG`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Todos os dispositivos conectados.JPG`},

{title: `Software utilizado`, 
description: ``, 
ballon: `Software OBDMap Suite`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/AtalhoOBDMapSuite.jpg`},

{title: `Passos para remover o painel do veículo:`, 
description: ``, 
ballon: `Passo 1: Remova os 3<br />parafusos que prendem a<br />capa protetora da coluna de<br />direção.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/paínel passo 1.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 2: Desprenda as<br />travas da capa de proteção.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Painel passo 2.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 3: Remova a parte<br />superior da capa protetora.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Painel passo 3.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 4: Remova o<br />acabamento do miolo de<br />ignição.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Painel passo 4.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 5: Remova a parte<br />inferior da capa de<br />proteção.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 5.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 6: Para facilitar a remoção dos<br />próximos parafusos, pressione as<br />duas travas simultaneamente até<br />que a chave do limpador se<br />desprenda<br />Observação: Siga este exemplo<br />para remover a chave de seta do<br />lado esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 6.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 7: Remova o<br />parafuso do lado<br />esquerdo do volante.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 7.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 8: Remova o parafuso<br />do lado direito do volante.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 8.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 9: Utilize uma chave<br />Allen para remover o<br />parafuso que fica na<br />moldura do painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 9.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 10: Remova a<br />moldura do painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 10.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 11: Remova os dois<br />parafusos superiores que<br />prendem o painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 11.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 12: Remova o<br />parafuso inferior que<br />prende o painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 12.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 13: Levante o painel<br />e remova os conectores<br />que o prendem.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 13.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 14: Utilize um alicate<br />de corte pra cortar a presilha<br />plástica que prende o<br />conector 1.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 14.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 15: Use uma chave<br />de fenda para soltar a<br />trava do conector 1.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 15.JPG`},

{title: ``, 
description: ``, 
ballon: `Passo 16: Solte a trava<br />do conector 2 do<br />painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel passo 16.JPG`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: `Painel retirado do veículo.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel.JPG`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Após abrir o software clique<br />sobre ler para que seja feito a<br />leitura do arquivo atualmente<br />existente no painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 1 - OBDMapSuite.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: `Localizando as 8 travas que<br />prendem a tampa do<br />painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Localizando as travas.JPG`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Aguarde até o Software<br />comunicar com o OBDMap`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 2 - OBDMapSuite.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: `Com o auxílio de uma<br />chave de fenda, solte as<br />travas do painel.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/desmontando painel.JPG`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Aguarde até o Software e o<br />OBDMap terminar a<br />comunicação com o painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 3 - OBDMapSuite.jpg`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Aguarde até a conclusão da<br />leitura do arquivo`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 4 - OBDMapSuite.jpg`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Salve o arquivo lido com um<br />nome de fácil identificação e<br />em um lugar de sua<br />preferência e onde não possa<br />ser apagado com facilidade.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 5 - OBDMapSuite.jpg`},

{title: ``, 
description: `Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />`, 
ballon: `Procedimento concluído<br />com sucesso. Pressione<br />VOLTA no OBDMap para<br />sair da função`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 6 - OBDMapSuite.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo B:`, 
description: ``, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel modelo B - 1.JPG`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/painel modelo B - 2.JPG`},

{title: `Realizando leitura do painel no OBDMap Suite`, 
description: ``, 
ballon: `Após abrir o software clique<br />sobre ler para que seja feito a<br />leitura do arquivo atualmente<br />existente no painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 1 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até o Software<br />comunicar com o OBDMap`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 2 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até o Software e o<br />OBDMap terminar a<br />comunicação com o painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 3 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até a conclusão da<br />leitura do arquivo`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 4 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Salve o arquivo lido com um<br />nome de fácil identificação e<br />em um lugar de sua<br />preferência e onde não possa<br />ser apagado com facilidade.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 5 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Procedimento concluído<br />com sucesso. Pressione<br />VOLTA no OBDMap para<br />sair da função`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 6 - OBDMapSuite.jpg`},

{title: `Realizando a gravação do painel no OBDMap Suite`, 
description: ``, 
ballon: `Após abrir o software,<br />clique sobre o botão<br />abrir para selecionar o<br />arquivo correto que<br />deseja gravar no Painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 1 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `É muito importante realizar<br />o backup do arquivo<br />original do painel antes de<br />realizar o processo de<br />gravação, pois executado<br />este processo o arquivo<br />que estava no painel será<br />perdido. Portanto caso não<br />tenha o backup do arquivo<br />original do painel, realize-o<br />antes executar o processo<br />de gravação, evitando<br />transtornos futuros.`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 2 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Clique em confirmar se<br />tudo estiver nos<br />conformes`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 3 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde enquanto o<br />software e o OBDMap<br />realizam a gravação do<br />arquivo`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 4 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde<br />enquanto é<br />realizada a<br />comunicação<br />com o painel`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 5 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até a<br />conclusão da<br />gravação`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 6 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Procedimento<br />concluído com<br />sucesso. Pressione<br />VOLTA no OBDMap<br />para sair da função`, 
image: `/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 7 - OBDMapSuite.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura do painel no OBDMap`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Programador`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Programador`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Ler/Grv Painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Conecte&nbsp;cabo&nbsp;USB`,
`&nbsp;&nbsp;&nbsp;no&nbsp;OBDMap`,
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
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Software`,
`&nbsp;&nbsp;OBDMap&nbsp;Suite`,
`&nbsp;&nbsp;Programador`,
`&nbsp;&nbsp;Painel&nbsp;Imob4`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
