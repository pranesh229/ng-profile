#!/bin/sh

replaceFiles(){
  cp -rf /dist/
}

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://github.com/pranesh229/pranesh229.github.io.git
  git push origin master
}

setup_git
commit_website_files
upload_files
