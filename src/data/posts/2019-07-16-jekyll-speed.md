---
path: "/blog/speeding-up-jekyll"
title: "Speeding up a Jekyll Site"
date: "2019-07-16"
author: "Matthi"
---

# Speeding up a Jekyll Site

I recently found myself with some spare time at work. I hate idling so I checked the page speed of our main jekyll site... and I was quite suprised!
The site is very content heavy with images, and because I was under a lot of pressure to get the site done as quickly as possible, I didn't pay as much attention to speed and optimization as I should have. 

I'm embarassed to say he original ranking of the site was sitting at 80 for desktop and a whopping 42 for mobile. For being a static site, even with a lot of content and images I was kind of shocked. I could definitely do better than that.

What followed next was a nice chunk of work to keep me busy for a bit. I thought documenting the steps I took would make for a good first blog article for anyone that is currently in the same position and needs to speed up a jekyll site. I was a bit limited with time but here were the big items that were quick to implement and brought substancial speed improvements.

## Images!
To be honest, I've always hated dealing with images. However, after dealing with optimizing images with both jekyll and gatsby I actually kind of appreciate the problem a bit more... and the solutions.

There are a few steps here. First I made sure to optimize all my images using a handy little tool called [ImageOptim](https://imageoptim.com/mac). Previously I always used free online tools and optimized one image at a time, with ImageOptim this process is a lot easier. After you download the application, all you need to do is take your image folder, throw it into the application and let it do its thing. Best thing is, once ImageOptim has optimized an image it will actually save and replace the original iamge. That means no need for moving images back and forth, just drop it once, wait, and you're done. Even though about half of the images on the site were already optimized, this still made an impressive difference in the overall size.

Next step is making your images responsive. This is extremely important, especially when you're serving to mobile users. Serving a massive 2000px wide header image to a user with an iPhone 5 is not just a bad user experience as it will take a while to load but it will actually cost that person real money, and there is no reason that it has to. What you should be doing is serving that image in multiple specific sizes depending on the user's screen size.

I made use of a handy little plugin called [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image). This is a really great plugin that will allow you to specify a source to your image and the plugin will create all the appropriately sized srcset attributes for you. It also gives you quite a bit of customizability, you can write your own responsive-image template (or multiple that you can specify for individual images) and you can set the individual image sizes that you want to create for each reponsive image (configurable in your config.yml file).
In your config file you can also specify that you want your images to be cached, this is referring to the specific image size that was initally served.

After these steps (depending on how image heavy your site is) you should already see quite an improvement in the website speed. For our image heavy site, this made the biggest difference, but the next few steps will definitely add up as well.

After the images are done, next step is to minify everything. 

## Minify the css:
If you're using sass this is super simple, under your scss setting in your config.yml file, just add 'style: compress'. Once your build the site, jekyll will automatically compress the compiled css file. Otherwise, you will be able to use the same plugin used for minifying the JS below.

## Minify the html:
There's a nice little plugin for this as well: [compress-html](https://jch.penibelst.de/). Great thing about this is that it is just straight up liquid code, and not a real ruby gem plugin. The documentation is fantastic and easy to follow, you can check out the details [here](https://jch.penibelst.de/).

The just of it is, download the compress.html file, throw it into your layout folder, then reference the compress layout in your highest-level layout (probably default layout), set up your configuration settings in your config.yml file, and you're good to go, during the build, the HTML will be compressed.

## Minify JS:
[jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier). If you aren't using SASS you will actually be able to use this plugin to minify your CSS as well, its a great tool. Again, the documentation is very easy and straight forward to follow.

## Get rid of unused CSS:
For jekyll I decided to use [UnCSS](https://github.com/uncss/uncss), however there are quite a few tools that you can use for this. One more that you could use is [PurgeCSS](https://www.purgecss.com/). Especially for static sites this is a great tool to remove any CSS rules that aren't actually being used anymore. Even if you're careful with cleaning up your CSS, its difficult to not have at least a few rules in your stylesheet that aren't being used anymore. These tools will clean up those rules and shrink your CSS filesize.

Now one thing that I was thinking about doing was to split up my one large CSS file which covers the whole site into individual stylesheets for each page. This would really cut down on unused CSS rules and cut individual filesizes down, however, you would then need to have an extra request for loading a new CSS file for each page. I'm really not too sure what would be the better approach here yet, but for now I decided to stick with a single stylesheet.

## Use a CDN:
There are some pretty good CDNs out there that are free to use and will definitely speed up your site as well. However, for this particular site security was a major concern. I was able to speed up the site significantly in other ways, so there was no real reason to go with a paid plan for a CDN yet. Free CDNs might be the way to go for some sites. However, they do create a single point of failure so if the free CDN provider that you use gets hacked, you may be screwed.

A CDN is a Content Delivery Network, the general idea of it is that you spread out your resources to servers across the world which will cut down the time it takes for clients across the world to connect to your site. Say for example you host your site in Canada, if someone from Asia accesses your site, they may experience a larger delay as the data has to travel further. A CDN will host your site on a node closer to that specific client, increasing the speed of the load.

## Logical Resource Loading

Go through your head tag and check all of the resources that you're importing, check if you can defer any of them to the end of the rendering process. Anything that isn't used right away should probably be defered. You can also use the async flag to load the javascript asynchronously if it is needed. This will speed up the initial rendering of the site as there are less blocking resources being loaded at render time.

For example: If you have some javascript that handles an image slider on the bottom of one of your pages. You probably don't need to load this script before rendering the page, so add a defer attribute to it.

## Outcome

Starting out I had the figures 80 and 42 for desktop and mobile respectively. After applying these simple few steps I was able to bump that number up to 95 and 67. There's still a lot of room for improvement, but I didn't have too much time for this little side project, so for the limited time I had, I am quite happy with the improvement. Let's consider it a good start.


## To summarize:

Make sure you have:
- optimized images
- responsive images
- minified HTML, CSS, and JS
- logical resource loading
- remove unused CSS
- (optional) running a CDN