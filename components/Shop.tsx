import Image from "next/image";
import cards1 from '@/app/assets/cards1.jpg';
import cards2 from '@/app/assets/cards2.jpg';
import cards3 from '@/app/assets/cards3.jpg';
import cards4 from '@/app/assets/cards4.jpg';
import ButtonCheckout from "./ButtonCheckout";

const Shop = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-base-200 to-base-300" id="shop">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24 text-center">
          Unlock Meaningful
          <span className="block mt-2 bg-secondary text-secondary-content px-4 py-2 rounded-lg inline-block transform rotate-1">
            Connections
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <Image
              src={cards1}
              alt="Friendship Cards 1"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width={300}
              height={400}
            />
            <Image
              src={cards2}
              alt="Friendship Cards 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width={300}
              height={400}
            />
            <Image
              src={cards3}
              alt="Friendship Cards 3"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width={300}
              height={400}
            />
            <Image
              src={cards4}
              alt="Friendship Cards 4"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width={300}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-between bg-base-100 p-6 rounded-xl shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-4">Friendship Cards</h3>
              <p className="text-base-content/80 mb-6">
                Break the ice and forge lasting connections with our beautifully designed friendship cards. Perfect for social gatherings, events, or anytime you want to make new friends!
              </p>
            </div>
            <ButtonCheckout 
              priceId="price_friendship_cards" 
              className="btn btn-primary btn-lg w-full text-lg font-semibold"
            >
              Get Your Cards
            </ButtonCheckout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
