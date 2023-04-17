import http from 'k6/http';

export default function() {
  const res = http.get('https://example.com');

  // Get the response time for the request
  const responseTime = res.timings.duration;

  // Output the response time to the console
  console.log(`Response time: ${responseTime} ms`);

  // Output the p(95) response time to the console, if it exists
  if (res.timings.duration.percentiles) {
    const p95 = res.timings.duration.percentiles['95'];
    console.log(`p(95) response time: ${p95} ms`);
  } else {
    console.log('p(95) response time not available');
  }
}
