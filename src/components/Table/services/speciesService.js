export const species = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Lion" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Zebra" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Elephant" }
];

export function getGenres() {
  return species.filter(s => s);
}
