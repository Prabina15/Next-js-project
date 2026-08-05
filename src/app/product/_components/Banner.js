import Image from "next/image";
import watch1 from "@/assests/images/watch1.png";
const ProductBanner = () => {
  return (
    <div className=" p-10 bg-linear-to-r from-blue-800 via-blue-300 to-blue-700 shadow-xl grid grid-cols-3 items-center justify-between shadow=xl">
      <h3 className="text-6xl font-black text-white text-center">
        New Arrival
      </h3>
      <Image src={watch1} height={300} width={300} alt="Watch" className="h-64 w-auto mx-auto" />
      <h4 className="flex flex-col justify-center items-center rounded-full bg-white shadow border-4 border-blue-300 w-40 h-40 text-2xl font-bold text-center ">
        <span className="text-5xl text-red-500">50%</span> Off
      </h4>
    </div>
  );
};

export default ProductBanner;
