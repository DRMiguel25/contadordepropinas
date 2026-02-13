import OrderItem from "./OrderItem";
import TipSelector from "./TipSelector";
import OrderSummary from "./OrderSummary";

export default function OrderCart({ order, onRemoveItem, onTipChange, onSaveOrder, tipPercentage }) {
    const subtotal = order.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    const tip = subtotal * (tipPercentage / 100);
    const total = subtotal + tip;

    if (order.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consumo</h2>
                <p className="text-gray-500 text-center py-8">La orden está vacía</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consumo</h2>

            <div className="space-y-2 mb-4">
                {order.map((item) => (
                    <OrderItem key={item.id} item={item} onRemove={onRemoveItem} />
                ))}
            </div>

            <TipSelector selectedTip={tipPercentage} onTipChange={onTipChange} />

            <OrderSummary subtotal={subtotal} tip={tip} total={total} />

            <button
                onClick={onSaveOrder}
                className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded transition-colors"
            >
                GUARDAR ORDEN
            </button>
        </div>
    );
}
