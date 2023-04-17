import * as csvParser from 'csv-parser';
import * as fs from 'fs';
const data: any[] = [];
fs.createReadStream('.Path/File.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log(data);
  });
