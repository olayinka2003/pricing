
import './App.css';
import { Nav } from './component/Nav';
import { Packages } from './component/Packages';
import { Plan } from './component/Plan';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Plan/>
     <Packages/>
    </div>
  );
}

export default App;
