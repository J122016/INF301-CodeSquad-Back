# INF301-CodeSquad-Back
Backend para caso "Sistema de Obtención de Horas Médicas y Control de Comisiones" para el ramo Lenguajes de programación en WWW (INF301) | UTFSM CC 2024-1

## Requerimientos
- Docker
- Node(si se quiere ejecutar sin docker) 

## Para ejecutar
- Recordar agregar url de mongo para credenciales en: scr> server.js> url (~línea 14)
- Vía docker, en raiz de este repositorio: 
  - Solo primera ocación o si ubieron cambios en modulos de scr>package.json : `docker-compose build`
  - Para levantar el servidor: `docker-compose up`, debería estar disponible en localhost:3000  (automaticamente se actualiza servidor ante modificaciones)

## En caso de problemas en módulos
- Si se utiliza proyecto por defecto y muestre error de módulo no encontrado: crear carpeta vacia `node_modules` en carpeta scr.
- Si se utiliza proyecto modificado y muestre error de modulo no encontrado: revisar scr>package.json y revisar si se encuentra para instalar, si no esta añadirlo, si se encuentra, generar un build nuevo con `docker-compose build` para actualizar las dependencias.


## Probar graphql
- localhost:3000/graphql

### Ejemplo ejecución de graphql

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
