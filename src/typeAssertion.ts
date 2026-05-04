let anyThing: any;
anyThing = 222.23423;

(anyThing as number).toFixed();

console.log(anyThing);

const cmToMeterConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input / 100;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is : ${Number(value) / 100}`;
  } else {
    return "invalid Input";
  }
};

const result1 = cmToMeterConverter(500) as number;

const result2 = cmToMeterConverter("700 cm") as string;

console.log({ result1 }, { result2 });
