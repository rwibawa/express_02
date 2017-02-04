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
4. Heroku logger
```bash
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

SFO1502662077M:express_02 502662077$ heroku addons:open papertrail
```