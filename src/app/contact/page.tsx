import { FormComponent } from "@/components/Form";
import { MotionCard, MotionDiv } from "@/components/Motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, User } from "lucide-react";

export const metadata = {
  title: "Contato",
};

export default function Contact() {
  return (
    <section className="xl:h-[calc(100vh-80px)] flex items-center py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 lg:gap-0">
          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary" />
                <div className="uppercase font-semibold">Entre em contato</div>
              </div>
              <h1 className="max-w-xl mb-8">Tem um projeto?</h1>
            </div>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-x-6">
                <User size={20} className="text-primary" />
                <span>Felipe Shindi Toyama</span>
              </p>
              <p className="flex items-center gap-x-6">
                <MapPin size={20} className="text-primary" />
                <span>Rua Otaviano Piza, 872</span>
              </p>
              <p className="flex items-center gap-x-6">
                <Phone size={20} className="text-primary" />
                <span>(14) 99777-7600</span>
              </p>
              <p className="flex items-center gap-x-6">
                <Mail size={20} className="text-primary" />
                <span className="pb-1">shinditoyama@gmail.com</span>
              </p>
            </div>
          </MotionDiv>
          <MotionCard
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardHeader>
              <CardTitle>Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <FormComponent />
            </CardContent>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
