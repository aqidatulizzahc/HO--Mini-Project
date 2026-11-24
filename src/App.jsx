import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar
        brand="Sellora"
        userName="Budi"
        onNavigate={(id) => console.log("Menu aktif:", id)}
      />
      <main className="p-3">
        <ProductList
          onAddProduct={() => console.log("Tambah produk")}
          onFilter={() => console.log("Buka filter")}
          onProductAction={(product) => console.log("Opsi:", product.name)}
        />
      </main>
    </div>
  );
}

export default App;
