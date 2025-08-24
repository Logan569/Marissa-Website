import Section from "./Section";
import Heading from "./Heading";
import { portfolio1, portfolio2, portfolio3, check } from "../assets";
import { process_portfolio } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Portfolio";

const Portfolio = () => {
  return (
    <Section className="scroll-mt-[5rem]" id="portfolio">
      <div className="container">
        <Heading tag="Enhance Your Beauty" title="Portfolio" />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={portfolio1}
              />
            </div>
            <div className="relative z-1 max-w-[30rem] ml-auto bg-n-8/80 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="h4 mb-4">Personalized Hair Appointments</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                What to expect during your full experience from goals to
                results.
              </p>
              <ul className="body-2">
                {process_portfolio.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={portfolio2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="bridal party"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Dimensional Color</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Hair color that blends multiple tones, highlights, and
                  lowlights to create depth, contrast, and a more natural
                  lived-in look.
                </p>
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Bridal Parties</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Providing professional hair and makeup services for your
                  entire bridal party, ensuring everyone looks flawless and
                  cohesive on your special day.
                </p>
              </div>
              <div className="relative h-[30rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={portfolio3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="model"
                />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-500 px-10 text-center">
        <strong>Disclaimer:</strong> <br />
        HAMU by Marissa Self cannot guarantee specific results based on
        inspiration photos or client expectations for hair, makeup, color, cuts,
        extensions, etc.
      </div>
    </Section>
  );
};

export default Portfolio;
