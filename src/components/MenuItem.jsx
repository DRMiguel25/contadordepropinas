export default function MenuItem({ item, onAddToOrder }) {
    return (
        <button
            onClick={() => onAddToOrder(item)}
            className="w-full flex justify-between items-center px-4 py-3 border-2 border-primary rounded-lg hover:bg-primary-hover transition-colors duration-200 text-left"
        >
            <span className="text-gray-700">{item.nombre}</span>
            <span className="font-bold text-gray-900">${item.precio}</span>
        </button>
    );
}
