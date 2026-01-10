import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-soft">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 container-app py-8">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
