import React, {useContext, useState} from "react"

import {ShopContext} from "../../context/shop-context"
import Card from "../../components/home/card"

const LikePage = () => {
    const {state} = useContext(ShopContext)

    return (
        <section className="py-[20px] grid grid-cols-5 gap-[20px] max-[1170px]:grid-cols-4 max-[885px]:grid-cols-3 max-[695px]:grid-cols-2 max-[400px]:grid-cols-1">
            {state.like.map((value) => (
                <Card key={value.id} {...value} />
            ))}
        </section>
    )
}

export default LikePage
