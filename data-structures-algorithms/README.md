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

From best - worst:
- O(1) - Constant
  - Regardless of the size of *n*, our **# of operations** is the same.
- O(n) - Linear
  - Our **# of operations** grows at the same rate of *n*.
- O(n<sup>2</sup>) - Quadratic
  - Our **# of operations** grows exponetionally to the rate of *n*.
