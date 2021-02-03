const students = [
    { id: 21, name: 'omar sani' },
    { id: 31, name: 'Mannaaaa' },
    { id: 41, name: 'Moyuri' },
    { id: 71, name: 'Deepjol' }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);
console.log(ids);
console.log(bigger2);