import CardAdvItem from "../card_adv_item/card_adv_item";
import {CardGroup, Row} from "react-bootstrap";
import Data from '../../../card_adv_data.json'
function CardAdvList (){
    let data = Data
    return(
        <div className="d-flex gap-4 flex-row justify-content-between">

           <CardAdvItem data={data}></CardAdvItem>

       </div>
    )
}

export default CardAdvList