---
path: "/blog/speeding-up-jekyll"
title: "Speeding up a Jekyll Site"
date: "2019-07-16"
author: "Matthi"
---

# Speeding up a Jekyll site

So I found myself with some spare time at work, deadlines are already looming for the next project but I don't have anything information to already get started on it. I hate idling so what I did was check the page speed of our main jekyll site.. wow. 
The site is very content heavy with images, and because I was under a lot of pressure to get the site done as quickly as possible, I didn't pay as much attention to speed and optimization as I should have. 

I'm embarassed to say he original ranking of the site was sitting at 80 for desktop and a whopping 42 for mobile. For being a static site, even with a lot of content and images I was pretty shocked. I could definitely do better than that.

What followed next was a nice chunk of work, which was easy to almost obsess over! I thought documenting the steps I took would make for a good first blog article for anyone that is currently in the same position and needs to speed up a jekyll site.

## Images!
I've always hated dealing with images, until now, dealing with optimizing images with both jekyll and gatsby actually kind of made me appreciate the problem a bit more... and the solutions.

There are a few steps here. First I made sure to optimize all my images using a handy little tool called [ImageOptim](https://imageoptim.com/mac). Previously I always used free online tools and optimized one image at a time, with ImageOptim this is SO much easier. After you download the application, all you need to do is take your image folder, throw it into the application and let it do its thing. Best thing is, once ImageOptim has optimized an image it will actually save and replace the original iamge. That means no need for moving images back and forth, just drop it once, wait, and you're done. This already cut the size of the images down quite a bit, but the next step, is responsive images.

I made use of a handy little plugin [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image). This is a really handy little plugin that will allow you to specify a source to your image and the plugin will create all the appropriately sized srcset attributes for you. It also gives you quite a bit of custamizability, you can write your own responsive-image template (you can also write multiple and specify them for individual images) and you can set the individual image sizes that you want to create for each reponsive image (configurable in your config.yml file).
In your config file you can also specify that you want your images to be cached, this is reffering to the specific image size that was initally served.

After these steps you should already see quite an improvement in the website speed. For our image heavy site, this made the biggest difference, but the next few steps will definitely add up as well.

After the images are done, next step is to minify everything. 

## Minify the css:
If you're using sass this is super simple, under your scss setting in your config.yml file, just add 'style: compress'. Once your build the site, jekyll will automatically compress the compiled css file.

## Minify the html:
There's a handy little plugin for this as well: [compress-html](https://jch.penibelst.de/). Nice thing about this is that it is just straight up liquid code, and not a real ruby gem plugin. The documentation is fantastic and easy to follow, you can check out the details [here](https://jch.penibelst.de/).

The just of it is, download the compress.html file, throw it into your layout folder, then reference the compress layout in your highest-level layout (probably default layout), set up your configuration settings in your config.yml file, and you're good to go.

## Minify JS:
Actually I ran out of time and haven't gotten around to this yet, but I'll update this once its ready.

## Get rid of unused css:
Again, super handy little plugin here, uncss:
** add in the details of how to set it up

## Use a CDN:
There are some pretty good CDNs out there that are free to use and will definitely speed up your site as well. However, for this particular site security was a major concern. I was able to speed up the site significantly in other ways, so there was no real reason to go with a paid plan for a CDN yet. Free CDNs might be the way to go for some sites though. However, they do create a single point of failure so if the free CDN provider gets hacked, you may be screwed.

Note: A CDN is a Content Delivery Network, the general idea of it is that you spread out your resources to servers across the world which will cut down the time it takes for clients across the world to connect to your site. Say for example you host your site in Canada, if someone from Asia accesses your site, they may experience a larger delay. A CDN will host your site on a node closer to that specific client.

Go through your <head> and check all of the resources that you're importing, check if you can defer any of them to the end of the rendering process. Anything that isn't used right away should probably be defered. You can also use the async flag to load the javascript asynchronously if it is needed. This will speed up the initial rendering of the site as there are less blocking resources being loaded at render time.

## the outcome

Starting out I had the figures 80 and 42 for desktop and mobile respectively. After applying these simple few steps I was able to bump that number up to 95 and 65. There's still a lot of room for improvement, and next time I get some free time on my hands I will make sure to do these, but for now, I think its a good start.