//Capa
nomeCarga = `Manual Actualización -  OBD0014<br />TOYOTA Corolla - Programación de Llaves y  Control Remoto`;
revCarga = `Rev. 4`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Añadir llaves.`,
`Borrar llaves.`,
`Programar control remoto.`,
`Borrar control remoto.`,

];
introObs = createObs(`Observaciones:`, ``, `- La función de borrar las llaves en el sistema inmovilizador, conserva sólo la llave válida que efectuó el procedimiento.`)


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Corolla 1.6 (Chaves)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Chaves)`,
years: `2009 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Chaves)`,
years: `2011 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.6 (Telecomando)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Telecomando)`,
years: `2009 a 2016`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Telecomando)`,
years: `2011 a 2016`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilice el chip ID 4D70.`, 
image: `/images/Transponders/4D-70.jpg`},

{title: ``, 
description: ``, 
ballon: `Para vehículos con esa llave, esa función realiza la programación de llaves y control remoto.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando.jpg`},

{title: ``, 
description: ``, 
ballon: `Para vehículos con esa llave, esa función realiza solamente la programación de control remoto. Para realizar la programación de llaves, utilice la función OBD0083.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando 2.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Conecte el cable universal al adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte el cable universal al adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII del vehículo Corolla está situado en la posición A5.<br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Borrando las llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Borrar Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;una`,
`&nbsp;&nbsp;&nbsp;llave&nbsp;valida`,
`<br />`,
],
help: `Hay que tener una llave programada para efectuar el procedimiento.`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Quite&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Cerra switch, quite la llave y pulsa OK  en 10 segundos.`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Inserta, abre switch y Pulsa OK en 10 segundos.`
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
`Quite&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Cerra switch, quite la llave y pulsa OK  en 10 segundos.`
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`
},
]
}, {title: `Añadindo Llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;una`,
`&nbsp;&nbsp;&nbsp;llave&nbsp;valida`,
`<br />`,
],
help: `Hay que tener una llave programada para efectuar el procedimiento.`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Quite&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Cerra switch, quite la llave y pulsa OK  en 10 segundos.`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Quite&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Cerra switch, quite la llave y pulsa OK  en 10 segundos.`
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;nueva`,
`llave&nbsp;y&nbsp;pulsa&nbsp;OK`,
`<br />`,
],
help: `Inserta, abre switch y Pulsa OK en 10 segundos.`
},
{lines: [
`&nbsp;`,
`Espere&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01&nbsp;minuto!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`
},
]
}, {title: `Borrando el control remoto`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Borrar Control`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`ATENCION!Cerrar`,
`&nbsp;todas&nbsp;puertas!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Pulsa&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;<img class="imgCarac" src="images/padlockClose.png" />&nbsp;&nbsp;&nbsp;&nbsp;`,
`juntos&nbsp;4x&nbsp;e&nbsp;`,
`pulsa&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;1x`,
`<br />`,
],
help: `Pulsa Abrir/Cerrar juntos 4x y Abrir 1x (Abrir y Cerrar son representados por candados abierto y cerrado en la pantalla del OBDMap).`
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`
},
]
}, {title: `Programando el control remoto`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`ATENCION!Cerrar`,
`&nbsp;todas&nbsp;puertas!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Pulsa&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;<img class="imgCarac" src="images/padlockClose.png" />&nbsp;&nbsp;&nbsp;&nbsp;`,
`juntos&nbsp;4x&nbsp;e&nbsp;`,
`pulsa&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;1x`,
`<br />`,
],
help: `Pulsa Abrir/Cerrar juntos 4x y Abrir 1x (Abrir y Cerrar son representados por candados abierto y cerrado en la pantalla del OBDMap).`
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Utilice cable CAN o adaptador A3 CAN!`,
screens: [
`Utilice&nbsp;cable&nbsp;`,
`CAN`,
`o&nbsp;adaptador&nbsp;A3&nbsp;`,
`CAN!`,
],
causes: [
`Los cables utilizados no son cable universal + adaptador A3,`,`Malo contacto del cable universal + adaptador A3 en el OBDMap.`,],
solutions: [
`Revise si los cables utilizados son cable universal + adaptador A3,`,`Revise la conexión del cable en el OBDMap e en el terminal OBDII del vehículo,`,`Revise el buen estado del cable universal y adaptador A3,`,`Revise la conexión del cable universal + adaptador A3 en el OBDMap.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
