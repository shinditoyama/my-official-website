import { fetchSocials } from "@/app/actions";
import { Socials } from "./Socials";

export async function Footer() {
  const { socialLinks } = await fetchSocials();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyle="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyle="text-primary dark:text-white text-2xl hover:text-white dark:hover:text-primary transition-all"
            socials={socialLinks}
          />
          <div className="text-muted-foreground">
            Copyright &copy; Shindi Toyama. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
