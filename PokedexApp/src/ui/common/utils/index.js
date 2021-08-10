import {TYPE_COLORS} from '../';

export function formatName(text) {
  const nameArr = text.split('-');
  const nameStr = nameArr.join(' ');

  return nameStr;
}

export function formatText(text, regex, replace) {
  return text.replace(regex, replace);
}

export function getTypeColors(type) {
  return TYPE_COLORS[type];
}
