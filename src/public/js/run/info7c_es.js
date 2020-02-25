//Capa
nomeCarga = `Manual Actualización -  OBD0007<br />Lectura del PIN y Programación de Llaves Peugeot 206 - 207 - C3`;
revCarga = `Rev. 6`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN de la BSI por pinza.`,
`Programación de llaves por OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4`,
years: `2004 a 2010`
},
{
manufacturer: `Peugeot`,
model: `207 1.4`,
years: `2007 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 1.4`,
years: `2002 a 2012`
},
{
manufacturer: `Citroen`,
model: `C3 1.5`,
years: `2002 a 2012`
},
{
manufacturer: `Citroen`,
model: `Picasso 1.6`,
years: `2006 a 2006`
},
{
manufacturer: `Citroen`,
model: `Picasso 2.0`,
years: `2006 a 2006`
},
];
applicationObs = ``;
applicationObs += createObs(`Observación: El vehículo debe tener el hardware de la BSI como mostrado en la página 6.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilice el chip PCF7936 (ID46) virgen.`, 
image: `/images/Transponders/PCF7936 Philips Virgem.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Fuente de alimentación. Necesaria para utilizar el OBDMap en banco de pruebas.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza soic 8. Conecta la memoria al OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice el cable universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII de los vehículos se encuentran en la área:<br />BSI se encuentra en la área B4.<br />En Citroen C3 el terminal OBDII se encuentra en la área A4.<br />En Peugeot el terminal OBDII se encuentra en la área F6.<br /> <br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4-B4-F6.jpg`},

{title: ``, 
description: `Observación: Eliminar el barniz de la memoria para evitar mal contacto.<br /><br /><br />`, 
ballon: `Localizando la memoria en la BSI.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Localizando a m emória no BSI.jpg`},

{title: ``, 
description: `Observación: Eliminar el barniz de la memoria para evitar mal contacto.<br /><br /><br />`, 
ballon: `Identificando el pino 1 de la memoria.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Identificando o pino 1.jpg`},

{title: ``, 
description: `Observación: Eliminar el barniz de la memoria para evitar mal contacto.<br /><br /><br />`, 
ballon: `Pinza conectada en la memoria. El pino 1 de la pinza debe coincidir con el pino 1 de la memoria.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Pinça conectada a memória.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = false;
services = 
[
{title: `Lectura del PIN:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN. El será utilizado para la programación de llaves.`
},
]
}, {title: `Programación de llaves:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;el&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN leído previamente y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`y&nbsp;pulsa&nbsp;OK`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Llave&nbsp;`,
`Programada!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Programar`,
`mas&nbsp;llaves?`,
`<br />`,
],
help: `Pulsa OK para más llaves o VOLTAR para salir.`
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Finalizado!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Pinza invertida!`,
screens: [
`&nbsp;`,
`Pinza`,
`invertida!`,
`<br />`,
],
causes: [
`La pinza realmente fue invertida en la memoria, esto es, pin 1 de la pinza no coincide con pin 1 de la memoria (pin 1 queda al lado del cabo rojo). `,],
solutions: [
`Revisar la posición correcta de la pinza en la memoria.`,``,]
},
{ label: `Cortocircuito!`,
screens: [
`&nbsp;`,
`Cortocircuito!`,
`<br />`,
`<br />`,
],
causes: [
`La pinza no fue conectada correctamente.`,`BSI o memoria está con avería.`,``,],
solutions: [
`Conferir correcta posición de la pinza en la memoria, todos los terminales de la pinza tienen que encontrar los terminales correspondientes en la memoria.`,]
},
{ label: `Falla en lectura!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`lectura!`,
`<br />`,
],
causes: [
`Mal contacto de la pinza con la memoria,`,`Mal contacto de la pinza con el OBDMap,`,`BSI o memoria con avería,`,`Los terminales de la memória o de la propia pinza pueden estar con resina o suciedad.`,],
solutions: [
`Revisar la correcta posición de la pinza en la memoria, todos los terminales de la pinza tienen que encontrar los terminales correspondientes de la memoria. `,`Revisar si los tornillos conectados a la pinza en OBDMap están bien fijos,`,`Revisar si los terminales de la memoria y de la pinza están limpios, sin resina o suciedad.`,]
},
{ label: `Archivo invalido inmovilizador !`,
screens: [
`&nbsp;`,
`Archivo&nbsp;invalido`,
`inmovilizador&nbsp;!`,
`<br />`,
],
causes: [
`BSI con archivo dañado.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
