//Capa
nomeCarga = "Leitura e gravação Painel Imob4 (Agile e Montana)";
revCarga = "Rev. 2";
dataManual = "Janeiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

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
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Agile 1.4",
years: "2010 a 2014"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2011 a 2015"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo USB. Necessário para<br />realizar o backup do<br />arquivo", 
image: "/images/Acessórios/Cabo USB.jpg"},

{title: "", 
description: "", 
ballon: "Adaptador HW0067 será conectado no cabo MCU e depois no OBDMap para<br />realizar o procedimento.", 
image: "/images/Acessórios/Adaptador HW0067.JPG"},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: ""},

{title: "Software utilizado", 
description: "", 
ballon: "Software OBDMap Suite", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/AtalhoOBDMapSuite.jpg"},

{title: "Passos para remover o painel do veículo:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Após abrir o software clique<br />sobre ler para que seja feito a<br />leitura do arquivo atualmente<br />existente no painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 1 - OBDMapSuite.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Aguarde até o Software<br />comunicar com o OBDMap", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 2 - OBDMapSuite.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Aguarde até o Software e o<br />OBDMap terminar a<br />comunicação com o painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Aguarde até a conclusão da<br />leitura do arquivo", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Salve o arquivo lido com um<br />nome de fácil identificação e<br />em um lugar de sua<br />preferência e onde não possa<br />ser apagado com facilidade.", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "Observação: Para a realização do teste de compatibilidade o painel NÃO deve estar<br />em Modo de Serviço.<br /><br />", 
ballon: "Procedimento concluído<br />com sucesso. Pressione<br />VOLTA no OBDMap para<br />sair da função", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 6 - OBDMapSuite.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo B:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "Realizando leitura do painel no OBDMap Suite", 
description: "", 
ballon: "Após abrir o software clique<br />sobre ler para que seja feito a<br />leitura do arquivo atualmente<br />existente no painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até o Software<br />comunicar com o OBDMap", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até o Software e o<br />OBDMap terminar a<br />comunicação com o painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até a conclusão da<br />leitura do arquivo", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Salve o arquivo lido com um<br />nome de fácil identificação e<br />em um lugar de sua<br />preferência e onde não possa<br />ser apagado com facilidade.", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Procedimento concluído<br />com sucesso. Pressione<br />VOLTA no OBDMap para<br />sair da função", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 6 - OBDMapSuite.jpg"},

{title: "Realizando a gravação do painel no OBDMap Suite", 
description: "", 
ballon: "Após abrir o software,<br />clique sobre o botão<br />abrir para selecionar o<br />arquivo correto que<br />deseja gravar no Painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "É muito importante realizar<br />o backup do arquivo<br />original do painel antes de<br />realizar o processo de<br />gravação, pois executado<br />este processo o arquivo<br />que estava no painel será<br />perdido. Portanto caso não<br />tenha o backup do arquivo<br />original do painel, realize-o<br />antes executar o processo<br />de gravação, evitando<br />transtornos futuros.", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Clique em confirmar se<br />tudo estiver nos<br />conformes", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde enquanto o<br />software e o OBDMap<br />realizam a gravação do<br />arquivo", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde<br />enquanto é<br />realizada a<br />comunicação<br />com o painel", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Aguarde até a<br />conclusão da<br />gravação", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Gravação Passo 6 - OBDMapSuite.jpg"},

{title: "", 
description: "", 
ballon: "Procedimento<br />concluído com<br />sucesso. Pressione<br />VOLTA no OBDMap<br />para sair da função", 
image: "/images/Funções Específicas/OBD0277 - Leitura e gravação Painel Imob4 (Agile e Montana)/Leitura Passo 7 - OBDMapSuite.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura do painel no OBDMap`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
