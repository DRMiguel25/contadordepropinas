import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderCart from "./components/OrderCart";
import usePedido from "./hooks/usePedido";
import { platillos } from "./db/datosMenu";
import "./App.css";

function App() {
  const { pedido, porcentajePropina, agregarItem, eliminarItem, cambiarPropina, limpiarPedido } = usePedido();


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Menú */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Menú</h2>
            <div className="space-y-3">
              {platillos.map((platillo) => (
                <MenuItem key={platillo.id} item={platillo} onAddToOrder={agregarItem} />
              ))}
            </div>
          </div>

          {/* Carrito */}
          <OrderCart
            order={pedido}
            onRemoveItem={eliminarItem}
            onTipChange={cambiarPropina}
            onSaveOrder={limpiarPedido}
            tipPercentage={porcentajePropina}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

