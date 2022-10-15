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
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: 'power2' })
        setCurrentSelect(id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <ul className={styles.column}>
                    <li
                        onClick={() => {
                            scrollToSection('people')
                        }}
                    >
                        PEOPLE
                    </li>
                    <li
                        onClick={() => {
                            scrollToSection('goods')
                        }}
                    >
                        GOODS
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li
                        onClick={() => {
                            scrollToSection('news')
                        }}
                    >
                        NEWS
                    </li>
                    <li
                        onClick={() => {
                            scrollToSection('supporters')
                        }}
                    >
                        SUPPORTERS
                    </li>
                </ul>
            </div>
            <div className={styles.logoArea}>
                <div className={styles.imageWrapper}>
                    <Image src='/icons/logo.png' layout='fill' objectFit='cover' />
                </div>
            </div>
        </div>
    )
}
