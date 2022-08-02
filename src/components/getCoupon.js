export default function GetCoupon(props){
    return(
        <>
        
      
        <div class="modal fade" id="getCoupon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Get your coupon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-floating mb-3">
  <input type="text" className="form-control" id="username" placeholder="name@example.com" />
  <label for="name">Please enter your name:</label>
</div>
<div class="form-floating mb-3">
  <input type="text" className="form-control" id="usermail" placeholder="name@example.com" />
  <label for="name">Please enter your email id:</label>
</div>
        </form>
        <h5>Your coupon will be sent to your email id</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Send</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}