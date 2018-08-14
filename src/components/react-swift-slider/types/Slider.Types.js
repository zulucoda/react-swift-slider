// @flow
/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/08/14.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import type { Slide } from "./Slide.Type";

export type SliderProps = {|
  data: Array<Slide>,
  height: number,
  activeDotColor: string,
  interval: number,
  dotColor: string,
  showDots: boolean,
  enableNextAndPrev: boolean
|};

export type SliderState = {|
  currentSlide: number,
  slideInterval?: IntervalID
|};
