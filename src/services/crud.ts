// const express = require('express');
const Pool = require("pg").Pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});

// {{{ auth code

function makeToken(rows: any){
  return jwt.sign({ ...rows[0] }, process.env.JWT_SECRET, {
    expiresIn: '1 day',
  });
}

const signUp = async (response: any, username: string, email: string, password: string) => {
  const hash = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS)
  );
  pool.query(
    "INSERT INTO users (username, email, hash) VALUES ($1, $2, $3) RETURNING *",
    [username, email, hash],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with UUID: ${results.rows[0].uuid}`);
      return makeToken(results.rows)
    }
  );
}

const signIn = async (usernameOrEmail: string, password: string) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE email=$1 OR username=$1",
      [usernameOrEmail]
    );

    if (!rows[0]) throw new Error('Invalid username or email');
    if (!bcrypt.compareSync(password, rows[0].hash))
    throw new Error('Invalid password');
    return makeToken(rows)
  } catch (err) {
    err.status = 401;
    throw error;
  }
}

// }}}

// {{{ message code
const createMessage = (response: any, from: string, to: string, body: string) => {
  pool.query(
    "INSERT INTO messages (from_user, to_user, body) VALUES ($1, $2, $3) RETURNING *",
    [from, to, body],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`msg sent with ID: ${results.rows[0].id}`);
    }
  );
};

// const getMessagePage
// const

// }}}

// // {{{ old user table template code
// const getUsers = (request: any, response: any) => {
//   pool.query("SELECT * FROM users ORDER BY id ASC", (error: any, results: any) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const getUserById = (request: any, response: any) => {
//   const id = parseInt(request.params.id);

//   pool.query("SELECT * FROM users WHERE id = $1", [id], (error: any, results: any) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const createUser = (request: any, response: any) => {
//   const { name, email } = request.body;

//   pool.query(
//     "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
//     [name, email],
//     (error: any, results: any) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// const updateUser = (request: any, response: any) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error: any, results: any) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// const deleteUser = (request: any, response: any) => {
//   const id = parseInt(request.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error: any, results: any) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

// // }}}

module.exports = {
  createMessage,
  signIn,
  signUp,
}

// vim:foldmethod=marker
