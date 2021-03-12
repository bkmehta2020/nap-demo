import Head from 'next/head'
import Banner from '../components/Banner'
import Category from '../components/Category'

export default function Home() {
    const bannerData = {
        imgScr: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/hp-cycle/img/march-cycle-1-2021/banner-1-us.jpg?var=555",
        headText: "Your dream kitchen is here",
        paraText: "Save up to 35% on Select Kitchen Items",
        textColor: "#000"
    }
    return (
        <div>
            <Head>
                <title>Newage Products</title>
            </Head>
            <Banner bannerData={bannerData} />
            <Category />
        </div>
    )
}

