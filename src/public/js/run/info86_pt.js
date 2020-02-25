//Capa
nomeCarga = `Manual Carga -  OBD0086<br />Geração e Programação de Chave Yamaha Moric 2`;
revCarga = `Rev. 3`;
dataManual = `Julho 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar e programar a chave "ESCRAVA".`,
`Com esta função é possível gravar os dados do transponder no imobilizador, no entanto as chaves antigas serão apagadas automaticamente.`,
``,
`Gerar transponder.`,
`Com esta função é possível gerar o transponder Texas ID60 - ID4D, para serem utilizados somente em motos Yamaha.`,
``,
`Programar chave.`,
`Com esta função é possível programar uma chave já gerada ao imobilizador da Yamaha, no entanto, as chaves antigas serão apagadas automaticamente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Yamaha`,
model: `R1`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `T-MAX`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `R6`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `BT1100`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `FJR`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `FZR`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `FZ1`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `FZ6`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `FZS`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `XT`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `XTR`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `XTX`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `XVX`,
years: `2006 a 2011`
},
{
manufacturer: `Yamaha`,
model: `XJ6`,
years: `2006 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações:`, ``, `- Nesta carga só é possível programar uma chave no sistema de imobilizador "CHAVE ESCRAVA"`);
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder Texas Crypto ID60 - ID4D (Carvão).`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Transponder Texas Crypto ID60 - ID4D Carvão.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o transponder Texas Crypto ID60 - ID4D (vidro).`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Transponder Texas Crypto ID60 - ID4D Vidro.jpg`},

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
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: ``, 
description: ``, 
ballon: `Ferro de solda.`, 
image: `/images/Acessórios/ferro_de_Solda2.jpg`},

{title: ``, 
description: ``, 
ballon: `Estação de solda. Utilizada para aquecer a borracha de vedação que protege a placa do imobilizador.`, 
image: `/images/Acessórios/Estação de solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Espátula plástica. Utilizada para retirar a borracha de vedação da placa.`, 
image: `/images/Acessórios/Espátula plástica.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT - Chave Yamaha CERTO.jpg`},

{title: `Identificando e desmontando o imobilizador`, 
description: `Retire o imobilizador da motocicleta e leve-o para bancada.<br />Atenção: Ao raspar a borracha de vedação da placa, tome o máximo de cuidado para não causar danos aos componentes da placa.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Identificando Imob 1.jpg`},

{title: ``, 
description: `Retire o imobilizador da motocicleta e leve-o para bancada.<br />Atenção: Ao raspar a borracha de vedação da placa, tome o máximo de cuidado para não causar danos aos componentes da placa.<br /><br />`, 
ballon: `Com o auxílio de uma chave Torx retire os dois parafusos que prendem o miolo de ignição.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Identificando Imob 2.jpg`},

{title: ``, 
description: `Retire o imobilizador da motocicleta e leve-o para bancada.<br />Atenção: Ao raspar a borracha de vedação da placa, tome o máximo de cuidado para não causar danos aos componentes da placa.<br /><br />`, 
ballon: `Retire o miolo de ignição.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Retirando o miolo de ignição.jpg`},

{title: ``, 
description: `Retire o imobilizador da motocicleta e leve-o para bancada.<br />Atenção: Ao raspar a borracha de vedação da placa, tome o máximo de cuidado para não causar danos aos componentes da placa.<br /><br />`, 
ballon: `Passo 1: Identifique o local onde será retirado a borracha de vedação.<br />Passo 2: Utilize um estilete para cortar a parte superior da borracha que protege a placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Identificando Imob 3.jpg`},

{title: ``, 
description: `Retire o imobilizador da motocicleta e leve-o para bancada.<br />Atenção: Ao raspar a borracha de vedação da placa, tome o máximo de cuidado para não causar danos aos componentes da placa.<br /><br />`, 
ballon: `Passo 3: Aqueça a borracha de vedação e em seguida utilize uma espátula de plástico para remover a borracha de vedação. Faça este procedimento até que tenha a visualização de algum componente da placa do imobilizador, e siga o próximo passo.<br /><br />Observação: Utilize a estação de solda apenas na parte superior da borracha de vedação para que não danifique os componentes da placa.<br /><br />Passo 4: Utilize uma espátula de plástico para remover o resto da borracha de vedação, assim evitando danos aos componentes da placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Desmontando Imob 1.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no imobilizador:<br />1 => Fio Vermelho<br />2 => Fio Amarelo<br />3 => Fio Azul<br />4 => Fio Verde<br />5 => Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Identificando os pontos de solda.jpg`},

{title: `Soldando o cabo MCU no imobilizador:`, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Soldando os fios do MCU no Imob.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o imobilizador, evitando danos ao imobilizador e ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Todos os acessórios conectados.jpg`},

{title: `Vedando o imobilizador:`, 
description: `Para vedar a abertura feita no imobilizador utilize um silicone de alta temperatura:`, 
ballon: `Insira o silicone de alta temperatura na abertura do imobilizador. É aconselhável que ele seja colocado em camadas para uma secagem adequada.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Vedando o Imob 1.jpg`},

{title: ``, 
description: `Para vedar a abertura feita no imobilizador utilize um silicone de alta temperatura:`, 
ballon: `Imobilizador totalmente coberto com o silicone de alta temperatura.`, 
image: `/images/Funções Específicas/OBD0086 - Geração e programação de chave Yamaha Moric 2/Vedando o Imob 2.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a Geração e Programação da Chave`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Yamaha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha`, `>Yamaha Moric 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha Moric 2`, `>Gerar/Prog.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;MCU&nbsp;no&nbsp;imob.`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;Transp.&nbsp;&nbsp;`,
`ID4D&nbsp;no&nbsp;modulo!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a Dedicação do Transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Yamaha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha`, `>Yamaha Moric 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha Moric 2`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Insira&nbsp;Transp.&nbsp;&nbsp;`,
`ID4D&nbsp;no&nbsp;modulo!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;O&nbsp;Transp.&nbsp;ID4D`,
`&nbsp;foi&nbsp;dedicado&nbsp;a`,
`&nbsp;imobilizadores&nbsp;`,
`YAMAHA&nbsp;-&nbsp;MORIC&nbsp;2`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a Programação da Chave`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Yamaha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha`, `>Yamaha Moric 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha Moric 2`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;MCU&nbsp;no&nbsp;imob.`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;Transp.&nbsp;&nbsp;`,
`ID4D&nbsp;no&nbsp;modulo!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do imobilizador,`,`O cabo MCU ou o imobilizador está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Erro no Imobilizador!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;Imobilizador!`,
`<br />`,
],
causes: [
`Os fios foram soldados incorretamente,`,`O cabo MCU foi conectado incorretamente ao OBDMap,`,`O cabo MCU está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se os parafusos que prendem o cabo MCU ao OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o ID60-ID4D.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `ERRO DE CRC!`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;DE&nbsp;CRC!`,
`<br />`,
`<br />`,
],
causes: [
`Houve falha ou interferência na comunicação com o transponder.`,],
solutions: [
`Verificar correta posição do transponder no módulo de transponder.`,]
},
{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já foi gerado e programado em outro imobilizador.`,],
solutions: [
`Utilize a função programar chave.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
