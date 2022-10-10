import Image from 'next/image'
import styles from './TopVisualSystem.module.scss'
import ScrollDown from 'src/components/shared/ScrollDown'
import TopAnimation from 'src/components/shared/TopAnimation'

export default function TopVisualSystem(props) {
    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.backgroundImage}>
                    <div className={styles.imageWrapper}>
                        <Image src='/images/top/mountain.jpg' layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.circleObject}>
                        <TopAnimation className={styles.topAnimation} />
                        <ScrollDown className={styles.scrollArrow} />
                    </div>
                    <div className={styles.top}>
                        <p dangerouslySetInnerHTML={{ __html: props.copy }} />
                    </div>
                    <div className={styles.children}>{props.children}</div>
                </div>
            </div>
        </div>
    )
}
