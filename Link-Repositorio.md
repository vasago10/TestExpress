# Entrega del Proyecto — TestExpress

**Autor:** Raul garcia torres
**Fecha:** Octubre 2026
**Curso:** Backend Testing

---

## 🔗 Link del repositorio

El código fuente completo del proyecto está disponible en GitHub:

**https://github.com/vasago10/TestExpress**

---

## 📋 Descripción del proyecto

TestExpress es una API REST desarrollada con Node.js y Express que incluye:

- Endpoints básicos: `/api/hello`, `/api/echo`, `/api/greeting`
- Endpoints de usuarios: `POST /api/users`, `GET /api/users`
- Tests automatizados con Jest, Supertest y MongoDB Memory Server
- Arquitectura MVC simplificada

---

## 🧪 Estado del proyecto

- **Tests:** 7/7 pasando ✅
- **Suites:** 3/3 ✅
- **Tiempo de ejecución:** ~2 segundos

---

## 📁 Contenido del repositorio

- `app.js` — Aplicación Express con todos los endpoints
- `user.js` — Modelo Mongoose de Usuario
- `server.js` — Arranque del servidor
- `app.test.js`, `greeting.test.js`, `user.test.js` — Tests
- `package.json` — Dependencias y scripts
- `README.md` — Documentación del proyecto

---

## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/vasago10/TestExpress.git
cd TestExpress
npm install
npm test