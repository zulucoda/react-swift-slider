/// <reference types="react" />
export declare type SliderItem = {
  id: string;
  src: string;
};
export declare type SliderProps = {
  data: SliderItem[];
  height?: number;
  interval?: number;
  activeDotColor?: string;
  dotColor?: string;
  showDots?: boolean;
  enableNextAndPrev?: boolean;
};
export declare const Slider: {
  (sliderProps: SliderProps): JSX.Element;
};
export default Slider;
