import type { ComponentType } from "react";
import { LandingPage, Page404 } from "./public";

interface IPage {
  path: string;
  comp: ComponentType;
}

const Pages: IPage[] = [
  {
    path: "/",
    comp: LandingPage,
  },
  {
    path: "*",
    comp: Page404,
  },
];

export default Pages;
