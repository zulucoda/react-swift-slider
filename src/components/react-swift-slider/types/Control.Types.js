// @flow

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/08/14.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import type { Direction } from "./Types";

export type ControlProps = {|
  onPressNext?: Function,
  onPressPrev?: Function,
  direction: Direction
|};
