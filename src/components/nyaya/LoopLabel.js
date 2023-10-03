import styles from './LoopLabel.module.scss'
const items = [
    '/images/space/interior01.webp',
    '/images/space/interior02.webp',
    '/images/space/interior03.webp',
    '/images/space/interior04.webp',
]
const ImageCard = ({ src }) => {
    return (
        <div
            className={styles.item}
            style={{
                background: `url("${src}") no-repeat`,
                backgroundSize: 'cover',
                opacity: 0.5,
            }}
        >
            <div className={styles.cover} />
        </div>
    )
}
export default function KolBackground({ backgroundRef }) {
    return (
        <div className={`${styles.container} fadeInTarget`} ref={backgroundRef}>
            <div className={styles.line}>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <ImageCard key={`image-${index}`} src={item} />
                    ))}
                </div>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <ImageCard key={`image-${index}`} src={item} />
                    ))}
                </div>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <ImageCard key={`image-${index}`} src={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
