def greet(person):
    return f"Hello there, {person}"


def divide(a, b):
    if type(a) is int and type(b) is int:
        return a / b
    return "a and b must be ints!"


def three_things(a, b, c):
    print("hi")


def send_email(to_email, from_email, subject, body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        -------------------
        body: {body}
    """
    print(email)


send_email(
    subject="Named Arguments",
    from_email="gferiancek@gmail.com",
    to_email="colt@springboard.com",
    body="Wow, this is so great! This is one of my biggest pet peeve's about JavaScript!",
)


def add_limited_numbers(a,b):
    """Adds two numbers and caps them at 100"""
    sum = a + b
    if sum > 100:
        return 100
    return sum