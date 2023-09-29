import styles from './Loader.module.scss'

const Loader = () => (
  <div className={styles.loader}>
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

export default Loader