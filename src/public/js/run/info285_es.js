//Capa
nomeCarga = `Manual Actualización -  OBD0285<br />`;
revCarga = `Rev. 2`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Ford`,
model: `EcoSport 1.6`,
years: `2015 a 2017`
},
{
manufacturer: `Ford`,
model: `EcoSport 2.0`,
years: `2015 a 2017`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: ``, 
image: `/images/Transponders/ID-4D.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
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
[{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Borrando&nbsp;Fallas`,
`&nbsp;&nbsp;&nbsp;&nbsp;Pasadas`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
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
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`Numero&nbsp;de&nbsp;fallas`,
`&nbsp;&nbsp;&nbsp;&nbsp;BSI:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Pruebas&nbsp;la`,
`&nbsp;Compatibilidad`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;Llaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Seleccione:`,
`Anadir&nbsp;llaves`,
`Borrar&nbsp;llaves`,
`Salir`,
],
help: ``
},
{lines: [
`Todas&nbsp;las&nbsp;Llaves`,
`&nbsp;seran&nbsp;borradas`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;ATENCION!`,
`&nbsp;Tenga&nbsp;en&nbsp;manos`,
`&nbsp;&nbsp;&nbsp;02&nbsp;llaves!`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`Utilice&nbsp;el&nbsp;chip`,
`ID4D-63&nbsp;especial`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
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
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
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
`Numero&nbsp;de&nbsp;Llaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;la`,
`primera&nbsp;clave&nbsp;a`,
`&nbsp;&nbsp;programar&nbsp;y`,
`&nbsp;&nbsp;&nbsp;pulse&nbsp;&lt;OK&gt;`,
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
`&nbsp;Quite&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;la`,
`segundo&nbsp;clave&nbsp;a`,
`&nbsp;&nbsp;programar&nbsp;y`,
`&nbsp;&nbsp;&nbsp;pulse&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
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
`&nbsp;Procedimiento`,
`&nbsp;&nbsp;Finalizado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Utilice cable CAN o adaptador A3 CAN!`,
screens: [
`Utilice&nbsp;cable&nbsp;`,
`CAN`,
`o&nbsp;adaptador&nbsp;A3&nbsp;`,
`CAN!`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla en la Programacion! `,
screens: [
`&nbsp;&nbsp;Falla&nbsp;en&nbsp;la`,
`&nbsp;Programacion!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Batería del control remoto está baja,`,`Las antenas de recepción del control remoto puede no estar en perfecito funcionamiento,`,`El control remoto no está en el interior del vehículo,`,`La llave no está en la ignición,`,`La programación no fue completada,`,`El chip no está programado en el coche,`,`Defecto en el coche, parte eléctrica, sensores de aproximación.`,],
solutions: [
`Revise la batería del control remoto,`,`Revise las antenas del sistema de aproximación en el techo del vehículo,`,`Ponga el control remoto en el interior del vehículo,`,`Ponga la llave en la ignición,`,`Revise si el chip está programado al vehículo,`,`Realice el procedimiento nuevamente,`,`Revise la parte eléctrica del coche, fusibles, sensores de aproximación, etc.`,]
},
{ label: `Falla comunica cion o vehiculo incompatible! `,
screens: [
`Falla&nbsp;&nbsp;&nbsp;comunica`,
`cion&nbsp;o&nbsp;vehiculo`,
`&nbsp;incompatible!`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Acceso Denegado! ** Press <OK>`,
screens: [
`Acceso&nbsp;Denegado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
`El tablero no es compatible con la aplicación.`,],
solutions: [
`Revise la aplicación.`,]
},
{ label: `Vehiculo incompatible! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Vehiculo`,
`&nbsp;incompatible!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Error en la red CAN!!! `,
screens: [
`&nbsp;&nbsp;Error&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;red&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
