import './App.css';
import AppRouter from './routes/Routes';
import { AuthProvider } from './context/AuthContext';
import { NoticeProvider } from './context/NotificationContext';
function App() {
  return (
    <div className="App">
      <NoticeProvider>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
      </NoticeProvider>
    </div>
  );
}

export default App;
