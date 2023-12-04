# Big O Notation
**Big O Notation** is a way of categorized code performance based on the number of operations it has to perform.

When talking about two different functions, how do we know what is better? Is it based on speed? Memory use? Readability?

Why should we care?
- It's important to have precise vocab about how code performs.
- Useful for discussing trade-offs between different approaches.
- When code slows, identifying pain points.
- It comes up in interviews!

With **Big O Notation**, we'll primarily focus on speed.

## Measuring Speed
Since our focus is on speed, you'd think that you can simply time the functions. That leads to a few issues though:
- Different Machines will record different times
- The same machine will record different times
- With fast algorithims, measurements may not be precise enough.

## Counting Operations
Instead of tracking speed, we'll track the **# of operations**. Bechmarking speed has its time and place, but with counting operations, you can get a good idea without running the code at all. (Like on a whiteboard during an interview!)

```
function addUpToSecond(n) {
  return n * (n + 1) / 2;
}
```
With this example, there are 3 operations. Even if n was 1000, there'd only be 3 operations.

```
function addUpToFirst(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
```
This example has two operations per loop cycle (i++ and total += i). However, that number is depandant on *n*. If *n* doubles, our # of operations doubles.

## Writing Big O
We don't care about the specific details, such as precise operation counts, but are looking for general trends. We'll use mathmatic equations to describe the **# of operations** relative to *n*.

We also assume the worst case scenario.
```
function allEvens(nums) {
  for (var i = 0; i < nums.length; i++;) {
    if (nums[i] % 2 !== 0) {
      return false
    }
  }
  return true;
}
```
Though the above code might only loop once or twice in some cases, we assume the worst, passing an array of all events, so it is O(n).

### Big O Complexities
- O(1) - Constant
  - Regardless of the size of *n*, our **# of operations** is the same.
- O(log n) - Logarithmic
  - log is like the opposite of square. (log<sub>2</sub>8 = 3).
- O(n) - Linear
  - Our **# of operations** grows at the same rate of *n*.
- O(n log n) - Logarithmic
  - And example
- O(n<sup>2</sup>) - Quadratic
- O(2<sup>n</sup>) - Exponential
- O(n *!*) - Factorial.
![](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c1bbff2-c7e4-4fe2-83c0-5e8a32027353%2FUntitled.png?table=block&id=50f723a6-758b-488f-8cea-d3a3ef36c1ea&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1390&userId=&cache=v2)
<sub> We want to avoid Quadratic - Factorial as much as possible!</sub>

### Simplifying Big O
- Constants do not matter
  - Arithmetic, variable assignment, accessing array via index, or object via key are all constant.
  - O(547) (547 constant operations) is still constant relative to *n*, so it is just written as O(1).
- Smaller terms do not matter.
  - O(2<sup>n</sup> + n) -- the + n makes near 0 difference relative to 2<sup>n</sup> so it can be dropped.
