import Header from "../../components/layout/global/headers/public/Header";
import {
  ApostleStephen,
  FindParish,
  Footer,
  Hero,
  LiveAndEvents,
  MainLibrary,
  PICP,
  Supports,
  Surrender,
} from "../../components/layout/pages/landing";
import PageWrapper from "../../components/wrappers/PageWrapper";
import { usePageTitle } from "../../hooks";

const LandingPage = () => {
  // Page Title
  usePageTitle("Welcome To Breakthrough Cathedral");

  return (
    <PageWrapper>
      <Header />
      <Hero />
      <ApostleStephen />
      <LiveAndEvents />
      <Supports />
      <MainLibrary />
      <PICP />
      <Surrender />
      <FindParish />
      <Footer />
    </PageWrapper>
  );
};

export default LandingPage;
