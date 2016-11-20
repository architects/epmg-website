# Welcome to Skypager 

In this folder you will find the source code for a Skypager website project that can easily be updated and maintained,

At the same time this project offers unlimited flexibility to adapt to fit your business needs and serve 
as a valuable source of leads and new customers.  

## Project Folders 

Each of the project's subfolders contain files that serve a specific purpose. 

Generally speaking, each folder will have a `README.md` file inside of it that gives you
more detailed information about the folder and how its files will be used.

### Assets

The `assets/` folder contains images, font files, logos, and other types of graphics or videos.

These files can get processed and incorporated into the generated website and uploaded to the web automatically.

### Content 

The `content/` folder contains plain old english writing.  It is easiest to keep this stuff separate
from the actual HTML code that will be used to display the site, since it is easier to edit using any
old text editor or program you are comfortable with.  

These files are organized somewhat logically, as the tools responsible for building the actual website 
HTML that get served to the web browser need to know where to find the content to display. 

When all of files in `content/testimonials` for example get processed, will be able to display them 
all any way we want on the site's pages, and you will not need to copy and paste this content  


### Config

The `config/` folder contains javascript files that are used by the [Skypager](https://skypager.io) website builder. 

It is used to control things like how your site is hosted or updated, where emails will get sent by the contact page,
and things of that nature.

### Pages

The [pages/](pages/README.md) folder is where you will define which pages or URLs will be generated as part of your website.

In the simplest case, one fill will match up with one URL however You can use these files to create dynamic, 
data driven web pages if desired.  For example, you may have a spreadsheet with information on it that you want to
display each row as its own page with its own URL.  

See [pages/README.md] for more information about the options available to you here.

## Programming Language Requirements

The goal of this project is to provide you with a website that is easy to maintain  
without requiring an advanced web programming background. 

However if you wanted to dabble with learning programming, the tools included in this 
project will take you a long way. 

### Markdown 

This file contains a number of files ending in `.md` such as this one you're reading.

To work with the files in this project, I will assume you are comfortable with using 
`Markdown` files.  For a tutorial that can help you get up to speed, I recommend
[Github's Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

This [Handy Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is also useful
to jog your memory.

Markdown can be turned into HTML and for long form writing, it is a great authoring tool. 

### YAML

Occasionally you will come across YAML at the top of some of the `Markdown` files. 

This is known as Frontmatter, and it is used for tagging your files with `metadata` that
can be used in a variety of ways, such as adding keywords for SEO purposes or categorizing
posts for a blog.

For example:

```markdown
---
title: My First Blog Post
status: draft
date: 2016-12-18
tags:
  - blog posts 
  - rambling
---

# Welcome to my blog

Hello.
```

You can visit [This page To learn more about YAML](https://learn.getgrav.org/advanced/yaml)

### Javascript

### CSS

### HTML
