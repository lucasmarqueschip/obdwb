//Capa
nomeCarga = `Manual Carga -  OBD0071<br />Corolla 2009/2011 - Programação da 1ª Chave`;
revCarga = `Rev. 2`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar a 1ª chave no sistema de imobilizador. `,
`É possível programar a 1ª chave no sistema de imobilizador sem a necessidade de ter uma chave válida. Aplica-se, por exemplo, no caso de perda de todas as chaves do veículo. Depois de programada a 1ª chave através desta função, outras chaves podem ser adicionadas através da carga OBD0014 TOYOTA Corolla - Programação de Chaves e Telecomandos (procedimento por diagnóstico).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Corolla 1.8`,
years: `2009 a 2011`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0`,
years: `2009 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O transponder utilizado no sistema, é o 4D-60 dedicado especificamente ao Corolla 2009.<br />Observação: este tranponder tem que ser adquirido já preparado, pois as máquinas disponíveis no mercado não fazem esta dedicação.`, 
image: `/images/Transponders/4d-60 Corolla 2009.jpg`},

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
image: `/images/Instrucao Modulo de Transponder/MT - Chave Toyota 4D CERTO.jpg`},

{title: `Passos para desmontar o painel (Tabelier)`, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 1: Remova o porta luva.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 1.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 2: Remova o duto de ar da extremidade direita.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 2.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 3: Remova a moldura M1 do lado direito.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 3.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 4: Remova a moldura M2 do lado direito.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 4.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 5: Remova o parafuso 1.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 5.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 6: Remova o porta objetos.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 6.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 7: Atenção: Após remover o porta objetos, não se esquecer de remover o conector do Airbag como mostra a foto (ao remover esse conector não ligar a ignição do veículo, até que o mesmo seja conectado).`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 7.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 8: Utilize uma chave biela "L" 12 mm, para remover o parafuso 2 que prende o airbag.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 8.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 9: Remova o parafuso 3.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 9.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 10: Remova a moldura M3 do lado direito superior.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 10.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 11: Remova a moldura M4 do lado esquerdo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 11.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 12: Remova a moldura M5 do lado esquerdo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 12.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 13: Remova os difusores de ar centrais.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 13.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 14: Remova o conector do pisca alerta como mostra a foto abaixo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 14.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 15: Remova a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 15.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 16: Remova os parafusos 4 e 5, para desprender o painel.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 16.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 17: Levante o painel e remova o conector que o prende.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 17.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 18: Retire o painel A1.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 18.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 19: Remova o duto de ar do lado esquerdo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 19.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 20: Retire o parafuso 6, utilizando uma chave Philips.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 20.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 21: Remova a moldura M6 do lado esquerdo superior.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 21.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 22: Remova o conector como mostra a foto abaixo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 22.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Atenção: Com o auxilio de outra pessoa, retire o painel (Tabelier) inteiro. Aquele que estiver no banco do passageiro deverá sustentar o peso do módulo do airbag durante a remoção do painel (Tabelier), evitando possíveis danos ao mesmo. Se o painel (Tabelier) ao ser levantado oferecer qualquer resistência, pare a ação no mesmo momento, não o force de nenhuma forma, procure identificar a causa da resistência, conferindo todos os passos anteriores.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 23.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `O painel (Tabelier) do corolla deve estar totalmente removido, como a foto ao lado.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 24.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 24: O imobilizador encontra se a cerca de 30 cm entre o feltro e a traseira da caixa de ar, como indica a seta.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 25.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 25: Remova a vedação da caixa de ar.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 26.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 26: Utilizando um gancho de chaveiro (moldado em arame de aço) e uma lâmina de ferro ou plástico, como no caso utilizamos uma régua para introduzir entre a parede traseira da caixa de ar e o feltro, que isola o compartimento do motor, a régua servirá para que o imobilizador deslize.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 27.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Passo 27: Após enganchar o imobilizador utilize a régua como uma plataforma de apoio, assim fazendo com que deslize para a superfície.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Passos para desmontar o painel (Tabelier) 28.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel (Tabelier) do veículo. Este item ilustra passo a passo o procedimento.<br />A estrutura do painel (Tabelier) é fixada com:<br />Travas fixadoras (apenas com a pressão dos dedos as travas serão desencaixadas).<br />6 parafusos (utilize uma chave Philips de espessura média e uma chave Biela "L" 12mm para a remoção dos parafusos).<br />4 conectores elétricos (terão que ser desconectados).`, 
ballon: `Segurando o imobilizador com uma das mãos, utilize a outra para  desconectá-lo.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Retirando o imobilizador.jpg`},

{title: `Identificando o imobilizador do Corolla 2009`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Identificando o imobilizador do Corolla 2009.jpg`},

