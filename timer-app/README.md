# endpoints

To port-forward to the api:
k port-forward svc/time-api 3001:3000

Then view the api on http://localhost:3001/api/time
And view the api metrics on http://localhost:3001/metrics

To port-forward to the app:
k port-forward svc/nginx-hello-world-js 3000:80

Then view the app on http://localhost:3000/
And view the app metrics on http://localhost:3000/metrics