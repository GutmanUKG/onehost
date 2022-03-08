
import s from './price_card_item.module.scss'
function PriceCardItem({data}){
    let renderCard = data.Elements_Cards.Cards.map((item,id)=>{
        let {name,options} = item;
        return(
          <div className='col-2'>
                <div className={s.title}>
                    {name}
                </div>
              <div className={s.options}>
                  {options.map((item,id)=>{
                      return(
                          <div key={id} className={s.option_item}>
                              {item}
                          </div>
                      )
                  })}
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

export default PriceCardItem;