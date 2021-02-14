/**
 * Get label name or default label
 * @param {string} label
 * @param {string|number} id
 */
import { DEFAULT_LABEL } from '../config';

export const getLabelName = (label, id) => {
  return label ? label : `${DEFAULT_LABEL} ${id}`;
};

/**
 * Get slide id
 * @param {string|number} id
 * @returns {string} slideId
 */
export const getSlideId = (id) => {
  return `${DEFAULT_LABEL.toLowerCase()}_${id}`;
};
