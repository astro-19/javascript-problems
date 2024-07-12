
function validate_String_Not_Empty(str) {
    if (str.length === 0) {
      throw new Error('Sorry, the string is empty!');
    }
  }
  
  try {
    const string1 = 'Hello, World!';
    validate_String_Not_Empty(string1); 
  
    const string2 = '';
    validate_String_Not_Empty(string2);
  } catch (error) {
    console.log('Error:', error.message);
  }
  