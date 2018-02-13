/* Get our elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullScreen = player.querySelector('.fullscreen')

/* build our functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}
function updateButton() {
  // console.log('update play/pause button')
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  // console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate() {
  // console.log(this.name)
  // console.log(this.value)
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}
function scrub(e) {
  // console.log(e)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

let videoFullScreen = false
function enterFullScreen(){
  if (player.requestFullscreen) player.requestFullscreen()
  else if (player.mozRequestFullScreen) player.mozRequestFullScreen()
  else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen()
  videoFullScreen = true
}
function exitFullScreen() {
  if (document.exitFullscreen) document.exitFullscreen()
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
  videoFullScreen = false  
}
function toggleFullScreen(){
  // console.log('FS Clicked')
  // videoFullScreen ? exitFullScreen() : enterFullScreen()
}
/* hook up event listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

fullScreen.addEventListener('click', toggleFullScreen)
