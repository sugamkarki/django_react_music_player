import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}  className={styles.center} />
}

export default MyApp
