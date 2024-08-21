function validateInteger(number) 
{
  if (!Number.isInteger(number)) 
  {
    throw new Error('Invalid number. Please input an integer.');
  }
  console.log('Number is valid:', number);
}

try {
  validateInteger(12); 
  validateInteger(2.12); 
} catch (error) {
  console.log('Error:', error.message);
}
