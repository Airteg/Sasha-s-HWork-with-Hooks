let id = (function () {
  let c = 0;
  return () => c++;
})();
export const usersDB = [
  {
    index: id(),
    phone: "+380934564562",
    name: "Madonna",
    email: "madonna@gmail.com"
  },
  {
    index: id(),
    phone: "+380674564562",
    name: "Cher",
    email: "cher___@gmail.com"
  },
  {
    index: id(),
    phone: "+380504564562",
    name: "Halsey",
    email: "halsey@gmail.com"
  },
  {
    index: id(),
    phone: "+380444564562",
    name: "Liz Mitchell",
    email: "LizMitchell@gmail.com"
  }
];
