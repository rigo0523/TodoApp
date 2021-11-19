//closure to hold the value and increment
export const increment = (function (numb) {
  return function () {
    numb = numb + 1;

    return numb;
  };
})(0); // start from 1 to increment to 2 on newly add card

export const noteList = [
  {
    id: increment(),
    title: "first note",
    body: "my first posted note",
  },
];
