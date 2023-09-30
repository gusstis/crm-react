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


Loader:
 La función loader en React no es una función reservada específica de React. El término "loader" generalmente se refiere a una función que se utiliza para cargar datos o recursos de forma asíncrona.

En el contexto de useLoaderData, esta función de carga puede llamarse de cualquier manera y no tiene que llamarse específicamente loader. Lo que importa es que esta función devuelva una promesa que se resuelve con los datos que se deben utilizar en la página.

La función useLoaderData es parte de la biblioteca react-server y se utiliza para cargar datos en el servidor antes de que se renderice la página en el navegador. Esta función utiliza el objeto Loader para acceder a la función loader que se utiliza para cargar los datos necesarios. El objeto Loader se pasa al componente <ServerDataContext.Provider> en el servidor y se puede acceder a través del hook useLoaderData en el componente de la página.

En resumen, la función loader no es una función reservada de React, puede tener cualquier nombre y se utiliza para cargar datos de forma asíncrona. useLoaderData es una función que se utiliza en el servidor para cargar datos antes de que se renderice la página en el navegador y utiliza el objeto Loader para acceder a la función de carga de datos.

Los loaders y actions están por fuera de React, por lo tanto no pueden tener Hooks o State. Entonces React Router DOM lo que hace es manejar los datos por fuera para evitar los re-renders de React o cargar la información con un useEffect

En cuanto a los valores de un select si deberia ser con useActionData

useActionData = Datos de formularios (para obtener el resultado de un action)

useLoaderData = Datos de API's (para obtener los datos de un loader)

en cuanto a hacer un custom Hook para los datos de useActionData sería como crear un hook para un hook, en este caso lo ideal sería manejar todo con lo que ofrece React Router DOM.



