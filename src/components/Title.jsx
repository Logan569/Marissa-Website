import Section from "./Section";
import { BottomLine } from "./design/Title";
import { useRef} from "react";

const Title = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">Flawless Beauty, Tailored to You.</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            No matter the occasion let your looks show how you feel.
          </p>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Title;
