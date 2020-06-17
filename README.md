# Responsive-Design

In this module challenge you will continue working on your portfolio website to make it compatible for different browser widths.

## User Interface and Git

## Responsive Design

## Objectives

- describe the differences in fixed, fluid, adaptive, and responsive layouts

Fixed is when a element is set to an amount of pixels or units and never changes. It is not popular and will leave a scroll bar on smaller devices. It may not develop correctly with fluid changes either since its based off pixels and not a percentage type of unit. 

Fluid is when the elements are set to a percentage of the screen size so when the browser size change so do the elements. This layout is much more flexible and managable in devlopment.  


Adaptive is where layouts are in various fixed premade versions and each version is used depending on the screen size. This is good for low sever loads since it only sends what the device needs and not everything else that it does not need to load up. For projects that are going to need optimal server load speeds, this is a great choice to insure the end-user is getting the intended experience .    


Responsive design is based off breakpoints depending on the browser size. Each breakpoint will activate new responses to the elements style once the browser size pixles increase or decrease on each @ media quarie condition. This can be used to achieve a fluid experience that does not depend on a fixed layout Like how Adapative layouts do.  


The major differences between these four layouts come down to wheither each pixle is set to a fixed or fluid layout. Fluid layouts seem best for designs where the device size is unknown and whether or not it is known all user get the same experience regardless of device size. While with a Fixed or adaptive layout the pixel size is set and it will not respond to radical testing or changes easy.With Adapative you get the optimal server load on the cache at the minimum while with fluid or fixed layouts everything is get loaded to the client no matter if they are ever going to need it or not. 


- implement media queries in a project.





- describe how using scalable units for font sizes impacts accessibility and why designing accessible web pages is important

Its very important that accessible web pages can be adjusted depending on the reader. Some people need big words and other decrease the size to see better. Depending on a person's browser settings a font size may increase larger or smaller than intended so it is good to base the font size off a 62.5% because this will make a usable unit of measurment.  


## Introduction

It goes without saying that this skill is essential for a professional Web Developer. Imagine trying to visit a store's webpage on your phone and not being able to even read the names of items? That would be totally unacceptable in this day and age! Same goes for a web developer's portfolio site.

In this challenge you will refactor your personal portfolio code to make it responsive. You have the ability to write HTML, CSS, and responsive media queries. You also know how to identify and write responsive units. It's time to put that knowledge into action!

## Instructions

### Task 1: Set up Project

New features of a project should occur in a new branch in the same repository. Follow these steps to set up and work on your project from yesterday:

- [ ] `cd` into your personal portfolio folder
- [ ] Create a new branch from `<firstName-lastName>`:

```bash
git checkout -b <firstName-lastName-day2> <firstName-lastName>.
```

- [ ] Implement the project on your newly created `<firstName-lastName-day2>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName-day2>`.

### Task 2: Minimum Viable Product

Use the checklist below to guide your work today. Your final product should be presentable at mobile, tablet and a desktop-width.

- [ ] Insert a viewport meta tag into the head of the project with these html attributes: content="width=device-width, initial-scale=1"
- [ ] Introduce max-width media queries into your project at 800px and 500px
- [ ] Add accessability features to your webpage
- [ ] Design should closely follow the [mobile wireframe](Wireframes/) given for your chosen layout

### Task 2b: Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/hALhPTQrbZCJtPYhn/F78eZwAGpSS3cR)

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3: Stretch Goals

Once you finish the minimum viable project, work on any of the following stretch goals:

- [ ]  Test your website at several breakpoints and refactor code as needed. A few common breakpoints are below:
  - [ ]  iPhone: 360×640
  - [ ]  Laptop: 1366×768
  - [ ]  Widescreen: 1920×1080
- [ ] Test your webpage's accessibility with a screen reader like [this](https://support.google.com/accessibility/answer/7031755?hl=en)
- [ ] Start over with min-width media queries to get a feel for how a mobile first approach would be like. I recommend making a branch of all your content in a new folder named "mobile-first" to keep it separate
- [ ] Test your webpage's accessibility with a screen reader like [this](https://support.google.com/accessibility/answer/7031755?hl=en)

## FAQs

**What if I'm not done with my site from last time?**

*If you're not totally happy with your site, that's fine. Try to work with what you have. If your challenge from yesterday is in a state that you **absolutely** cannot work on it, reach out to your TL for starter code and attend support hours for more HTML/CSS help.*

**My site works on mobile - does that count as responsive?**

*A mobile website is **not** the same thing as a responsive website! A responsive webpage works at any browser width, not just mobile. Keep on coding!*

## Resources

📚[Best Practices for Responsive Design](https://www.browserstack.com/guide/responsive-design-breakpoints)

🤝[W3 Schools - Responsive Design](https://www.w3schools.com/html/html_responsive.asp)

👀 [Explore a Curated Gallery of Professional Portfolios](https://wpamelia.com/portfolio-websites/#webdev)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.

