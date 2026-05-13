
import Button  from './Button';
import styles from './App.module.css';
//className={styles.title} 서로다른 이름의 클래스가 만들어짐
function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, React!</h1>
      <Button text={"Continue"} />
    </div>  
  );
}

export default App;
