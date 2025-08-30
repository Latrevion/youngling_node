import  dotenv from "dotenv";

dotenv.config();

/**
 * app config
 */
export const {APP_PORT} = process.env;


/**
 * Data warehouse setup
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
}=process.env