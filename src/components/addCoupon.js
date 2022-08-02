import { useState } from "react";
import ImageToText from "./imageToText";
import { categories, coupon, couponErrors } from "./Objects";
import { addCouponService } from "./services";

export default function AddCoupon(props){
  const [addCouponForm,setAddCouponForm]=useState({...coupon})
  const [error, setError]=useState({...coupon})
  
    var getToday=()=>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return  yyyy + '-' + mm + '-' + dd;
   }
   const setTndC=(value)=>{
    setAddCouponForm({
      ...addCouponForm,
      tNdc:value
    })
   }
   var checkEmpty=(e)=>{
    if(e.target.value.length<1){
      setError({
        ...error,
        [e.target.name]:couponErrors[e.target.name]
      })
    }else{
      setError({
        ...error,
        [e.target.name]:""
      })
    }
   }
   const checkMail=(e)=>{
    let s=String(e.target.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(!s){
      setError({
        ...error,
        [e.target.name]:couponErrors[e.target.name]
      })
    }else{
      setError({
        ...error,
        [e.target.name]:""
      })
    }
   }
   let onChangeValue=(e)=>{
    checkEmpty(e)
    if(e.target.name==="mailid"){
      checkMail(e)
     // console.log(e.target.error)
    }
    setAddCouponForm({
      ...addCouponForm,
      [e.target.name]:e.target.value
    })
   }
   let checkBeforeSend=()=>{
    let res=true
    let err={}
    for(let key of Object.keys(couponErrors)){
      if(error[key]==null ||error[key]===undefined || addCouponForm[key].length<1){
        console.log(key)
        err[key]=couponErrors[key]
        res=false
      }
    }
    setError({
      ...error,
      ...err
    })
    console.log("check before",res)
    return res
   }
   const send=()=>{
    console.log(addCouponForm)
if(checkBeforeSend()){
  console.log(addCouponForm)
    addCouponService(addCouponForm).then((res)=>{
      console.log(res)
      alert("Coupon added successfully")
      props.refresh()
    }).catch((err)=>console.log(err))
  }
   }
    return(
        <>
        
      
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Coupon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
        <div class="form-floating mb-3">
  <input type="text" className="form-control"
   name="name" 
   value={addCouponForm.name} 
   onChange={onChangeValue} 
   id="name" placeholder="name@example.com" />

  <label for="name">Coupon name:</label>
  <span className="text-danger">{error.name}</span>
</div>
<div class="form-floating mb-3">
  <input type="date" className="form-control"  
  name="validTill" value={addCouponForm.validTill} 
  onChange={onChangeValue}  min={getToday()} 
  id="valid" placeholder="Enter date"  />

  <label for="valid">Valid Till:</label>
  <span className="text-danger">{error.validTill}</span>
</div>
<div class="form-floating mb-3">
  <input type="text" className="form-control"
   name="company" value={addCouponForm.company} 
   onChange={onChangeValue} id="where" placeholder="where" />

  <label for="where">Where can we use:</label>
  <span className="text-danger">{error.company}</span>
</div>    
<div class="form-floating mb-3">
  <input type="password" className="form-control" 
    name="couponCode" value={addCouponForm.couponCode} 
    onChange={onChangeValue} id="code" placeholder="code" />

  <label for="code">Coupon Code:</label>
  <span className="text-danger">{error.couponCode}</span>
</div>  
<div class="form-floating mb-3">
  <input type="email" className="form-control" 
  name="mailid" value={addCouponForm.mailid} 
  onChange={onChangeValue} id="email" placeholder="mailid" />

  <label for="email">Your Email ID:</label>
  <span className="text-danger">{error.mailid}</span>
</div>  

<label for="category" class="form-label">Category</label>
<input class="form-control" list="categoryoptions"
 id="category" placeholder="Type to search..." 
 name="category"
 onChange={onChangeValue}
 />
<datalist id="categoryoptions">
  {categories.map((val,ind)=>{
return <option key={ind} value={val}>{val}</option>
  })}
  
 
</datalist>


<div class="form-floating mb-3">
  <input type="text" className="form-control" 
  name="whereGot" value={addCouponForm.whereGot} 
  onChange={onChangeValue} id="wheregot" placeholder="wheregot" />

  <label for="wheregot">Where did you get this:</label>
  
</div>  
<div class="form-floating mb-3">
  <textarea  type="text" className="form-control" 
   name="tNdc" value={addCouponForm.tNdc} 
   onChange={onChangeValue} id="tndc" placeholder="TandC"></textarea>

  <label for="tndc"> Terms and Conditions of your coupon:</label>
  {/* <ImageToText settNDc={setTndC} /> */}
</div> 
<div class="form-floating mb-3">
  <textarea  type="text" className="form-control" 
  name="desc" value={addCouponForm.desc} 
  onChange={onChangeValue} id="desc" placeholder="desc" ></textarea>

  <label for="desc">Description:</label>
</div> 
            
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={send}>Send</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}