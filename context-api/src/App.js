import './App.css';
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Janice">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
