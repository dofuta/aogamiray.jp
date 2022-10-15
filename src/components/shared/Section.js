import Image from 'next/image'
import Link from 'next/link'
import CircleButton from './CircleButton'
import styles from './Section.module.scss'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { currentSelectAtom } from 'src/services/atom'
import { useRecoilState } from 'recoil'


export default function Section(props) {
    const [currentSelect, setCurrentSelect] = useRecoilState(currentSelectAtom)

    useEffect(() => {
        if (window) {
            gsap.registerPlugin(ScrollTrigger)
            typeof tl ?? gsap.reset(tl)
            typeof tl ?? gsap.remove(tl)
            setAnimation()
        }
    }, [])

    const setAnimation = () => {
        gsap.to(`#${props.id}_link`, {
            scrollTrigger: {
              trigger: `#${props.id}`,
              start: 'top-=5px',
              id: 'people',
              toggleActions: 'play pause resume reset',
              scrub: true,
              onEnter: () =>  {setCurrentSelect(props.id);},
              onEnterBack: () =>  {setCurrentSelect(props.id);}
            }
          })
    }
    return (
        <div className={styles.container} id={props.id}>
            <div className={styles.top}>
                <h2 className={styles.title}>
                    {props.title}
                    <span className={styles.subtitle}>{props.subtitle}</span>
                </h2>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom__left}>
                    <p dangerouslySetInnerHTML={{ __html: props.description }} />
                </div>
                {props.url && (
                    <div className={styles.bottom__right}>
                        <CircleButton
                            className={styles.button}
                            title={props.buttonTitle}
                            url={props.url}
                        />
                    </div>
                )}
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}
