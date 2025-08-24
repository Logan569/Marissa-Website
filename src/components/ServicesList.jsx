import { check } from "../assets";
import { services } from "../constants";
import Button from "./Button";
import { useState } from "react";
import Popup from "./Popup";

const ServicesList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-[1rem] justify-center">
        {services.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[19rem] h-[45em] px-6 bg-n-8 border border-n-6 rounded-[2rem] py-8 text-color-2"
          >
            <h4 className="h4 mb-4">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[3rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className="w-full mb-6"
              onClick={() => item.price ? setIsPopupOpen(true) : window.location.href = "mailto:contact@jsmastery.pro"}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <Button 
          onClick={() => setIsPopupOpen(false)} 
          white 
          className="absolute"
        >
          Close
        </Button>
      </Popup>
    </>
  );
};

export default ServicesList;
