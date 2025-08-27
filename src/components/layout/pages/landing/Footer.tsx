import { Link } from "react-router-dom";
import { RccgLogo } from "../../../../assets/images";
import { LandingData } from "../../../../data";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import HeroSocialIcons from "../../global/SocialIcons/HeroSocialIcons";

interface IFooterLink {
  label: string;
  link: string;
}

interface IFooterSection {
  heading: string;
  links: IFooterLink[];
}

const Footer = () => {
  return (
    <PageWrapper className="bg-footer-bg min-h-fit">
      <SectionWrapper className="flex-col py-8 gap-10">
        {/* Main */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="w-full h-fit flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <img
              src={RccgLogo}
              alt="RCCG LOGO"
              className="size-9 md:size-12 object-contain select-none"
            />

            <h1 className="w-fit text-white leading-snug text-xs font-bold">
              Breakthrough
              <br />
              Cathedral LP78
            </h1>
          </div>

          {/* Links */}
          {LandingData.footer.links.map(({ header, data }, i) => (
            <FooterSections key={i} heading={header} links={data} />
          ))}
        </div>

        {/* Bottom */}
        <div className="flex h-30 sm:h-16 border-t border-gray-100 w-full text-white">
          <div className="flex gap-3 flex-col sm:flex-row items-center justify-between w-full mt-auto">
            <span className="text-xs text-center sm:text-start">
              Copyright {new Date().getFullYear()} Breakthrough Cathedral, LP78.
              All Rights Reserved.
            </span>

            <HeroSocialIcons />
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Footer;

const FooterSections = ({ heading, links }: IFooterSection) => (
  <div className="w-full flex flex-col gap-4">
    <h5 className="text-xs sm:text-sm font-light text-gray-200">
      {heading.toUpperCase()}
    </h5>

    <div className="flex flex-col gap-6">
      {links.map(({ label, link }, i) => (
        <Link
          key={i}
          to={link}
          className="text-sm sm:text-base text-white font-semibold"
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);
