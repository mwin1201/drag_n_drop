import logo from './logo.svg';
import './App.css';

import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DragDrop from './components/dragNdrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DragDrop/>
        </header>
      </div>
    </DndProvider>
  );
}

export default App;
