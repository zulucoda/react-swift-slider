// @flow

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/08/14.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import type { Active, ActiveDotColor, DotColor } from "./Types";

export type DotProps = {
  activeDotColor: ActiveDotColor,
  dotColor: DotColor,
  active: Active,
  onClick: Function,
  idx: number
};
