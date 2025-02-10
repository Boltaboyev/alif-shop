import React, {useContext, useState} from "react"
import {toast} from "react-toastify"

import {ShopContext} from "../../../context/shop-context"

// icons
import {FaHeart} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Card = (props) => {
    const {img, name, monthlyPayment, oldPrice, price, id} = props
    const {dispatch} = useContext(ShopContext)
    const [isLiked, setIsLiked] = useState(false)

    const addToast = () => toast.success("Товар уже в корзине")

    return (
        <>
            <div className="flex flex-col justify-between gap-[10px] select-none relative border border-gray-200 p-[10px] rounded-xl hover:shadow-xl transition duration-[.3s]">
                <div className="flex justify-center">
                    <img
                        src={img}
                        alt={name}
                        className="h-[125px] object-contain"
                    />

                    <FaHeart
                        onClick={() => {
                            if (isLiked) {
                                dispatch({type: "disLike", deletedId: id})
                                setIsLiked(false)
                            } else {
                                dispatch({
                                    type: "like",
                                    product: {
                                        img,
                                        name,
                                        monthlyPayment,
                                        oldPrice,
                                        price,
                                        id,
                                    },
                                })
                                setIsLiked(true)
                            }
                        }}
                        className={`absolute text-[24px] right-[10px] top-[10px] cursor-pointer transition ${
                            isLiked ? "opacity-100 text-red-600" : "opacity-20"
                        }`}
                    />
                </div>

                <p className="text-[14px]">{name}</p>
                <p className="border border-[#ffbe1f] rounded-xl p-[1px_10px] text-[11px] w-fit bg-[#ffc01f49]">
                    от {monthlyPayment} сум/мес
                </p>

                <div className="flex flex-col gap-0 text-[14px]">
                    <p className="opacity-50 line-through">{oldPrice} сум</p>
                    <p className="font-medium text-red-500">{price} сум</p>
                </div>

                <button
                    onClick={() => {
                        dispatch({type: "add", product: props})
                        addToast()
                    }}
                    className="bg-[#ffbe1f] hover:bg-[#ffc01f8d] transition-colors duration-[.2s] px-[20px] h-[45px] rounded-lg font-medium flex justify-center items-center gap-[10px] cursor-pointer active:scale-95">
                    <AiOutlineShoppingCart className="text-[20px]" />
                    <p className="text-[14px]">В корзину</p>
                </button>
            </div>
        </>
    )
}

export default Card
