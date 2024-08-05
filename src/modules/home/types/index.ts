import { RouteValues } from "../../shared/routes/constants";

export type Slide = {
  id: number;
  title: string;
  subText: string;
  imageSrc: string;
  btn: {
    name: string;
    to: RouteValues;
  };
};
