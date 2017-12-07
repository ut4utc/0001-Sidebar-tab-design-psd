# Sidebar Test Task

В папке dist - дистрибутив, в src - html шаблон, на основе которого все построено.

Собирается все запуском gulp а затем все компилируется в проект в дирректорию dist.


 To run index.html you will need a Node and Git instaled in your environment. If you don't have a node.js please go to this site http://nodejs.org and download and install proper version and for Git this site: http://git-scm.com/downloads

Next you will need to install gulp

     
    npm install --save-dev gulp-install
     

Next you will need to install bower

     
    npm install -g bower
     

And after that go to Root folder and run those commands to get all dependencies: *(in v1.0.0 I include all bower packages (bootstrap & jquery))

     
    npm install
    bower install
     

Gulp file - there are have main task that you can do:

    gulp mytask - to launch a test command whe u can see gulp working or not
    gulp sass:watch  - to compile & optimized sass file => css in your application in /dist
    gulp scripts - to build an optimized all js files of your application in /dist
    gulp - to build all project in /dist

