
import styles from './Header.module.css'
function Header(){

    return(
        <div className={styles.container}>
        <div className={styles.header}>
        <h1>Join Our Community</h1>
        <p>Action for Animal Health</p>
        </div>
        </div>

    )
}

export default Header;