// import Head from 'next/head'
import Main from 'src/components/index/Main'
import Navbar from 'src/components/shared/Navbar'
import Head from 'next/head'
import splitbee from '@splitbee/web'
import StartAnimation from 'src/components/shared/StartAnimation'

export default function Home(props) {
    // splitbee.init()
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
                <meta property='og:url' content='https://www.aogamiry.jp' />
                <meta property='og:type' content='web' />
                <meta property='og:title' content='Aogamiry | アオガミライ' />
                <meta
                    property='og:description'
                    content='アオガミライは、青ヶ島に暮らす「ヒト」に焦点をあてるWEBメディアです。'
                />
                <meta property='og:site_name' content='Aogamiry | アオガミライ' />
                <meta property='og:image' content='https://www.aogamiry.jp/ogp.png' />
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
                多くの魅力的な人々がいます。アオガミライは<br/>
                青ヶ島に暮らす「ヒト」に焦点をあてるWEBメディアです。<br/>
                とってもディープな青ヶ島の魅力を伝える為につくりました。<br/>
                情報が少ない青ヶ島の「人」「食」「文化」など<br/>
                かけがえのない宝物を伝え残し、次の世代へ繋ぐ。<br/>
                また、まだまだ気を緩められないコロナ問題…<br/>
                来島したい気持ちを抑えているファンの方たち、<br/>
                その他にも体力や時間がない…コストの問題など。<br/>
                来島できない人もいるなかで、「それでも青ヶ島と関わりたい」<br/>
                「繋がりを持ちたい」と考える方々に<br/>
                アオガミライを通じて青ヶ島をもっと近くに<br/>
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
        description: 'ここに説明が入ります。',
        buttonTitle: 'メディアを見る',
        url: 'https://www.humansofaogashima.com/',
    }
    const goodsContent = {
        id: 'goods',
        title: 'GOODS',
        subtitle: '青ヶ島のグッズ',
        description: 'ここに説明が入ります。',
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
        description: 'アオガミライをご支援頂いているみなさまの一覧です。',
        url: '',
    }
    const people = [
        {
            image: '/images/people/people01.png',
        },
        {
            image: '/images/people/people02.png',
        },
        {
            image: '/images/people/people03.png',
        },
        {
            image: '/images/people/people04.png',
        },
    ]
    const goods = [
        {
            title: 'カフェT白印刷',
            price: '3,850円 （税込）',
            image: '/images/goods/shirts01.jpg',
        },
        {
            title: 'Café Aogamiray カフェT',
            price: '2,728円 （税込）',
            image: '/images/goods/bag01.jpg',
        },
        {
            title: 'かいゆう',
            price: '3,608円 （税込）',
            image: '/images/goods/hat01.jpg',
        },
    ]
    const news = [
        {
            title: 'Webサイトを公開しました。',
            date: '2022.10.10',
            content:
                'Webサイトを公開しました！<br/>Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！',
        },
        {
            title: 'Webサイトを公開しました。',
            date: '2022.10.10',
            content:
                'Webサイトを公開しました！<br/>Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！',
        },
        {
            title: 'Webサイトを公開しました。',
            date: '2022.10.10',
            content:
                'Webサイトを公開しました！<br/>Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！Webサイトを公開しました！',
        },
    ]
    const supporters = [
        {
            title: '東京宝島',
            url: 'https://www.t-treasureislands.metro.tokyo.lg.jp/',
            image: '/images/supporters/takarajima.png',
        },
        {
            title: '青ヶ島村',
            url: 'http://www.vill.aogashima.tokyo.jp/',
            image: '/images/supporters/aogashima.png',
        },
        {
            title: 'suzuri',
            url: 'https://suzuri.jp/kaechan0106/',
            image: '/images/supporters/suzuri.png',
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
