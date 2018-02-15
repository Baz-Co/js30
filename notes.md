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

