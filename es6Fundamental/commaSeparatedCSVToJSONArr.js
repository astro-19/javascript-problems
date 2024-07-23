// Define a function called `CSV_to_JSON` that converts CSV data to a JSON array.
const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
      });
  };
  
  console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); 
  console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); 
  