export const addTerminal = (id, name, description, terminals) => {
  terminals.push({ id, name, description });
  return terminals;
};
export const deleteTerminal = (terminal, terminals) => {
  const index = (arr) => arr.findIndex((item) => item.id === terminal.id);
  let splicedArray = [...terminals];
  splicedArray.splice(index(terminals), 1);
  return splicedArray;
};
export const checkSort = (buyers) => {
  return buyers.sort((a, b) => b.check - a.check);
};
export const capacitySort = (buyers) => {
  return buyers.sort((a, b) => b.capacity - a.capacity);
};
export const totalSort = (buyers) => {
  return buyers.sort((a, b) => b.total - a.total);
};
export const searchBuyer = (inputValue, buyers) => {
  return buyers.filter((item) => {
    let regexp = new RegExp(`${inputValue}`, "i");
    if (regexp.test(item.name)) {
      return item;
    }
  });
};
export const splitData = (arr) => {
  let size =
    arr.length / document.querySelectorAll(`.pagination-change--item`).length;
  let subarray = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarray[i] = arr.slice(i * size, i * size + size);
  }
  return subarray;
};
