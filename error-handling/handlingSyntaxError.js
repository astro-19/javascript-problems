function parse_JSON(jsonString) {
    try {
      const parsedData = JSON.parse(jsonString);
      console.log('Parsed data:', parsedData);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log('SyntaxError:', error.message);
      } else {
        console.log('Error:', error.message);
      }
    }
  }
  
  parse_JSON('{"name": "Rowan Octave", "age": 30}'); 
  parse_JSON('{"name": "Rowan Octave", "age": 30,}'); 
  