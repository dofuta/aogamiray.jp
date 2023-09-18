import TopAnimation from './TopAnimation'
import ScrollDown from '../shared/ScrollDown'
import styles from './Main.module.scss'
import TriangleSVG from 'public/icons/triangle-white.svg'
import ArrowUpSVG from 'public/icons/icon-arrow-up.svg'
import ArrowRightSVG from 'public/icons/icon-arrow-right-white.svg'
import InstagramSVG from 'public/icons/icon-instagram.svg'
import XSVG from 'public/icons/icon-x.svg'
import Section from './Section'
import LoopLabel from './LoopLabel'
import { useEffect } from 'react'

const scrollToId = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

const makeObserver = (myTarget, myIntersect) => {
    let myObserver
    myObserver = new IntersectionObserver(myIntersect, {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0,
    })
    if (myTarget) {
        myObserver.observe(myTarget)
    }
}

export function myIntersect(entries, myTarget) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && myTarget) {
            myTarget.classList.remove('fadeInTarget')
            myTarget.classList.add('fadeIn')
        }
    })
}

export default function Main(props) {
    useEffect(() => {
        const myTargets = document.querySelectorAll('.fadeInTarget')
        myTargets?.forEach((myTarget) => {
            makeObserver(myTarget, (entries) => myIntersect(entries, myTarget))
        })
    })
    return (
        <div className={styles.container}>
            <TopAnimation className={styles.top} />
            <header className={styles.header}>
                <div className={styles.header_left}>
                    <TriangleSVG className={styles.triangleSVG} />
                </div>
                <div className={styles.header_right}>
                    <TriangleSVG className={styles.triangleSVG} />
                    <div className={styles.links}>
                        <button onClick={() => scrollToId('work')}>料金</button>
                        <button onClick={() => scrollToId('facilities')}>設備</button>
                        <button onClick={() => scrollToId('access')}>アクセス</button>
                    </div>
                </div>
            </header>
            <main className={styles.main} id='main'>
                <div className={styles.firstView}>
                    <div className={styles.blackFilter}>
                        <img src='/images/space/nyaya.webp' alt='nyaya_logo' className='fadeIn' />
                    </div>
                    <ScrollDown className={styles.scrollDown} color='white' />
                </div>
                <div className={styles.content}>
                    <p className={`${styles.copy} fadeInTarget`}>
                        NYAYAは、東京・青ヶ島にある
                        <br />
                        コワーキング・レンタルスペースです。
                    </p>
                    <LoopLabel />
                    <Section
                        id='work'
                        title='CO-WORKING'
                        subtitle='Wi-Fi・電源完備のワーキングエリア'
                        image='/images/space/interior02.webp'
                    >
                        <div className={styles.table}>
                            <div className={styles.table_row}>
                                <div className={styles.table_col}>
                                    <div
                                        className={`${styles.table_cell} ${styles.table_cell__big}`}
                                    >
                                        <p className={styles.title}>
                                            ドロップイン
                                            <span className={styles.text}>10:00-18:00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.table_col}>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>1h / ¥500</p>
                                    </div>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>フリータイム / ￥2,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table_row}>
                                <div className={styles.table_col}>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>中高生（勉強スペース）</p>
                                    </div>
                                </div>
                                <div className={styles.table_col}>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>無料</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section
                        id='rental'
                        title='RENTAL SPACE'
                        subtitle='夜間利用も可能な貸切スペース'
                        image='/images/space/interior03.webp'
                    >
                        <div className={styles.table}>
                            <div className={styles.table_row}>
                                <div className={styles.table_col}>
                                    <div
                                        className={`${styles.table_cell} ${styles.table_cell__big}`}
                                    >
                                        <p className={styles.title}>
                                            貸切利用
                                            <span className={styles.text}>
                                                夜間OK！ パーティー・イベント等
                                                <br />
                                                ご相談ください。
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.table_col}>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>1h / ¥500</p>
                                    </div>
                                    <div className={styles.table_cell}>
                                        <p className={styles.title}>フリータイム / ￥2,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section id='facilities' title='FACILITIES' subtitle='無料でご利用可能な備品'>
                        <div className={styles.facilities}>
                            <div className={styles.facility}>
                                <div className={styles.circle}>
                                    <img src='/images/space/facility01.webp' alt='' />
                                </div>
                                <p className={styles.title}>Wi-Fi</p>
                            </div>
                            <div className={styles.facility}>
                                <div className={styles.circle}>
                                    <img src='/images/space/facility02.webp' alt='' />
                                </div>
                                <p className={styles.title}>モニター</p>
                            </div>
                            <div className={styles.facility}>
                                <div className={styles.circle}>
                                    <img src='/images/space/facility03.webp' alt='' />
                                </div>
                                <p className={styles.title}>プリンター</p>
                            </div>
                            <div className={styles.facility}>
                                <div className={styles.circle}>
                                    <img src='/images/space/facility04.webp' alt='' />
                                </div>
                                <p className={styles.title}>プロジェクター</p>
                            </div>
                        </div>
                    </Section>
                    <Section id='outdoor' title='OUTDOOR GOODS' subtitle='レンタル用品'>
                        <div className={styles.textBox}>
                            <p>
                                バッテリー・アウトドアチェア・クーラーボックス・ガスコンロの用意があります。
                                <br />
                                （料金は500円〜）
                            </p>
                        </div>
                    </Section>
                    <Section id='access' title='ACCESS' subtitle='アクセス'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.258480939541!2d139.7596012772237!3d32.465777473795356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x606ab956240d09e3%3A0xd52a19b74a3d2110!2zQW9nYW1pcmF5IOOCs-ODr-ODvOOCreODs-OCsOOCueODmuODvOOCuU5ZQVlB!5e0!3m2!1sja!2sjp!4v1695071328738!5m2!1sja!2sjp'
                            allowFullScreen=''
                            loading='lazy'
                            style={{
                                height: '600px',
                                width: '100%',
                            }}
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </Section>
                    <Section id='contact' title='CONTACT' subtitle='お問い合わせ'>
                        <a
                            href='https://www.instagram.com/p/CnUhHQ_PEnD/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.contactButton}
                        >
                            <InstagramSVG className={styles.snsIcon} />
                            <span>Instagramでお問い合わせ</span>
                            <ArrowRightSVG className={styles.arrowIcon} />
                        </a>
                        <a
                            href='https://twitter.com/aogamiray'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.contactButton}
                        >
                            <XSVG className={styles.snsIcon} />
                            <span>Twiiterでお問い合わせ</span>
                            <ArrowRightSVG className={styles.arrowIcon} />
                        </a>
                    </Section>
                </div>
            </main>
            <footer className={styles.footer}>
                <button className={styles.buttonToTop} onClick={() => scrollToId('main')}>
                    <ArrowUpSVG className={styles.icon} />
                    <span>
                        BACK TO
                        <br />
                        TOP
                    </span>
                </button>
                <img
                    src='/images/space/nyaya-black.webp'
                    alt='nyaya_logo'
                    className={styles.logo}
                />
                <p className={styles.copyRight}>
                    このサイトは<a href='/'>アオガミライ</a>が運営しています。
                </p>
            </footer>
        </div>
    )
}
