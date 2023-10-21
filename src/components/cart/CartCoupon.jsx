import { Button } from "../common";

const CartCoupon = () => {
  return (
    <div>
      <input
        type="text"
        className="py-1 lg:py-4 px-2 lg:pl-4 rounded border border-black mr-4 mb-6"
        placeholder="Coupan Code"
      />
      <Button text="Apply Coupon" />
    </div>
  );
};

export default CartCoupon;
