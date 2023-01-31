import LoginForm from './components/Login/LoginForm';
import ChatRoom from './components/ChatRoom/ChatRoom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Switch>
      <Route component={LoginForm} path="/login" />
      <Route component={ChatRoom} path="/" />
    </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
