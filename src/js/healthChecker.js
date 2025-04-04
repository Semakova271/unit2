export default function sortUnits(units) {
  units.sort((input1, input2) => input2.health - input1.health);
  return units;
}
