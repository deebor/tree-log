# Tree Log

<center>

<img src="res/icon.png" width=80>

[中文文档](/README-zh.md)

</center>

<center>

<a href="https://marketplace.visualstudio.com/items?itemName=daodaolea.tree-log" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/daodaolea.tree-log.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

</center>



A plugin that automatically generates console.log statements in tree format. The default tree header is a random emoji, which can be customized.

<center>

![shot](res/shot.png)

</center>

## Features

<center>

![shot](res/shot.gif)

</center>

You can select the variable and use the shortcut key `alt`+`c` to automatically generate the console statement, or use `ctrl`+`alt`+`c` to delete the console statement of the file.

You can also use the `Command Palette`, search for `Add Tree Log` to generate them, and `Delete Tree Log` to delete.

Of course, you can also right-click and select `Tree Log` to operate it after selecting the variable.



## Settings

You can customize the tree head by adding text to settings.json (Command Palette -> Preferences: Open Settings (JSON))

For example:

* `tree-log.suffix`: "a custom text"

