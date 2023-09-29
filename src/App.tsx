import styles from './App.module.scss'
import TabBar from './components/TapBar'
import WeatherWidget from './components/WeatherWidget'

function App() {

  return (
    <div className={styles.app}>
      <div className={`container ${styles.app_wrapper}`}>
        <WeatherWidget />
        <TabBar />
      </div>
    </div>
  )
}

export default App
