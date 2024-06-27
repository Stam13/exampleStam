const core = require('@actions/core');

async function run() {
  const name = core.getInput('name');
  console.log(`Hello, ${name}`);
}

run();
