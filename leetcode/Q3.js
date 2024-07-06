function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}
function testExpect(func) {
  try {
    const result = func();
    return { value: result };
  } catch (error) {
    return { error: error.message };
  }
}
console.log(testExpect(() => expect(5).toBe(5)));
console.log(testExpect(() => expect(5).toBe(null)));
console.log(testExpect(() => expect(5).notToBe(null)));
