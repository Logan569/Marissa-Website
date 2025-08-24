import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import ServicesList from "./ServicesList";
import { LeftLine, RightLine } from "./design/Services";

const Services = () => {
  return (
    <Section className="overflow-hidden scroll-mt-[10rem]" id="services">
      <div className="container relative z-2">
        <Heading
          tag="Enhance Your Beauty"
          title="Bridal Packages"
        />
        <div className="relative">
          <ServicesList />
        </div>
      </div>
      <div className="border-t border-zinc-700 mt-10 pt-10">
        <header className="text-center text-3xl font-bold text-zinc-50 pb-5">
          Dimensional Hair Color Services
        </header>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50 mb-8">
          Whether you're looking for all-over color, root touch-ups, highlights, lowlights, balayage, vivid hues, or grey coverage, I offer personalized hair color solutions to elevate your style.
        </p>
        <ul className="text-center max-w-[50rem] mx-auto text-zinc-50 list-disc list-inside mb-8">
          <li>Comprehensive Consultation – I take the time to understand your unique vision.</li>
          <li>Custom Color Formulas – Tailored to perfectly suit your hair and desired outcome.</li>
          <li>Expert Haircut – A precision cut that enhances your color and shape.</li>
          <li>Polished Style-Out – Finished with a flawless blow dry and style.</li>
        </ul>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50 mb-8">
          All color services are designed specifically for your hair type, needs, and goals. Pricing varies based on the complexity of the look, hair density, and the premium products used. Every color service includes a haircut, blow dry, and styling for a complete transformation.
        </p>
      </div>
      <div className="border-t border-zinc-700 mt-10 pt-10">
        <header className="text-center text-3xl font-bold text-zinc-50 pb-5">
          Blonding Services
        </header>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50 mb-8">
          From icy platinum to sun-kissed balayage, I can create the perfect shade of blonde for you! Whether it’s global blonding, highlights, babylights, balayage, or grey blending, I will work to create the blonde you’ve always envisioned for yourself.
        </p>
        <ul className="text-center max-w-[50rem] mx-auto text-zinc-50 list-disc list-inside mb-8">
          <li>Personalized Consultation – Let’s chat about your vision and create your dream look.</li>
          <li>Custom Color Formulas & Foil Placement – We’ll craft the perfect mix for your unique vibe.</li>
          <li>Precision Haircut – A fresh cut that compliments your color and style.</li>
          <li>Flawless Style-Out – A blowout, treatment, and styling to finish off the look.</li>
        </ul>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50">
          All blonding services are custom-tailored to you. Pricing depends on the look you’re going for, how much hair you’ve got, and the products we use. Every service includes toner, a cut, blow dry, treatment, and a full-on style.
        </p>
      </div>
      <div className="border-t border-b border-zinc-700 mt-10 pt-10 pb-10">
        <header className="text-center text-3xl font-bold text-zinc-50 pb-5">
          Custom Hair Extensions
        </header>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50 mb-8">
          Whether you're after fuller volume, added length, or a total hair transformation, I offer hand-tied, tape-ins, clip-ins, and halos—customized just for you.
        </p>
        <ul className="text-center max-w-[50rem] mx-auto text-zinc-50 list-disc list-inside mb-8">
          <li>Personalized Consultation – We’ll discuss your goals and create the perfect plan for your goals.</li>
          <li>Custom Color & Length – Human hair extensions, tailored to match your style.</li>
          <li>Pro Install – Expert application for a seamless, natural look.</li>
          <li>Flawless Blending – Extensions that blend perfectly with your natural hair.</li>
          <li>Tailored Haircut – A cut that blends your extensions and enhances your style.</li>
          <li>Styled to Perfection – Shampoo, blow dry, and a beautiful style to finish.</li>
        </ul>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50">
          All extensions from HAMU by Marissa Self are premium, real human hair, custom-colored to fit your goals. Pricing varies based on length and desired results. Every extension install includes the application, cut, shampoo, blow dry, and styling for a full makeover.
        </p>
      </div>
    </Section>
  );
};

export default Services;
