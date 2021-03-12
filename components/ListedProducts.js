import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListedProducts(props) {
    const [garage, setGarage] = useState([]);
    useEffect(() => {
        fetch(props.restApi)
            .then((res) => res.json())
            .then((repos) => {
                console.log(repos)
                setGarage(repos)
            });

    }, [])
    return (
        <div className="">
            <div className="container">
                <div className="category">
                    {garage.map((product) => (
                        <div className="flex-box">
                            <Link href="/garage">
                                <div className="category-content-box">
                                    <img src={product.image} alt="" />
                                    <h4 className=" napfonts nap-fontsize2 mobile-fontsize2 ff-psb product-price-sale blue-text">
                                        ${product.price}
                                    </h4>
                                    <h3 className="category-title ff-psb nap-fontsize4">{product.product}</h3>
                                    <button className="napBtn ff-psb">BUY NOW</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
