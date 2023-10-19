import { useSelector } from "react-redux";
import { selectWishlist } from "../features/reducers/wishlistSlice";
import { Card } from "../components/common";

const Wishlist = () => {
  const wishlist = useSelector(selectWishlist);

  return (
    <div>
      <div className="mt-20 mb-14 flex justify-between items-center">
        <h2 className="font-poppins text-xl font-normal">
          Wishlist ({wishlist.length})
        </h2>
        <button className="font-poppins text-base font-medium py-4 px-12 rounded border border-opacity-50 border-black">
          Move All To Cart
        </button>

        {wishlist.map((p) => (
          <Card p={p} discount={3} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
