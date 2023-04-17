import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://magento.softwaretestingboard.com/');
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
  });
}

export function handleSummary(data) {
  const reqBytes = data.metrics.http_reqs ? data.metrics.http_reqs.bytes : 0;
  const resBytes = data.metrics.http_resp ? data.metrics.http_resp.bytes : 0;
  const duration = data.metrics.iteration_duration.avg;


  console.log('Average response time: ${duration}ms ');
  console.log('Average bandwidth consumption: ${reqBytes + resBytes} bytes ');
}
