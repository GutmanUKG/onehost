import s from './list_country.module.scss'
function ListCountry(){
    return(
        <div className={s.country_list}>
            <div className={s.active_country}>
                <a href="#">
                    <span>
                        + 7 (7232) 91-95-12
                    </span>
                    <span>
                        Усть-Каменогорск
                    </span>
                </a>
            </div>
            <div className={s.dropdown_list}>
                <a href="#">
                    <span>
                       +7 (727) 347-01-01
                    </span>
                    <span>
                       Алматы
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ListCountry