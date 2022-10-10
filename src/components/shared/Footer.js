import Link from 'next/link'
import styles from './Footer.module.scss'
import LogoSVG from '/public/icons/logo.svg'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
// import useWindowDimensions from 'src/services/windowDimentions'

export default function Footer(props) {
    // const { height, width } = useWindowDimensions()

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
                    <li onClick={() => scrollToSection('people')}>PEOPLE</li>
                    <Link href='#goods'>
                        <li>GOODS</li>
                    </Link>
                </ul>
                <ul className={styles.column}>
                    <Link href='#news'>
                        <li>NEWS</li>
                    </Link>
                    <Link href='#supporters'>
                        <li>SUPPORTERS</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.logoArea}>
                <LogoSVG className={styles.logoSVG} />
            </div>
        </div>
    )
}
