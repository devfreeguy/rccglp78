import { Route, Routes } from "react-router-dom";
import Pages from "./pages";
import useGlobalStore from "./stores/globalStore";
import PageLoader from "./components/layout/loaders/PageLoader";
import { useEffect } from "react";
import { trackAssetsLoading, trackImagesLoading } from "./utils/assets.utils";

const App = () => {
  const { appLoading, toggleAppLoading } = useGlobalStore();

  // App loading screen
  useEffect(() => {
    Promise.all([
      trackAssetsLoading(),
      trackImagesLoading(),
      document.fonts ? document.fonts.ready : Promise.resolve(),
    ]).then(() => {
      // Slight delay for smoother transition
      setTimeout(() => toggleAppLoading(false), 300);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (appLoading) return <PageLoader />;

  return (
    <>
      <Routes>
        {Pages.map(({ path, comp }, i) => (
          <Route key={i} path={path} Component={comp} />
        ))}
      </Routes>
    </>
  );
};

export default App;
