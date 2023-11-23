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
