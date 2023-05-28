import Head from 'next/head';
import styles from './Layout.module.scss'
import Sidebar from 'src/components/Sidebar/Sidebar';

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <main className={styles.main}>
      
      <Sidebar />
      <section className={styles.content}>{children}</section>
    </main>
    </>
  )
}

export default Layout;