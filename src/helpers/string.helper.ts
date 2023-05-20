function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toLocalCurrency(value: number | string, currencySign: boolean = true) {
  let valueAsNumber = 0;
  if (typeof value === "string") {
    valueAsNumber = parseFloat(value);
  } else {
    valueAsNumber = value;
  }
  if (currencySign)
    return valueAsNumber.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  return valueAsNumber.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

export { capitalizeFirstLetter, toLocalCurrency };
