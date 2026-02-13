# Calculadora de Propinas y Consumo

Aplicación web desarrollada con React y Tailwind CSS para gestionar pedidos de restaurante y calcular propinas de manera automática.

## Descripción del Proyecto

Esta aplicación permite a los usuarios seleccionar platillos de un menú, agregarlos a un carrito de compras, calcular propinas con diferentes porcentajes y gestionar el total de la orden. Diseñada con una interfaz moderna y responsiva, facilita la experiencia del usuario al momento de realizar pedidos.

## Características Principales

- **Menú Interactivo**: Visualización de platillos con precios claramente definidos
- **Gestión de Carrito**: Agregar y eliminar items con actualización automática de cantidades
- **Cálculo de Propinas**: Opciones de 10%, 20% y 50% con actualización dinámica del total
- **Totales Automáticos**: Cálculo en tiempo real de subtotal, propina y total a pagar
- **Interfaz Responsiva**: Diseño adaptable a diferentes tamaños de pantalla
- **Gestión de Estado**: Implementación con useReducer para manejo eficiente del estado

## Tecnologías Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca principal para la construcción de la interfaz de usuario
- **Vite 6.0.5**: Herramienta de construcción y servidor de desarrollo rápido

### Estilos
- **Tailwind CSS 3.4.0**: Framework de CSS para diseño responsivo y personalizado
- **PostCSS 8.4.0**: Procesador de CSS para transformaciones
- **Autoprefixer 10.4.0**: Plugin para agregar prefijos de navegadores automáticamente

### Gestión de Estado
- **React Hooks**: useState y useReducer para manejo del estado local
- **Custom Hooks**: Hook personalizado `usePedido` para lógica de negocio

## Estructura del Proyecto

```
examen-primer-parcial/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx       # Encabezado de la aplicación
│   │   ├── MenuItem.jsx     # Item individual del menú
│   │   ├── OrderCart.jsx    # Carrito de compras principal
│   │   ├── OrderItem.jsx    # Item individual en el carrito
│   │   ├── OrderSummary.jsx # Resumen de totales
│   │   └── TipSelector.jsx  # Selector de porcentaje de propina
│   ├── hooks/               # Custom hooks
│   │   └── usePedido.js     # Hook para gestión del pedido
│   ├── db/                  # Datos de la aplicación
│   │   └── datosMenu.js     # Información del menú
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos del componente principal
│   ├── index.css            # Estilos globales y configuración Tailwind
│   └── main.jsx             # Punto de entrada de la aplicación
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind CSS
├── postcss.config.js        # Configuración de PostCSS
├── vite.config.js           # Configuración de Vite
└── package.json             # Dependencias y scripts del proyecto
```

## Instalación y Configuración

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio o descargar el proyecto

2. Instalar las dependencias:
```bash
npm install
```

3. Instalar Tailwind CSS y sus dependencias:
```bash
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

5. Abrir el navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Previsualiza la versión de producción
- `npm run lint`: Ejecuta el linter para revisar el código

## Configuración de Tailwind CSS

El proyecto utiliza colores personalizados definidos en `tailwind.config.js`:

- **primary**: `rgba(38, 204, 182, 1)` - Color principal del header
- **primary-hover**: `rgba(141, 243, 221, 1)` - Color de hover en items del menú

## Funcionalidades Detalladas

### Gestión del Pedido

El hook personalizado `usePedido` maneja todas las operaciones del carrito:

- **agregarItem**: Agrega un platillo al pedido o incrementa su cantidad si ya existe
- **eliminarItem**: Remueve un platillo del pedido
- **cambiarPropina**: Actualiza el porcentaje de propina seleccionado
- **limpiarPedido**: Resetea el carrito a su estado inicial

### Cálculos Automáticos

- **Subtotal**: Suma de todos los items multiplicados por sus cantidades
- **Propina**: Porcentaje aplicado sobre el subtotal
- **Total**: Suma del subtotal más la propina

Todos los cálculos se actualizan en tiempo real al modificar el carrito o cambiar el porcentaje de propina.

## Diseño y Experiencia de Usuario

- Layout de dos columnas en pantallas grandes (menú y carrito lado a lado)
- Diseño apilado en dispositivos móviles para mejor legibilidad
- Efectos hover en items del menú para mejorar la interactividad
- Números en negrita para cantidades y totales, facilitando la lectura
- Mensajes claros cuando el carrito está vacío

## Datos del Menú

El menú incluye una variedad de platillos:

- Pizzas a la leña (chica, mediana, grande)
- Rebanadas de postres (pay de limón, pastel de chocolate, pay de queso)
- Bebidas (jugo de naranja, café americano, café capuchino, tequila)
- Platillos principales (Rib Eye 800g)

Todos los precios están en pesos mexicanos.

## Consideraciones de Desarrollo

### Gestión de Estado con useReducer

Se eligió `useReducer` sobre múltiples `useState` para:
- Centralizar la lógica de actualización del estado
- Facilitar el mantenimiento y testing
- Proporcionar un flujo de datos predecible
- Simplificar operaciones complejas como agregar items existentes

### Componentes Modulares

Cada componente tiene una responsabilidad única:
- Facilita el mantenimiento del código
- Permite reutilización en otros contextos
- Mejora la legibilidad y organización del proyecto

## Autor

Proyecto desarrollado como examen del primer parcial de Sistemas Abiertos II.

## Licencia

Este proyecto es de uso académico.
