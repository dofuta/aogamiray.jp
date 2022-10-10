import styles from './Main.module.scss'
import Section from 'src/components/shared/Section'
import News from './News'
import Goods from './Goods'
import People from './People'
import Supporters from './Supporters'
import Sidebar from '../shared/Sidebar'
import Footer from 'src/components/shared/Footer'
import TopVisualSystem from 'src/components/index/TopVisualSystem'

export default function Main(props) {
    return (
        <div className={styles.container}>
            <Sidebar className={styles.sideBar} />
            <div className={styles.content}>
                <div className={styles.top}>
                    <TopVisualSystem {...props.topContent}>
                        <Section {...props.peopleContent}>
                            <People items={props.people} />
                        </Section>
                        <Section {...props.goodsContent}>
                            <Goods items={props.goods} />
                        </Section>
                        <Section {...props.newsContent}>
                            <News items={props.news} />
                        </Section>
                        <Section {...props.supportersContent}>
                            <Supporters items={props.supporters} />
                        </Section>
                        <Footer />
                    </TopVisualSystem>
                </div>
            </div>
        </div>
    )
}
