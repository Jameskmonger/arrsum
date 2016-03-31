# arrsum

An arrsum way to pluck a value from each object in an array.

## Usage

```javascript
const arrsum = require('arrsum');

let arr = [
    { value: 3, junk: 2 },
    { value: 7, junk: 12, other_junk: 16 },
    { value: 4 }
];

let total = arrsum(arr, 'value'); // 14
```

## License

[MIT](LICENSE)
