import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar(props) {
    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.logoArea}>
                    <div className={styles.imageWrapper}>
                        <Image src='/icons/logo_short.png' layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className={styles.bar}>
                    <ul className={styles.content}>
                        <Link href='#people'>
                            <li className={`${styles.link} ${styles.on}`}>PEOPLE</li>
                        </Link>
                        <Link href='#goods'>
                            <li className={styles.link}>GOODS</li>
                        </Link>
                        <Link href='#news'>
                            <li className={styles.link}>NEWS</li>
                        </Link>
                        <Link href='#supporters'>
                            <li className={styles.link}>SUPPORTERS</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
