const app = require('./src/app');

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', error => {
  console.error('❌ UncaughtException: ', error);
  process.exit(1);
});

process.on('unhandledRejection', error => {
  console.error('❌ UnhandledRejection: ', error);
  process.exit(1);
});

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

void startServer();
