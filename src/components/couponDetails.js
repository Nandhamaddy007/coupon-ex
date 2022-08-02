import { useEffect, useState } from "react"

export default function GetCouponDetails(props){
    const [img, setImg]= useState("")
    useEffect(()=>{
       // console.log(props)
        setImg(props.img)
    },[props])
    
    return(
        <>
        

{/* <!-- Modal --> */}
<div className="modal fade" id="couponDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Coupon details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-sm-11 col-md-6"><img src={props.img} class="img-fluid" alt="Coupon Logo" /></div>
            <div className="col-sm-11 col-md-6"><div className="display-5">{props?.coupon?.name}</div>
            <small>Valid Till :{props.coupon.validTill}</small>
            <p>You can use this coupon @ <b>{props.coupon.company}</b></p>
            <p>{props.coupon.desc}</p>
            <h6>Terms & Conditions:</h6>
            <p>{props.coupon.tNdc}</p>
            </div>
        </div>
      
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#getCoupon">
                    Get it
</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}