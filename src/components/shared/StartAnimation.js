import Image from 'next/image'
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
        tl.set(
            '.imageWrapper:nth-of-type(1)',
            {
                opacity: 0,
            }
        )
        tl.set(
            '.imageWrapper:nth-of-type(2)',
            {
                opacity: 0,
            }
        )
        tl.set(
            '.imageWrapper:nth-of-type(3)',
            {
                opacity: 0,
            }
        )
        tl.set(
            '.imageWrapper:nth-of-type(4)',
            {
                opacity: 0,
            }
        )
        tl.to(
            '.imageWrapper:nth-of-type(1)',
            {
                keyframes: [
                    {
                        y: 0,
                        opacity: 1,
                        delay: 2,
                        stagger: 1,
                        opacity: 1,
                        duration: 2,
                        ease: 'power2',
                    },
                ],
            },
            'start'
        )
        tl.to(
            '.imageWrapper:nth-of-type(2)',
            {
                keyframes: [
                    {
                        x: 0,
                        opacity: 1,
                        delay: 2.5,
                        stagger: 1,
                        opacity: 1,
                        duration: 2,
                        ease: 'power2',
                    },
                ],
            },
            'start'
        )
        tl.to(
            '.imageWrapper:nth-of-type(3)',
            {
                keyframes: [
                    {
                        x: 0,
                        opacity: 1,
                        delay: 3,
                        stagger: 1,
                        opacity: 1,
                        duration: 2,
                        ease: 'power2',
                    },
                ],
            },
            'start'
        )
        tl.to(
            '.imageWrapper:nth-of-type(4)',
            {
                keyframes: [
                    {
                        x: 0,
                        opacity: 1,
                        delay: 3.5,
                        stagger: 1,
                        opacity: 1,
                        duration: 2,
                        ease: 'power2',
                    },
                ],
            },
            'start'
        )
        tl.to(
            '#startAnimation',
            {
                keyframes: [
                    {
                        opacity: 0,
        
                    },
                    {
                        display: 'none'
                    }
                ]
            }
        )
    }

    return (
        <div className={styles.container} id='startAnimation'>
            <div className={`${styles.imageWrapper} imageWrapper`}>
                <Image
                  src='/images/startAnimations/image01.webp'
                  layout='fill'
                  objectFit='cover'
                />
            </div>
            <div className={`${styles.imageWrapper} imageWrapper`}>
                <Image
                  src='/images/startAnimations/image02.webp'
                  layout='fill'
                  objectFit='cover'
                />
            </div>
            <div className={`${styles.imageWrapper} imageWrapper`}>
                <Image
                  src='/images/startAnimations/image03.webp'
                  layout='fill'
                  objectFit='cover'
                />
            </div>
            <div className={`${styles.imageWrapper} imageWrapper`}>
                <Image
                  src='/images/startAnimations/image04.webp'
                  layout='fill'
                  objectFit='cover'
                />
            </div>
        </div>
    )
}
