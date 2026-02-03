---
title: "Emmet for HTML: A Beginner’s Guide to Writing Faster Markup"
datePublished: Fri Jan 30 2026 12:59:24 GMT+0000 (Coordinated Universal Time)
cuid: cml0w3t5s000g02l8dy5f32kn
slug: emmet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769777856493/f80e6986-9c21-4831-8e5b-2b4ce035b796.png
tags: software-development, web-development, html5, chaicode

---

## Introduction

Hello readers,

I know you are getting bored with the HTML code. I also get bored by writing the repetitive HTML code every time, so I searched a little bit for some shortcuts, so that with a few words, whole tags get completed, and I only need to write the content part.

I found a solution which is HTML Emmet. This is like an autocompletion feature on your keyboard, which takes some words, and as you press enter, the whole code gets auto-completed.

This blog is all about the HTML Emmet use case. This is my 5th blog. In a previous blog, I shared an amazing tool to make your dev journey fast. Here is the link:

[https://iamabhishek01-webdev.hashnode.dev/curl](https://iamabhishek01-webdev.hashnode.dev/curl)

## This blog contains

1. What is Emmit
    
2. Why Emmet is useful for HTML beginners
    
3. How Emmet works inside code editors
    
4. Basic Emmet syntax and abbreviations
    
5. Creating HTML elements using Emmet
    
6. Adding classes, IDs, and attributes
    
7. Creating nested elements
    
8. Repeating elements using multiplication
    
9. Generating full HTML boilerplate with Emmet
    

## What is Emmit

* In simple terms, **Emmet is a shortcut language for web developers.** It auto completes your character into full code.
    
* Emmet lets you type `!` to generate a whole HTML document structure. It is same as in real word chat when you type iykyk and the other person mind understand what you said.
    
* It is a plugin built into almost every modern editor (like VS Code) that turns abbreviations into full HTML code.
    

## Why Emmet is useful for HTML beginners

Imagine you want to build a simple navigation bar. Without shortcuts, you’re typing `<ul>`, then `<li>`, then `<a>`, then closing them all... over and over. It’s slow, boring, and there are high chances to get typos.

What if you could just type a single line of "code shorthand" and watch it transform into a full block of HTML instantly? That is the magic of **Emmet**.

That’s why Emmet is helpful. It allows you to build without getting annoyed with syntax.

## How Emmet works inside code editors

To use Emmet inside your code editor, you don’t have to do anything fancy. You just write some characters matching your tag and then press tab. The code editor will automatically complete your tag and move your cursor to the content.

```plaintext
p
```

**output**

```plaintext
<p> </p>
```

For each file, you don’t have to write **HTML boilerplate code.** If you type ! and press enter or tab, your boilerplate code is ready, and you are ready to build in seconds.

```plaintext
!
```

**output:**

```plaintext
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## Basic Emmet syntax and abbreviations

Emmet uses symbols to describe HTML structure. Here are those symbols:

| Symbol | Meaning |
| --- | --- |
| \&gt; | Child Element |
| + | Sibling element |
| \* | Repeat elements |
| . | Gives class name |
| # | Gives ID |
| {} | Text content (not much used) |

## Creating HTML elements using Emmet

Creating HTML elements using Emmet is like cutting butter with a knife. You just have to write the tag name initials, and the HTML element is created.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769775864177/e1993bfa-f1d4-4075-b7ec-4973ba7e5bf3.png align="center")

## Adding classes, IDs, and attributes

To add classes and IDs to the HTML elements, Emmet uses syntax similar to CSS selectors, which makes it very easy to remember.Example:

1. **For adding classes**
    

```plaintext
p.class1.class2{paragraph}
```

**output**

```plaintext
<p class="class1 class2"> paragraph </p>
```

2. **For adding ID**
    
    ```plaintext
    div#id1{div with id1}
    ```
    
    output
    
    ```plaintext
    <div id="id1"> div with id1 </div>
    ```
    
3. **For adding attributes**
    
    ```plaintext
    a[href="https://chaicode.com"]{visit chaicode}
    ```
    
    **output**
    
    ```plaintext
    <a href="https://chaicode.com" > Visit Chaicode </a>
    ```
    

## Creating nested elements

Till now, we have only created single elements, but if we need to create a nested element, we can use the `>` symbol.

Example:

```plaintext
ul>li{this is unordered list}
```

output

```plaintext
<ul>
        <li>this is list item</li>
</ul>
```

## Repeating elements using multiplication

In the list, there can be multiple list items inside the list. To repeat elements, you can use \* with the number of items you want.

Example:

```plaintext
ul>li{this is unordered list}*5
```

output:

```plaintext
<ul>
        <li>this is unordered list</li>
        <li>this is unordered list</li>
        <li>this is unordered list</li>
        <li>this is unordered list</li>
        <li>this is unordered list</li>
    </ul>
```

## Sibling elements using emmet

Sibling elements mean having multiple elements inside a block-level tag. To create this, you can use the `+` symbol.

Example:

```plaintext
div.box>p{first sibling}+h1{second sibling}
```

output

```plaintext
<div class="box">
        <p>first sibling</p>
        <h1>second sibling</h1>
    </div>
```

That’s it for this blog.

Now you know how developers write HTML faster without typing every tag again and again.

Short abbreviations. Clean structure. Less effort. More focus.

Emmet might look small, but once you start using it, there’s no going back.

But writing fast is only half the story. What about writing **meaningful HTML**? HTML that makes sense — to browsers, developers, and search engines. That’s where **semantic tags** come in.

In the next blog, I’ll break down HTML semantic tags and explain why they matter more than you think.

Till then, stay consistent, keep learning, and write clean code.  
Peace. ✌️