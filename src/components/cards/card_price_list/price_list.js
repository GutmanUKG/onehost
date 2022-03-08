import PriceCardItem from "../price_card/price_card_item";
import Data from '../../../price_card_vps.json'
import s from './card_price_list.module.scss'
function PriceList(){
    return(
        <>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-3">
                        <div className={s.title}>
                            Тарифные планы
                        </div>
                        <div className=''>
                            <div className={s.options_item}>
                                Стоимость в месяц
                            </div>
                            <div className={s.options_item}>
                                Стоимость в год
                            </div>
                            <div className={s.options_item}>
                                Место
                            </div>
                            <div className={s.options_item}>
                                Процессор
                            </div>
                            <div className={s.options_item}>
                                Оперативная память
                            </div>
                            <div className={s.options_item}>
                                IP-адреса
                            </div>
                        </div>
                    </div>
                    <PriceCardItem data={Data}></PriceCardItem>
                </div>
            </div>
        </>
    )
}

export default PriceList;