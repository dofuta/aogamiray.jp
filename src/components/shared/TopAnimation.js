import Link from 'next/link'
import styles from './TopAnimation.module.scss'
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
            '#textAnimation span',
            {
                keyframes: [
                    {
                        width: 'auto',
                        duration: 0.5,
                        ease: 'power2',
                    },
                    {
                        opacity: 1,
                        delay: 0,
                        stagger: 0.1,
                        scale: 1,
                        duration: 0.1,
                        ease: 'power2',
                    },
                ],
            },
            'start',
        )

        // for (let i=1; i <= length; i++) {
        // tl.fromTo(`#textAnimation span:nth-child(${i})`, {opacity: 0}, {opacity: 1, delay: 0})
        // }
    }

    return (
        <div className={props.className}>
            <div className={styles.container} id='containerAnimation'>
                <p id='textAnimation' className={styles.text}>
                    <span id='textAnimation'>
                        <span className={styles.transparent}>青</span>
                        <span className={styles.transparent}>ヶ</span>
                        <span className={styles.transparent}>島</span>
                        <span className={styles.transparent}>の</span>
                        <span className={styles.transparent}>み</span>
                        <span className={styles.transparent}>ら</span>
                        <span className={styles.transparent}>い</span>
                        <span className={styles.transparent}>を</span>
                        <span className={styles.transparent}>つ</span>
                        <span className={styles.transparent}>な</span>
                        <span className={styles.transparent}>ぐ</span>
                    </span>
                </p>
            </div>
        </div>
    )
}
