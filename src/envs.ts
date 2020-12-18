const env = (name: string, fallback: string) => process.env[name] || fallback;

export const envs = {
  host: env('DB_HOST', '127.0.0.1'),
  port: Number(env('DB_PORT', '5432')),
  dbName: env('DB_NAME', 'postgres'),
  user: env('DB_USER', 'postgres'),
  password: env('DB_PASSWORD', 'postgres'),
}