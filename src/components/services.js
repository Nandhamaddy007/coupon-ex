import axios from "axios"
import { codeSandbox } from "./Objects"

let base="http://localhost:3001"
export function addCouponService(data){
return axios.post(codeSandbox+'/addcoupon',data)
}