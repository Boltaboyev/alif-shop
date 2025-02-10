const TotalPrice = ({total}) => {
    let totalPrice = 0
    let count = 0

    total.map((value) => {
        totalPrice += value.price * value.counter
        count += value.counter
    })

    return (
        <div className="flex-[2] h-fit bg-[#f4f6f7] sticky top-[90px] flex flex-col gap-[10px] p-[20px] rounded-lg">
            <div className="flex justify-between items-center gap-[5px]">
                <h1 className="text-[18px] font-[500]">Итого</h1>
                <h1 className="text-[18px] font-[500]">
                    {totalPrice.toLocaleString("uz-UZ").replace(/,/g, " ")} сум
                </h1>
            </div>
            <div className="flex justify-between items-center gap-[5px]">
                <h1 className="text-[13px] opacity-60">Кол-во товаров</h1>
                <h1 className="text-[13px]">{count} шт.</h1>
            </div>
            <div className="flex justify-between items-center gap-[5px]">
                <h1 className="text-[13px] opacity-60">Доставка</h1>
                <h1 className="text-[13px] text-green-400">Бесплатно</h1>
            </div>

            <div className="flex flex-col pt-2">
                <h1 className="text-[13px] text-green-400">
                    Бесплатная доставка
                </h1>

                <h1 className="text-[13px] opacity-60">
                    Время доставки: по Ташкенту в течении 24 часов, по всей
                    Республике в течении 3 дней
                </h1>
            </div>

            <button className="bg-[#ffbe1f] px-[20px] mt-2 h-[45px] rounded-lg font-medium cursor-pointer active:scale-95">
                <p className="text-[14px]">Оформить рассрочку</p>
            </button>
        </div>
    )
}

export default TotalPrice
