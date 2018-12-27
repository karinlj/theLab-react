export const species = [
  { _id: "550", name: "Lion" },
  { _id: "551", name: "Zebra" },
  { _id: "552", name: "Elephant" }
];

export function getSpecies() {
  return species.filter(s => s);
}
