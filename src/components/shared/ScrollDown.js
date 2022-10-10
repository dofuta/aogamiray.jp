import styles from './ScrollDown.module.scss'

export default function ScrollDown(props) {
    return (
        <div className={props.className}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper_inner}>
                    <div className={styles.scroll_down}>
                        <span className={styles.arrow_down}></span>
                        <span className={styles.scroll_title}>Scroll down</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
