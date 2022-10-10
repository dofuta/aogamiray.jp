import Image from 'next/image'
import styles from './Supporters.module.scss'

export default function Supporters(props) {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                {props.items.map((item, i) => (
                    <a
                        className={styles.item}
                        href={item.url}
                        target='_blank'
                        rel='noopnener noreferrer'
                        key={i}
                    >
                        <div className={styles.imageWrapper}>
                            <Image src={item.image} layout='fill' objectFit='cover' />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
