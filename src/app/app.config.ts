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


/**
 * Key configuration
 */
export let { PUBLIC_KEY, PRIVATE_KEY } = process.env;
// @ts-ignore
PUBLIC_KEY = Buffer.from(PUBLIC_KEY, 'base64').toString();
// @ts-ignore
PRIVATE_KEY=Buffer.from(PRIVATE_KEY,'base64').toString();

