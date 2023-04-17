import http from 'k6/http';

export default function () {
  const res = http.get('https://magento.softwaretestingboard.com/');
  console.log(JSON.stringify(res.headers));
}