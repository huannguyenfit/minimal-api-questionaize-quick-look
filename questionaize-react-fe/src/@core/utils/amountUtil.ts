
enum CharactersPositionType {
  front = "front",
  behind = "behind"
}

export const AmountFormat = {
  thousandSeperator: ",",
  decimalSeperator: ".",
  allowedDecimals: 0,
  currencyCharacters: "VND",
  charactersPosition: CharactersPositionType.behind
}

const padding = "000000";

export const convertNumericToFormattedAmount = (value?: number, allowedDecimals = AmountFormat.allowedDecimals): string => {

  const { currencyCharacters, charactersPosition } = AmountFormat;

  if (charactersPosition === CharactersPositionType.front) {
    return `${currencyCharacters}${convertNumericToFormattedString(value)}`;
  } else {
    return `${convertNumericToFormattedString(value)} ${currencyCharacters}`;
  }
}

export const convertNumericToFormattedString = (value?: number, allowedDecimals = AmountFormat.allowedDecimals): string => {
  if (!value) {
    value = 0;
  }

  const numericAmount = value.toString();

  const { thousandSeperator, decimalSeperator } = AmountFormat;


  let [integer, fraction = ""] = numericAmount.split(".");

  fraction = allowedDecimals > 0
    ? decimalSeperator + (fraction + padding).substring(0, allowedDecimals)
    : "";

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeperator);
  //if (integer == "") integer = "0";
  return integer + fraction;
}