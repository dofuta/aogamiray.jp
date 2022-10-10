import Link from 'next/link'
import styles from './Footer.module.scss'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { currentSelectAtom } from 'src/services/atom'
import { useRecoilState } from 'recoil'


export default function Footer(props) {
    const [currentSelect, setCurrentSelect] = useRecoilState(currentSelectAtom)

    useEffect(() => {
        if (window) {
            gsap.registerPlugin(ScrollToPlugin)
            // typeof tl ?? gsap.reset(tl)
            // typeof tl ?? gsap.remove(tl)
        }
    }, [])

    const scrollToSection = (id) => {
        console.log(`#${id}`)
        console.log(window)
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: 'power2' })
        // gsap.to('#news', { duration: 1, scrollTo: 250, ease: 'power2' })
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <ul className={styles.column}>
                    <Link href='#people'>
                        <li
                            onClick={() => setCurrentSelect('people')}
                        >PEOPLE</li>
                    </Link>
                    <Link href='#goods'>
                        <li
                            onClick={() => setCurrentSelect('goods')}
                        >GOODS</li>
                    </Link>
                </ul>
                <ul className={styles.column}>
                    <Link href='#news'>
                        <li
                            onClick={() => setCurrentSelect('news')}
                        >NEWS</li>
                    </Link>
                    <Link href='#supporters'>
                        <li
                            onClick={() => setCurrentSelect('supporters')}
                        >SUPPORTERS</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.logoArea}>
                <div className={styles.imageWrapper}>
                    <Image
                        src='/icons/logo.png'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
}
