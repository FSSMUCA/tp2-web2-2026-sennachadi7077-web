const paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let differenceCount = 0;

paires.forEach(([a, b]) => {
  const loose = a == b;
  const strict = a === b;

  const format = (v) => {
    if (typeof v === 'string') return `"${v}"`;
    return String(v);
  };
  console.log(`${format(a)} == ${format(b)}`.padEnd(20) + `-> ${loose}`.padEnd(10) + ` |   ${format(a)} === ${format(b)}`.padEnd(20) + `-> ${strict}`);
  if (loose === true && strict === false) {
    differenceCount++;
  }
});
