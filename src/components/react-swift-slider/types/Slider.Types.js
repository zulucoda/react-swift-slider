// @flow

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/08/14.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import type { ActiveDotColor, DotColor } from "./Types";
import type { Slide } from "./Slide.Types";

export type SliderProps = {|
  data: Array<Slide>,
  height: number,
  activeDotColor: ActiveDotColor,
  interval: number,
  dotColor: DotColor,
  showDots: boolean,
  enableNextAndPrev: boolean
|};

export type SliderState = {|
  currentSlide: number,
  slideInterval?: IntervalID
|};
