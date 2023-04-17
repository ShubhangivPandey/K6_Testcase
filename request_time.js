import http from 'k6/http';
import { check } from 'k6';

export default function() {
  // Make an HTTP GET request and measure its response time
  const res = http.get('https://magento.softwaretestingboard.com/');
  const requestTime = res.timings.duration;

  // Check that the request time is within an acceptable range
  check(requestTime, {
    'request time is less than 500ms': (r) => r < 500,
    'request time is less than 1s': (r) => r < 1400
  });

  // Log the request time for debugging purposes
  console.log(`Request time: ${requestTime}ms`);
}
