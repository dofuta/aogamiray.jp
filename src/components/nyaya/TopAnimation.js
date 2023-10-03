import styles from './TopAnimation.module.scss'
import LoadingFrameSVG from 'public/icons/loading-frame.svg'
import { useEffect } from 'react'

function YourComponent() {
    useEffect(() => {
        function handleLoad() {
            const element = document.getElementById('containerAnimation')
            if (element) {
                element.classList.add(styles.loaded)
            }
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <div className={styles.container} id='containerAnimation'>
            <div className={styles.fill} />
            <LoadingFrameSVG className={styles.frame} />
            <div className={styles.fill} />
        </div>
    )
}

export default YourComponent
