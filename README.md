# FrontEnd - Módulo 3, Laboratorio Virtual 2

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.

## Descripción actividad

En `index.html` se añadió un `details` desplegable que contiene los botones e inputs correspondientes a las operaciones realizadas en esta actividad, los resultados de dichas operaciones se imprimen en consola.

### Programación funcional

* Se implementa la función `calculateTotalPatientCost()` que toma un paciente de ejemplo definido en un JSON y calcula el costo total de sus consultas, en base a un arreglo que almacena el costo de cada una de estas consultas. Se utiliza la constante `calculateHourCost` que utiliza currying para realizar el cálculo de cada hora. Esta función se puede utilizar desde la botonera en `index.html`.


* Se utiliza la función `calculateWaitTimes()` para calcular el tiempo de espera promedio en base a un arreglo de tiempos de espera en la consulta. Se utiliza la función flecha para realizar este cálculo de manera sencilla. Esta función se puede utilizar desde la botonera en `index.html`.

* Se utiliza la función recursiva `calculateTotalDoctorHours()` para calcular el total de horas disponibles al dia para cada doctor, en base a su arreglo de horarios disponibles. Esta información se despliega dinámicamente en la card de cada doctor en `team.html`.

* Se utiliza la función compuesta `calculateDiscount()` para calcular el costo final de la consulta de un doctor, realizando un descuento en base a la cantidad de consultas que ha realizado ese doctor. Esta información se despliega dinámicamente en la card de cada doctor en `team.html`.

### Eventos y asincronía

Se agrega un evento al `submit` del formulario de `contact.html`, el cual muestra una alerta una vez que se envía el formulario. Este evento se suscribe en un bloque `<script>` en `contact.html`, usando el id del formulario.

Se utiliza la función asincrónica `fetchDoctors()` para obtener los doctores a partir del archivo `doctores.json`, utilizando try/catch para manejar posibles errores en el manejo de la promesa. Una vez recibida la información de manera exitosa, se carga a la instancia de la clase `DoctorsArray`.


### Implementación de clases y polimorfismo

Se crea la clase `Doctor` con su información básica, incluyendo un getter y setter para la propiedad privada años de experiencia. Esta clase también incluye una función `getPacientesAtendidos()` que retorna la cantidad de pacientes atendidos, y una función `getInformacion()` que retorna la información general del doctor.

Además se crea la clase `Cirujano` que hereda de `Doctor` y la extiende mediante parámetros específicos de entrada: herramienta favorita y cantidad de operaciones. Se sobreescriben las función `getPacientesAtendidos()` para retornar la cantidad de operaciones realizadas, y también la función `getInformacion()` para incluir las características específicas del cirujano.

## Instrucciones de uso

Clonar el repositorio desde GitHub, o en su defecto descargar los contenidos como zip.

En caso de que no se tenga instalado, se requiere instalar `http-server` mediante el siguiente comando: npm install --global http-server

Luego, se puede ejecutar el comando `http-server` desde la raiz del proyecto para ejecutar el servidor local y visualizar la web en su navegador favorito.

## Estructura del proyecto

├── /css                 # Archivos css preprocesados con SASS <br>
├── /img                 # Imágenes <br>
├── /js                  # Librerías javascript <br>
├── /styles              # SASS con estructura 7-1, usando solo carpetas relevantes <br>
├──── /abstracts         # Variables y mixins <br>
├──── /base              # Estilos base / generales <br>
├──── /layout            # Estilos para estructuras semanticas <br>
├──── /pages             # Estilos para paginas especificas <br>
├──── /vendors           # Estilos de terceros incluidos (bootstrap) <br>
├──── main.scss          # Contiene todas las referencias de SASS <br>
├── index.html           # Página de inicio <br>
├── team.html            # Página del equipo médico <br>
├── contact.html         # Página de contacto <br>
└── README.md            # Ud. se encuentra aqui

## Creditos

Imágenes obtenidas de:

- [Pexels](https://www.pexels.com)
