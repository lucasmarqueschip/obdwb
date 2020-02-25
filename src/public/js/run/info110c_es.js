//Capa
nomeCarga = `Manual Actualización -  OBD0110<br />Lectura del PIN del Calculador 2 Renault (95040)`;
revCarga = `Rev. 2`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN del calculador 2 95040.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2011 a 2013`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2011 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observación: Algunos vehículos citados arriba pueden no tener el calculador 2 95040. Revise el modelo de la memoria del calculador para identificar.`, undefined, undefined);




resources = [
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
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Desmontando o Calculador.jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando las 4 trabas que asegura la cubierta del calculador.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando as 4 travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice un destornillador para destrabar el calculador.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/solte as travas.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando a memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice un estilete para eliminar la resina de los terminales de la memoria.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Removendo a resina dos terminais da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte la pinza en la memoria 95040.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Conecte a pinça na memoria.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = false;
services = 
[
{title: `Lectura del PIN`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Conecta&nbsp;pinza`,
`en&nbsp;memoria&nbsp;95040`,
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
`Pin:`,
`************`,
`<br />`,
],
help: `Escriba el PIN`
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Cortocircuito!`,
screens: [
`&nbsp;`,
`Cortocircuito!`,
`<br />`,
`<br />`,
],
causes: [
`El clip no está conectado correctamente,`,`Calculador o memoria con avería. `,``,],
solutions: [
`Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben apoyarse a los terminales correspondientes de la memoria.`,]
},
{ label: `Pinza invertida!`,
screens: [
`&nbsp;`,
`Pinza`,
`invertida!`,
`<br />`,
],
causes: [
`La pinza fue conectada invertida en la memoria, o sea, el pin 1 de la pinza no coincide con el pin 1 de la memoria (el pin 1 se queda del lado rojo del cable),`,`La pinza fue conectada en otro componente,`,`Memoria o Calculador con avería.`,],
solutions: [
`Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben apoyarse a los terminales correspondientes de la memoria,`,`Revise el buen estado del Calculador.`,]
},
{ label: `Falla en Programacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`Programacion!`,
`<br />`,
],
causes: [
`Malo contacto de la pinza con la memoria,`,`Malo contacto de la pinza con el OBDMap,`,`Memoria o módulo con problema,`,`La pinza fue conectada en otro componente, (si existir otro componente SOIC8 en la placa)`,`Los terminales de la memoria o de la própia pinza pueden estar con resina o suciedad.`,],
solutions: [
`Revisar la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben enconstarse a los terminales correspondentes de la memoria,`,`Revisar si los tornillos que fijan la pinza al OBDMap están bien fijos,`,`Revisar el estado del módulo,`,`Revisar si los terminales de la memoria y de la pinza están limpos, con resina o sucios.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
