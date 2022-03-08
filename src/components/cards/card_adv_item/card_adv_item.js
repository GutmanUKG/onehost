import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import s from './card_adv_item.module.scss'
function CardAdvItem(props){
    let {data} = props;
    console.log(data.Elements_Cards.Cards)
    let renderCard = data.Elements_Cards.Cards.map((item,id)=>{

        let {title,option} = item;
        return(
            <div key={id} className={s.item}>
                <h3 className={s.title}>
                    {title}
                </h3>
                <div className={s.options}>
                    <ul>
                        {option.map((item,id)=>{
                            return(
                                <li key={id}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    })
    return(
      <>
          {renderCard}
      </>
    )
}

export default CardAdvItem;