import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  let res = http.get('https://magento.softwaretestingboard.com/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'transaction time < 1600ms': (r) => r.timings.duration < 1600,
    
  });

  console.log(`Transaction time: ${res.timings.duration} ms`);
}


