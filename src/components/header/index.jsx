import React, {useContext} from "react"

import {ShopContext} from "../../context/shop-context"

// icons
import {IoMdMenu} from "react-icons/io"
import {IoIosSearch} from "react-icons/io"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {IoMdHeartEmpty} from "react-icons/io"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const {state} = useContext(ShopContext)
    const navigate = useNavigate()

    return (
            <header className="stick top-0 bg-white z-[999] py-[10px]">
                <nav className="container2 flex justify-between items-center gap-[20px]">
                    <img
                        onClick={() => navigate("/")}
                        src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg"
                        alt="logo"
                        className="w-[130px] cursor-pointer"
                    />

                    <button className="bg-[#ffbe1f] px-[20px] h-[45px] rounded-lg font-medium flex justify-center items-center gap-[5px] cursor-pointer active:scale-95">
                        <IoMdMenu className="text-[20px]" />
                        <p className="text-[14px]">Каталог товаров</p>
                    </button>

                    <div className="w-[450px] h-[45px] rounded-lg border-[3px] overflow-hidden border-[#ffbe1f] flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Искать товары"
                            className="h-full w-full outline-none px-[10px]"
                        />
                        <button className="cursor-pointer h-full px-[20px] bg-[#ffbe1f] text-[20px] flex justify-center items-center">
                            <IoIosSearch />
                        </button>
                    </div>

                    <button
                        onClick={() => navigate("/shop")}
                        className="flex flex-col gap-[2px] justify-center items-center cursor-pointer hover:text-[#ffbe1f] relative">
                        <AiOutlineShoppingCart className="text-[25px]" />
                        <p className="text-[12px] opacity-70">Корзина</p>

                        {state.shop.length ? (
                            <div className="w-4 h-4 flex justify-center items-center absolute p-[2px] text-[10px] rounded-full bg-red-500 text-white -top-1 right-[5px]">
                                {state.shop.length}
                            </div>
                        ) : (
                            ""
                        )}
                    </button>

                    <button className="flex flex-col gap-[2px] justify-center items-center cursor-pointer hover:text-[#ffbe1f]">
                        <IoMdHeartEmpty className="text-[25px]" />
                        <p className="text-[12px] opacity-70">Избранное</p>
                    </button>

                    <button className="border-[3px] text-[14px] border-[#ffbe1f] hover:bg-[#ffc01f42] px-[20px] h-[45px] rounded-lg font-medium cursor-pointer active:scale-95">
                        <p>Войти</p>
                    </button>

                    <nav className="flex justify-center items-center gap-[1px] cursor-pointer">
                        <p>РУС</p>
                        <span className="opacity-70"> / UZB</span>
                    </nav>
                </nav>
            </header>
    )
}

export default Header
