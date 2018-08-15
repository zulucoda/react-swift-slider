// @flow

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/08/14.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import type { Active, Src } from "./Types";

export type Slide = {|
  id: string,
  src: Src
|};

export type SlideProps = {|
  src: Src,
  active: Active
|};
