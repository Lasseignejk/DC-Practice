# Dictionaries look like objects in JS
# A dictionary consists of pairs of keys and values inside of CURLY BRACES.

# friend_info = {
#     "Name": "Alan Turing",
#     "Cell": "6017576",
#     "Birthday": "June 23",
# }

# You can use any of Python's primitive data types, such as Strings, numbers, and tuples.
# You CANNOT use lists or dictionaries as keys (the first thing in the key-value pair.)
# Dictionary VALUES can be any Python type, INCLUDING lists and dictionaries.

superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisibile Jet",
        "speed": "2000 mph",
    }
}

# How do you retrieve data? There are 3 ways:
# hero_name = superhero["name"]
# hero_alias = superhero.get("alias")
# hero_values = superhero.values()

# # 1.  [key name] retrieves the value for a key using the index syntax (similar to lists)
# # 2.  .get(key name)  if it exists, retrives the value for a key, or returns 'None'
# # 3.  .values() returns all values of a dictionary

# # The 'in' operator is used to check if a certain key exists in a dictionary

# if "weakness" in superhero:
#     print("The bad guys can totally win.")
# else:
#     print("Go home, bad guys.")

# # You can also use 'not in':
# if "weakness" not in superhero:
#     print("Go home, bad guys.")

# # Use the index syntax on the LHS to update a value. This can also be used to add a key/value pair to a dictionary.
# superhero["alias"] = "Princess Diana of Themyscira"
# superhero["hometown"] = "Themyscira"
# print(superhero)

# # Use the .items() method to iterate over a dictionary.
# for key, value in superhero.items():
#     print("Superhero's %s is %s" % (key, value))
# ^ This prints:
# Superhero's name is Wonder Woman
# Superhero's alias is Princess Diana of Themyscira
# Superhero's gear is ['Lasso of Truth', 'Bracelets of Submission']
# Superhero's vehicle is {'title': 'Invisible Jet', 'speed': '2000 mph'}
# Superhero hometown is Themyscira

# There is no way to guarantee that key/value pairs will be in the same order when printed.

# Use the 'del' keyword to remove a key/value pair from a dictionary
# del superhero["vehicle"]
# print("No vehicle. It's in the shop.")

# # By indexing and assigning to variables, you can get to the data in a nested dicitonary.
# vehicle = superhero["vehicle"]
# vehicle_title = vehicle["title"]
# print(vehicle_title)

# # Or, you can omit the intermediary 'vehicle' function and just stack additional [] to index further and further into the dictionaries.
# vehicle_title = superhero["vehicle"]["title"]
# print(vehicle_title)

# To access a specific list item inside a dictionary, first use the key name for the list. Then use the numerical index for the item in the list.
# lasso = superhero["gear"][0]
# print(lasso)

# You can also iterate over a list inside of a dictionary:
for item in superhero["gear"]:
    print("%s has %s" % (superhero["name"], item))

# How do I save to a file?
# Imagine that you're using a word processor program to update your resume.
# You probably opened the file, typed a few words, formatted the headings and bulleted lists, and then saved the file.
# When working with files in Python, the workflow is similar.
# Python includes built-in fuctions to open() a file so that you can read from it or write to it.
# For example:
file_name = "to-do-list.txt"
with open(file_name, "r") as file_handle:
    contents = file_handle.read()
    print(contents)
# You pass open() two arguments: 1) The name of the file, as a string   2) a 'mode' that specifies if you intend to read or write to the file
# The with/as syntax lets us create a variable (which we've named file_handle) that we can use to access what's inside the file.
# Line 3 demonstrates how to read() the plain text contents from our file. When we print() the contents, we see the following:
"1. Sand the floor"
"2. Wax on, wax off"
"3. Pain the fence"
"4. Paint the house"
# To format your Python variables so they can be saved to a file requires a helper module.

# The pickle module can encode your python variables so that they can be stored to a file. Pickle can also decode the data and convert it back into Python values.
# To use pickle, you have to import it at the top of your program.
# pickle.dump() serializes
# pickle.load() deserializes
