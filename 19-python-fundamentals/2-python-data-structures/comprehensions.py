#### Lists

# ## Transforming List into only Events
# #  Without Comprehensions
# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# evens = []
# for num in evens:
#     if num % 2 == 0:
#         evens.append(num)

# # With Comprehension
# comp_evens = [num for num in nums if num % 2 == 0]


def gen_boards(size, inital_val=None):
    return [[inital_val for x in range(size)] for y in range(size)]


chickens = [
    {"name": "Henry", "sex": "Rooster"},
    {"name": "Lady Gray", "sex": "Hen"},
    {"name": "Junior", "sex": "Rooster"},
    {"name": "Stevie Chicks", "sex": "Hen"},
    {"name": "Rocket", "sex": "Hen"},
    {"name": "Butters", "sex": "Rooster"},
]

hens = [bird["name"] for bird in chickens if bird["sex"] == "Hen"]

# If/Else Conditional
scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
grades = ["PASS" for score in scores if score >= 70]


def get_letter(ltr):
    morse_lookup = {
        "A": ".-",
        "B": "-...",
        "C": "-.-",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "1": ".---",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",
        ",": "--..--",
        ".": ".-.-.-",
        "?": "..--..",
        "/": "-..-.",
        "_": "-....-",
        "(": "-.--.",
        ")": "-.--.-",
    }
    return morse_lookup.get(ltr.upper(), "")


def get_morse_code(phrase):
    return " ".join([get_letter(char) for char in phrase])


get_morse_code("SOS")
