// Define a function called `rename_keys` that renames keys of an object based on a provided mapping.
const rename_keys = (keysMap, obj) =>
    Object.keys(obj).reduce(
      (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: obj[key] }
      }),
      {}
    );
  
  const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
  console.log("Original Object");
  console.log(obj);
  console.log("-------------------------------------");
  
  result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
  
 
  console.log("New Object");
  console.log(result);
  