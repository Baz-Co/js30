- [01 - Drum Kit](#01---drum-kit)
- [02 - Clock](#02---clock)
- [03 - CSS Variables](#03---css-variables)
- [04 - Array Manipulation 1](#04---array-manipulation-1)
- [05 - Flex Panel Gallery](#05---flex-panel-gallery)
- [06 - TypeAhead](#06---typeahead)
- [07 - Array Manipulation 2](#07---array-manipulation-2)
- [08 - HTML Canvas](#08---html-canvas)
- [09 - Dev Tools](#09---dev-tools)
- [10 - Select Multiple Check Boxes](#10---select-multiple-check-boxes)

# 01 - Drum Kit

Middle key row makes drum kit sounds and uses css transitions for a visual effect

`event` `keydown` `transform` `transition` `document.querySelector` `window.addEventListener` `input.addEventListener`

# 02 - Clock

Analog Clock displaying the current time

`Date Object` `cubic-bezier` `transform-origin` `converting to degrees`

# 03 - CSS Variables

padding and blur sliders for a picture with div background color picker

`css variables (update after compile (SASS doesn't do that)) --base:#BADA55` `background: var(--base);` `document.querySelectorAll` `input.addEventListener` `for the 'data-' tag on a html element: this.dataset` `document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)`

# 04 - Array Manipulation 1

Utilizing the Array Prototype Methods

`console.table` `array.filter` `array.map` `array.reduce` `array.sort` `scraping wikipedia (convert node list to array): [...document.querySelectorAll('.mw-category a')]`

# 05 - Flex Panel Gallery

Flex columns with text elements transitioning in from top and bottom when panel is open

`display: flex` `justify-content: center` `align-items: center` `flex-direction: column` `.panel > *:first-child { transform: translateY(-100%)}` `.panel.open-active > *:first-child { transform: translateY(0)}` `const panels = document.querySelectorAll('.panel')` `if(e.propertyName.includes('flex')) {this.classList.toggle('open-active')}` `panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))`

# 06 - TypeAhead

AJAX fetch promise to a JSON list of cities with a search type-ahead

`const cities = fetch(endpoint).then(blob => blob.json()).then(data => console.log(data))` `const searchInput = document.querySelector('.search'); function findMatches(wordToMatch, cities) {return cities.filter(place => { const regex = new REgExp(wordtoMatch, 'gi'); return place.city.match(regex) || place.state.match(regex)})}; function displayMatches() { const matchArray = findMatches(this.value, cities)} searchInput.addEventListener('keyup', displayMatches)`

# 07 - Array Manipulation 2

`Array.prototype.some()` `Array.prototype.every()` `Array.prototype.find()` `Array.prototype.findIndex()`

# 08 - HTML Canvas

Draw onscreen

`const canvas = document.querySelector('#draw')` `const ctx = canvas.getContext('2d')` `canvas.width = window.innerWidth` `canvas.height = window.innerHeight` `[lastX, lastY] = [e.offsetX, e.offsetY]` `canvas.addEventListener('mousemove', draw)` `canvas.addEventListener('mousedown', () => isDrawing = true)` `canvas.addEventListener('mousedown', () => isDrawing = false)` `canvas.addEventListener('mouseout', () => isDrawing = false)`

# 09 - Dev Tools

`[Right Click] > Inspect Element > [Right Click] > Break On... > Attribute Modification - Breakpoint for a change to a DOM element`
`console.log('%c see here mayne', 'font-size: 24px; background: red; text-shadow: 10px 10px 0 blue')`
console.groupCollapsed(`${dog.name}`)
console.log(`this is my ${dog.name}`)
console.log(`${dog.name} is ${dog.age} old`)
console.groupEnd(`${dog.name}`)
console.count('Baz')
console.count('Baz')
console.count('Baz')
console.count('Baz')
console.time('fetching')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.log(data)
    console.timeEnd('fetching')
  })
console.table(dogs)

# 10 - Select Multiple Check Boxes

Selecting multiple checkboxes in a list

`const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')`  `if(e.shiftKey && this.checked){`

#11 - Custom Video Player

adding controls to a HTML5 video player

`const player = document.querySelector('.player')` `const video = player.querySelector('.viewer')` `function togglePlay() { const method = video.paused ? 'play' : 'pause'; video[method](); }` `function updateButton() { const icon = this.paused ? '►' : '❚ ❚'; toggle.textContent = icon; }` `function handleProgress() { const percent = (video.currentTime / video.duration) * 100; progressBar.style.flexBasis = ${percent}% }` `let videoFullScreen = false; function enterFullScreen(){ if (player.requestFullscreen) player.requestFullscreen(); else if (player.mozRequestFullScreen) player.mozRequestFullScreen(); else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen(); videoFullScreen = true; }`

#12 - Key Sequence Detector

Detect a key-code on top of a website

`window.addEventListener('keyup', e => { pressed.push(e.key); pressed.splice(-secretCode.length -1, pressed.length - secretCode.length); pressed.join('').includes('bazco') ? console.log('Got it!') : ''; })`

#13 - Scroll CSS Listeners

Get images to slide in when a user scrolls; can use this for loading resources when a user is viewing a section of the page

`function debounce(func, wait = 20, immediate = true) {...}` `const sliderImages = document.querySelectorAll('.slide-in')` `function checkSlide(e) { sliderImages.forEach(sliderImage => { const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; const imageBottom = sliderImage.offsetTop + sliderImage.height; const isHalfShown = slideInAt > sliderImage.offsetTop; const isNotScrolledPast = window.scrollY < imageBottom; (isHalfShown && isNotScrolledPast) ? sliderImage.classList.add('active') : sliderImage.classList.remove('active')})}` `window.addEventListener('scroll', debounce(checkSlide))`

#14 - Reference vs Copy

Be  careful to copy and not reference a object or array when you want to make a change to it; need a deep copy for properties >1 depth on an object

`let name = 'baz'; let name2 = name; console.log(name, name2); name = 'shehbaz'; console.log(name, name2);` `const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']; const team = players; console.log(players, team); team[3] = 'Lux'; console.log(players, team); const team2 = players.slice(); const team3 = [].concat(players); const team4 = [...players]; const team5 = Array.from(players);` `const person = { name: 'Wes Bos', age: 80 }; const cap = person; cap.age = 81; const cap2 = Object.assign({}, person, { number: 99, age: 78 }); console.log(person); console.log(cap); console.log(cap2); const cap3 = {...person}; console.log(cap3);` `const baz = { name: 'shehbaz', age: 28, social: { linkedin: 'shehbaz-sherwani', github: 'baz-co' }}; console.log(baz); const sheh = {...baz}; console.log(sheh); const sheh2 = Object.assign({}, baz); console.log(sheh2); sheh.social.github = 'wes-bos'; console.log(baz); console.log(sheh); console.log(sheh2); const sheh3 = JSON.parse(JSON.stringify(baz));`

#15 - LocalStorage

Essentially a ToDo list that writes to local storage with prettier CSS icons

`let items = JSON.parse(localStorage.getItem('items'))||[]` `function addItem(e) { e.preventDefault(); const text = (this.querySelector('[name=item]')).value; const item = { text, done: false }; items.push(item); populateList(items, itemsList); localStorage.setItem('items', JSON.stringify(items)); this.reset();}` `function populateList(plates = [], platesList) { platesList.innerHTML = plates.map((plate, i) => '<li><input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} /><label for="item${i}"> ${plate.text}</label></li>' ).join('')}`

#16 - Mouse Move Shadow

Text shadows relative to where your cursor is in a div

`const walk = 100` `function shadow(e) { const { offsetWidth: width, offsetHeight: height } = hero; let { offsetX: x, offsetY: y} = e; if(this !== e.target) { x += e.target.offsetLeft; y = y + e.target.offsetTop }; const xWalk = Math.round((x / width * walk) - (walk / 2)); const yWalk = Math.round((y / height * walk) - (walk / 2)); text.style.textShadow = '${xWalk}px ${yWalk}px 0px rgba(255, 0, 255, .7)' };` `hero.addEventListener('mousemove', shadow)`

#17 - Sort Without Articles

Sort a list of bands ignoring vocabulary articles (ex. a, An, The)

`const bandsList = document.querySelector('#bands')` `function stripe(bandName) { return bandName.replace(/^(a |the |an )/i, '').trim() }` `bandsList.innerHTML = bands.sort((a, b) => stripe(a) > stripe(b) ? 1 : -1).map((band => '<li>${band}</li>')).join('')`

#18 - Adding Up Times with Reduce

Go through a list of video times and output the total run time

`const videos = document.querySelectorAll('li')` `const totalVideoTime = [...videos].reduce((total, video) => { const [mins, secs] = video.dataset.time.split(':').map(parseFloat); return total + (mins * 60) + secs; }, 0)` `console.log('totalVideoTime: ${Math.floor(totalVideoTime / 3600)}:${Math.floor((totalVideoTime % 3600) / 60)}:${Math.floor(totalVideoTime % 60)}')`

#19 - Webcam Fun

Connect to a client's web cam through the browser and display it in a canvas that lets you take a screenshot of live video

`const video = document.querySelector('.player');` `const canvas = document.querySelector('.photo');` `const ctx = canvas.getContext('2d');` `const strip = document.querySelector('.strip');` `const snap = document.querySelector('.snap');` `function getVideo() { navigator.mediaDevices.getUserMedia({ video: true, audio: false}).then(localMediaStream => { video.src = window.URL.createObjectURL(localMediaStream); video.play(); }).catch(err => { console.error('No Work Video', err) }) };` `function paintToCanvas() { const width = video.videoWidth; const height = video.videoHeight; canvas.width = width; canvas.height = height; return setInterval(() => { ctx.drawImage(video, 0, 0, width, height); let pixels = ctx.getImageData(0, 0, width, height); ctx.globalAlpha = .6; pixels = greenScreen(pixels); ctx.putImageData(pixels, 0, 0); }, 16) }` `function takePhoto() { snap.curentTime = 0; snap.play(); const data = canvas.toDataURL('image/jpeg'); const link = document.createElement('a'); link.herf = data; link.setAttribute('download', 'handsome'); link.innerHTML = `<img src=${data} alt="Handsome Dude"/>`; strip.insertBefore(link, strip.firstChild); }; getVideo(); video.addEventListener('canplay', paintToCanvas);`

#20 - Speech Detection

Use browser built in speech recognition

`window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;` `const recognition = new SpeechRecognition();` `recognition.interimResults = true;` `recognition.lang = 'en-US';` `let p = document.createElement('p');` `const words = document.querySelector('.words');` `words.appendChild(p);` 
`recognition.addEventListener('result', e => { const transcript = [...e.results].map(result => result[0]).map(result => result.transcript).join(''); p.textContent = transcript; if (transcript.includes('hey there')) { console.log('debounce this function ~~~~~~~~~') }; if(e.results[0].isFinal) { p = document.createElement('p'); words.appendChild(p); }});`  `recognition.addEventListener('end', recognition.start);` `recognition.start();`

#21 - Geolocation

Utilize geo location and speed coordinates

`navigator.geolocation.watchPosition((data) => { console.log(data); speed.textContent = Math.round(data.coords.speed); arrow.style.transform = 'rotate(${data.coords.heading}deg)' }, err => { console.error(err); alert('You need to allow location permissions'); });`

#22 - Follow Along Hyperlink

Highlighter Pill follows a link when a user hovers over it

`const triggers = document.querySelectorAll('a')` `const highlight = document.createElement('span')` `highlight.classList.add('highlight')` `document.body.append(highlight)` `function highlightLink() { const linkCoords = this.getBoundingClientRect(); const coords = { width: linkCoords.width, height: linkCoords.height, top: linkCoords.top + window.scrollY, left: linkCoords.left + window.scrollX }; highlight.style.width = '${coords.width}px'; highlight.style.height = '${coords.height}px'; highlight.style.transform = 'translate(${coords.left}px, ${coords.top}px)'; }` `triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))`

#23 - Speech Synthesis

Use default browser text to sound

`const msg = new SpeechSynthesisUtterance();` `let voices = [];` `const voicesDropdown = document.querySelector('[name="voice"]');` `const options = document.querySelectorAll('[type="range"], [name="text"]');` `const speakButton = document.querySelector('#speak');` `const stopButton = document.querySelector('#stop');` `msg.text = document.querySelector('[name="text"]').value` `function populateVoices() { voices = this.getVoices(); voicesDropdown.innerHTML = voices.filter(voice => voice.lang.includes('en')).map(voice => '<option value="${voice.name}">${voice.name} (${voice.lang})</option>').join('') }` `function setVoice() { msg.voice = voices.find(voice => voice.name === this.value); toggle() }` `function toggle(startOver = true) { speechSynthesis.cancel(); if(startOver) { speechSynthesis.speak(msg) } }` `function setOption() { msg[this.name] = this.value; toggle() }` `speechSynthesis.addEventListener('voiceschanged', populateVoices)` `voicesDropdown.addEventListener('change', setVoice)` `options.forEach(option => option.addEventListener('change', setOption))` `speakButton.addEventListener('click', toggle)` `stopButton.addEventListener('click', toggle.bind(null, false))` `stopButton.addEventListener('click', () => toggle(false))` 

#24 - Sticky Nav

Nav sticks to top of the screen when user scrolls past the heading

`const nav = document.querySelector('#main'); function fixNav() { if(window.scrollY >= nav.offsetTop) { document.body.style.paddingTop = nav.offsetHeight + 'px'; document.body.classList.add('fixed-nav'); } else { document.body.style.paddingTop = 0; document.body.classList.remove('fixed-nav'); } }` `window.addEventListener('scroll', fixNav)`

#25 - Event Capture, Propagation, Bubbling and Once

Events Captured Outside-In and are Propagated Inside-Out

`document.querySelector('button').addEventListener('click', () => console.log('clicked'), { capture: true, once: true })`

#26 - Stripe Follow Along Nav

Auto sizing hover divs

`const triggers = document.querySelectorAll('.cool > li')` `const background = document.querySelector('.dropdownBackground')` `const nav = document.querySelector('nav')` `function handleEnter() { this.classList.add('trigger-enter'); setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); background.classList.add('open'); const dropdown = this.querySelector('.dropdown'); const dropdownCoords = dropdown.getBoundingClientRect(); const navCoords = nav.getBoundingClientRect(); const coords = { height: dropdownCoords.height, width: dropdownCoords.width, top: dropdownCoords.top - navCoords.top, left: dropdownCoords.left }; background.style.setProperty('width', coords.width+'px'); background.style.setProperty('height', coords.height+'px'); background.style.setProperty('transform', 'translate(${coords.left}px, ${coords.top}px') }` `function handleLeave() { this.classList.remove('trigger-enter', 'trigger-enter-active'); background.classList.remove('open'); }` `triggers.forEach(trigger => { trigger.addEventListener('mouseenter', handleEnter); trigger.addEventListener('mouseleave', handleLeave); })`

#27 - Click and Drag

Calculate Horizontal Walk for Click and Scroll Events

`const slider = document.querySelector('.items'); let isDown = false; let startX; let scrollLeft;` `slider.addEventListener('mousedown', (e) => { isDown = true; slider.classList.add('active') startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; })` `slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active'); })` `slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active'); })` `slider.addEventListener('mousemove', (e) => { if(!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; const walk = (x - startX) * 2; slider.scrollLeft = scrollLeft - walk; })`

#28 - Video Speed Controller UI

Hover Bar that changes a video playback speed

`speed.addEventListener('mousemove', function (e) { const y = e.pageY - this.offsetTop; const percent = y / this.offsetHeight; const min = 0.4; const max = 4; const height = Math.round(percent * 100) + '%'; const playbackRate = percent * (max - min) + min; bar.style.height = height; bar.textContent = playbackRate.toFixed(1) + 'x'; video.playbackRate = playbackRate; console.log({ y, percent, min, max, height, playbackRate }); })`

#29 - Countdown Clock

Create a Timer with End Time Display and Quick Set Buttons

`let countdown; const timerDisplay = document.querySelector('.display__time-left'); const endTime = document.querySelector('.display__end-time'); const buttons = document.querySelectorAll('[data-time]');` `function timer(seconds) { clearInterval(countdown); const now = Date.now(); const then = now + seconds * 1000; displayTimeLeft(seconds); displayEndTime(then); countdown = setInterval(function () { const secondsLeft = Math.round((then - Date.now()) / 1000); if(secondsLeft <= 0) { clearInterval(countdown); return; }; displayTimeLeft(secondsLeft); }, 1000) }` `function displayTimeLeft(seconds) { const minutes = Math.floor(seconds / 60); const remainderSeconds = seconds % 60; const display = '${minutes}:${remainderSeconds<10 ? '0':''}${remainderSeconds}'; document.title = display; timerDisplay.textContent = display; }` `function displayEndTime(timestamp) { const end = new Date(timestamp); const hours = end.getHours(); const minutes = end.getMinutes(); endTime.textContent = 'Be Back At ${hours > 12 ? hours - 12 : hours}:${minutes<10?'0':''}${minutes}'; }` `function startTimer() { const seconds = parseInt(this.dataset.time); timer(seconds) }` `buttons.forEach(button => button.addEventListener('click', startTimer));document.customForm.addEventListener('submit', function(e) { e.preventDefault(); const mins = this.minutes.value; timer(mins * 60); this.reset(); })`

#30 - Whack a Mole

Make element appear and disappear from the screen while creating listener for element clicks

`const holes = document.querySelectorAll('.hole');` `const scoreBoard = document.querySelector('.score');` `const moles = document.querySelectorAll('.mole');` `let lastHole` `let timeUp = false` `let score = 0`  `function randTime(min, max) { return Math.round(Math.random() * (max - min) + min) }` `function randHole(holes) { const idx = Math.floor(Math.random() * holes.length); const hole = holes[idx]; if(hole === lastHole) { return randHole(holes) }; lastHole = hole; return hole; }` `function peep() { const time = randTime(200, 3000); const hole = randHole(holes); hole.classList.add('up'); setTimeout(() => { hole.classList.remove('up'); if(!timeUp) { peep() }}, time); };` `function startGame() { scoreBoard.textContent = 0; timeUp = false; peep(); score = 0; setTimeout(() => { timeUp = true }, 2000); };` `function bonk(e) { if (!e.isTrusted) return; score++; this.classList.remove('up'); scoreBoard.textContent = score; }` `moles.forEach(mole => mole.addEventListener('click', bonk))`

