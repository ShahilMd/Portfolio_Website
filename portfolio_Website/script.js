const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

document.querySelector('.allwork').addEventListener('click',function(){
  scroll.scrollTo('#projects');
})
document.querySelector('.navProject').addEventListener('click',function(){
  scroll.scrollTo('#projects');
})
document.querySelector('.navAbout').addEventListener('click',function(){
  scroll.scrollTo('.my-details');
})
document.querySelector('.navHire ').addEventListener('click',function(){
  window.location.href = 'mailto:shahil.connect@gmail.com';
})
document.querySelector('.lets-talk').addEventListener('click',function(){
  window.location.href = 'mailto:shahil.connect@gmail.com';
})
projectsAnimate = () => {
  projects = document.querySelectorAll('.project');
  projects.forEach(function(project){
    project.addEventListener('mouseover',function(){
      gsap.to(project.querySelector('img'),{
        scale: 1.1,
        duration: 0.5,
      })
      gsap.to(project.querySelector('p'),{
        opacity: .3,
        duration: 0.5,
        x:25,
        y:10,
      })
    })
    project.addEventListener('mouseout',function(){
      gsap.to(project.querySelector('img'),{
        scale: .8,
        duration: 0.5,
        
      })
      gsap.to(project.querySelector('p'),{
        opacity: 1,
        duration: 0.5,
        x:0,
        y:0,
      })
    })
  })
}
projectsAnimate();


function firstPageAnimate(){

  let t1 = gsap.timeline();
  t1.from('.nav', {
    y: '-40',
    opacity: 0,
    ease:Expo.easeInOut, 
    duration: 1.5,
  })
   .to(('.elemDown'),{
    x: '0',
    y: '0',
    delay: -0.5,
    ease:Expo.easeInOut, 
    duration: 1, 

  })
  .from('.elemUp', {
    x: '0',
    y: '200',
    duration: 1.5,
    delay: -1,
    ease:Expo.easeInOut, 
    duration: 1.5, 
  })

   .to('.elemRight', {
    x: '0',
    delay: -2,
    ease:Expo.easeInOut, 
    duration: 1, 
  })
  .from('.myDetails',{
    y: '-10',
    opacity: 0,
    delay: -1,
    ease:Expo.easeInOut, 
    duration: 1.5,

  })
  .from('.elemLeft',{
    x: '100',
    opacity: 0,
    ease:Expo.easeInOut, 
    duration: 1.5,
    delay: -1,

  })
  .from('.contact', {
    y: '-100',
    delay: -1,
    ease:Expo.easeInOut, 
    duration: 1.5,  
  })  
  ;}
firstPageAnimate()


function circleMouseScaler(){
    let xScale = 1;
    let yScale = 1;

    let xPre = 0;
    let yPre = 0;

    let timeOut;
    
    window.addEventListener('mousemove',function(e){
      clearTimeout(timeOut);

      xScale=gsap.utils.clamp(.7,1.2,e.clientX-xPre);
      yScale=gsap.utils.clamp(.7,1.2,e.clientY-yPre);

      xPre =e.clientX;
      yPre =e.clientY;
      circleMouseFollow(xScale,yScale);

      timeOut =setTimeout(function (){
        document.getElementById('minicircle').style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(1,1)`;
      },100); 
    });
}

function circleMouseFollow(xScale,yScale){
  window.addEventListener('mousemove',function(e){
    document.getElementById('minicircle').style.visibility='visible'; document.getElementById('minicircle').style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${xScale},${yScale})`;
})}

document.querySelectorAll('.project').forEach(function(project){
  let rotate=0;
  let difference = 0;

  project.addEventListener('mouseleave',function(e){
    gsap.to(project.querySelector('img'),{
      opacity:0,
      ease:Power3,
      duration:.5
    })
  })


  project.addEventListener('mousemove',function(e){
    let diff = e.clientY -Math.floor(project.getBoundingClientRect().center);
    console.log(diff);
    
    difference = e.clientX-rotate;
    rotate = e.clientX;

    gsap.to(project.querySelector('img'),{
      opacity:1,
      ease:Power3,
      top:diff+'px',
      left:e.clientX-230+'px',
      rotate:gsap.utils.clamp(-20,20,difference*.5),
    })
  })
});

document.getElementById('about').addEventListener('click',function(){
  scroll.scrollTo('#aboutme');
})
document.getElementById('allProjects').addEventListener('click',function(){
  scroll.scrollTo('#projects');
})


// EmailJS Configuration
const publicKey = "yrjBzZRqBNfva0aLJ";
const serviceId = 'service_0ddkq0w';
const templateId = 'template_28v2tww';

// Initialize EmailJS with your public key
emailjs.init(publicKey);

// Function to send email
function sendEmail(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
        .then(function(response) {
            // Success message
            alert('Thank you for your message! Message sent successfully!');
            
            // Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            // Error handling
            console.error('Email send failed:', error);
            alert('Failed to send message. Please try again.');
        });
}

// Add event listener to the form
document.querySelector('.contact-form').addEventListener('submit', sendEmail);





// Function to update date and time
function updateDateTime() {
  // Get the element where you want to display the date and time
  const dateElement = document.querySelector('.date');
  const timeElement = document.querySelector('.time');
  // Create a new Date object
  const now = new Date();
  
  // Options for formatting the date
  const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };
  
  // Options for formatting the time
  const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
  };
  
  // Format the date and time
  const formattedDate = now.toLocaleDateString(undefined, dateOptions);
  const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
  
  // Update the element with formatted date and time
  dateElement.textContent = `${formattedDate}`;
  timeElement.textContent = `${formattedTime}`;
}

// Update immediately when the page loads
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);


// svg animation

let string = document.querySelector('#string');
let svg = document.querySelector('.svg');
let finalpath = `M 10 100 Q 700 100 1400 100`;
svg.addEventListener('mousemove',function(e){
  let y = e.clientY-(e.clientY/1.8);
 
  gsap.to('svg path', {
    duration:.5,
    ease:Power3,
    attr: {
      d:`M 10 100 Q 700 ${y} 1400 100`
    }
  })

})

svg.addEventListener('mouseleave',function(e){
  gsap.to('svg path',{
    duration:.5,
    ease:"elastic.out(1,0.3)",
    attr:{
      d:finalpath
    }
  })
})


circleMouseScaler()
circleMouseFollow();