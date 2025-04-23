import './App.css';
import Explorer from './components/Explorer';
import explorerData from './components/explorerData';

function App() {
  return (
    <div style={{padding:'20px', fontFamily:'Arial'}}>
      <h2>📁 File Explorer</h2>
      <Explorer data={explorerData}/>
    </div> 
  );
}

export default App;
