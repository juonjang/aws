import Image from 'next/image'
import styles from './page.module.css'
import {FaHospitalUser} from "react-icons/fa";
import AppHeader from '@/client-components/AppHeader';

export default function Home() {
  return (
    <main className={styles.title}>
      <p>
        <FaHospitalUser size={50}/> <br />
        <AppHeader/>
          <h2 className='header'> AWS NB-HOSPITAL </h2>
      </p>
    </main>
  )
}
