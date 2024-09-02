import Image from "next/image";
import events from '@/app/assets/events1.jpg';

const Events = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-base-200 to-base-300" id="events">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24 text-center">
          Experience Unforgettable
          <span className="block mt-2 bg-primary text-primary-content px-4 py-2 rounded-lg inline-block transform -rotate-2">
            Friendships
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="col-span-2 relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={events}
              alt="Friends.in Events"
              layout="responsive"
              width={800}
              height={600}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Upcoming Events</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-base-100 p-6 rounded-xl shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join the Fun!</h3>
              <p className="text-base-content/80 mb-6">
                Discover exciting events and make new friends in your city. From casual meetups to thrilling adventures, we&apos;ve got something for everyone!
              </p>
            </div>
            <a 
              href="https://posh.vip/g/friendsin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg w-full text-lg font-semibold"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
