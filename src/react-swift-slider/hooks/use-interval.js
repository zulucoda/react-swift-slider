/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/06/22.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { useRef, useEffect } from 'react';

function useInterval(callback, interval) {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      saveCallback.current();
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
}

export { useInterval };
