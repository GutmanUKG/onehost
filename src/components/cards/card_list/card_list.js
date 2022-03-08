import CardItem from "../card_item/card_item";
import Data from '../../../card_data.json'
function CardList(){
    let data = Data;
    return(
        <div className='d-flex justify-content-between position-relative z-index-200'>
            <CardItem data={data}></CardItem>
        </div>

    )
}
export default CardList