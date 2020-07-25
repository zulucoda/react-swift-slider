/// <reference types="react" />
export declare type SliderList = {
  id: string;
  src: string;
};
export declare type SliderProps = {
  data: SliderList[];
  height: number;
  interval: number;
  activeDotColor: string;
  dotColor: string;
  showDots: boolean;
  enableNextAndPrev: boolean;
};
export declare const Slider: {
  (sliderProps: SliderProps): JSX.Element;
  defaultProps: {
    data: never[];
    height: number;
    activeDotColor: string;
    interval: number;
    dotColor: string;
    showDots: boolean;
    enableNextAndPrev: boolean;
  };
  propTypes: {
    data: import("prop-types").Validator<(Required<import("prop-types").InferProps<{
      id: import("prop-types").Validator<string>;
      src: import("prop-types").Validator<string>;
    }>> | null | undefined)[]>;
    height: import("prop-types").Requireable<number>;
    interval: import("prop-types").Requireable<number>;
    activeDotColor: import("prop-types").Requireable<string>;
    dotColor: import("prop-types").Requireable<string>;
    showDots: import("prop-types").Requireable<boolean>;
    enableNextAndPrev: import("prop-types").Requireable<boolean>;
  };
};
export default Slider;
