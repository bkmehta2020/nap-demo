import Head from 'next/head'
import Banner from '../components/Banner'
import ListedProducts from '../components/ListedProducts'

export default function homeBar() {
    const bannerData = {
        imgScr: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/homebar-2020/img/bar-cabinets.jpg",
        headText: "A Home Bar built just for you",
        paraText: "Modern storage for wine, spirits, glassware and entertaining essentials.",
        textColor: "#000"
    }
    return (
        <div>
            <Head>
                <title>Homebar </title>
            </Head>
            <Banner bannerData={bannerData} />
            <ListedProducts restApi={"http://localhost:1337/homebars"} />
        </div>
    )
}
