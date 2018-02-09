- [01 - Drum Kit](#01---drum-kit)
- [02 - Clock](#02---clock)
- [03 - CSS Variables](#03---css-variables)
- [04 - Array Manipulation 1](#04---array-manipulation-1)
- [05 - Flex Panel Gallery](#05---flex-panel-gallery)
- [06 - TypeAhead](#06---typeahead)
- [07 - Array Manipulation 2](#07---array-manipulation-2)
- [08 - HTML Canvas](#08---html-canvas)
- [9 - Dev Tools](#9---dev-tools)

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

AJAX fetch promise to a JSON list of cities with a search typeahead

`const cities = fetch(endpoint).then(blob => blob.json()).then(data => console.log(data))` `const searchInput = document.querySelector('.search'); function findMatches(wordToMatch, cities) {return cities.filter(place => { const regex = new REgExp(wordtoMatch, 'gi'); return place.city.match(regex) || place.state.match(regex)})}; function displayMatches() { const matchArray = findMatches(this.value, cities)} searchInput.addEventListener('keyup', displayMatches)`

# 07 - Array Manipulation 2

`Array.prototype.some()` `Array.prototype.every()` `Array.prototype.find()` `Array.prototype.findIndex()`

# 08 - HTML Canvas

Draw onscreen

`const canvas = document.querySelector('#draw')` `const ctx = canvas.getContext('2d')` `canvas.width = window.innerWidth` `canvas.height = window.innerHeight` `[lastX, lastY] = [e.offsetX, e.offsetY]` `canvas.addEventListener('mousemove', draw)` `canvas.addEventListener('mousedown', () => isDrawing = true)` `canvas.addEventListener('mousedown', () => isDrawing = false)` `canvas.addEventListener('mouseout', () => isDrawing = false)`

# 9 - Dev Tools

