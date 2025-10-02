import fs from 'fs';
import path from 'path';

// build path to logs folder
const logsDir = path.join(process.cwd(), 'Logs');

// only proceed if folder exists
if (fs.existsSync(logsDir)) {
  // Read files inside Logs directory
  const files = fs.readdirSync(logsDir);

  // Delete each file
  files.forEach(file => {
    // build path to file
    const filePath = path.join(logsDir, file);
    // delete
    fs.unlinkSync(filePath);
    console.log(`delete files...${file}`);  
  });

  // Remove Logs directory
  fs.rmdirSync(logsDir);
}
