function bubbleSort(targetArray, accessor, sortingType, order = "asc") {
  const newArr = [...targetArray];
  console.log(newArr);
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (sortingType === "number") {
        if (newArr[j][accessor] > newArr[j + 1][accessor]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
      } else if (sortingType === "string") {
        if (newArr[j][accessor].localeCompare(newArr[j + 1][accessor]) > 0) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
      }
    }
  }

  if (order === "desc") {
    const ascSort = [...newArr].reverse();
    console.log(ascSort);
    return ascSort;
  }
  return newArr;
}
export default bubbleSort;
