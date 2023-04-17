import http from 'k6/http';

export default function () {
  const url = 'http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
