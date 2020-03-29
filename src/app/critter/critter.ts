import { bug_data, fish_data } from './data';

export class Critter {
  name: string;
  image: string;
  price: number;
  location: string;
  shadow?: string;
  time: Array<AvailibilityTime>;
  months: HemisphereMonths;
}

export interface AvailibilityTime {
  lowerBound: number;
  upperBound: number;
}

export interface HemisphereMonths {
  north: Array<number>;
  south: Array<number>;
}

function parseAvailabilityTime(at: string): Array<AvailibilityTime> {
  return at.split("|").map(t => {
    let [l, u] = t.split("-")
    return { lowerBound: parseInt(l), upperBound: parseInt(u) };
  });
}

const MONTH_MAP = {
  'Jan': 0,
  'Feb': 1,
  'Mar': 2,
  'Apr': 3,
  'May': 4,
  'Jun': 5,
  'Jul': 6,
  'Aug': 7,
  'Sep': 8,
  'Oct': 9,
  'Nov': 10,
  'Dec': 11
}

export class Bug implements Critter {
  name;
  image;
  price;
  location;
  time;
  months;

  constructor(name: string, image: string, price: number, location: string, time: string, months: {north: Array<string>, south: Array<string>}) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.location = location;
    this.time = parseAvailabilityTime(time);
    this.months = { north: months.north.map(m => MONTH_MAP[m]), south: months.south.map(m => MONTH_MAP[m])};
  }
}

export class Fish implements Critter {
  name;
  image;
  price;
  location;
  shadow;
  time;
  months;

  constructor(name: string, image: string, price: number, location: string, shadow: string, time: string, months: {north: Array<string>, south: Array<string>}) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.location = location;
    this.shadow = shadow;
    this.time = parseAvailabilityTime(time);
    this.months = { north: months.north.map(m => MONTH_MAP[m]), south: months.south.map(m => MONTH_MAP[m])};
  }
}

function parseInteger(i): number {
  try {
    return parseInt(i.replace(",", ""))
  } catch {
    return -1;
  }
}

export const BUG_LIST = bug_data.map(b => new Bug(b['name'], b['image'], parseInteger(b['price']), b['location'], b['time'], b['months']));
export const FISH_LIST = fish_data.map(f => new Fish(f['name'], f['image'], parseInteger(f['price']), f['location'], f['shadow'], f['time'], f['months']));
