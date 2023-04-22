export const saveInLocalStorage = (name, data) => {
    const stringifyData = JSON.stringify(data);
    console.log(stringifyData);
    localStorage.setItem(name, stringifyData);
  };
  
  export const getFromLocalStorage = (name) => {
    const stringifyData = localStorage.getItem(name);
  
    if (stringifyData) {
      const data = JSON.parse(stringifyData);
  
      return data;
    } else {
      return null;
    }
  };
  