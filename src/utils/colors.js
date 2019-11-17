import { red, pink, purple, indigo, blue, teal, green, lightGreen, amber, orange, deepOrange, deepPurple, blueGrey } from '@material-ui/core/colors';

const colors = [red, pink, purple, indigo, blue, teal, green, lightGreen, amber, orange, deepOrange, deepPurple, blueGrey];

export default function createColorFrom (string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, number) => sum + number, 0);

  const colorIndex = index % colors.length;

  return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return blueGrey[500];
  }
  
}
