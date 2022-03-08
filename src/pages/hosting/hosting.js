import SliderBanner from "../../components/slider_banner/slider_banner";
import vps_icon from "../../images/vps_icon.webp";
import PriceList from "../../components/cards/card_price_list/price_list";

function Hosting() {
    let dataSlider = [
        {
            'title':'VPS-хостинг в Казахстане на SSD ',
            'img': {vps_icon},
            'text': 'Главное требование, как клиента, так и поисковых систем, это моментальный отклик сайта и быстрая его загрузка. Только на виртуальном сервере (VPS) ваш сайт сможет работать максимально быстро с любой посещаемостью' +
                'Лучшая бесплатная панель управления для виртуального сервера FASTPANEL позволит вам с лёгкостью управлять вашим VPS.' +
                'У нас размещаются сайты-визитки, корпоративные порталы, интернет-магазины, корпоративные сайты с посещаемостью 50 000 в сутки, с товарными каталогами 400 000 шт.'
        },
    ]
    return(
        <>
            <div className="container pt-5">
                <SliderBanner dataSlide={dataSlider}></SliderBanner>
            </div>
            <section className='pt-5'>
                <PriceList></PriceList>
            </section>
        </>
    )
}

export default Hosting