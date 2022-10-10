import Link from 'next/link'

import styles from './CircleButton.module.scss'
import CircleArrowSVG from 'public/icons/circle_arrow_black.svg'

export default function CircleButton(props) {
    const className = `${props.className} ${styles.circleButton} ${styles[props.color]}`
    return (
            <a className={className} href={props.url} disabled={props.isSending} target="_blank" rel="noopener noreferrer">
                <CircleArrowSVG className={styles.circleSVG} />
                <span>{props.title}</span>
            </a>
    )
}
