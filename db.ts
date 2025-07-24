import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const dbPath = path.join(process.cwd(), 'data', 'sudanfunds.db')
fs.mkdirSync(path.dirname(dbPath), { recursive: true })
export const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

db.exec(`
create table if not exists fundraiser(
  id integer primary key autoincrement,
  slug text unique,
  name text,
  description text,
  url text,
  platform text,
  currency text,
  raised real,
  goal real,
  contributions integer,
  isActivated integer,
  isAccepting integer
);
create table if not exists donation(
  key integer,
  fundraiser integer,
  date integer,
  isRecurring integer,
  contributor text,
  currency text,
  amount real,
  amount_local real,
  data text,
  primary key(key,fundraiser),
  foreign key(fundraiser) references fundraiser(id)
);
`)
