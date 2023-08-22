# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Comienzo: npm create vite@latest
Project name:
React
Javascript + SWC
cd ···> al proyecto
code .
npm install
npm run dev
git init, etc.

New terminal: npm install -D tsilwindcss postcss autoprefixer
npx tailwindcss init -p

CRM: básicamente es un sistema para tener almacenados nuestros clientes

npm install react-router-dom


Utilizar React Router DOM para crear una Single Page Application (SPA) puede ayudar a evitar los típicos "flash" de recarga al cambiar de ruta. Esto se debe a que React Router DOM utiliza un enfoque de enrutamiento basado en el cliente, lo que significa que las rutas se manejan en el lado del cliente sin tener que hacer una petición al servidor para cargar una página nueva.

Al utilizar este enfoque de enrutamiento, el contenido de la página se actualiza dinámicamente sin tener que volver a cargar toda la página. Esto proporciona una experiencia de usuario más fluida y rápida.

Además, React Router DOM también ofrece un componente llamado Outlet que permite que los componentes de React se muestren en función de la ruta actual. El Outlet actúa como un punto de entrada en la jerarquía de componentes donde se renderizan los componentes correspondientes a la ruta actual. Al cambiar de ruta, React Router DOM utiliza la información de la ruta para renderizar el componente correspondiente en el Outlet sin tener que cargar una página nueva.


