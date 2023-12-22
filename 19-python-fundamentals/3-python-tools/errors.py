def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f"{person['name']} have been alive for {days} days")
    except KeyError as exc:
        print(f"Missing key: {exc}")
    except TypeError:
        print("Expected person to be a dict")

# ############################################

def bounded_avg(nums):
    """Returns avg of nums, but only accepts nums in range of 1-100"""

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside of bounds 1-100")
    
    return sum(nums) / len(nums)

def handle_data():
    """Process data from db"""

    # ages = get_ages(from_my_db)
    ages = [10, 40, 50, 99, 103] 

    try:
        avg = bounded_avg(ages)
        print(f"Average was {avg}")
    except ValueError as exc:
        # exc is exception obect -- contains info on exception!
        print("Invalid age in list of ages")