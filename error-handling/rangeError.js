function access_Array_Element(array, index) {
    try {
      const element = array[index];
      if (element === undefined) {
        throw new RangeError('Index out of bounds');
      }
      console.log('Accessed element:', element);
    } catch (error) {
      if (error instanceof RangeError) {
        console.log('Error: Invalid index. Please provide a valid index within the array bounds.');
      } else {
        console.log('Error:', error.message);
      }
    }
  }
  const nums = [1, 2, 3, 4, 5];
  access_Array_Element(nums, 1); 
  access_Array_Element(nums, 5);
  