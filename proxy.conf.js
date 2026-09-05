module.exports = {
  "/api": {
    target: "http://localhost:5000",
    secure: false,
    changeOrigin: true,
    onError: function (err, req, res) {
      if (res && res.writeHead && !res.headersSent) {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Backend server offline, using frontend local data fallback.' }));
      }
    }
  }
};
