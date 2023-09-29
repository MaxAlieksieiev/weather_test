import { ReactComponent as Back} from '../../assets/icons/subtract.svg'
import { ReactComponent as Plus} from '../../assets/icons/plus.svg'

import styles from './TapBar.module.scss';

const TabBar = () => {
  const handleClick = () => {
    alert('You click a  button')
  }

  return (
    <div className={styles.wrapper}>
      <Back/>
      <div className={styles.button} onClick={handleClick}>
        <div className={styles.small}>
          <Plus />
        </div>
      </div>
    </div>
  )
}

export default TabBar