import s from './home.module.scss'
import SliderBanner from "../../components/slider_banner/slider_banner";
import vps_icon from '../../images/vps_icon.webp'
import CardList from "../../components/cards/card_list/card_list";
import CardAdvList from "../../components/cards/card_adv_list/card_adv_list";

function Home(){
    let dataSlider = [
        {
            'title':'Аренда VPS для Битрикс24',
            'img': {vps_icon},
            'text': 'Размещение вашего Битрикс24 на наших серверах позволят вашим сотрудникам всегда получать доступ к Битрикс24, а наша техническая поддержка позаботиться о сохранности ваших данных. '
        },
        {
            'title':'Премиум VPS на NVMe SSD в Казахстане',
            'img': {vps_icon},
            'text': 'Размещение вашего Битрикс24 на наших серверах позволят вашим сотрудникам всегда получать доступ к Битрикс24, а наша техническая поддержка позаботиться о сохранности ваших данных. '
        }
    ]
    return(
        <div className={s.bdr}>
            <section className={s.banner}>
                <div className="container">
                    <SliderBanner dataSlide={dataSlider}></SliderBanner>
                </div>

            </section>
            <section className={s.card}>
                <div className="container">
                    <CardList></CardList>
                </div>
            </section>
            <section className={s.adv}>
                <div className="container position-relative section_title">
                    <h2 className='h2 text-center mt-4 mb-5'>
                        Хостинг в Казахстане на быстрых SSD накопителях
                    </h2>
                   <CardAdvList></CardAdvList>
                </div>
            </section>
        </div>
    )
}

export default Home