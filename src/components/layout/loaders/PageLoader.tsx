import { RccgLogo } from "../../../assets/images";

const PageLoader = () => {
  return (
    <div className="w-screen h-dvh bg-nav-bg flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={RccgLogo}
          alt="RCCG LOGO"
          className="size-9 md:size-12 object-contain select-none"
        />

        <h1 className="text-white leading-snug text-xs font-medium text-center mt-3">
          Breakthrough
          <br />
          Cathedral LP78
        </h1>

        <div className="loading loading-dots bg-white loading-xl"></div>
      </div>
    </div>
  );
};

export default PageLoader;
