/**
 *
 * @param {any[]} arr
 * @param {number} selectNumber
 * @returns {any[] } combs array
 */
function generateCombinations(arr, selectNumber) {
  const results = [];

  function calculateCombinations(currentIndex, selectedItems) {
    if (selectedItems.length === selectNumber) {
      results.push([...selectedItems]);
      return;
    }

    for (let i = currentIndex; i < arr.length; i++) {
      const currentItem = arr[i];
      selectedItems.push(currentItem);
      calculateCombinations(i + 1, selectedItems);
      selectedItems.pop();
    }
  }

  calculateCombinations(0, []);

  return results;
}
