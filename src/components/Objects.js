export var coupon={
    name:"",
    couponCode:"",
    desc:"",
    tNdc:"",
    validTill:"",
    company:"",
    whereGot:"",
    status:"active",
    mailid:"",
    couponid:"CoupX1",
    category:"",
}
export var couponErrors={
    name:"Please enter a valid name",
    couponCode:"Please enter a valid coupon code",  
    validTill:"Please select a valid future date",
    company:"Please enter where we can use this coupon",
    mailid:"Please enter your mail id",
    category:"Please select a ccategory",
}
export var codeSandbox="https://7bti4i.sse.codesandbox.io"
export var getCoupons=()=>{
let data=["Movie tickets offer","MovieDisc50","Get 50% cashback on movie bookings using paytm",
"","Aug 1","Paytm","Paytm","active"]
return [0,1,2,3,4].map((val,index)=>{
return{
    name:data[0],
    //couponCode:data[1],
    desc:data[2],
    tNdc:data[3],
    validTill:data[4],
    company:data[5],
    whereGot:data[6],
    status:data[7],
    couponid:"coupX0"+val
}
})
}
export var categories=["Food and Beverages","Clothing","Accesories","furniture","media","Tickets"]
