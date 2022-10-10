import styles from './News.module.scss'

export default function News(props) {
    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.news}>
                    {props.items.map((item, index) => (
                        <div key={index} href={item.url} className={styles.new}>
                            <div className={styles.top}>
                                <div className={styles.date}>{item.date}</div>
                                <h3 className={styles.title}>{item.title}</h3>
                            </div>
                            <div className={styles.bottom}>
                                <p
                                    className={styles.content}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
