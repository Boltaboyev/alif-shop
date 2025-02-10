import React, {useContext} from "react"
import {useNavigate} from "react-router-dom"
import {RiDeleteBin6Line} from "react-icons/ri"
import {toast} from "react-toastify"

import {ShopContext} from "../../context/shop-context"
import TotalPrice from "../../components/shop/total-price"

const Shop = () => {
    const {dispatch, state} = useContext(ShopContext)
    const navigate = useNavigate()

    const deleteToast = () => toast.success("Товар удален из корзины")

    return (
        <div className="flex gap-[20px] py-[20px] max-[900px]:flex-col">
            <div className="flex-[5]">
                <div>
                    {!state?.shop?.length && (
                        <div className="text-center py-[50px]">
                            <h1 class="md:text-3xl text-2xl font-medium mb-1">
                                Корзина пока пуста
                            </h1>

                            <p class="text-gray-500 mb-8 mx-auto w-[30%] max-[1185px]:w-[50%] max-[670px]:w-[70%] max-[475px]:w-[100%] max-[475px]:text-[14px]">
                                Посмотрите каталог чтобы найти товары, или
                                воспользуйтесь поиском
                            </p>

                            <button
                                onClick={() => navigate("/")}
                                className="border-[2px] text-[14px] border-gray-400 px-[20px] h-[45px] rounded-lg font-medium cursor-pointer active:scale-95">
                                <p>На главную</p>
                            </button>
                        </div>
                    )}
                </div>
                <div className="gridBox">
                    <div className="w-full">
                        {state.shop.map((value) => {
                            return (
                                <div
                                    key={value?.id}
                                    className="flex items-start border-b-2 border-gray-200 gap-4 mt-5 max-[588px]:flex-col">
                                    <div className="flex justify-center items-center max-[600px]:self-center">
                                        <img
                                            className="w-25 h-25 mx-auto object-contain"
                                            src={value?.img}
                                            alt={value?.title}
                                        />
                                    </div>

                                    <div className="mt-4 flex flex-col w-full">
                                        <p className="text-black text-md mb-2 font-medium">
                                            {value?.description}
                                        </p>

                                        <p className="text-[12px] text-[#a5b1bb]">
                                            Цена:{" "}
                                            <span className="text-[#5d6d7d]">
                                                {value?.price
                                                    .toLocaleString("uz-UZ")
                                                    .replace(/,/g, " ")}
                                            </span>{" "}
                                            сум
                                        </p>
                                        <p className="text-[12px] text-[#5d6d7d]">
                                            От 1 дня по Ташкенту. От 3 дней по
                                            Узбекистану
                                        </p>
                                        <div className="bg-grey-50 p-2 rounded-md md:w-60 cursor-pointer mt-2.5">
                                            <p className="text-grey-300 text-xs">
                                                Рассрочка
                                            </p>
                                            <div className="flex justify-between items-center gap-10">
                                                <div className="text-sm font-medium m-0 flex gap-x-1 items-end">
                                                    <p className="m-0 whitespace-nowrap">
                                                        {value?.monthlyPayment
                                                            .toLocaleString(
                                                                "uz-UZ"
                                                            )
                                                            .replace(/,/g, " ")}
                                                        <span className="text-xs font-normal">
                                                            сум
                                                        </span>
                                                    </p>
                                                    <p className="opacity-50">
                                                        x
                                                    </p>
                                                    <p className="text-sm whitespace-nowrap">
                                                        24{" "}
                                                        <span className="text-xs font-normal">
                                                            мес.
                                                        </span>
                                                    </p>
                                                </div>
                                                <span className="nuxt-icon nuxt-icon--fill nuxt-icon--stroke text-grey-400 h-6 w-6">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 9L12 5L16 9"
                                                            stroke="#A5B1BB"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                        <path
                                                            d="M16 15L12 19L8 15"
                                                            stroke="#A5B1BB"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-gray-100 rounded-lg w-[150px] grid grid-cols-3 gap-[2px] overflow-hidden">
                                                    <button
                                                        onClick={() => {
                                                            value.counter !== 1
                                                                ? dispatch({
                                                                      type: "decrement",
                                                                      productId:
                                                                          value.id,
                                                                  })
                                                                : dispatch({
                                                                      type: "delete",
                                                                      deletedId:
                                                                          value?.id,
                                                                  })
                                                        }}
                                                        className="border-0 p-1 cursor-pointer hover:bg-gray-300 h-full">
                                                        -
                                                    </button>

                                                    <span className="mx-2 font-medium flex justify-center items-center">
                                                        {value.counter}
                                                    </span>

                                                    <button
                                                        onClick={() => {
                                                            dispatch({
                                                                type: "increment",
                                                                productId:
                                                                    value.id,
                                                            })
                                                        }}
                                                        className="border-0 cursor-pointer hover:bg-gray-300 h-full">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    dispatch({
                                                        type: "delete",
                                                        deletedId: value?.id,
                                                    })
                                                    deleteToast()
                                                }}
                                                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md text-[12px] text-gray-600">
                                                <RiDeleteBin6Line />
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {state.shop.length ? <TotalPrice total={state.shop} /> : ""}
        </div>
    )
}

export default Shop
