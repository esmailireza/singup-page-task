import styles from './app.module.css';
import Asset from './assets/Asset.png';

function App() {
  return (
    <div className={styles.sec}>
     <div className={styles.secLeft}>
    <div className={styles.secImage}>
      <img src={Asset }/>
    </div>
     </div>
     <div className={styles.secRight}>
    <form>
    <p>ثبت نام</p>
    </form>
     </div>
    </div>
  );
}

export default App;
