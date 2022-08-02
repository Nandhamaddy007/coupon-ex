                import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddCoupon from './addCoupon'
import GetCouponDetails from './couponDetails'
import GetCoupon from './getCoupon'
import { codeSandbox, getCoupons } from './Objects'
                export default function Dashboard(props){
                 const [coupons,setCoupons]=useState([])
                 var initCoupons=()=>{
                  axios.get(codeSandbox+"/getcoupons").then((res)=>{console.log(res)
                    setCoupons(res.data)
                   })
                 }
                 useEffect(()=>{
                  // console.log("use effect")
                  initCoupons()
                 },[])
                  var img="https://premio.io/wp-content/themes/premio-website/assets/img/product/coupon-x.webp"
                   
                    return(
                        <>
                       <AddCoupon refresh={initCoupons} />
                       <GetCoupon />
                       
                      <div className='container'>
                     <div className='row'>
                     
                      {coupons.map((val,ind)=>{
                        return(
                          
                            <div key={ind} className='col-sm-1 col-md-4  p-3' >
                             
                              <GetCouponDetails img={img} coupon={val} /> 
                              <div >
<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#couponDetails"

>  
                        <div className="card text-start">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{val.name}                    
                    </h5>
                    <small>Valid Till {val.validTill}</small>

                    <p className="card-text">{val.desc}</p>
                    
                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#getCoupon">
                    Get it
</button>
                </div>
                </div>
                </button>
                        </div></div>
                        )
                      })}
                     </div>
                      </div>
                        </>
                    )
                }