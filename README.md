npm run dev

### Libreria de Formularios

react hook form
https://react-hook-form.com/

https://codigofacilito.com/videos/introduccion-a-hooks

### Clase 30

Hook

Un hook es una funcion que retorna funciones , valores ,objectos o tipo de dato dentro de componentes . Y siguen reglas .

### Clase 31

Reglas de los Hooks

- Los hooks se tiene que llamar en nivel superior
- No usar hooks dentro de funcion , solo en Componentes de React
- No se puede llamar hooks de dentro de condicionales (if(){}else{}) .
-

### Clase 32

Como funciona useEffect

- no debe usar async porque es un anti-patron
- se recomienda tener una funciona async dentro de useEfffect
- setup : callback
- [] : dependencias de variables
- usado para llamado a la api , conexion a librerias de terceros .
- Limpiar dependencia cuando se destruye un component.
- Conexion y desconexion de servidor.

### Clase 33

Creando Hook reusable

- Podemos crear hooks personlizados
- Implementar y logica de crear un hook
- Aumentar la reusabilidad del codigo
- Encapsulamiento y abstraido del codigo
- un hook si puede llamar un hook

### Clase 35

Que son las ref

- es un hook
- sirve para referencial algo
- es para utlizado para referencia valores funcions objectos
- devuelve un objecto
- actualiza el valor sin la necesidad de que sea el valor ractivo
- se actualiza el valor pero no el component
- en useState si se cambia de valor , el component se actualiza(render la pagina).
- no hace re-rendeo de la pagina
- son mutables , se puede modificar
- no se debe usar ref.current en HTML-JSX

### Clase 38

implementado forwarred

- guarda elementos para cambiar medida , atributos html
- manipulado para el padre del componte para utilizar la referencia.
-

### Clase 39

implementacion de useImperativeHandle

- usado para crear component reusables
- El componente padre puede acceder a valores del componente hijo
- se implementa en el hijo y se llamar o usa en el padre .
-

### Clase 40 - 41

Introduccion a Estilo

### Clase 42

Implementando Modulo de CSS

- Modulos de css , esto archivos crean clases unicas con un Hash unica que no se repite. para evitar mezcla con otro clase.
- archivocss.module.css
- se recomienda usar camelCase
- No usar "-" nombrar la clase css

# Modulo 07

### Clase 43

Como funciona el Routing

- uso de react router
  https://reactrouter.com/en/main
- no se usa en rutas camelCase sino "-"
- Cambio de rutas
- Apilar rutas
- Arreglo de Push - Pop
-

### Clase 44

Qué es el Client Side Routing

- componetes para cambio de rutas.
- permite escalar varias rutas
- el router crear un arreglo de rutas
-

### Clase 44

Configuracion routing en nuestro proyecto

### Clase 48

definiendo parametros en las rutas

- rutas con parametros
- el parametro si usa camelCase
- path: "/detail/:eventId",
- le enviamos un argumento en el navegado
-

### Clase 49

rutas anidadas

- se tiene especificar nuevas rutas dentro de la ruta principal
- Decediente directo
- /profile/my-account
- uso de Outlet en component padre
-

### Clase 50

Obteniendo valores de los parametros : useParams

- leer ID desde url
-
-
-

### Clase 51 - 52

- Creacion de usuario de ticket y APi
- Uso de postman

### Clase 53

useFetch

- Usado para llamar a una api
- Libreria similar axios
- Objecto que esta en windwos(navegador)
- recibe un url de la api
- la respuesta es una promesa del servidor
- la promesa se convierte en formato JSON
- tiene muchos parametros
- puede enviar para guarda en una base de datos .
-

### Clase 54

- Incrementar la reusabilidad
-

### Clase 55

Agregando Paginacion

-

### Clase 57

- Conversion de fechas
- date fns

https://date-fns.org/

# Modulo 08

### Clase 59

Qué es un State Management

- Soluciona la problema para solicitar la misma informacion
- ReactJS dio la solucion llamado Store(como una base de datos)
- Como una fuente de la verdad
- Metodologia de centralizar todo en solo lugar
- Librerias de manejadores de estados.
  - Redux
  - Zustand
  - Mobx
  - Recoil

### Clase 60

Qué es Zustand y Cómo Funciona

- tiene multiples store para actualizar los componentes
-

### Clase 61

Instalando Zustand

-

### Clase 63

Agregando icono de like y unlike a los eventos

-
