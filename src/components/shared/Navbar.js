import Link from 'next/link'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import styles from './Navbar.module.scss'
import Logo from 'public/icons/logo.svg'
import { useRecoilValue } from 'recoil'
import { darkModeAtom } from 'src/services/atom'
import useWindowDimensions from 'src/services/windowDimentions'
import useScrollPositions from 'src/services/scrollPositions'

export default function Navbar() {
    const { height, width } = useWindowDimensions()
    const { scrollX, scrollY } = useScrollPositions()

    const darkMode = useRecoilValue(darkModeAtom)
    const elementRef = useRef()
    useEffect(() => {
        if (window) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.registerPlugin(ScrollToPlugin)
            // typeof tl ?? gsap.reset(tl)
            // typeof tl ?? gsap.remove(tl)
            setAnimation()
        }
    }, [elementRef, width, height])
    const setAnimation = () => {
        // gsap.fromTo(elementRef.current, {duration:1}, {duration:1, rotate: 360},);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'html',
                start: 'top top',
                end: 'bottom center',
                scrub: true,
                end: () => document.querySelector('#__next').clientHeight + ' bottom',
            },
        })
        tl.to(elementRef.current, { rotate: 360, ease: 'none' })
    }
    const scrollToTop = () => {
        gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2' })
        gsap.to(elementRef.current, { duration: 1, rotate: 0, ease: 'power2' })
    }
    const scrollToSection = (id) => {
        const contentHeight = Math.floor(document.querySelector('#__next').clientHeight)
        const targetPosition =
            Math.floor(document.querySelector(`#${id}`).offsetTop) +
            Math.floor(document.querySelector(`#${id}`)).clientHeight
        const targetRotate = Math.floor((targetPosition / contentHeight) * 360)
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: 'power2' })
        gsap.to(elementRef.current, { duration: 1, rotate: targetRotate, ease: 'power2' })
    }
    let className = `${styles.navbar} ${darkMode ? styles.dark : ''}`
    return (
        <>
            <div className={className}>
                <div className={styles.brandLogo}>
                    <div className={styles.image} ref={elementRef} onClick={() => scrollToTop()}>
                        <Logo />
                    </div>
                </div>
                <ul className={styles.links}>
                    <li
                        className={`${styles.link} only_pc`}
                        onClick={() => scrollToSection('works')}
                    >
                        <span>WORKS</span>
                    </li>
                    <li
                        className={`${styles.link} only_pc`}
                        onClick={() => scrollToSection('awards')}
                    >
                        <span>AWARDS</span>
                    </li>
                    <li className={`${styles.link}`} onClick={() => scrollToSection('contact')}>
                        <span>CONTACT</span>
                    </li>
                </ul>
                <div className={styles.buttonArea}></div>
            </div>
        </>
    )
}
