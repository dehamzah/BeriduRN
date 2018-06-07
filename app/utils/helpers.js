import { groupBy, map } from 'lodash';


export function acronym (word, maxChar) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const abbr = word.split(' ').map((item) => {
    if (alphabets.includes(item[0].toLowerCase())) {
      return item[0];
    }
  }).join('');

  if (maxChar && typeof maxChar === 'number') {
    return abbr.slice(0, maxChar);
  } else {
    return abbr;
  }
}

/*
Inputted `arr` must be array from prop `sources` 
in responses from api `/v2/sources`
*/
export function parseToSectionListFormat(arr) {
  const grouped = groupBy(arr, (item) => item.category);
  return map(grouped, (item, key) => ({ title: key, data: item }));
}

export function trimSentence(sentence, maxLength) {
  let trimmedString = sentence.substr(0, maxLength);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

  if (trimmedString.length === sentence.length) {
    return trimmedString;
  } else {
    trimmedString += '...';
    return trimmedString;
  }
}