import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './components/ListTask';
import Filters from './components/Filters';
import AddTask from './components/AddTask';

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1.5rem",
        backgroundColor: '#f1f1f1', 
        width: '500px',
        margin: '0 auto'
      }}
    >
      <Filters />
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
