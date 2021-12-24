import React, {memo} from 'react';
import imgATM from '../../../assets/img/ATM.png';
import imgVISA from '../../../assets/img/visa_mastercard.png';
import imgCASH from '../../../assets/img/cash.png';

const renderInfoRadio = (value) => {
    switch (value) {
      case "ATM":
        return {
          src: imgATM,
          description: "Thẻ ATM nội địa",
        };
      case "VISA":
        return {
          src: imgVISA,
          description: "Visa, Master, JCB",
        };
      case "CASH":
        return {
          src: imgCASH,
          description: "Thanh toán tiền mặt",
        };
  
      default:
        return;
    }
  };




function Radio(props) {
  const {handleChangeHowtopay} = props;

    const {name, value} = props;
    const {src, description} = renderInfoRadio(value);


    return (
        <div className="radio_item">
            <input className ="radio_item_input" type="radio" id={value} name={name} value={value} onChange ={handleChangeHowtopay}/>
            <label className ="radio_item_label" htmlFor={value}>
                <div className="pay_img">
                    <img src={src}/>
                </div>
                <p className="pay_text">{description}</p>
            </label>
        </div>
    )
}

export default memo(Radio);