import Button from "../Buttons";
import Image from "next/image";
import Card from "./card";
import { useRouter } from 'next/navigation';


const Hero = () => {
  const router = useRouter();
  return (
    <section >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            DALL·E, GPT, Midjourney, Stable Diffusion, ChatGPT
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Find top prompts, produce better results, save on API costs, sell
            your own prompts.
          </p>
          <div className="flex gap-4 ">
            <Button label={"Find a Prompt"} onClick={() => router.push('/explore')} />
            <Button inverted={true} label={"Sell a prompt"} onClick={() => router.push('/vendor/dashboard/')} />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:block">
          {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}

          <div className={`grid grid-cols-2 gap-8`}>
            <Card
              src={"/images/prompt.webp"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
            <Card
              src={"/images/prompt2.webp"}
              alt="Rpg Games Set"
              model={"Midjourney"}
              label={"RPG Game Assets"}
            />
            <Card
              src={"/images/prompt3.webp"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
            <Card
              src={"/images/prompt5.webp"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
