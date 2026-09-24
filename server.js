import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import diagnoseHandler from './api/diagnose.js';
import garagesHandler from './api/garages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Add Vercel Serverless-compatible helpers
  res.status = function(code) {
    res.statusCode = code;
    return res;
  };
  res.json = function(data) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
    return res;
  };

  // API Routes
  if (pathname === '/api/diagnose') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          req.body = body ? JSON.parse(body) : {};
        } catch (e) {
          req.body = {};
        }
        await diagnoseHandler(req, res);
      });
      return;
    } else {
      await diagnoseHandler(req, res);
      return;
    }
  }

  if (pathname === '/api/garages') {
    req.query = Object.fromEntries(parsedUrl.searchParams.entries());
    await garagesHandler(req, res);
    return;
  }

  // Static File Serving
  let reqPath = decodeURIComponent(pathname);
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(__dirname, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    fs.stat(filePath, (err2, stats2) => {
      if (err2 || !stats2.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found - AcoustiCar AI');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚗 AcoustiCar AI™ - Professional Vehicle Audio Diagnostic`);
  console.log(`📡 Server running at: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
