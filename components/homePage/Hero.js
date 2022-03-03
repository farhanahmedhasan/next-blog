import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Gradient For HeroBG Image */}
      <div className="bg-gradient-primary-radial absolute z-[2] top-0 left-0 h-full w-full"></div>

      {/* Hero Content */}
      <div className="container relative z-[4] py-20">
        <div className="max-w-[702px]">
          <h1 className="capitalize text-6xl leading-[80px] tracking-[5px] mb-28 text-white">
            <span className={`${classes.titleGradient} px-8 pb-[30px]`}>Your daily fat blogs </span>
            <span className={`${classes.titleGradient} text-5xl px-8 pb-4 pt-[22px]`}>to feed your hunger</span>
          </h1>

          <p className="text-lg font-merriweatherSans font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis labore quos mollitia minus iusto ipsam aliquam, suscipit
            earum? Velit a voluptatem facere, minus et sequi magni dolor neque corrupti laboriosam nisi fuga, deserunt, aliquid deleniti
            cupiditate ipsa libero corporis. Architecto repellendus ipsa iusto fugit distinctio molestias non beatae animi culpa! Veniam,
            hic. Totam sint vero incidunt cum rerum molestiae fugit.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute z-[3] bottom-0 right-0 max-w-[800px] w-full">
        <Image
          src="/images/site/heroImg.png"
          objectFit="cover"
          priority="true"
          layout="responsive"
          width={800}
          height={600}
          alt="newspaper"
        />
      </div>
    </section>
  );
};

export default Hero;
