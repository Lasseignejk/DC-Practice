require('dotenv').config();
const express = require("express");
const app = express();
const creds = require("./creds")
const PORT = 3010

// this lets you get access to the request body
app.use(express.json());
app.set("view engine", "ejs");

app.get("/todo_list", (req, res) => {
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
          return console.error(err.stack);
        }
        client.query(
          `SELECT * FROM grocerylist;`,
          (err, results) => {
            release()
            if (err) {
              console.log(err);
            } else {
                res.render("pages/index", {
                    creds:results.rows
                })
          }
        })
    });
})

app.post("/create_todo", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
      if (err) {
        return console.error(err.stack);
      }
      client.query(
        `INSERT INTO grocerylist (task, is_completed, notes) VALUES ($1, $2, $3);`,
        [req.body.task, req.body.is_completed, req.body.notes],
        (err, result) => {
          release();
          if (err) {
            res.status(400).send(err.stack);
          } else {
            res.status(200).send(result);
          }
        }
      );
    });
  });

app.put("/modify_todo", (req, res) => {
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
          return console.error(err.stack);
        }
        client.query(
          `UPDATE grocerylist SET task = $1 WHERE id = $2;`,
          [req.body.task,req.body.id],
          (err, result) => {
            release();
            if (err) {
              res.status(400).send(err.stack);
            } else {
              res.status(200).send(result);
            }
          }
        );
      });
})

app.delete("/delete_todo", (req, res) => {
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
          return console.error(err.stack);
        }
        client.query(
          `DELETE FROM grocerylist WHERE id = $1;`,
          [req.body.id],
          (err, result) => {
            release();
            if (err) {
              res.status(400).send(err.stack);
            } else {
              res.status(200).send(result);
            }
          }
        );
      });
})

app.post("/add_todos", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
      if (err) {
        return console.error(err.stack);
      }
      req.body.forEach((task) => {
        client.query(
            `INSERT INTO grocerylist (task) VALUES ($1);`,
            [task.task],
            (err, result) => {
              if (err) {
                console.log(err)
              } else {
                console.log(`inserted ${result.rowCount} row`)
              }
            }
          );
      });
      
    })
    res.send("inserted rows");
  });


app.listen(PORT, console.log(`Listening on port ${PORT}`))