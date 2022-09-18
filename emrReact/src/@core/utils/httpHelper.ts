export const getFormUrlEncoded = (toConvert) => {
  const formBody = [];
  for (const property in toConvert) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(toConvert[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
};

export const HTTP_CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
};