{title: `Desmontando o imobilizador:`, 
description: ``, 
ballon: `Com o auxilio de uma chave de fenda, abra o imobilizador.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Desmontando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Placa do imobilizador solta da caixa.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Desmontando o imobilizador 2.jpg`},

{title: `Localizando os pontos para soldagem:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Soldando o cabo MCU no imobilizador`, 
description: ``, 
ballon: `Fios do cabo MCU soldados no imobilizador corretamente. Não trocar as posições dos fios.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Soldando o cabo MCU no imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como mostra a foto, para não terem contato com o imobilizador, evitando falhas durante o procedimento.`, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Cabo MCU conectado ao OBDMap.jpg`},

{title: `Todos os acessórios conectados com o OBDMap`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0071 Corolla 2009/Todos os acessórios conectados com o OBDMap.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Programação da 1ª Chave`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Imob Corolla09`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob Corolla09`, `>Gerar 1a chave`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;imob.`,
`atraves&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`Use&nbsp;transponder`,
`4D-60&nbsp;especifico`,
`p/&nbsp;Corolla&nbsp;2009`,
`segundo&nbsp;manual!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`POSICIONE&nbsp;TRANSP`,
`4D&nbsp;E&nbsp;PRESS.&nbsp;OK.`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`LENDO&nbsp;4D-60`,
`AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;Imob.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Procedimento concluído, o sistema de
imobilizador já tem a 1ª chave válida.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ERRO LEIT. 4D-60 (OK) P/ REPETIR`,
screens: [
`&nbsp;`,
`ERRO&nbsp;LEIT.&nbsp;4D-60`,
`(OK)&nbsp;P/&nbsp;REPETIR`,
`<br />`,
],
causes: [
`O transponder não é o 4D-60 dedicado ao Corolla 2009,`,`Transponder não está posicionado corretamente no módulo de transponder.`,],
solutions: [
`Verifique o transponder que está sendo utilizado, `,`Caso esteja usando uma chave no módulo de transponder, certifique se a mesma contém um transponder.`,]
},
{ label: `4D IMCOMPATIVEL! USE TIPO CORRETO`,
screens: [
`&nbsp;`,
`4D&nbsp;IMCOMPATIVEL!`,
`USE&nbsp;TIPO&nbsp;CORRETO`,
`<br />`,
],
causes: [
`O transponder utilizado não é dedicado especificamente ao Corolla 2009.`,],
solutions: [
]
},
{ label: `ERRO GRAV. IMOB.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;GRAV.&nbsp;IMOB.`,
`<br />`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o imobilizador,`,`Mau contato no cabo MCU com o OBDMap,`,`Imobilizador com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do imobilizador,`,`O cabo MCU ou imobilizador está com problema.`,],
solutions: [
`Verificar a correta posição dos fios no imobilizador,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `ERRO TIMEOUT PP`,
screens: [
`&nbsp;`,
`ERRO&nbsp;TIMEOUT&nbsp;PP`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO TIMEOUT PG.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;TIMEOUT&nbsp;PG.`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO INT. COD.E1`,
screens: [
`&nbsp;`,
`ERRO&nbsp;INT.&nbsp;COD.E1`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERRO INT. COD.E2`,
screens: [
`&nbsp;`,
`ERRO&nbsp;INT.&nbsp;COD.E2`,
`<br />`,
`<br />`,
],
causes: [
`O problema está relacionado a erros internos do equipamento.`,],
solutions: [
`Desligue-o e ligue-o novamente, se o erro persistir, contate o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
