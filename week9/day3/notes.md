[Sequelize documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

[npm sequelize documentation](https://www.npmjs.com/package/sequelize-cli#documentation)
# Sequelize

Worst-case scenario, if you mess up the sequelize, drop the table and try it again. It is much harder to do when there is data already in the table, so leave that for last once you have everything already set up. 

## Set up Sequelize 

    npm install --save-dev sequelize-cli
    npm i express sequelize pg
    npx sequelize init
    npm i dotenv (we didn't end up using)

This creates the config.json file.

To display all the sequelize commands: 

    npx sequelize --help
<br>
<br>

## On the config.json file
There are 3 things here, development, test, and production. FOR ALL THREE
- change the username to "postgres"
- change password to the password you set up for postgres
- change host to "localhost"
- change dialect to "postgres" because that's the flavor of sql we're using

<br>
<br>

## Create a database

    npx sequelize db:create

<br>
<br>

## To Create a Table
First, make a model. 

    npx sequelize model:generate --name NameOfTable --attributes NameOfColumn:dataType,NameOfColumn:dataType

If you are successful, a migration file will also be created.

You DO NOT have to put an id in attributes; one will be generated automatically

### The model file
Go to the model file in the model folder.
Inside, you should see the columns you made. If you want to change any of the column names or add more, you can do it here but you MUST change it in the migration file as well.

You can also set up the relationships of the files in the `static associate(models) {}`  section. 

    static associate(models) {
      Pets.hasOne(models.Owners, {
        foreignKey: 'pet'
      })
    }

Pets has a 1:1 relationship with the table Owners. The foreign key on the Owners table, the thing that connects them, is called 'pet'.

    static associate(models) {
        // define association here
        Owners.belongsTo(models.Pets, {
            foreignKey: 'pet',
            onDelete: "CASCADE"
        })
    }

The table Owners belongs to Pets, meaning Pets is the parent table and Owners is the child. The foreign key tying them together is located on Owners. It is called 'pet'. If a pet is deleted on the Pets table, then that deletion will cascade to the Owner table and delete the associated owner as well. 

### The migration file
On the migration file, you can set things like allowNull: true/false, primaryKey: true/false, etc.

    petName: {
        type: Sequelize.STRING,
        allowNull: false
        }

Because we specified in the modal tables that we have a foreign key, we need to update the migration file to match. On the CHILD'S migration file (Owner), we go to 'pet', because that's our foreign key, and update it.

    pet: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Pets',
          key: 'id',
          as: 'pet'
        }
      }

We have to add the references section. The 'model' is Pets, because that's the table it's tied to, the 'key' is 'id' because that's the column on Pets that we're pulling data from, and the 'as' is 'pet' because that's where we're including the 'key' data from. 'key' is equal to 'as'


**DEFINE YOUR RELATIONSHIPS BEFORE YOU MIGRATE**
<br>
<br>

## To Migrate

    npx sequelize db:migrate

This creates the table. Check for it in Beekeeper.

Now that we have our table, let's put some seed data in it.

<br>
<br>

## Seeders 
Seeding data

Here's some dummy data to start off with

    npx sequelize seed:generate --name NameYouWantToCallIt

In the Seed files: 

up -- inserts data 

    await queryInterface.bulkInsert('Pets',[
    {
    petName: "Sasha",
    petType: "Siberian Husky Dog",
    petOwner: "Dad",
    petAge: "8",
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
    petName: "Nikkita",
    petType: "Siberian Husky Dog",
    petOwner: "Jaye",
    petAge: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    ])

down -- deletes data

    await queryInterface.bulkDelete("Pets", null, {});

To put the seed data in your created table:

    npx sequelize db:seed --seed FullNameOfSeedFile

Now you can run nodemon in your terminal and open up Postman to start setting up routes.

<br>
<br>

## Connecting to a server
The index.js file in your models file is by default exporting all your models. Then, you can hook it up with the index.js in the uppermost file like this at the top:

    const {Owners,Pets} = require("./models")

Also make sure to include app.use at the top (middleware) so you can access the 'body' of requests in Postman

    app.use(express.json())

In your route, you need an async function.

    app.get("/get_pets", async (req,res) => {
    const pets = await Pets.findAll()
    res.send(pets);
    })

^^ the .findAll() is a sequelize function from the documentation. It's going to Pets, which is the Pet MODEL, then selecting all. 

To find a pet by an id >= 2 and <=4, put this at the top of the file... 

    const {Op} = require("sequelize");

...then put this in your route (found from the sequelize documentation)

    const petId = await Pets.findAll({
        where: {
            id: {
            [Op.gte]:2,
            [Op.lte]:4,
        }
        }
    })
    res.send(petId)