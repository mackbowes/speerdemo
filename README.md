# Mackenzie's Front End Submission

I was suprised by the complexity of some of these UI elements!  
This experience was definitely a challenge, and to some degree a wakeup call.  
I found myself thinking several times 'I applied for an internship, right?' and at one point even looked up the job posting to confirm the title was __"Junior Development Intern."__  
  
I soon realized you were probably inspecting grit, determination, research skills, and so on.  
In production, I would have asked for help on the following aspects that remain as todo's, unfortunately, in this isolated case, they remain undone:  

## Todo's

1. Slideshow
    - I left this for later and definitely did not feel confident in completing this aspect in the allotted time frame. If I had more time, my next step was to incorporate [Framer Motion's Animate Presence](https://www.framer.com/api/motion/animate-presence/) feature, after spending a while reading the documentation and testing. 
1. Menu Animation
    - I have prepared the Navigation element as an extensible component that can theoretically take this animation as is, I'm just really not sure how to go about implementing this. CSS clip? Transform: Scale() an SVG? 
1. 'Spotlight' hover effect on buttons
    - I did spend a significant amount of time on this and I'm sure it's close - I was baffled by the given example passing Javascript to PseudoSelectors. Somehow, I need to select an element from the document tree and pass an onMouseChange event to it in order to track the x and y position of the cursor and then pass those updates to the :before element...  
    - really unsure how to do this in React as the Button component is __obviously__ a reusable component that shouldn't take an ID... 
1. Reveal Image on Hover
    - I have no idea. Same issue as above but I suppose the section wrapper __can__ take an ID... but how do I remove a part of the background? 
1. Improve UI on Payments page
    - I integrated the example code for the animated/liquid gradient button and it looks bad on the payment page due to low contrast. Unsure how to fix. 

## Done's

That's a lot of ToDo's!!  
Might make you wonder if I __did__ anything.  
  
I'm happy to report that, indeed, I did.  
Here's some documentation for the components and sections I built:

### Pages

I started by including 'react-router-dom' to introduce some snappy page updating.  
If you're unfamiliar with __react-router-dom__, just look at App.js in the top level of src.  

__Pages__ are imported to __App.js__ and passed to the return statement as components wrapped in __routes.__  
__Routes__ conditionally display components depending on the current URL.  
  
To inspect each __Page__, open __src/Pages__ and check the top level.  
There should be: 
1. Home, available at domain.com**/**
1. Payment, available at domain.com**/payment**
1. Pricing, available at domain.com**/pricing**
  
Inside of each __Page__ component, there are modular __Section__ components.  
These __Sections__ are *imported* to __Pages__, allowing each section to be worked on individually and *reordered*.  
__Sections__, in turn, are composed of __Components__, and almost always include an instance of the __Nav__ ***section***.  

#### Pages
1. Home.js
1. Payment.js
1. Pricing.js


#### /Sections
1. FinalCTA.js
1. Footer.js
1. Hero.js
1. HoverReveal.js
1. Music.js
1. Nav.js
1. Perks.js
1. PricingSection.js
1. Reviews.js

#### /components
1. Button.js, *contains code for all buttons*
1. ColoredSubtitle.js, an extension of Subtitle for use in the ***Perks*** section
1. Fullscreen.js, a helper function to make sections FullScreen
1. GridWrap.js, a helper function to center a page's elements
1. MusicPlayer.js, the component that integrated the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) as requested
1. PricingComponent.js, an extension of ColordSubtitle.js for use in the ***Pricing*** page
1. RadioGroup.js, a component that wraps and handles the logic for the radio buttons on the ***Payment*** page
1. RadioUnit.js, a component built for use in RadioGroup.js
1. Review.js, a single 'Review' component as seen in the ***Reviews*** section
1. Section.js, a wrapper function that takes color information as props
1. Subtitle.js, a component used for standard subtitle sizing, takes many props as subtitles were NOT standard in the design document lol
1. Title.js, a component used for standard title sizing, takes many props for the same reasons as Subtitle. 

## Documentation

#### Button.js
Takes `radius`, `size`, `width`, `color`, `bg` for 'backGround', `href`, `isColorful` which is a `bool` for displaying the button as a liquid gradient (default false), and `displayButton` which is a `bool` for displaying the button at all (default true.)  
Wrap it around raw text to be passed as a `child` to a `<div>` element.

#### Title.js

Takes `padding`, `color`, and `fontSize` as props.
Wrap it around raw text to be passed as a `child` to a `<div>` element.

#### Subtitle.js
Takes `color`, `padding`, `size`, `weight`, `width`, `margin`, `lineHeight`, and `mSize` for 'Mobile Size" as props.
Wrap it around raw text to be passed as a `child` to a `<div>` element.

#### ColoredSubtitle.js
Takes `color`, `size`, `weight`, `width`, `margin`, `lineHeight`, and `mSize` for 'Mobile Size' as props.  
Wrap it around raw text to be passed as a `child` to a `<Subtitle>` element.

#### PricingComponent.js 
Takes `color` (default `var(--white)`), `title` as the above line text, `period` as the below line text, `price` (including a currency denominator) as the price, and takes a list of children as seen in the __Pricing__ __Page__.

#### Review.js
Probably the least modular component, would need extension to be properly reusable. Takes a `person` prop as the text under the stars, *which are always 5*, and a `review` prop as the body of the review.

#### Section.js
This is how you color a section. Takes a `bg` as `backGround: props.bg` and a `color` as `color: props.color.` Optionally takes an `id` component.  
Wrap around children.  

#### GridWrap.js
Creates a 1 column 1 row grid and centers everything inside of it. Takes `height`, `width`, `align` for `alignItems: props.align` (defaults to center), `justify` for `justifyItems: props.justify` and `textAlign` for `textAlign: props.textAlign`. 
Wrap around children.  

#### Fullscreen.js
Takes no props. Use it to make a section Fullscreen. You still must pass `height` and `width` props to the `<GridWrap />` component to center elements within a `<Section />`.
Wrap around children. 

## Note: Order should be Section > Fullscreen > GridWrap. Fullscreen is optional. 

#### MusicPlayer.js
This is the thingy that makes music play when you click the speakers.  Takes no props. Can be extended to take a `source` prop or have multiple `tracks`.  
Fun fact: I wrote the song that plays. It sounds awful because I don't know how mastering works, still, after nearly 10 years of using Ableton but that's fine because Skrillex saved music on a single broken 10" Rokit KRK.

#### RadioUnit.js
A repeatable unit for the __Select Your Plan__ section of the __Payment__ page. Takes `color` and `value`.

#### RadioGroup.js
This component handles the logic for mutual exclusivity for the Payment Radio Group. Takes no props. As I'm writing the documentation at 7PM on Thursday January 7, I notice that I didn't include a method to manually DESELECT a radio option. Oops. 

## Note: Payment Radio Button Colors and Texts are defined inside RadioGroup.js!

# Closing Thoughts:

That was my shot. I have been writing HTML, CSS, Javascript, and PHP for a number of years, so I'm somewhat confident in the quality of code. Some React paradigms are still new to me, and I believe that some of the specific UI requests, many of which I haven't seen before, were specifically a challenge in translating HTML, CSS, and JS expertise into React.

Looking forward, if it turns out I don't pass the assessment due to the sheer number of incomplete UI elements, I at least have a clear roadmap on what to continue to work on and for that I am appreciative!