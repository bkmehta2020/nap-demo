import React from 'react'
import Link from 'next/link'


export default function Category() {
    return (
        <div className="">
            <div className="container">
                <div className="category">
                    <div className="flex-box">
                        <Link href="/garage">
                            <div className="category-content-box">
                                <img src="https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/hp-cycle/img/march-cycle-1-2021/slide-4.jpg??var=888" alt="" />
                                <h3 className="category-title ff-psb nap-fontsize4">Garage</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-box">
                        <Link href="/kitchen">
                            <div className="category-content-box">
                                <img src="https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/hp-cycle/img/march-cycle-1-2021/slide-1.jpg??var=888" alt="" />
                                <h3 className="category-title ff-psb nap-fontsize4">Kitchen</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-box">
                        <Link href="/homeBar">
                            <div className="category-content-box">
                                <img src="https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/hp-cycle/img/march-cycle-1-2021/slide-2.jpg??var=888" alt="" />
                                <h3 className="category-title ff-psb nap-fontsize4">Homebar</h3>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
