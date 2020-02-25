//Capa
nomeCarga = `Manual Actualización -  OBD0214<br />Programación de Llaves de proximidad Ford Pats 6 T2`;
revCarga = `Rev. 1`;
dataManual = `January 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del número de llaves programadas en el vehículo.`,
`Borrar todas las llaves del vehículo.`,
`Añadir nuevas llaves para el vehículo.`,
``,
`Observación: Para el procedimiento de adición después del pago de todas las claves, se debe programar al menos dos llaves al vehículo.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Ford`,
model: `Edge SEL 3.5`,
years: `2012 a 2014`
},
{
manufacturer: `Ford`,
model: `Edge Limited 3.5`,
years: `2012 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Chave.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A9. Usado para conectar el OBDMap al vehículo para procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A9 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios conectados para procedimiento via diagnóstico.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A9 CONECTADOS .jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El Terminal OBD2 está situado en la posición C5.<br /><br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Procedimento 1.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = false;
services = 
[
{title: `Lectura del numero de llaves de proximidad`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Selecciona:`,
`Numero&nbsp;de&nbsp;Llaves`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;start/stop&nbsp;para&nbsp;cerrar&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves de proximidad actualmente programadas en el vehículo.`,
},
]
}, {title: `Borrado de llaves de proximidad`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Selecciona:`,
`Borrar&nbsp;proximity`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`Todas&nbsp;llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir`,
`<br />`,
],
help: `Las llaves de proximidad ya programadas serán borradas.`,
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;start/stop&nbsp;para&nbsp;cerrar&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Espere:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Espera unos 10 minutos.`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Llaves&nbsp;borradas&nbsp;con&nbsp;éxito!`,
`<br />`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`OK-&nbsp;Anadir&nbsp;Llaves?`,
`Volta-&nbsp;Salir&nbsp;`,
`<br />`,
],
help: `Si selecciona "OK", siga el paso 7
añadir llaves.
Si selecciona "Volta" siga el siguiente paso.
`,
},
]
}, {title: `Añadir nuevas llaves nuevas llaves de proximidad`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Seleccione:`,
`Llave&nbsp;de&nbsp;proximidad`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Utilizar&nbsp;la&nbsp;llave&nbsp;original!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Ver la llave utilizada en la página 3`,
},
{lines: [
`Inserta&nbsp;la&nbsp;llave`,
`en&nbsp;slot&nbsp;segun`,
`el&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Ver posición del slot en la página 6. Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;start/stop&nbsp;para&nbsp;cerrar&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Espere:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Espera unos 10 minutos.`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Llave&nbsp;anadida`,
`con&nbsp;exito!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mas?`,
`(X)NO&nbsp;&nbsp;/&nbsp;&nbsp;(OK)SI`,
`<br />`,
],
help: `Si "SI" vaya el seguiente paso.
Si "NO" vaya al paso 19.`,
},
{lines: [
`Quite&nbsp;la`,
`llave&nbsp;del`,
`vehículo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa OK`,
},
{lines: [
`&nbsp;`,
`Insertar&nbsp;la&nbsp;siguiente&nbsp;llave&nbsp;`,
`en&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Inserta el seguiente llave a programar en slot. Pulsa OK!`,
},
{lines: [
`Pulsa&nbsp;el&nbsp;*`,
`de&nbsp;todos&nbsp;los&nbsp;`,
`Controles&nbsp;Remoto!`,
`<br />`,
],
help: `Pulse el botón abrir del Control Remoto de todas las llaves programadas.`,
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves de proximidad actualmente programadas en el vehículo.`,
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Concluido!`,
`Desconecte&nbsp;OBD&nbsp;`,
`<br />`,
],
help: `El procedimiento se completó con éxito. Desconecte el cable del terminal OBD2.`,
},
{lines: [
`Llave&nbsp;no`,
`programada!`,
`Repetir?`,
`(X)NO&nbsp;/&nbsp;(OK)SI`,
],
help: ``,
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
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
{ label: `Error en el acceso!`,
screens: [
`&nbsp;`,
`Error&nbsp;en&nbsp;el&nbsp;acceso!`,
`<br />`,
`<br />`,
],
causes: [
`No se pudo acceder el modo de programación del vehículo.`,],
solutions: [
`Repitir el procedimiento.`,]
},
{ label: `Falla en la Programacion! Repetir? <OK>SI / <X>NO`,
screens: [
`Falla&nbsp;en&nbsp;la`,
`Programacion!`,
`Repetir?`,
`&lt;X&gt;&nbsp;NO&nbsp;/&nbsp;&lt;OK&gt;&nbsp;SI`,
],
causes: [
`Eliminación de las llaves no se completó correctamente.`,],
solutions: [
`Repitir el procedimiento.`,]
},
{ label: `llave no programada! `,
screens: [
`llave&nbsp;no`,
`programada!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `Fallas en el Procedimiento!`,
screens: [
`&nbsp;`,
`Fallas&nbsp;en&nbsp;el&nbsp;&nbsp;Procedimiento!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Todos los intentos de agregar llaves fallaron,`,`Defecto en el vehículo, parte eléctrica.`,``,],
solutions: [
`Checar si la llave utilizada es correcta,`,`Checar parte eléctrica del vehículo, fusibles, etc.`,``,]
},
{ label: `Utilize el cable A9`,
screens: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;cable`,
`A9!`,
`<br />`,
],
causes: [
`El cable utilizado no es correcto.`,``,],
solutions: [
`Conecte el cable A9 y repita el procedimiento.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
