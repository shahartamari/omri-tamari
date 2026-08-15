# Read the input file
with open("input.txt", "r") as f:
    content = f.read()

# Replace newline characters with <br>
content = content.replace("\n", "<br>\n")

# Write the result to an output file
with open("output.txt", "w") as f:
    f.write(content)

print("Done! All newlines replaced with <br>.")