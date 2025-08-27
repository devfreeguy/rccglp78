import { useEffect } from "react";
import { appInfo } from "../utils/app.util";

const usePageTitle = (name: string = "") => {
  useEffect(() => {
    document.title = `${name || "Set page title"} - ${appInfo?.name || "App"}`;
  }, [name]);
};

export default usePageTitle;
