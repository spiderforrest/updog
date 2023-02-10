const express = require('express');
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "express",
  host: "localhost",
  database: "auth",
  password: "burger",
  port: 5432,
});

const createMessage = (response: any, from: string, to: string, body: string) => {

  pool.query(
    "INSERT INTO messages (from_user, to_user, body) VALUES ($1, $2, $3) RETURNING *",
    [from, to, body],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const getUsers = (request: any, response: any) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error: any, results: any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error: any, results: any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request: any, response: any) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
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
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error: any, results: any) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createMessage
}