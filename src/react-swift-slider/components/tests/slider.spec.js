/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ReactSlider from '../Slider';
import { CSS_OVERRIDE_EXTERNAL } from '../../config';

describe('Slider - Unit Test', () => {
  afterEach(cleanup);

  const data = [
    {
      id: '1',
      src: 'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '2',
      src: 'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '3',
      src: 'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '4',
      src: 'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '5',
      src: 'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30',
    },
  ];

  it('should render slider', () => {
    const { container } = render(<ReactSlider data={data} interval={1} />);
    expect(container.querySelector('div > ul').childElementCount).toEqual(5);
    expect(
      container.querySelector('div >:nth-child(2)').childElementCount,
    ).toEqual(5);
    expect(container.querySelector('div >:nth-child(3)')).toBeTruthy();
    expect(container.querySelector('div >:nth-child(2)')).toBeTruthy();
  });

  it('should set the height to 500px when height is specified', () => {
    const { container } = render(<ReactSlider height={500} data={data} />);
    expect(container.querySelector('div > ul')).toHaveStyle('height : 500px');
  });

  it('should go to position 4 when on the first slide when clicking on next', () => {
    const { container } = render(<ReactSlider data={data} />);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 1');
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'opacity : 0',
    );

    const prevButton = container.querySelector('div >:nth-child(3)');
    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 0');
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'opacity : 1',
    );
  });

  it('should go to previous slide', () => {
    const { container } = render(<ReactSlider data={data} />);
    const prevButton = container.querySelector('div >:nth-child(3)');
    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 0');
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'opacity : 0',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'opacity : 1',
    );

    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 0');
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'opacity : 1',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'opacity : 0',
    );
  });

  it('should go to next slide', () => {
    const { container } = render(<ReactSlider data={data} />);
    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 1');
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'opacity : 0',
    );

    const nextButton = container.querySelector('div >:nth-child(4)');
    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 0');
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'opacity : 1',
    );
  });

  it('should go to position 0 when on the last slide when clicking on next', () => {
    const { container } = render(<ReactSlider data={[data[0], data[1]]} />);
    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 1');
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'opacity : 0',
    );

    const nextButton = container.querySelector('div >:nth-child(4)');
    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 0');
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'opacity : 1',
    );

    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle('opacity : 1');
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'opacity : 0',
    );
  });

  it('should go slide when clicking on a dot', () => {
    const { container } = render(<ReactSlider data={data} />);
    const dotUl = container.querySelector('div >:nth-child(2)');

    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #e8784e',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #909192',
    );

    fireEvent.click(dotUl.querySelector(':nth-child(3)'));

    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #909192',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #e8784e',
    );
  });

  it('should not show dots', () => {
    const { container } = render(<ReactSlider data={data} showDots={false} />);
    expect(container.querySelectorAll('ul').length).toBe(1);
  });

  it('should not show next and previous', () => {
    const { container } = render(
      <ReactSlider data={data} enableNextAndPrev={false} />,
    );
    expect(container.querySelector('div >:nth-child(3)')).toBeFalsy();
    expect(container.querySelector('div >:nth-child(4)')).toBeFalsy();
  });

  describe('css override handles', () => {
    it('should get slider container by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelector(
          CSS_OVERRIDE_EXTERNAL.swiftSliderContainerClass,
        ),
      ).toMatchSnapshot();
    });
    it('should get slider slides container by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelector(CSS_OVERRIDE_EXTERNAL.swiftSliderSlidesClass),
      ).toMatchSnapshot();
    });
    it('should get slider dots container by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelector(CSS_OVERRIDE_EXTERNAL.swiftSliderDotsClass),
      ).toMatchSnapshot();
    });
    it('should get all slides by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelectorAll(CSS_OVERRIDE_EXTERNAL.swiftSliderSlideClass),
      ).toMatchSnapshot();
    });
    it('should get the active slide by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelectorAll(
          CSS_OVERRIDE_EXTERNAL.swiftSliderActiveSlideClass,
        ),
      ).toMatchSnapshot();
    });
    it('should get all dots by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelectorAll(CSS_OVERRIDE_EXTERNAL.swiftSliderDotClass),
      ).toMatchSnapshot();
    });
    it('should get the active dot by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelectorAll(
          CSS_OVERRIDE_EXTERNAL.swiftSliderActiveDotClass,
        ),
      ).toMatchSnapshot();
    });
    it('should get the previous btn by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelector(
          CSS_OVERRIDE_EXTERNAL.swiftSliderPreviousBtnClass,
        ),
      ).toMatchSnapshot();
    });
    it('should get the next btn by using className - this will allow for default styling override', () => {
      const { container } = render(<ReactSlider data={data} />);
      expect(
        container.querySelector(CSS_OVERRIDE_EXTERNAL.swiftSliderNextBtnClass),
      ).toMatchSnapshot();
    });
  });
});
