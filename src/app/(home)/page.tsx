import styles from './page.module.css'
import {FaHospitalUser} from "react-icons/fa";
import AppHeader from '@/client-components/AppHeader';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.title}>
      <div>
        <Link href="./about">About</Link> <br />
        <Link href="./dashboard"><h3>Dashboard</h3></Link>
      </div>
      <p>
        <FaHospitalUser size={50}/> <br />
        <AppHeader/>
          <h2 className='header'> AWS NB-HOSPITAL </h2>
      </p>
    </main>
  )
}
