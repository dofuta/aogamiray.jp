// import Head from 'next/head'
import Main from 'src/components/index/Main'
import Navbar from 'src/components/shared/Navbar'
import Head from 'next/head'
import splitbee from '@splitbee/web'
import StartAnimation from 'src/components/shared/StartAnimation'

export default function Home(props) {
    splitbee.init()
    return (
        <>
            <Head>
                <title>Aogamiry | アオガミライ</title>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/favicon/apple-touch-icon.png'
                ></link>
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon/favicon-32x32.png'
                ></link>
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon/favicon-16x16.png'
                ></link>
                <meta property='og:url' content='https://www.aogamiray.com' />
                <meta property='og:type' content='web' />
                <meta property='og:title' content='Aogamiray | アオガミライ' />
                <meta
                    property='og:description'
                    content='アオガミライは、青ヶ島に暮らす「ヒト」に焦点をあてるWEBメディアです。'
                />
                <meta property='og:site_name' content='Aogamiray | アオガミライ' />
                <meta property='og:image' content='https://www.aogamiray.com/ogp.jpg' />
            </Head>
            {/* <StartAnimation /> */}
            <Main
                topContent={props.topContent}
                snsIcons={props.snsIcons}
                peopleContent={props.peopleContent}
                goodsContent={props.goodsContent}
                newsContent={props.newsContent}
                supportersContent={props.supportersContent}
                people={props.people}
                goods={props.goods}
                news={props.news}
                supporters={props.supporters}
            />
        </>
    )
}

export async function getStaticProps({ query }) {
    const topContent = {
        copy: `私たちが日常を過ごす青ヶ島には<br/>
                多くの魅力的な人々がいます。<br class='only_sp'/>アオガミライは<br/>
                青ヶ島に暮らす「ヒト」に<br class='only_sp'/>焦点をあてるWEBメディアです。<br/>
                とってもディープな青ヶ島の魅力を伝える為につくりました。<br/>
                情報が少ない青ヶ島の<br class='only_sp'/>「人」「食」「文化」など<br/>
                かけがえのない宝物を伝え残し、<br class='only_sp'/>次の世代へ繋ぐ。<br/>
                また、まだまだ気を緩められない<br class='only_sp'/>コロナ問題…<br/>
                来島したい気持ちを抑えている<br class='only_sp'/>ファンの方たち、<br/>
                その他にも体力や時間がない…<br class='only_sp'/>コストの問題など。<br/>
                来島できない人もいるなかで、<br class='only_sp'/>「それでも青ヶ島と関わりたい」<br/>
                「繋がりを持ちたい」<br class='only_sp'/>と考える方々に<br/>
                アオガミライを通じて<br class='only_sp'/>青ヶ島をもっと近くに<br/>
                感じてもらえたらと思います。`,
    }
    const snsIcons = [
        {
            id: 1,
            title: 'Twitter',
            url: 'https://twitter.com/aogashimachan',
        },
        {
            id: 2,
            title: 'YouTube',
            url: 'https://www.youtube.com/c/AOGASHIMAChannel',
        },
        {
            id: 3,
            title: 'LINE',
            url: 'https://line.me/R/ti/p/@420cgivm',
        },
        {
            id: 4,
            title: 'Facebook',
            url: 'https://www.facebook.com/aogamiray.inc/',
        },
        {
            id: 5,
            title: 'Instagram',
            url: 'https://www.instagram.com/aogamiray.inc/',
        },
    ]
    const peopleContent = {
        id: 'people',
        title: 'PEOPLE',
        subtitle: '青ヶ島の人びと',
        description: '青ヶ島に暮らす「ヒト」に焦点をあてたWEBメディアです。',
        buttonTitle: 'メディアを見る',
        url: 'https://www.humansofaogashima.com/',
    }
    const goodsContent = {
        id: 'goods',
        title: 'GOODS',
        subtitle: 'Aogamirayのグッズ',
        description: 'Aogamirayで特別な商品を作っています。',
        buttonTitle: 'ショップを見る',
        url: 'https://suzuri.jp/kaechan0106/',
    }
    const newsContent = {
        id: 'news',
        title: 'NEWS',
        subtitle: '青ヶ島のニュース',
        description: '',
        url: '',
    }
    const supportersContent = {
        id: 'supporters',
        title: 'SUPPORTERS',
        subtitle: 'アオガミライのサポーター',
        description: 'アオガミライにご協力頂いているみなさまの一覧です。',
        url: '',
    }
    const people = [
        {
            image: '/images/people/people01.webp',
        },
        {
            image: '/images/people/people02.webp',
        },
        {
            image: '/images/people/people03.webp',
        },
        {
            image: '/images/people/people04.webp',
        },
    ]
    const goods = [
        {
            title: 'カフェT白印刷',
            price: '3,850円 （税込）',
            image: '/images/goods/shirts01.webp',
        },
        {
            title: 'Café Aogamiray カフェT',
            price: '2,728円 （税込）',
            image: '/images/goods/bag01.webp',
        },
        {
            title: 'かいゆう',
            price: '3,608円 （税込）',
            image: '/images/goods/hat01.webp',
        },
    ]
    const news = [
        {
            title: 'AogamirayのWebサイトを公開しました。',
            date: '2022.10.10',
            content:
                'Aogamirayでは人と人、過去と未来、青ヶ島と青ヶ島のファンを繋ぐ活動をしていきます。',
        },
        {
            title: 'WebメディアであるHumans of Aogasihmaを公開しました。',
            date: '2022.10.10',
            content:
                '私たちが日常を過ごす青ヶ島には多くの魅力的な人々がいます。アオガミライはそんな青ヶ島に暮らす「ヒト」に焦点をあてるWEBメディアです。',
        },
        {
            title: 'Humans of Aogashimaに新着コンテンツが追加されました。',
            date: '2022.10.10',
            content:
                '青ヶ島でサウナの管理人をやられている広江寛さんの半生と青ヶ島の生活を伺いました。',
        },
    ]
    const supporters = [
        {
            title: '東京宝島',
            url: 'https://www.t-treasureislands.metro.tokyo.lg.jp/',
            image: '/images/supporters/takarajima.webp',
        },
        {
            title: 'かいゆう丸',
            url: 'https://kaiyumaru.info/',
            image: '/images/supporters/kaiyu.webp',
        },
        {
            title: 'ねっこめ',
            image: '/images/supporters/nekkome.webp',
        },
    ]
    return {
        props: {
            topContent,
            snsIcons,
            peopleContent,
            goodsContent,
            newsContent,
            supportersContent,
            people,
            goods,
            news,
            supporters,
        },
    }
}
