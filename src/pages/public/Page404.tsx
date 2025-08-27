import { useNavigate } from "react-router-dom";
import Button from "../../components/elements/buttons/Button";
import PageWrapper from "../../components/wrappers/PageWrapper";
import SectionWrapper from "../../components/wrappers/SectionWrapper";

const Page404 = () => {
  const nav = useNavigate();

  return (
    <PageWrapper className="flex flex-col justify-center">
      <SectionWrapper className="flex-col gap-3">
        <h1 className="text-2xl text-center font-semibold">Page not found</h1>
        <span className="text-center">
          This page is still under contruction or not available yet
        </span>
        <Button label="Go Home" onClick={() => nav("/")} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Page404;
