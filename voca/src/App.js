import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Hello name='Mike' age={12}/>
      <Hello name='Tom' age={30}/>
      <Welcome />
      <div className={styles.box}>From App </div>
    </div>
  );
}

export default App;
