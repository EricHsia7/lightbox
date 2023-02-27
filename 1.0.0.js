new VConsole()

function lightBox(Allelement) {
    if (Allelement.length === undefined) {
      Allelement = [Allelement]
    }
    for (var k = 0; k < Allelement.length; k++) {
      lightbox_e(Allelement[k])
    }
}
function lightbox_e(element) {
  element.addEventListener('click',function(event) {

  var idchars = "0123456789abcdefghijklmnopqrstuvwxyz";
      var image_id = "image-box-";
      for (var i = 0; i < 32; i++) {
        var idrandomNumber = Math.floor(Math.random() * idchars.length);
        image_id += idchars.substring(idrandomNumber, idrandomNumber + 1);
      }
var imageURL = element.getAttribute('src')
var scroll_x = document.documentElement.scrollLeft
      var scroll_y = document.documentElement.scrollTop
      var element_rect = element.getBoundingClientRect()
      var element_x = element_rect.x
      var element_y = element_rect.y
      var element_width = element.clientWidth
      var element_height = element.clientHeight
      var window_width = window.innerWidth
      var window_height = window.innerHeight
      var element_max = Math.max(element_width,element_height)
      var window_max = Math.max(window_height,window_width)
      var aim_width = 0
    var aim_height = 0
      if(element_max === element_width) {
        if(window_max=== window_height) {
          aim_width = window_width
    aim_height = element_height*aim_width/element_width
}
        else {
if(window_max=== window_width) {
          aim_height = window_height
    aim_width = element_width*aim_height/element_height
}
}
}
    else {
if(element_max === element_height) {
  if(window_max=== window_height) {
          aim_width = window_width
    aim_height = element_height*aim_width/element_width
}
        else {
if(window_max=== window_width) {
  aim_height = window_height
    aim_width = element_width*aim_height/element_height
}
}
}
    }
    if(aim_height > window_height) {
      if(aim_width>aim_height) {
      
aim_width = aim_width*(window_height/aim_height)
        aim_height = window_height
      }
else {

aim_width = aim_width*(window_height/aim_height)
  aim_height = window_height
}
}
    
    else {
    if(aim_width > window_width) {
      if(aim_width>aim_height) {
aim_height = aim_height*(window_width/aim_width)
aim_width = window_width
}
else {
aim_height = aim_height*(window_width/aim_width)
aim_width = window_width
}

}
    
    }
    
      var aim_x = (window_width-aim_width)/2
      var aim_y = (window_height-aim_height)/2
      var transition_duration = 400
      var transition_timing_fn = 'cubic-bezier(0.8, 0, 0.2, 1)'
      var clone = document.createElement('div')
      clone.id = image_id
    clone.classList.add(image_id)
  clone.innerHTML = `<div class="${image_id}-img"><canvas></canvas></div><style>.${image_id}-hidden {opacity:0;} .${image_id} .${image_id}-img {position:absolute;top:${element_y}px;left:${element_x}px;width:${element_width}px;height:${element_height}px;margin:0px;padding:0px;border:none;transform-origin:top left;} .${image_id} .${image_id}-img-source {position:absolute;top:${aim_y}px;left:${aim_x}px;width:${aim_width}px;height:${aim_height}px;margin:0px;padding:0px;border:none;transform-origin:top left;background:var(--image-box-url);background-size:${aim_width}px ${aim_height}px;background-position:center center;background-repeat:no-repeat;}.${image_id} {position:fixed;top:0px;left:0px;width:${window_width}px;height:${window_height}px;background:rgba(0,0,0,0);user-select:none;--webkit-user-select:none;} .${image_id}-animation-zoom-open {animation-name:animation-zoom-${image_id};animation-fill-mode:forwards;animation-duration:${transition_duration}ms;animation-timing-function:cubic-${transition_timing_fn};} .${image_id}-animation-bg-open {animation-name:animation-bg-${image_id};animation-fill-mode:forwards;animation-duration:${transition_duration}ms;animation-timing-function:${transition_timing_fn};} .${image_id}-animation-zoom-close {animation-name:animation-zoom-${image_id};animation-fill-mode:forwards;animation-duration:${transition_duration}ms;animation-timing-function:${transition_timing_fn};animation-direction: reverse;}.${image_id}-animation-bg-close {animation-name:animation-bg-${image_id};animation-fill-mode:forwards;animation-duration:${transition_duration}ms;animation-timing-function:${transition_timing_fn};animation-direction: reverse;} .${image_id}-zoom-open {transform:translateX(${aim_x-element_x}px) translateY(${aim_y-element_y}px) scaleX(${aim_width/element_width}) scaleY(${aim_height/element_height})}.${image_id}-bg-open {background:rgba(0,0,0,1)}@keyframes animation-zoom-${image_id} {0%{transform:translateX(0px) translateY(0px) scaleX(1) scaleY(1)}100%{transform:translateX(${aim_x-element_x}px) translateY(${aim_y-element_y}px) scaleX(${aim_width/element_width}) scaleY(${aim_height/element_height})}} @keyframes animation-bg-${image_id} {0%{background:rgba(0,0,0,0)}100%{background:rgba(0,0,0,1)}}</style>`
document.body.appendChild(clone)
    var c = document.querySelector(`#${image_id} .${image_id}-img canvas`);
    c.width = element_width
    c.height = element_height
  var ctx = c.getContext("2d");
  ctx.drawImage(element, 0, 0,element_width,element_height);
document.querySelector(`#${image_id}`).classList.add(`${image_id}-animation-bg-open`)
      document.querySelector(`#${image_id} .${image_id}-img`).classList.add(`${image_id}-animation-zoom-open`)
      element.classList.add(`${image_id}-hidden`)
      document.querySelector(`#${image_id}`).addEventListener('animationend',function(event2){
        
document.querySelector(`#${image_id}`).classList.add(`${image_id}-bg-open`)
      document.querySelector(`#${image_id} .${image_id}-img`).classList.add(`${image_id}-zoom-open`)
        document.querySelector(`#${image_id}`).classList.remove(`${image_id}-animation-bg-open`)
      document.querySelector(`#${image_id} .${image_id}-img`).classList.remove(`${image_id}-animation-zoom-open`)
        var source_img = document.createElement('div')
        source_img.classList.add(`${image_id}-img-source`)
      source_img.style.setProperty('--image-box-url','url(' + imageURL + ')')
        
        document.querySelector(`#${image_id}`).appendChild(source_img)
        
    
        document.querySelector(`#${image_id}`).addEventListener('click',function(event3){
      
      document.querySelector(`#${image_id} .${image_id}-img-source`).remove()
      
      
document.querySelector(`#${image_id}`).classList.add(`${image_id}-animation-bg-close`)
      document.querySelector(`#${image_id} .${image_id}-img`).classList.add(`${image_id}-animation-zoom-close`)
      
      document.querySelector(`#${image_id}`).classList.remove(`${image_id}-bg-open`)
      document.querySelector(`#${image_id} .${image_id}-img`).classList.remove(`${image_id}-zoom-open`)
      document.querySelector(`#${image_id}`).addEventListener('animationend',function(event4){
     document.querySelector(`#${image_id}`).remove()   
        element.classList.remove(`${image_id}-hidden`)
      },{once:true})
      
      
},{once:true})
        
        
},{once:true})
    
    
})
}


