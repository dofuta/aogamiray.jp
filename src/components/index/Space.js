import Image from 'next/image'
import CircleButton from '../shared/CircleButton'
import styles from './Space.module.scss'

export default function People(props) {
    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src='/images/space/nyaya.webp' className={styles.logo} />
                    <div className={styles.buttonArea}>
                        <CircleButton
                            color='white'
                            className={styles.button}
                            title='詳しくみる'
                            url='/nyaya'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
