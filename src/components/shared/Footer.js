import Link from 'next/link'
import styles from './Footer.module.scss'
import LogoSVG from '/public/icons/logo.svg'

export default function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <ul className={styles.column}>
                    <Link href='#people'>
                        <li>
                            People
                        </li>
                    </Link>
                    <Link href='#people'>
                        <li>
                            People
                        </li>
                    </Link>
                </ul>
                <ul className={styles.column}>
                    <Link href='#people'>
                        <li>
                            People
                        </li>
                    </Link>
                    <Link href='#people'>
                        <li>
                            People
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={styles.logoArea}>
                <LogoSVG className={styles.logoSVG}/>
            </div>
        </div>
    )
}
