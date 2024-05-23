# INF301-CodeSquad-Back
Backend para caso "Sistema de Obtención de Horas Médicas y Control de Comisiones" para el ramo Lenguajes de programación en WWW (INF301) | UTFSM CC 2024-1

## Requerimientos
- Docker
- Node (si se quiere ejecutar sin docker) 

## Para ejecutar
- Recordar agregar url de mongo para credenciales en: scr> server.js> url (~línea 14)
- **Vía Docker**, en raiz de este repositorio: 
  - Solo primera ocación o si ubieron cambios en módulos de [src>package.json](src/package.json) : `docker-compose build`
  - Para levantar el servidor: `docker-compose up`, debería estar disponible en [localhost:3000/graphql](http://localhost:3000/graphql)  (automaticamente se actualiza servidor ante modificaciones)

- **Vía Node**, en carpeta src de este repositorio: 
  - Solo primera ocación o si ubieron cambios en módulos de [src>package.json](src/package.json) : `npm install`; si existen incompatibilidades, desinstalar librerias no ocupadas en proyecto o crear issue para ver opción de actualizar bibliotecas.
  - Para levantar el servidor: `npm start`

## En caso de problemas en módulos
- Si se utiliza proyecto por defecto y muestre error de módulo no encontrado: crear carpeta vacia `node_modules` en carpeta scr.
- Si se utiliza proyecto modificado y muestre error de modulo no encontrado: revisar [src>package.json](src/package.json) y revisar si se encuentra para instalar, si no esta añadirlo, si se encuentra, generar un build nuevo con `docker-compose build` para actualizar las dependencias.

## Para contribuir en desarrollo
- *Idealmente generar una rama para luego crear un pull-request.* De lo contrario avisar internamente para considerarlo.

- Estructura del proyecto y usos:

```
raiz
├── src
│   ├── archivos_gql                  //ESPACIO DE TRABAJO PRINCIPAL:
|   |   ├── *.js                      //1. Archivos intermedios que agrupan siguientes,
|   |   └── grupo x                   //2. Carpeta por cada entidad que contiene:
│   |       ├── funcion_mutation.js   //- Rutinas de mutaciones
|   |       ├── funcion_query.js      //- Rutinas de consultas
│   |       ├── input.js              //- Estructura de entradas
│   |       ├── mutation.js           //- Definiciones de mutaciones
│   |       ├── query.js              //- Definiciones de consultas
│   |       └── tipos.js              //- Estructuras intermedias sin modelo
|   |
│   ├── models          //Conjunto definiciones para mongodb
│   |   └── entidad.js  //Definición de entidad, puede importarse en archivos_gql
│   ├── node_modules    //En gitignore (crear local si es requerido)
│   ├── package.json    //Librerias utilizadas
│   └── server.js       //Servidor principal con import de modelos y gql
|
├── .gitignore
├── docker-compose.yml  //Para levantar servicio
├── readme.md           //Este archivo
├── ejemplos_api.md     //Ejemplos de cada función GQL
└── dockerfile          //Para crear imagen
```

## Probar graphql
- [localhost:3000/graphql](http://localhost:3000/graphql)

### Ejemplo ejecución de graphql

A continuación se listan ejemplos para saber si esta funcionando graphql.

>Nota: La lista completa de la API se encuentra en [ejemplos_api_gql.md](ejemplos_api_gql.md)

**Operación**
```graphql

mutation Mutation($setInput: ModelOneInput) {
  addEntity(input: $setInput) {
    nombre
  }
}

query GetEntities {
  getEntities {
    id
    nombre
  }
}

query GetUsuarios {
  getUsuarios {
    id
    usuario
    nombre
    rut
    mail
  }
}

query GetRol {
  getRol(input: {nrol:"2"}) {
    id
    rol
    nrol
  }
}

mutation AddRol {
  addRol(input: {rol:"Cajero",nrol:"4"}) {
    id
    rol
    nrol
  }
}

mutation UpdateRol {
  updateRol(nrol: "4",rol:"Cajero") {
    id
    rol
    nrol
  }
}

mutation DeleteRol {
  deleteRol(nrol: "4") {
    id
    mensaje
  }
}

query GetUsuarioRol {
  getUsuarioRol(input: {nrol:"1"}) {
    id
    usuario
    nombre
    rut
    mail
    nrol
  }
}

query GetUsuarioRut {
  getUsuarioRut(input: {rut:"12345678-9"}) {
    id
    usuario
    nombre
    rut
    mail
    nrol
  }
}

query GetRoles {
  getRoles {
    id
    rol
    nrol
  }
}

query Query($getEntityId: String!) {
  getEntity(id: $getEntityId) {
    id
    nombre
  }
}
```

**Variables**
```json
{
  "getEntityId": "66495e15deff23f5f886c189"
}
{
  "setInput": {
    "nombre": "nombre ejemplo"
  }
}
```

Si se ejecuta la mutación se creará en la BD el objeto, luego al ejecutar la primera query se obtendrán los registros guardados.
