# ✅ To-Do App

Aplicación de lista de tareas construida con React y Vite. Permite agregar, completar y eliminar tareas.

🔗 **[Ver demo en vivo](https://samuelandoni92-dev.github.io/To-do-List-ReactJs/)**

## Capturas

![Agregar tareas](screenshots/agregar%20tarea.png)
![Tareas agregadas](screenshots/tareas%20agregadas.png)
![Tareas completadas](screenshots/tareas%20completadas.png)

## ¿Qué hace?

- Agregar tareas nuevas (con botón o tecla Enter)
- Marcar tareas como completadas
- Eliminar tareas
- Contador de tareas pendientes

## Tecnologías

- React (hooks: `useState`)
- Vite
- CSS puro

## Qué aprendí

Mi primer proyecto en React. Entendí la diferencia entre manipular el DOM directamente (como en JS puro) y dejar que React maneje el DOM a partir de cambios de estado. También practiqué el concepto de inmutabilidad: nunca modificar el array de tareas directamente, sino crear copias nuevas con `map`, `filter` y el spread operator.

## Cómo correrlo localmente

```bash
git clone https://samuelandoni92-dev.github.io/To-do-List-ReactJs/
cd to-do-react
npm install
npm run dev
```