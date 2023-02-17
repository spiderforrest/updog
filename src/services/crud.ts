const express = require("express");
const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});

const createMessage = ( response: any, from: string, to: string, body: string) => {
  pool.query(
    "INSERT INTO messages (from_user, to_user, body) VALUES ($1, $2, $3) RETURNING *",
    [from, to, body],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Message added with ID: ${results.rows[0].id}`);
    }
  );
};


// const createUser
const createUser = (request: any, response: any) => {
  const { username, email } = request.body;
  pool.query(
    "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
    [username, email],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].uuid}`);
    }
  );
};
const createPage = (request: any, response: any) => {
  const {
// const getPageMessages

// {{{ old user table template code
const getUsers = (request: any, response: any) => {
  pool.query(
    "SELECT * FROM users ORDER BY id ASC",
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUserById = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const updateUser = (request: any, response: any) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User ${name} modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM users WHERE id = $1",
    [id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

// }}}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createMessage,
};

// vim:foldmethod=marker
