import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const inProgressRequests = new client.Gauge({
  name: 'http_inprogress_requests',
  help: 'Number of in-progress HTTP requests',
});

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 1, 2, 5],
});

const httpRequestSummary = new client.Summary({
  name: 'http_request_duration_summary_seconds',
  help: 'HTTP request duration summary in seconds',
  labelNames: ['method', 'route', 'status'],
  percentiles: [0.5, 0.9, 0.99],
});

export function metricsMiddleware(req, res, next) {
  inProgressRequests.inc();

  const endHistogram = httpRequestDuration.startTimer();
  const endSummary = httpRequestSummary.startTimer();

  res.on('finish', () => {
    const labels = {
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    };

    httpRequestCounter.inc(labels);

    inProgressRequests.dec();

    endHistogram(labels);
    endSummary(labels);
  });

  next();
}

export async function registerMetric(req, res) {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
}
