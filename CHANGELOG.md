# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## vnext
- ~~add css override handles~~
- customize css properties:
    1. add width
    1. update height
    1. max-width & height for mobile responsiveness
- dot properties:
    1. size
    1. border colour
    1. has border
- add arrow
    1. show arrow
- play & pause button
    1. show play & pause button
- add thumbnails
    1. show thumbnails
    1. thumbnail bar position
- show slide number & total
- allow infinite scroll
- add slide transition delay
- add carousal transition
- add legend


    

## [7.0.1] - 2021-02-13
### Changed
- npm publish clean up unused files - [@zulucoda](https://github.com/zulucoda).

## [7.0.0] - 2021-02-07
### Changed
- add css override handles - [@zulucoda](https://github.com/zulucoda).
  1. `.swift-slider-container` - override slider container (slider wrapper)
  1. `.swift-slider-slides` - override slides container
  1. `.swift-slider-active-slide` - override active slide (current active slide displayed)
  1. `.swift-slider-slide` - override all slides
  1. `.swift-slider-dots` - override dots (bullets) container
  1. `.swift-slider-active-dot` - override active dot (bullet)
  1. `.swift-slider-dot` - override all dots (bullets)
  1. `.swift-slider-prev-btn` - override previous button
  1. `.swift-slider-next-btn` - override next button
- fixed slider animation - [@zulucoda](https://github.com/zulucoda).
- fixed intervals when clicking on next and previous buttons - [@zulucoda](https://github.com/zulucoda).
- improved javascript example - [@zulucoda](https://github.com/zulucoda).

## [6.5.0] - 2020-07-25
### Changed
- adding type declaration for react-swift-slider - [@zulucoda](https://github.com/zulucoda).
- adding typescript example - [@zulucoda](https://github.com/zulucoda).

## [6.4.0] - 2019-08-20
### Changed
- update README - [@zulucoda](https://github.com/zulucoda).
- fixed coveralls - [@zulucoda](https://github.com/zulucoda).

## [6.3.0] - 2019-06-24
### Changed
- remove react-swift-slider-example.gif from .npmignore file by [@zulucoda](https://github.com/zulucoda).

## [6.2.0] - 2019-06-23
### Changed
- fixing package.json :bug: by [@zulucoda](https://github.com/zulucoda).

## [6.1.0] - 2019-06-23
### Changed
- adding rollup to fix current build bug :bug:by [@zulucoda](https://github.com/zulucoda).

## [6.0.1] - 2019-06-23
### Changed
- remove css settings from README.md by [@zulucoda](https://github.com/zulucoda).
- adding .idea folder from .npmignore by [@zulucoda](https://github.com/zulucoda).

## [6.0.0] - 2019-06-23
### Changed
- big refactor - remove old-style project by [@zulucoda](https://github.com/zulucoda).
- convert to styled-components by [@zulucoda](https://github.com/zulucoda).
- remove classes by [@zulucoda](https://github.com/zulucoda).
- using React hooks by [@zulucoda](https://github.com/zulucoda).
- fix memory leak bug logged by [@AlexTasev](https://github.com/AlexTasev) - [#7](https://github.com/zulucoda/react-swift-slider/issues/7)

## [5.1.0] - 2019-06-22
### Changed
- Fixing dependencies by [@zulucoda](https://github.com/zulucoda).

## [5.0.0] - 2018-10-27
### Added
- Upgraded to React 16 by [@zulucoda](https://github.com/zulucoda).