import group4602 from "@/assets/Group-460-2.png";
import { Badge } from "@/components/ui/badge";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12 pt-24 pb-12 lg:py-20 px-4 max-w-[1568px] mx-auto">
      <div className="w-full lg:max-w-[448px] flex-shrink-0 animate-fade-in [--animation-delay:0ms]">
        <img
          className="w-full h-auto object-cover rounded-2xl"
          alt="About Us illustration"
          src={group4602}
        />
      </div>

         <div className="flex-1 flex flex-col items-start gap-8 lg:gap-12 pt-2">
        <Badge
          variant="outline"
          className="h-16 px-8 bg-[#fff2da] rounded-[30px] border-none backdrop-blur-[2.0px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.1)] relative before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-[30px] before:[background:linear-gradient(90deg,rgba(227,188,181,1)_18%,rgba(249,188,153,1)_53%,rgba(227,188,181,1)_78%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105"
        >
          <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-xl tracking-[0] leading-[normal]">
            About Us
          </span>
        </Badge>

        <h2 className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-2xl md:text-4xl lg:text-4xl tracking-[0] leading-tight animate-fade-in [--animation-delay:400ms]">
          <span className="text-[#8d5241]">We combine </span>
          <span className="text-[#fcb8ac]">beauty</span>
          <span className="text-[#8d5241]"> + </span>
          <span className="text-[#fcb8ac]">technology</span>
          <span className="text-[#8d5241]">
            {" "}
            to give you something better than tutorials and guidance that
            understands *
          </span>
        
          <span className="text-[#e3bcb5]">your</span>
          <span className="text-[#8d5241]">* face, *</span>
      
          <span className="text-[#e3bcb5]">your</span>
          <span className="text-[#8d5241]">* skin tone, and *</span>

          <span className="text-[#e3bcb5]">your</span>
          <span className="text-[#8d5241]">* style.</span>
        </h2>

        <div className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg md:text-xl tracking-[0] leading-relaxed space-y-6 animate-fade-in [--animation-delay:600ms]">
          <p>
            For so many people, getting their makeup done for a wedding, party,
            or special event isn&apos;t just about beauty it&apos;s about
            feeling confident, seen, and ready for the moment. But professional
            makeup services can be expensive and out of reach, leaving many to
            do their own makeup while quietly doubting whether it&apos;s
            &ldquo;good enough.&rdquo;
          </p>

          <p>
            The truth is, most people don&apos;t lack ability, they lack
            confidence and personalized guidance. They&apos;ve watched the
            tutorials. They&apos;ve bought the products. They just don&apos;t
            have someone showing them how it works on their face, their skin
            tone, their features.
          </p>

          <p>
            Face By You was created to change that. It exists to replace
            uncertainty with confidence, to turn &ldquo;I hope this looks
            okay&rdquo; into &ldquo;I did this.&rdquo; By providing personalized,
            AI-powered guidance and support, Face By YOU empowers users to
            become their own makeup artist and show up to every moment feeling
            beautiful, capable, and in control.
          </p>
        </div>
      </div>
    </section>
  );
};
