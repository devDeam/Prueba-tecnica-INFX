```markdown
# 📦 INFX - API y Frontend

Este repositorio contiene una **API REST** y un **frontend** para gestionar productos o ítems, construidos con **Node.js**, **Express**, **MongoDB**, **React**, y **Vite**. Ambos son desplegados gratuitamente en [Render](https://render.com).

---

## 🌐 URLs en Producción

> 🟢 **API REST**: https://prueba-tecnica-infx.onrender.com/
> 🟢 **Frontend**: https://mobilestore-smr.onrender.com/

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

  ├── index.js # Entrada principal del servidor │

├── .env # Variables de entorno (solo local) ├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto

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
MONGODB_URI=mongodb+srv://Admin:Admin123@backenddb.dtbwfds.mongodb.net/INFX-API?retryWrites=true&w=majority&appName=BackendDB
PORT=3000
```

4. Inicia el servidor:

```bash
npm run dev
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
