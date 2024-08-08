# Agregando JSON-Server al proyecto

1. Instalo json-server

```sh
npm install json-server@0.17.4 -D # -D -> Como dependencia de desarrollo.
```

2. Creo la carpeta y el archivo
Dentro de la raíz del proyecto

```sh
mkdir data
touch data/db.json
```

Tiene que quedar de la siguiente manera **data/db.json**

3. Agrego contenido en el archivo db.json

```json
{
    "productos": [
      { 
        "id": 1, 
        "nombre": "TV", 
        "categoria": "Electro", 
        "precio": 123.33 
      },
      { 
        "id": 2, 
        "nombre": "Radio", 
        "categoria": "Electro", 
        "precio": 432.55 
      },
      { 
        "id": 3, 
        "nombre": "DVD", 
        "categoria": "Electro", 
        "precio": 543.11 
      },
      { 
        "id": 4, 
        "nombre": "Notebook", 
        "categoria": "Electro", 
        "precio": 1327.66 
      }
    ]
}
```

4. Agregar en scripts, el comando de arranque del servidor

```json
"scripts": {
    "preview": "vite preview",
    "server": "json-server --watch data/db.json --port 8080"
},
```

5. Arrancando el servidor json. 
Abrir otra consola y colocar el siguiente comando

```sh
npm run server
```

6. Detener el servidor

Ctrl + C

# Motores de plantillas (Template Engine)

![Alt text](_ref/image.png)

## Handlebars

### Instalando la librería

```sh
npm install handlebars
```

### Importar la librería en nuestro proyecto

```js
import Handlebars from "handlebars";
```