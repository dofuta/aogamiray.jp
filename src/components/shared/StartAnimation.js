import Link from 'next/link'
import styles from './StartAnimation.module.scss'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function Links(props) {
    useEffect(() => {
        if (window) {
            // gsap.registerPlugin(ScrollTrigger)
            // gsap.registerPlugin(ScrollToPlugin)
            // typeof tl ?? gsap.reset(tl)
            // typeof tl ?? gsap.remove(tl)
            setAnimation()
        }
    }, [])

    const setAnimation = () => {
        let tl = gsap.timeline({})
        tl.add('start')
        tl.set('#textAnimation span', {
            opacity: 0,
            scale: 0,
            width: 0,
        })
        tl.to(
            '#firstAnimation',
            {
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'power2',
            },
            'start',
        )
        tl.to(
            '#textAnimation span',
            {
                keyframes: [
                    {
                        width: 'auto',
                        delay: 2.5,
                        duration: 0.5,
                        ease: 'power2',
                    },
                    {
                        opacity: 1,
                        delay: 0,
                        stagger: 0.2,
                        scale: 1,
                        duration: 0.1,
                        ease: 'power2',
                    },
                ],
            },
            'start',
        )
        tl.to('#containerAnimation', {
            keyframes: [
                {
                    opacity: 0,
                    delay: 6,
                },
                {
                    display: 'none',
                },
            ],
        })

        // for (let i=1; i <= length; i++) {
        // tl.fromTo(`#textAnimation span:nth-child(${i})`, {opacity: 0}, {opacity: 1, delay: 0})
        // }
    }

    return (
        <div className={styles.container} id='containerAnimation'>
            <p id='textAnimation' className={styles.text}>
                <span id='textAnimation'>
                    <span className={styles.transparent}>ア</span>
                    <span className={styles.transparent}>オ</span>
                    <span className={styles.transparent}>ガ</span>
                    <span className={styles.transparent}>ミ</span>
                    <span className={styles.transparent}>ラ</span>
                    <span className={styles.transparent}>イ</span>
                </span>
            </p>
        </div>
    )
}
