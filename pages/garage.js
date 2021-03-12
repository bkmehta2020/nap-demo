import Head from 'next/head'
import Banner from '../components/Banner'
import ListedProducts from '../components/ListedProducts'

export default function garage() {
    const bannerData = {
        imgScr: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/img/pro-updated/bold-modular-design.jpg",
        headText: "Garage Storage Solution",
        paraText: "Engineered for those who demand the best",
        textColor: "#000"
    }
    return (
        <div>
            <Head>
                <title>Garage</title>
            </Head>
            <Banner bannerData={bannerData} />
            <ListedProducts restApi={"http://localhost:1337/garages"} />
        </div>
    )
}
