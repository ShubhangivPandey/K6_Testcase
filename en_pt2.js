import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // Make a request to endpoint 1
  const endpoint1Res = http.get('https://magento.softwaretestingboard.com/');
  console.log(`Duration of endpoint 1: ${endpoint1Res.timings.duration} ms`);

  // Wait for 1 second
  sleep(1);

  // Make a request to endpoint 2
  const endpoint2Res = http.get('https://magento.softwaretestingboard.com/pub/static/version1618492794/frontend/Infortis/base/en_US/mage/calendar.css');
  console.log(`Duration of endpoint 2: ${endpoint2Res.timings.duration} ms`);
}
