from random import randint, choice


def get_rand_year():
    return randint(1900, 2024)


def get_rand_month():
    months = [
        "Jan",
        "Feb",
        "Mar",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    return choice(months)
