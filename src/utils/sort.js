const handleSort = (order, accessor, data) => {
  if (order === "asc") {
    return data.sort((a, b) =>
      isNaN(a[accessor] * 1 + b[accessor] * 1)
        ? a[accessor]?.toString().localeCompare(b[accessor]?.toString())
        : +a[accessor] - +b[accessor]
    );
  } else {
    return data.sort((a, b) =>
      isNaN(a[accessor] * 1 + b[accessor] * 1)
        ? b[accessor]?.toString().localeCompare(a[accessor]?.toString())
        : +b[accessor] - +a[accessor]
    );
  }
};
export default handleSort;
