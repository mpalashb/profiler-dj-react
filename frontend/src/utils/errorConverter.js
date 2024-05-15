export const convertERR = (arrayOfErr) => {
  try {
    return Object.keys(arrayOfErr)
      .reduce((acc, fieldName) => {
        const fieldErrors = arrayOfErr[fieldName];
        fieldErrors.forEach((error) => {
          acc += `${fieldName} -> ${error}, `;
        });
        return acc;
      }, "")
      .slice(0, -2); // Remove the last comma and space
  } catch (error) {
    return null;
  }
};
