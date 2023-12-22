def bounded_avg(nums):
    """Returns avg of list nums, but only accepts
    nums in range of 1-100

    >>> bounded_avg([2, 4, 6])
    4.0

    >>> bounded_avg([1, 53, 200])
    Traceback (most recent call last):
        ...
    ValueError: Outside of bounds 1-100
    """

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside of bounds 1-100")

    return sum(nums) / len(nums)
