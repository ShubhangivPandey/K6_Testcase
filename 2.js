import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  console.log(res.body.length); // Print response body length to console
  check(res, {
    'body size is 11278 bytes': (r) => r.body.length == 11278,
  });
}

