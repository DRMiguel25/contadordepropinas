export default function OrderItem({ item, onRemove }) {
    return (
        <div className="flex justify-between items-start py-3 border-b border-gray-200">
            <div className="flex-1">
                <p className="text-gray-800 font-medium">
                    {item.nombre} - ${item.precio.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                    Cantidad: <span className="font-bold">{item.cantidad}</span> - <span className="font-bold">${(item.precio * item.cantidad).toFixed(2)}</span>
                </p>
            </div>
            <button
                onClick={() => onRemove(item.id)}
                className="ml-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold transition-colors"
                aria-label="Eliminar item"
            >
                X
            </button>
        </div>
    );
}
