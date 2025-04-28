import Home from './pages/Home';
import Navbar from './components/Navbar';
import Transfer from './pages/Transfer';
import { RouteProvider, useRoute } from './contexts/RouteContext';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function Pages() {
  const { route } = useRoute();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Login />;
  return (
    <>
      <Navbar />
      {route === 'login' && <Login />}
      {route === 'home' && <Home />}
      {route === 'transfer' && <Transfer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <RouteProvider>
        <div className="flex flex-col min-h-screen">
          <Pages />
        </div >
      </RouteProvider >
    </AuthProvider>
  );
}

export default App;
