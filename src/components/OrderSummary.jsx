export default function OrderSummary({ subtotal, tip, total }) {
    return (
        <div className="mt-6 space-y-2">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Totales y Propina:</h3>
            <div className="space-y-1">
                <p className="text-gray-700">
                    Subtotal a pagar: <span className="font-bold">${subtotal.toFixed(2)}</span>
                </p>
                <p className="text-gray-700">
                    Propina: <span className="font-bold">${tip.toFixed(2)}</span>
                </p>
                <p className="text-gray-900 text-lg">
                    Total a Pagar: <span className="font-bold">${total.toFixed(2)}</span>
                </p>
            </div>
        </div>
    );
}
