const { busDb } = require('../packages/database');

async function test() {
  try {
    const count = await busDb.bus.count();
    console.log(`Success! Total buses: ${count}`);
    process.exit(0);
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
}

test();
