const fs = require('fs');

// Step 1: Read the original datas.json file
fs.readFile('datas.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Step 2: Parse the JSON data into a JavaScript object
  const stocks = JSON.parse(data);

  // Step 3: Filter the data where segment is "BSE_EQ"
  const filteredStocks = stocks.filter(stock => stock.segment === "BSE_EQ");

  // Step 4: Remove duplicates based on the 'name' property
  const uniqueStocks = [];
  const namesSet = new Set();

  filteredStocks.forEach(stock => {
    if (!namesSet.has(stock.name)) {
      namesSet.add(stock.name);
      uniqueStocks.push(stock);
    }
  });

  // Step 5: Write the filtered data without duplicates to a new JSON file
  fs.writeFile('filtered_unique_datas.json', JSON.stringify(uniqueStocks, null, 2), (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('Filtered and unique data has been written to filtered_unique_datas.json');
  });
});
