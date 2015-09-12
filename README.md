# iGEM UofT Wiki 2015

Built with the [iGEM Wiki Generator](https://github.com/igemuoftATG/generator-igemwiki).

To collaborate on page content:

First, you will need a GitHub account. Create one
[here](https://github.com/join). Make sure to verify your email after.

Once your email is verified, send me a message with your username and I can
add you as a collaborator of this repository. As a a collaborator, you can
*clone* the repo and work on it on your local machine, or **edit existing
files online**.

## Where do I write?

Page content is written as markdown and stored in

```
./src/markdown/*.md
```

Once there, open a file, click the edit icon (pencil), and you can begin writing.
There is also a preview tab which displays what the compiled markdown will look
like.

## Important!

After writing, you **must** make a commit. Otherwise your changes will be lost.
The default commit message is fine, but if you want others to have an idea
what you wrote, feel free to write your own.

If you are confused what markdown is, or how to use it, check out my quick
tutorial at the [wiki generator repo](https://github.com/igemuoftATG/generator-igemwiki) (some ways down).
As well, here is a great [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


## But this doesn't change the site?

I will frequently pull this repo, build the development and live versions,
and push to the live site once everything is all good. Use the markdown
preview as an indication of what to expect as the site content..because it is!


## I want to help with the wiki code/design.

Awesome! Get setup with the repo locally and we can designate some tasks.


### Markdown

Markdown is easy to learn. Markdown provides a way to write clunky HTML without
having to write clunky HTML. Huh?

Consider this html for a level 1 heading:

```html
<h1> Wheeeeee </h1>
```

Okay, that works, but in markdown it is sooo much cleaner:

```
# Wheeeeee
```

You can use `#` to `######` for `<h1>` to `<h6>`, respectably. Still not convinced?

```html
<img src="http://45.55.193.224/logo_grey.png" />
<ul>
	<li> <a href="http://igemuoft.github.io">iGEM UofT Computational Biology</a> </li>
	<li> <b>wheeeee</b> </li>
	<li> <i>wahooooooo</i> </li>
</ul>
```

vs.

```md
![logo](http://45.55.193.224/logo_grey.png)
* [iGEM UofT Computational Biology](http://igemuft.github.io)
* **wheeeeee**
* *wahooooo*
```

Oh and by the way, you just learned markdown. Still curious? See this [Markdown
Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

# Remember,

**wiki freeze is on September 18**

Cheers.
