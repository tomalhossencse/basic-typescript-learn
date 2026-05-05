interface Developer<T, B = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smartwatch: T;
  bike?: B;
}

interface noneBrandWatch {
  timer: boolean;
  connectWithMobile: boolean;
}

interface brandWatch {
  brand: string;
  timer: boolean;
  connectWithMobile: boolean;
  call: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const averageDeveloper: Developer<noneBrandWatch> = {
  name: "Mr. Average",
  salary: 30000,
  device: {
    brand: "Lenevo",
    model: "T490s",
    releasedYear: "2020",
  },
  smartwatch: {
    timer: true,
    connectWithMobile: false,
  },
  bike: null,
};
const goodDeveloper: Developer<
  brandWatch,
  {
    brandName: "yamaha";
    engineCapacity: "200c";
  }
> = {
  name: "Mr. Good",
  salary: 300000,
  device: {
    brand: "Lenevo",
    model: "T990s",
    releasedYear: "2026",
  },
  smartwatch: {
    brand: "Casio",
    timer: true,
    connectWithMobile: true,
    call: true,
    calculator: true,
    aiFeature: true,
  },
  bike: {
    engineCapacity: "200c",
    brandName: "yamaha",
  },
};

console.log({ averageDeveloper, goodDeveloper });
