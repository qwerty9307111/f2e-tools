#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd doc

gitbook build

cd _book

git init

git config user.email 2436415068@qq.com

git config user.name yww

git add -A

git commit -m "deploy documents"

git push -f https://github.com/qwerty9307111/f2e-tools-doc.git master

cd -

rm -rf _book

cd ../