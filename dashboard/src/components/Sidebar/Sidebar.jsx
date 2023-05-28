import Image from 'next/image'
import styles from './Sidebar.module.scss'
import {
  MdOutlineDashboardCustomize,
  MdOutlineShoppingBag,
  MdAttachMoney,
  MdInsertChartOutlined,
  MdOutlineSettings,
} from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

// create links static
const links =[
  { name: 'painel', icon: <MdOutlineDashboardCustomize /> , url: '/'},
  { name: 'produtos', icon: <MdOutlineShoppingBag />, url: '/products'},
  { name: 'vendas', icon: <MdAttachMoney />, url: '/sales'},
  { name: 'relatório', icon: <MdInsertChartOutlined />, url: '/report'},
  { name: 'configurações', icon: <MdOutlineSettings />, url: '/settings'},
]

const Sidebar = () => {
  const router = useRouter();
  let { route } = router; 

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url} className={route === link.url ? styles.active : ''}>
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
  ))

  return (
    <section className={styles.sidebar}>
      <div className={styles.image}>
        {/* Icon by <a href="https://freeicons.io/profile/101920">xnimrodx</a> on <a href="https://freeicons.io">freeicons.io</a> */}
        <Image src="/logo.svg" alt="dashboard" width="46" height="43" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          {renderLinks}
        </ul>
      </nav>
    </section>
  )
}
export default Sidebar;