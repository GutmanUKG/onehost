import {Fragment} from "react";
import s from './card_item.module.scss'
function CardItem(props){
    let Data = props.data;
    let renderCard = Data.Elements_Cards.Cards.map((item,id)=>{
        let {title, descr, img} = item;
        return(
            <div key={id} className={s.item}>
               <h5 className={s.title}>
                   {title}
               </h5>
                <div className={s.desc}>
                    {descr}
                </div>
                <img src={img} alt={title}/>
            </div>
        )
    })
    return(
        <Fragment>
            {renderCard}
        </Fragment>

    )
}

export default CardItem