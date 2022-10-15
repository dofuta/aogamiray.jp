import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { currentSelectAtom } from 'src/services/atom'
import { useRecoilState } from 'recoil'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export default function Sidebar(props) {
    const [currentSelect, setCurrentSelect] = useRecoilState(currentSelectAtom)

    useEffect(() => {
        if (window) {
            gsap.registerPlugin(ScrollToPlugin)
            gsap.registerPlugin(ScrollTrigger)
            typeof tl ?? gsap.reset(tl)
            typeof tl ?? gsap.remove(tl)
        }
    }, [])

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: 'power2' })
        setCurrentSelect(id)
    }

    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.logoArea}>
                    <div className={styles.imageWrapper}
                                                onClick={() => {
                                                    scrollToSection('top')
                                                }}
                    >
                        <Image src='/icons/logo_short.png' layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className={styles.bar}>
                    <ul className={styles.content}>
                        <li
                            id='people_link'
                            onClick={() => {
                                scrollToSection('people')
                            }}
                            className={`${styles.link} ${
                                currentSelect == 'people' ? styles.on : ''
                            }`}
                        >
                            PEOPLE
                        </li>
                        <li
                            id='goods_link'
                            onClick={() => scrollToSection('goods')}
                            className={`${styles.link} ${
                                currentSelect == 'goods' ? styles.on : ''
                            }`}
                        >
                            GOODS
                        </li>
                        <li
                            id='news_link'
                            onClick={() => scrollToSection('news')}
                            className={`${styles.link} ${currentSelect == 'news' ? styles.on : ''}`}
                        >
                            NEWS
                        </li>
                        <li
                            id='supporters_link'
                            onClick={() => scrollToSection('supporters')}
                            className={`${styles.link} ${
                                currentSelect == 'supporters' ? styles.on : ''
                            }`}
                        >
                            SUPPORTERS
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
