import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { currentSelectAtom } from 'src/services/atom'
import { useRecoilState } from 'recoil'


export default function Sidebar(props) {
    const [currentSelect, setCurrentSelect] = useRecoilState(currentSelectAtom)

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
                            <li 
                            onClick={() => setCurrentSelect('people')}
                            className={`${styles.link} ${currentSelect == 'people' ? styles.on : ''}`}>PEOPLE</li>
                        </Link>
                        <Link href='#goods'>
                            <li
                            onClick={() => setCurrentSelect('goods')}
                            className={`${styles.link} ${currentSelect == 'goods' ? styles.on : ''}`}>GOODS</li>
                        </Link>
                        <Link href='#news'>
                            <li
                            onClick={() => setCurrentSelect('news')}

                            className={`${styles.link} ${currentSelect == 'news' ? styles.on : ''}`}>NEWS</li>
                        </Link>
                        <Link href='#supporters'>
                            <li
                            onClick={() => setCurrentSelect('supporters')}

                            className={`${styles.link} ${currentSelect == 'supporters' ? styles.on : ''}`}>SUPPORTERS</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
