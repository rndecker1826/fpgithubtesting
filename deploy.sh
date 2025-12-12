<<<<<<< HEAD
#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy"

git push -f git@github.com:rndecker1826/finalproject.git master:gh-pages

=======
#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy"

git push -f git@github.com:rndecker1826/finalproject.git master:gh-pages

>>>>>>> 8587aca021366b3fe5997389957fc33f1c1d8a2c
cd -