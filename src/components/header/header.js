import {Link} from "react-router-dom";
import ListCountry from "../list_country/list_county";
import s from './header.module.scss'
import serachIcon from '../../images/search.webp';
import Logo from '../../images/logo-onehost_new.svg'

function Header(){
    return(
        <header>
                <div className={s.wrapper}>
                   <div className="container">
                       <div className="d-flex align-items-center justify-content-between pt-2 pb-2">
                           <ListCountry></ListCountry>
                           <ul className={s.panel}>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Поиск
                                   </a>
                               </li>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Тикет
                                   </a>
                               </li>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Оплата
                                   </a>
                               </li>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Помощь
                                   </a>
                               </li>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Вход
                                   </a>
                               </li>
                               <li>
                                   <img src={serachIcon} alt=""/>
                                   <a href="#">
                                       Контакты
                                   </a>
                               </li>
                           </ul>
                       </div>
                   </div>
                </div>
                <div className="container">
                   <div className={s.menu_wrapper}>
                       <div className="logo">
                           <Link to='/'>
                               <img src={Logo} alt=""/>
                           </Link>
                       </div>
                       <nav>
                           <ul className={s.main_menu}>
                               <li>
                                   <Link to='/'>Главная</Link>
                               </li>
                               <li>
                                   <Link to='/vps'>Виртуальный сервер</Link>
                               </li>
                           </ul>
                       </nav>
                   </div>
                </div>
        </header>
    )
}

export default Header