```markdown
# 📦 API REST de INFX

Una API REST construida con **Node.js**, **Express** y **MongoDB**, desplegada gratuitamente en [Render](https://render.com). Esta API gestiona productos o ítems mediante rutas CRUD básicas.

---

## 🌐 URL en Producción

> 🟢 https://prueba-tecnica-infx.onrender.com

---

## 📁 Estructura del Proyecto

```
/server
  /config
    db.js                   // Conexión a MongoDB
  /controllers
    item.controller.js      // Archivo donde estan los controllares de las peticiones API
  /middleware
                            // Espacio para archivos middleware futuros
  /models
    item.model.js           // Archivo donde se almacena el modelo para creación de items por API
  /routes
    item.routes.js          // Rutas del recurso "items"
  index.js            // Entrada principal del servidor
.env                // Variables de entorno (solo local)
```


/Prueba-tecnica-INFX │
├── /server │
  ├── /config │
    └── db.js # Conexión a MongoDB │
  ├── /controllers │
    └── item.controller.js # Archivo donde están los controladores de las peticiones API │
  ├── /middleware │
    └── (vacío por ahora) # Espacio para archivos middleware futuros │
  ├── /models │
    └── item.model.js # Archivo donde se almacena el modelo para creación de ítems por API │
  ├── /routes │
    └── item.routes.js # Rutas del recurso "items" │
  └── index.js # Entrada principal del servidor │
├── .env # Variables de entorno (solo local) ├── package.json # Dependencias y scripts del proyecto └── README.md # Documentación del proyecto

---

## 🚀 Cómo Usar Localmente

1. Clona el repositorio:

```bash
git clone https://github.com/devDeam/Prueba-tecnica-INFX.git
cd Prueba-tecnica-INFX
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y agrega tu URI de MongoDB:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/miapp?retryWrites=true&w=majority
PORT=3000
```

4. Inicia el servidor:

```bash
node index.js
```

---

## 📡 Endpoints

| Método | Ruta                   | Descripción                  |
|--------|------------------------|------------------------------|
| GET    | `/`                    |Prueba de conexión y principal|
| POST   | `/create`              | Crear un nuevo ítem          |
| GET    | `/api/items?q=:query`  | Buscar un item por query     |
| GET    | `/api/items/:id`       | Buscar item por id           |

> Puedes usar [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar los endpoints.

---

## ☁️ Despliegue en Render

1. Sube el proyecto a GitHub.
2. Crea una cuenta en [https://render.com](https://render.com).
3. Crea un nuevo **Web Service** desde tu repositorio.
4. Configura las variables de entorno:
   - `MONGODB_URI` = tu cadena de conexión a MongoDB Atlas.
5. Render genera una URL pública con tu API.

---

## 🧑‍💻 Autor

- Desarrollado por [devDeam](https://github.com/devDeam)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.
```

---
