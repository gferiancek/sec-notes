# age = 19
# guests = 0

# if age >= 18:
#     print("You can come in!")
#     guests += 1

age = 19
is_birthday = True

if age >= 21:
    print("You can drink!")
    if is_birthday:
        print("Happy Birthday, here's a free martini!")
elif age >= 18:
    print("You can come in, but no drinking!")
    if is_birthday:
        print("Happy Birthday, here's a free Apple Juice!")
else:
    print("Sorry, go home kid!")

# Ternary Operator
color = 'teal'

print("TEAL") if color == 'teal' else print("NOT TEAL")