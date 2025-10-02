import fs from 'fs';
import path from 'path';

// build path
const logsDir = path.join(process.cwd(), 'Logs');

// create logs folder based on path
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

// Create 10 log files with text
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file number ${i}`);
  console.log(fileName); // Output file names
}
