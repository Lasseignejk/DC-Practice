# PETS

# be able to make a noise
# def animalSound()

# have an owner
# def whoIsMyOwner()

# have a name
# def whatsMyName()

# let us know what kind of pet they are
# def whatKindOfPet()


class Pets:
    def __init__(self, noise, owner, name, kind):
        self.noise = noise
        self.owner = owner
        self.name = name
        self.kind = kind

    def animalSound(self):
        print(f"{self.noise} {self.noise}")

    def whoIsMyOwner(self):
        print(f"This pet's owner is {self.owner}.")

    def whatsMyName(self):
        print(f"This pet's name is {self.name}.")

    def whatKindOfPet(self):
        print(f"This pet is a {self.kind}.")


Nikita = Pets("bark", "Dad", "Nikita", "husky")
Meek = Pets("meow", "Jordan", "Meek", "cat")

Nikita.animalSound()
Nikita.whoIsMyOwner()
Nikita.whatsMyName()
Nikita.whatKindOfPet()

Meek.animalSound()
Meek.whoIsMyOwner()
Meek.whatsMyName()
Meek.whatKindOfPet()
