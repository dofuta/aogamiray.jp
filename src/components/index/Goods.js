import Link from 'next/link'
import Image from 'next/image'
import styles from './Goods.module.scss'
export default function Goods(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <div className={styles.goodsList}>
                {props.items.map((item, i) => (
                    <div className={styles.item} key={i}>
                        <div className={styles.imageWrapper}>
                            <Image src={item.image} layout='fill' objectFit='cover' />
                        </div>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.price}>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
