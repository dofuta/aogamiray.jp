import styles from './Section.module.scss'
export default function Section(props) {
    return (
        <div className={styles.container} id={props.id}>
            <div className={`${styles.titleArea} fadeInTarget`}>
                {props.image && <img className={styles.image} src={props.image} />}

                <div className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <span className={styles.subtitle}>{props.subtitle}</span>
                </div>
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}
