### Building
When you are ready to build, just run `grunt`.  This will re-test your code and  create both a
minified file and a normal file with all your files concatenated.  Use the
concatenated file as your `main` in `bower.json`.  You have to make sure
this is set before you commit and push, otherwise when users depend on your
module they won't have the advantage of having it automatically add to their
`index.html`.

### Versioning
If you are following [angular's commit conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) then you will be able to automatically generate a CHANGELOG.md file for your repo.  It will use all commits from the last tag up to this point and add a new entry.  Your flow could be something like this:

1. Work and make many commits following conventions.  Be sure to run `grunt` before committing your work so you can generate the compiled files.
2. Run `grunt bump` in some way to update your version
3. Run `grunt changelog` to generate a list of changes since the last tag
4. Commit the changes as a `chore(release): vx.x.x`
5. `git tag vx.x.x`
6. And finally, `git push` and `git push --tags`

