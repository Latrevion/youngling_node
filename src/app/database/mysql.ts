import mysql from 'mysql2'
import {MYSQL_HOST,MYSQL_PORT,MYSQL_USER,MYSQL_DATABASE,MYSQL_PASSWORD}from '../app.config'

/**
 * Create a data service link
 */
export const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT||'3306', 10),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});