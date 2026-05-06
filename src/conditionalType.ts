// conditional type : a type which is depends on after type conditions

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type AveragePeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Checkvehicle<T> = T extends keyof AveragePeopleVehicle ? true : false;

type HasBike = Checkvehicle<"car">;
