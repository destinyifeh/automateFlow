import makeup1 from "@/assets/makeup-1.png";
import makeup2 from "@/assets/makeup-2.png";
import makeup3 from "@/assets/makeup-3.png";
import makeup4 from "@/assets/makeup-4.png";
import makeup5 from "@/assets/makeup-5.png";
import { Card, CardContent } from "@/components/ui/card";
const features = [
  {
    title: "Personalized product suggestions",
    description:
      "Get makeup recommendations that match your undertone, finish, and everyday style.",
    image: makeup1,
    imageClasses: "top-11 left-[19px] w-[138px] h-[126px]",
  },
  {
    title: "Price comparisions",
    description:
      "Compare products across brands and find options that fit your budget instantly.",
    image: makeup2,
    imageClasses: "top-[54px] left-6 w-[127px] h-[115px]",
  },
  {
    title: "AI powered tutorials",
    description:
      "Follow clear, step-by-step tutorials created around your look and your pace.",
    image: makeup3,
    imageClasses: "top-[54px] left-6 w-[121px] h-[115px]",
  },
  {
    title: "Makeup Look Creator",
    description:
      "Create and customize your own makeup looks using styles, shades, and inspirations",
    image: makeup4,
    imageClasses: "top-[54px] left-6 w-[121px] h-[115px]",
  },
  {
    title: "Routine Builder",
    description:
      "Build simple daily or event-ready routines that match your beauty goals.",
    image: makeup5,
    imageClasses: "top-[37px] left-5 w-[83px] h-[133px]",
  },
];

export const CareerSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fff4e3] rounded-[20px] py-20 px-8 lg:px-[84px] max-w-[1568px] mx-auto">
      <div className="flex flex-col gap-[30px]">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-5xl md:text-[64px]">
          Features Coming Soon
        </h2>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#8d5241] text-3xl md:text-4xl max-w-[1166px]">
          AI-led beauty support made to understands your beauty journey and
          helps you shape looks that feel like you.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[536px] h-[401px] bg-[#8d5241] rounded-[20px] border-[#e3bcb5] overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <CardContent className="relative w-full h-full p-0">
                  <img
                    className={`absolute ${feature.imageClasses}`}
                    alt={feature.title}
                    src={feature.image}
                  />

                  <h3 className="absolute top-[200px] left-[19px] right-[19px] [font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#fff2da] text-3xl">
                    {feature.title}
                  </h3>

                  <p className="absolute top-[280px] left-6 right-6 [font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#fff2da] text-xl leading-8">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
