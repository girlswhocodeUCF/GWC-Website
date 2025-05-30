# GWC Website Documentation
---
## Quick tour of app
All [images](../images), [scripts](../scripts) (for the carousel feature on the student project page), and [styles](../styles) are organized in their respective folders.

## Important Links and Info
[Figma](https://www.figma.com/design/LstWuxLiqUQqx1IAH3m5CE/Girls-Who-Code-at-UCF?node-id=0-1&t=IIOgjmRrbZjQEFFn-0)
[GitHub Page](https://girlswhocodeucf.github.io/GWC-Website/index.html)

### About/Home Page
- carousel from Tagembed to display past events (edit at the link [here](https://app.tagembed.com/home)) [^1]
```
 <!--GROUP 2 - PAST EVENTS & EXECUTIVE BOARD-->

    <div class="events">
      <h1>Check Out Our Past Events!</h1>
      <div class="insta">
        <div class="tagembed-widget" data-widget-id="2165019" data-tags="false"  view-url="https://widget.tagembed.com/2165019"></div><script src="https://widget.tagembed.com/embed.min.js" type="text/javascript"></script>
      </div>
      
    </div>
```
###### (index.html - lines 82-90)

- make sure to update the executive board yearly and add the old executive board to the past exec page (exex_board.html)
### Events Page
- carousel from Behold to list upcoming events (edit at the link [here](https://app.behold.so/feeds)) [^1]
```
    <!--UPCOMING EVENTS-->
    <h1 class="section-title">Upcoming Events this Semester</h1>
    <div class="posts">
        <body>
          <behold-widget feed-id="Xjhq55oR1hbuanp9zSrn"></behold-widget>
          <script>
            if ('noModule' in HTMLScriptElement.prototype) {
              const d=document,s=d.createElement('script');s.type='module';
              s.src='https://w.behold.so/widget.js';d.body.appendChild(s);
            }
          </script>
        </body>
    </div>
```
###### (events.html - lines 30-42)
- calendar linked to Google calendar listing dates of events (edit at the link [here](https://app.styledcalendar.com/calendars/vkeEDLrSvixWMvuAlYxn/edit)) [^1]
```
     <iframe src="https://embed.styledcalendar.com/#vkeEDLrSvixWMvuAlYxn" title="Styled Calendar" class="styled-calendar-container" style="width: 100%; border: none;" data-cy="calendar-embed-iframe"></iframe>
<script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
```
###### (events.html - lines 44-45)
### Student Projects
- update the projects semesterly and use carousel to add more projects (current carousel function in carousel.js)
### Gallery
- carousel from Behold displaying all posts with specific tags (edit at the link [here](https://app.behold.so/feeds)) [^1]
    * must work with social media to make sure that there is a cohesive tag for all posts that will go here 

### FAQ/Contact Page
- question form that links to Google form (edit at the link [here](https://docs.google.com/forms/d/1d3OpxU544Jnh3Qlo6QiHSDOYPjERGDvFQ4bBD_LiHgY/edit)) [^1]

### Feel free to change the features to better suit the club in the future and make sure to update the document for future teams :)
## Future Ideas
We would love to port this project to React in the future.

[^1]: link must be accessed using the official GWC Google account (by someone on the board)
