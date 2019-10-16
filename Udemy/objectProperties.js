const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
a[c] = 400;
 
console.log(a[b]);

// Javascript coerces the objects b and c into string '[object object]' as the key, which is why we get 400 on line 8. 