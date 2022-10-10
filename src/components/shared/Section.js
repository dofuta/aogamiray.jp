import Image from 'next/image'
import Link from 'next/link'
import CircleButton from './CircleButton'
import styles from './Section.module.scss'

export default function Section(props) {
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
