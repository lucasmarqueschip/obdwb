//Capa
nomeCarga = `Manual Actualización -  OBD0133<br />`;
revCarga = `Rev. 6`;
dataManual = `January 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Frontier 2.5`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `Versa 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `March 1.0`,
years: `2016 a 2017`
},
{
manufacturer: `Nissan`,
model: `March 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8`,
years: `2009 a 2013`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0`,
years: `2005 a 2013`
},
{
manufacturer: `Nissan`,
model: `Gran Livina`,
years: `2009 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: `Utilice el chip virgen PCF7936 - ID46.`, 
image: `/images/Transponders/Transponder PCF7936 Carvão.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal connect`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-D6.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0133 Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD/OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = false;
services = 
[
{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`y&nbsp;pulsa&nbsp;OK`,
`<br />`,
],
help: ``
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
`Codigo&nbsp;BCM:&nbsp;*****`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;Chip&nbsp;PCF7936&nbsp;virgen!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Llaves:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`Pulsa&nbsp;OK!`,
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
help: ``
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
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;la&nbsp;llave&nbsp;n`,
`y&nbsp;abre&nbsp;switch!`,
`<br />`,
],
help: ``
},
{lines: [
`Inserta&nbsp;y`,
`conecta&nbsp;llave&nbsp;*`,
`por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;la&nbsp;llave&nbsp;n`,
`y&nbsp;abre&nbsp;switch!`,
`<br />`,
],
help: ``
},
{lines: [
`Abre&nbsp;switch&nbsp;por&nbsp;5&nbsp;`,
`segundos,`,
`cerra&nbsp;switch&nbsp;por&nbsp;5&nbsp;`,
`segundos&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Abre&nbsp;switch&nbsp;por&nbsp;30&nbsp;`,
`segundos&nbsp;para&nbsp;finalizar`,
`la&nbsp;programación&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Finalizado!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;Chip&nbsp;PCF7936&nbsp;virgen!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`Pulsa&nbsp;OK!`,
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
help: ``
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
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Inserta&nbsp;y`,
`conecta&nbsp;llave&nbsp;*`,
`por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;llaves:&nbsp;*`,
`Programar&nbsp;más?`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)SI`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;y&nbsp;abre&nbsp;switch!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Finalizado!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Utilize el cable CAN!`,
screens: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;cable&nbsp;CAN!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la&nbsp;Comunicacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `PIN incorrecto!`,
screens: [
`&nbsp;`,
`PIN&nbsp;incorrecto!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
