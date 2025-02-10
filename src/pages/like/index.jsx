import React, {useContext} from "react"
import {useNavigate} from "react-router-dom"

import {ShopContext} from "../../context/shop-context"
import Card from "../../components/home/card"

const LikePage = () => {
    const {state} = useContext(ShopContext)
    const navigate = useNavigate()

    return (
        <>
            {!state.like.length && (
                <div className="text-center py-[50px]">
                    <h1 class="md:text-3xl text-2xl font-medium mb-1">
                        В избранном пока пусто
                    </h1>

                    <p class="text-gray-500 mb-8 mx-auto w-[30%] max-[1185px]:w-[50%] max-[670px]:w-[70%] max-[475px]:w-[100%] max-[475px]:text-[14px]">
                        Сохраняйте товары, которые понравились, чтобы долго не
                        искать
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="border-[2px] text-[14px] border-gray-400 px-[20px] h-[45px] rounded-lg font-medium cursor-pointer active:scale-95">
                        <p>На главную</p>
                    </button>
                </div>
            )}

            <div className="py-[20px] grid grid-cols-5 gap-[20px] max-[1170px]:grid-cols-4 max-[885px]:grid-cols-3 max-[695px]:grid-cols-2 max-[400px]:grid-cols-1">
                {state.like.map((value) => (
                    <Card key={value.id} {...value} />
                ))}
            </div>
        </>
    )
}

export default LikePage
