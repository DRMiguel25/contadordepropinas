import { useReducer } from "react";

// Estado inicial del pedido
const estadoInicial = {
    pedido: [],
    porcentajePropina: 10,
};

// Función que maneja los cambios del pedido
const manejarPedido = (estado, accion) => {
    switch (accion.tipo) {
        case "AGREGAR_ITEM": {
            // Buscar si el item ya existe en el pedido
            const indice = estado.pedido.findIndex(
                (item) => item.id === accion.datos.id
            );

            if (indice >= 0) {
                // Si ya existe, aumentar la cantidad
                const pedidoActualizado = [...estado.pedido];
                pedidoActualizado[indice] = {
                    ...pedidoActualizado[indice],
                    cantidad: pedidoActualizado[indice].cantidad + 1,
                };
                return { ...estado, pedido: pedidoActualizado };
            } else {
                // Si no existe, agregarlo con cantidad 1
                return {
                    ...estado,
                    pedido: [...estado.pedido, { ...accion.datos, cantidad: 1 }],
                };
            }
        }

        case "ELIMINAR_ITEM":
            return {
                ...estado,
                pedido: estado.pedido.filter((item) => item.id !== accion.datos),
            };

        case "CAMBIAR_PROPINA":
            return {
                ...estado,
                porcentajePropina: accion.datos,
            };

        case "LIMPIAR_PEDIDO":
            return estadoInicial;

        default:
            return estado;
    }
};

export default function usePedido() {
    const [estado, ejecutar] = useReducer(manejarPedido, estadoInicial);

    const agregarItem = (item) => {
        ejecutar({ tipo: "AGREGAR_ITEM", datos: item });
    };

    const eliminarItem = (id) => {
        ejecutar({ tipo: "ELIMINAR_ITEM", datos: id });
    };

    const cambiarPropina = (porcentaje) => {
        ejecutar({ tipo: "CAMBIAR_PROPINA", datos: porcentaje });
    };

    const limpiarPedido = () => {
        ejecutar({ tipo: "LIMPIAR_PEDIDO" });
    };

    return {
        pedido: estado.pedido,
        porcentajePropina: estado.porcentajePropina,
        agregarItem,
        eliminarItem,
        cambiarPropina,
        limpiarPedido,
    };
}
