import Image from 'next/image'
import CircleButton from '../shared/CircleButton'
import styles from './People.module.scss'

export default function People(props) {
    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.imageCover}>
                        <div className={styles.copy}>
                            <p className={styles.copyContent}>
                                Humans of Aogashima
                                <br />
                                青ヶ島の人びと
                            </p>
                        </div>
                        <div className={styles.buttonArea}>
                            <CircleButton
                                color='white'
                                className={styles.button}
                                title='詳しくみる'
                                url='https://www.humansofaogashima.com'
                            />
                        </div>
                    </div>
                    {props.items.map((item, i) => (
                        <div className={styles.item} key={i}>
                            <div className={styles.imageWrapper}>
                                <Image src={item.image} layout='fill' objectFit='cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
