# Reading
file = open('haiku.txt', 'r')

for line in file:
    print(f"Line is... {line}")

# Rewind the file
file.seek(0)
all_text = file.read()
file.close()

# Writing
file = open('write-me.txt', 'w')
file.write('Hello World')
file.close()