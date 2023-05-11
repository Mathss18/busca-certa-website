function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toLocalCurrency(value: number, currencySign: boolean = true) {
  if (currencySign)
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

export { capitalizeFirstLetter, toLocalCurrency };
