//Capa
nomeCarga = " Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)";
revCarga = "Rev. 3";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`- Adaptação da ECU GM Delco E83 em veículos que utilizam o Painel Imob4, tornando possível a`,
`sua substituição do módulo do motor.`,
`<obs>`,
`Observação:`,
`A ECU será casada com o Painel, o carro irá liberar partida, porém pode ser necessário a utilização`,
`de um equipamento de diagnóstico para realizar a parametrização da ECU no veículo, para obter o`,
`perfeito funcionamento.`,

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
ballon: "Programador JTAG01. Necessário para realizar a<br />leitura e gravação do arquivo<br />na ECU", 
image: "/images/Acessórios/Jtag.JPG"},

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
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "Software utilizado", 
description: "", 
ballon: "Software OBDMap Suite", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/AtalhoOBDMapSuite.jpg"},

{title: "Identificando a Central", 
description: "Atenção:<br />Para o funcionamento correto da ECU adaptada é necessário obrigatoriamente que ela<br />possua a mesma numeração da ECU original do veículo, e seja do mesmo modelo, ano e<br />motor do veículo, caso contrário o funcionamento não será garantido, podendo ocorrer<br />falhas diversas.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/ECU Delco E83.jpg"},

{title: "", 
description: "Atenção:<br />Para o funcionamento correto da ECU adaptada é necessário obrigatoriamente que ela<br />possua a mesma numeração da ECU original do veículo, e seja do mesmo modelo, ano e<br />motor do veículo, caso contrário o funcionamento não será garantido, podendo ocorrer<br />falhas diversas.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/ECU Delco E83 etiqueta.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Região A<br />Região B<br />Região C", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Placa ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do Programador JTAG01 na ordem indicada na Região A", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Pontos de Soldagem A - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do Programador JTAG01 na ordem indicada na Região B", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Pontos de Soldagem B - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "Solde os fios do Programador JTAG01 na ordem indicada na Região C", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Pontos de Soldagem C - ECU Delco E83.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Todos os fios soldados.jpg"},

{title: "Passos para remover o painel do veículo:", 
description: "", 
ballon: "Passo 1: Remova os 3<br />parafusos que prendem a<br />capa protetora da coluna de<br />direção.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 1.jpg"},

{title: "", 
description: "", 
ballon: "Passo 2: Desprenda as<br />travas da capa de proteção.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 2.jpg"},

{title: "", 
description: "", 
ballon: "Passo 3: Remova a parte<br />superior da capa protetora.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 3.jpg"},

{title: "", 
description: "", 
ballon: "Passo 4: Remova o<br />acabamento do miolo de<br />ignição.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 4.jpg"},

{title: "", 
description: "", 
ballon: "Passo 5: Remova a parte<br />inferior da capa de<br />proteção.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 5.jpg"},

{title: "", 
description: "", 
ballon: "Passo 6: Para facilitar a remoção dos<br />próximos parafusos, pressione as<br />duas travas simultaneamente até<br />que a chave do limpador se<br />desprenda", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 6.jpg"},

{title: "", 
description: "", 
ballon: "Observação: Siga este exemplo<br />para remover a chave de seta do<br />lado esquerdo do volante.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 7.jpg"},

{title: "", 
description: "", 
ballon: "Passo 8: Remova o parafuso<br />do lado direito do volante.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 8.jpg"},

{title: "", 
description: "", 
ballon: "Passo 9: Utilize uma chave<br />Allen para remover o<br />parafuso que fica na<br />moldura do painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 9.jpg"},

{title: "", 
description: "", 
ballon: "Passo 10: Remova a<br />moldura do painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 10.jpg"},

{title: "", 
description: "", 
ballon: "Passo 11: Remova os dois<br />parafusos superiores que<br />prendem o painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 11.jpg"},

{title: "", 
description: "", 
ballon: "Passo 12: Remova o<br />parafuso inferior que<br />prende o painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 12.jpg"},

{title: "", 
description: "", 
ballon: "Passo 13: Levante o painel<br />e remova os conectores<br />que o prendem.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 13.jpg"},

{title: "", 
description: "", 
ballon: "Passo 14: Utilize um alicate<br />de corte pra cortar a presilha<br />plástica que prende o<br />conector 1.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 14.jpg"},

{title: "", 
description: "", 
ballon: "Passo 15: Use uma chave<br />de fenda para soltar a<br />trava do conector 1.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 15.jpg"},

{title: "", 
description: "", 
ballon: "Passo 16: Solte a trava<br />do conector 2 do<br />painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 16.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Retire o painel do veículo e leve-o para bancada.<br />", 
ballon: "Painel retirado do veículo.<br />Localizando", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Painel retirado do veículo.jpg"},

{title: "", 
description: "Retire o painel do veículo e leve-o para bancada.<br />", 
ballon: "Localizando as 8 travas que<br />prendem a tampa do<br />painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Localizando travas do painel.jpg"},

{title: "", 
description: "Retire o painel do veículo e leve-o para bancada.<br />", 
ballon: "Com o auxílio de uma<br />chave de fenda, solte as<br />travas do painel.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Soltando travas do painel.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo A:", 
description: "", 
ballon: "Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Pontos de soldagem do painel modelo A.jpg"},

{title: "", 
description: "", 
ballon: "Todos os fios do cabo MCU soldados, coloque para atrás os fios não utilizados para evitar problemas", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Fios do cabo MCU soldados no painel modelo A.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo B:", 
description: "", 
ballon: "Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Pontos de soldagem do painel modelo B.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Fios do cabo MCU soldados no painel modelo B.jpg"},

{title: "Passos na tela do OBDMap Suite", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Após abrir o software clique sobre<br />ler para que seja feito o backup do<br />arquivo da ECU.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Aguarde até o Software<br />comunicar com o OBDMap", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Siga as mensagens<br />mostradas na tela do<br />OBDMap", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 3 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Aguarde até a conclusão da<br />transferência do arquivo", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Salve o arquivo lido com<br />um nome de fácil<br />identificação e em um<br />lugar de sua preferência e<br />onde não possa ser<br />apagado com facilidade.", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "Procedimento<br />concluído com<br />sucesso, siga<br />os passos na<br />tela do<br />OBDMap", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Passo 6 - OBDMapSuite.jpg"},

{title: "", 
description: "Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0271 - Adaptação de ECU GM Delco E83 com painel Imob4 (Agile-Montana)/Salvando arquivo da ECU no computador.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Agile`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`DELCO E83`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptar ECU`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro ao salvar arquivo! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;ao&nbsp;salvar`,
`&nbsp;arquivo!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Mau contato do cabo USB com o OBDMap ou com o computador;`,`Problema de driver do OBDMap.`,],
solutions: [
`Conferir a conexão do Cabo USB;`,`Consulte o suporte técnico;`,`Realizar o procedimento novamente.`,]
},

{ label: `Erro na ultima gravacao da ECU! Contate o suporte! <OK>`,
screens: [
`&nbsp;Erro&nbsp;na&nbsp;ultima`,
`gravacao&nbsp;da&nbsp;ECU!`,
`&nbsp;&nbsp;&nbsp;Contate&nbsp;o`,
`&nbsp;suporte!&nbsp;&lt;OK&gt;`,
],
causes: [
`O procedimento de gravação do ECU não foi concluído corretamente, fazendo com que o`,`ECU esteja com um arquivo incorreto, impossibilitando seu funcionamento no veículo.`,],
solutions: [
`Contate o suporte técnico.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato dos fios do cabo MCU com o painel;`,`Painel com problema;`,`Os fios do cabo MCU podem ter sido ligados errado no painel.`,`Mau contato dos fios do programador JTAG01 com a ECU;`,`ECU com problema;`,`Os fios do programador JTAG01 podem ter sido ligados errado na ECU.`,],
solutions: [
`• Conferir correta ligação do cabo MCU.`,`• Conferir correta ligação do programador JTAG01.`,]
},

{ label: `Arquivo da ECU Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;ECU&nbsp;Invalido!`,
`<br />`,
],
causes: [
`• O arquivo da ECU não é compatível;`,`• O arquivo da ECU está corrompido;`,],
solutions: [
`• Verificar se o modelo da ECU é compatível com o apresentado neste manual.`,]
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
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP.`,``,]
},

{ label: `Erro grav. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema ou com arquivo corrompido;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU;`,`• Mau contato do programador JTAG01 com o OBDMap.`,`• ECU com problema`,],
solutions: [
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP.`,]
},

{ label: `Arquivo do painel Invalido! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;Arquivo&nbsp;do`,
`painel&nbsp;Invalido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`• O arquivo da ECU não é compatível;`,`• O arquivo da ECU está corrompido;`,],
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
`Mau contato no cabo MCU ou pinça com o painel,`,`Mau contato do cabo MCU ou pinça com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir se o cabo MCU está bem conectado ao OBDMAP.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
