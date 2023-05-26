// Nomor 1
function printMultiples(N) {
  let output = [];
  let count = 0;
  let num = 1;

  while (count < N) {
    if (num % 3 === 0 || num % 7 === 0) {
      if (num % 3 === 0 && num % 7 === 0) {
        output.push('Z');
      } else {
        output.push(num);
      }
      count++;
    }
    num++;
  }

  return output.join(', ');
}

console.log(printMultiples(13));

// Nomor 2
function findAnimals(text) {
  const animals = ['sang gajah', 'serigala', 'harimau'];
  let output = [];

  animals.forEach((animal) => {
    const regex = new RegExp(animal, 'gi');
    const matches = text.match(regex);
    if (matches) {
      output.push(matches.join(' - '));
    }
  });

  return output.join(' - ');
}

const inputText = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.';
console.log(findAnimals(inputText));

//Nomor 3
function checkPassword(password) {
  if (password.length < 8 || password.length > 32) {
    return 'Kata sandi harus terdiri dari 8 hingga 32 karakter';
  }

  if (/^\d/.test(password)) {
    return 'Karakter awal tidak boleh angka';
  }

  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return 'Harus memiliki huruf kapital dan huruf kecil';
  }

  if (!/\d/.test(password)) {
    return 'Harus memiliki angka';
  }

  return 'Kata sandi valid';
}

console.log(checkPassword('5andiwara'));
console.log(checkPassword('sandiwar4'));
console.log(checkPassword('Sandiwar4'));

// Nomor 4
function findMissingNumber(numbers) {
  let smallestMissing = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === smallestMissing) {
      smallestMissing++;
    }
  }

  return smallestMissing;
}

console.log(findMissingNumber([5, 2, 8, 4, 3, 10]));
console.log(findMissingNumber([2, 3, 4, 6]));
console.log(findMissingNumber([8, 6, 7, 12]));

// Nomor 5
function createPattern(N) {
  if (N % 2 === 0) {
    return 'Harus bilangan ganjil';
  }

  let pattern = '';

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === 1 || i === N || j === 1 || j === N || i === j || j === N - i + 1) {
        pattern += 'X';
      } else {
        pattern += 'O';
      }
    }
    pattern += '\n';
  }

  return pattern;
}

console.log(createPattern(5));
console.log(createPattern(3));
console.log(createPattern(7));
console.log(createPattern(2));
