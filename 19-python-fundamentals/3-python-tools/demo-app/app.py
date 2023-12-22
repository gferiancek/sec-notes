from faker import Faker
from mondrian_art import generate

plt = generate()
plt.show()

fake = Faker()

for x in range(10):
    print(fake.name())