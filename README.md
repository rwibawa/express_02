# express_02
nodeJS + expressJS exercise

1. Setup
```bash
  $  mkdir express_02
  $  cd express_02
  $  npm init
  $  npm install express
  $  touch app.js
  $  touch gulpfile.js
  $  vi app.js
  $  gulp --help
  $  vi gulpfile.js
  $  gulp --help
  $  node app.js
  
# service calls
# https://<server>/cool
# https://<server>/times
# https://<server>/db
```
2. git
```bash
  $  git init
  $  git add -A
  $  git status
  $  git commit -m "Initialize repo"
  $  git log

  $  cat ~/.ssh/id_rsa.pub
  $  git remote add origin git@github.com:rwibawa/express_02.git
  $  git remote -v
  $  git push -u origin master
```
3. Heroku
```bash
  $  heroku login
  $  heroku create
  $  git push heroku master
  $  heroku logs --tail
```
4. Heroku console
```bash
$ heroku run node
$ heroku run bash

# define env vars
$ heroku config:set TIMES=11
$ heroku config
```
5. Heroku addons
```bash
# Papertrail
$ heroku addons:create papertrail
Creating papertrail on ⬢ blooming-castle-19216... free
Welcome to Papertrail. Questions and ideas are welcome (support@papertrailapp.com). Happy logging!
Created papertrail-curved-58967 as PAPERTRAIL_API_TOKEN
Use heroku addons:docs papertrail to view documentation
SFO1502662077M:express_02 502662077$ heroku addons

Add-on                                Plan     Price  State
────────────────────────────────────  ───────  ─────  ───────
papertrail (papertrail-curved-58967)  choklad  free   created
 └─ as PAPERTRAIL

The table above shows add-ons and the attachments to the current app (blooming-castle-19216) or other apps.

$ heroku addons:open papertrail

#PostgreSQL
$ heroku addons:create heroku-postgresql:hobby-dev
Creating heroku-postgresql:hobby-dev on ⬢ blooming-castle-19216... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-slippery-77955 as DATABASE_URL
Use heroku addons:docs heroku-postgresql to view documentation
$ heroku addons:docs heroku-postgresql
Opening https://devcenter.heroku.com/articles/heroku-postgresql...
$ npm install
express_02@1.0.0 /Users/502662077/Documents/workspace_nodejs/express_02
└─┬ pg@4.5.6
  ├── buffer-writer@1.0.1
  ├── generic-pool@2.4.2
  ├── packet-reader@0.2.0
  ├── pg-connection-string@0.1.3
  ├─┬ pg-types@1.11.0
  │ ├── ap@0.2.0
  │ ├── postgres-array@1.0.2
  │ ├── postgres-bytea@1.0.0
  │ ├── postgres-date@1.0.3
  │ └── postgres-interval@1.0.2
  ├─┬ pgpass@0.0.3
  │ └─┬ split@0.3.3
  │   └── through@2.3.8
  └── semver@4.3.6

npm WARN express_02@1.0.0 No repository field.

$ heroku config
=== blooming-castle-19216 Config Vars
DATABASE_URL:         postgres://jlshtwkpxlpopj:aa555fc761bc01aa562b2d9b7e72eca8fedbadc4fb1833eb33048a3fa0133f0f@ec2-54-235-247-224.compute-1.amazonaws.com:5432/db0q9hgbamfl9n
PAPERTRAIL_API_TOKEN: zNO4uw7JCUc2rSkOpnp
TIMES:                9
```
6. Create pg database
```bash
# local db
$ psql -U calmdbuser -d express_01-dev
Password for user calmdbuser:
express_01-dev=# create table test_table (id integer, name text);
CREATE TABLE
express_01-dev=# insert into test_table values (1, 'hello database');
INSERT 0 1
express_01-dev=# select * from test_table;

#heroku db
$ heroku pg:psql
psql (9.3.2, server 9.3.3)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.
=> create table test_table (id integer, name text);
CREATE TABLE
=> insert into test_table values (1, 'hello database');
INSERT 0 1
=> \q
```