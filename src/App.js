import Index from 'Pages/Routes';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.scss';
import ScreenLoader from 'Components/Loader/ScreenLoader';
import { useAuthContext } from 'Context/AuthContext';

function App() {
  const { isAppLoading } = useAuthContext()
  if (isAppLoading)
    return <Index />
  return <ScreenLoader />
}

export default App;
