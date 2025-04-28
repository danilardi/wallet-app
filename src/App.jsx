import Home from './pages/Home';
import Navbar from './components/Navbar';
import Transfer from './pages/Transfer';
import { RouteProvider, useRoute } from './contexts/RouteContext';

function Pages() {
  const { route } = useRoute();

  return (
    <>
      {route === 'home' && <Home />}
      {route === 'transfer' && <Transfer />}
    </>
  );
}

function App() {
  return (
    <RouteProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Pages />
      </div>
    </RouteProvider>
  );
}

export default App;
