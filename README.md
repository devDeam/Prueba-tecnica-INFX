```markdown
# 📦 INFX - API y Frontend

Este repositorio contiene una **API REST** y un **frontend** para gestionar productos o ítems, construidos con **Node.js**, **Express**, **MongoDB**, **React**, y **Vite**. Ambos son desplegados gratuitamente en [Render](https://render.com).

---

## 🌐 URLs en Producción

> 🟢 **API REST**: https://prueba-tecnica-infx.onrender.com/
> 🟢 **Frontend**: https://mobilestore-smr.onrender.com/

## Recomendación :
Render es una plataforma gratuita para desplegar aplicaciones y/o servicios, sin embargo, luego de 15min suspende el servicio web, por este motivo se recomienda primero ingresar a la URL para probar y activar el servicio web, luego ejecutar el Front.

---
## 📁 Estructura del Proyecto (FRONTEND)

├── /client │

  ├── /public │
    └── _redirects # Para poder manejar router en render │
    └── icon.png # Icono para el index.html │

  ├── /src │

    ├── /assets │
      └── (imagenes, iconos, etc) │

    ├── /components │
      └── (Componentes como Nav, ItemDetail, etc.) │

    ├── /pages │
      └── (Páginas como Home, SearchResult, etc.) │

    ├── /types │
      └── (Types como buttons.d.tsx, etc.) │

    ├── /utils │
      └── (Utils como formatPrice.ts, etc.) │

    ├── App.tsx # Componente principal de la aplicación

    ├── index.tsx # Punto de entrada del frontend

    ├── .env # Variables de entorno locales del frontend

    └── package.json # Dependencias y scripts del frontend


## 📁 Estructura del Proyecto (BACKEND)

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

   ├── /tests │
    └── item.test.js # Pruebas unitarias │

  ├── index.js # Entrada principal del servidor │

├── .env # Variables de entorno (solo local) ├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto

---

### Backend

1. Clona el repositorio y cambiate a la carpeta del backend:
   ```bash
   cd server
   ```
   
2. Ve a la carpeta del backend:
   ```bash
   cd server
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo `.env` y agrega tu URI de MongoDB:
   ```env
   MONGODB_URI=mongodb+srv://Admin:Admin123@backenddb.dtbwfds.mongodb.net/INFX-API?retryWrites=true&w=majority&appName=BackendDB
   PORT=3000
   ```

5. Inicia el servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Ve a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` y agrega la URL de tu API:
   ```env
   VITE_API_URL=https://prueba-tecnica-infx.onrender.com/api para cosumir PROD
   VITE_API_URL=https://localhost:3000/api para local
   ```

4. Inicia el frontend:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en la ruta especificada en tu terminal por VITE

---

## 📡 Endpoints (API)

| Método | Ruta                         | Descripción                                    |
|--------|------------------------------|------------------------------------------------|
| GET    | `/`                          | Mensaje de bienvenida                          |
| POST   | `/api/create`                | Crear un nuevo ítem en la base de datos        |
| GET    | `/api/items?q=:query`        | Buscar productos por nombre, marca o categoría |
| GET    | `/api/items/:id`             | Obtener un ítem por su ID                      |
| POST   | `/api/items/:id/rating`      | Agregar una calificación a un producto         |

> Puedes probar los endpoints usando [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/).

---

## ☁️ Despliegue en Render

### Backend (API)

1. Sube el proyecto a GitHub.
2. Crea una cuenta en [Render](https://render.com).
3. Crea un nuevo **Web Service** desde tu repositorio.
4. Conecta tu cuenta de GitHub a Render si aún no lo has hecho, y autoriza a Render para acceder a tus repositorios.
5. En Repository, selecciona el repositorio que contiene tu API.
6. En Language, selecciona Node.
7. Branch, la rama actual de tu proyecto
8. Root Directory: server
9. En Build Command: npm install
10. En Start Command: npm run dev
11. Configura las variables de entorno:
   - `MONGODB_URI` = tu cadena de conexión a MongoDB Atlas.
12. Render generará una URL pública para tu API.

### Frontend

1. Sube el proyecto a GitHub.
2. Crea una cuenta en [Render](https://render.com).
3. Crea un nuevo **Static Site** desde tu repositorio.
4. Conecta tu cuenta de GitHub a Render si aún no lo has hecho, y autoriza a Render para acceder a tus repositorios.
5. En Repository, selecciona el repositorio que contiene tu API.
6. Branch, la rama actual de tu proyecto
7. Root Directory: client
8. En Build Command: npm install; npm build
9. Publish Directory: dist
10. Configura las variables de entorno:
   - `MONGODB_URI` = tu cadena de conexión a MongoDB Atlas.
11. Render generará una URL pública para tu Static Site.

---

## 🧑‍💻 Autor

- Desarrollado por [devDeam](https://github.com/devDeam)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.
```

---
