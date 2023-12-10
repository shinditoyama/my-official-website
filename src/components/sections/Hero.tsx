import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "../Motion";
import { RichText } from "../RichText";
import { Socials } from "../Socials";
import { TypedText } from "../TypedText";

interface Props {
  pageInfo: IHomeAttributes;
}

export function Hero({ pageInfo }: Props) {
  return (
    <section className="xl:h-[calc(100vh-80px)] flex items-center py-16">
      <div className="container mx-auto">
        <div className="flex justify-between gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col max-w-2xl justify-center text-center mx-auto xl:mx-0 xl:text-left"
          >
            <TypedText />
            <h1 className="mb-4">
              Olá, eu sou <span className="text-primary">{pageInfo.name}</span>
            </h1>
            <div className="subtitle mb-6 max-w-2xl mx-auto xl:mx-0">
              <RichText content={pageInfo.introduction.raw} />
            </div>

            <Socials
              containerStyle="flex gap-x-6 mx-auto xl:mx-0"
              iconStyle="text-2xl text-foreground hover:text-primary transition-all"
              socials={pageInfo.socialLinks}
            />
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="hidden xl:flex relative"
          >
            <Image
              alt="avatar"
              src={pageInfo.avatar.url}
              width={420}
              height={420}
              priority
              className="w-[300px] h-[300px] lg:w-[370px] lg:h-[354px] mb-6 lg:mb-0 rounded-lg object-cover"
            />
          </MotionDiv>
        </div>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex absolute left-2/4 bottom-8 animate-bounce"
        >
          <ChevronDown className="text-primary" />
        </MotionDiv>
      </div>
    </section>
  );
}
