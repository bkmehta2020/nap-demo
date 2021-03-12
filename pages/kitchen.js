import Head from 'next/head'
import Banner from '../components/Banner'
import ListedProducts from '../components/ListedProducts'

export default function kitchen() {
    const bannerData = {
        imgScr: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/kitchens/img/kitchen-category/kitchen.png",
        headText: "Make your dream kitchen a reality.",
        paraText: "Modular kitchens, premium components, and endless possibilities.",
        textColor: "#fff"
    }
    return (
        <div>
            <Head>
                <title>Kitchen</title>
            </Head>
            <Banner bannerData={bannerData} />
            <ListedProducts restApi={"http://localhost:1337/kitchens"} />
        </div>
    )
}
