const { exec } = require('child_process');

const domainName = process.argv[2]; // 첫 번째 인자값

exec(`./scripts/create_domain.sh ${domainName}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`${stdout}`);
});