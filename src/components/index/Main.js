import styles from './Main.module.scss'
import Section from 'src/components/shared/Section'
import News from './News'
import Goods from './Goods'
import People from './People'
import Supporters from './Supporters'

export default function Main(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                </div>
                <Section {...props.peopleContent}>
                    <People items={props.people}/>
                </Section>
                <Section {...props.goodsContent}>
                    <Goods items={props.goods}/>
                </Section>
                <Section {...props.newsContent}>
                    <News items={props.news}/>
                </Section>
                <Section {...props.supportersContent}>
                    <Supporters items={props.supporters}/>
                </Section>
            </div>
        </>
    )
}
