import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  const url = 'https://magento.softwaretestingboard.com/';
  const res = http.get(url);
  
  console.log(`Request URL: ${url}`);
  console.log(`Response status: ${res.status}`);
  console.log(`Response body: ${res.body}`);
  console.log(`Response time (ms): ${res.timings.duration}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
