import http from 'k6/http';
import { check } from 'k6';

export default function() {
  let data = JSON.stringify({ name: 'ABC', price: 50.11 });

  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.put('https://magento.softwaretestingboard.com/api/products/1', data, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response body contains new product name': (r) => r.body.includes('ABC'),
    'response body contains new product price': (r) => r.body.includes('50.11'),
  });
}
