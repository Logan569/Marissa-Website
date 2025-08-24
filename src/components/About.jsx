import { Marissa } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import { BackgroundCircles } from "./design/Title";

const About = () => {
  return (
    <Section id="about" className="pt-[8rem] scroll-mt-[5rem] -mt-[7rem]">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-0 md:text-center" title="About" />
        <div className="relative max-w-[23rem] mx-auto md:max-w-4xl mb-0 -mt-20"> 
          <img
            src={Marissa}
            className="w-full scale-[0.8] translate-y-0 rounded-[1rem]" 
            width={819}
            height={392}
            alt=""
          />
        </div>
        <header className="mt-0 text-center text-3xl font-bold text-zinc-50 pb-5">
          Hello Gorgeous!
        </header>
        <p className="text-center max-w-[50rem] mx-auto text-zinc-50">
          I'm Marissa Self and I am a licensed cosmetologist. With 7 years of experience in the beauty industry, I specialize in creating timeless, natural bridal glam and soft, romantic hairstyles that enhance your unique beauty. I’m passionate about making brides feel radiant and confident on their special day, bringing a calm, professional presence and everything needed—makeup, tools, and lashes—so you can fully enjoy the experience.
        <br></br>
        <br></br>
          Beyond bridal, I’ve spent the past 5 years perfecting the art of blonding and dimensional color, crafting customized looks that bring depth, brightness, and effortless dimension. My priority is always my clients—building genuine connections and delivering results that align with your hair goals. Whether you're walking down the aisle or refreshing your color, I’m dedicated to helping you look and feel your absolute best. Let’s create something beautiful together!
        </p>
      </div>
    </Section>
  );
};

export default About;
