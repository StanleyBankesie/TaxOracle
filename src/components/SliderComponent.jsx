import React from "react";
import Carousel from "react-multi-carousel";
import client1 from "../assets/client_1.jpg";
const SliderComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        showDots={true}
        infinite={true}
      >
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg  mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mr-10">
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis incidunt ratione laborum quaerat maiores tempora, soluta
            nihil neque et.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-900">
                Serena Anderson
              </h3>
              <p className="text-sm text-gray-700">Machitosh Ghana Limited</p>
            </div>
            <div>
              <img
                src={client1}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default SliderComponent;
