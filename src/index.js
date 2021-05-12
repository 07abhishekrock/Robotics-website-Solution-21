console.log('hello world');

const setUpNav = ()=>{
    let nav_element = document.querySelector('nav');
    let burger = nav_element.children[2];
    burger.onclick = ()=>{
        let enabled_status = nav_element.getAttribute('enabled');
        if(enabled_status == 0){
            nav_element.setAttribute('enabled','1');
        }
        else{
            nav_element.setAttribute('enabled', '0');
        }
    }
}

//setup scrolltrigger and perform operation accordingly

function generateTimeline(){
    ScrollTrigger.matchMedia({
        "(min-width:900px)":function() {
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger:"section.timeline-page",
                    pin:true,
                    start:"300px top",
                    end:'+=400',
                    scrub:1,
                    onUpdate:({progress, direction})=>{
                        //change the days and time line here based on the value of the progress
                        if(progress===1){
                            return;
                        }
                    }
                }
            });
        
            tl.to(".f1-car", {
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true
                },
                duration: 5,
                ease: "power1.inOut",
            });
        }
    })
    

}


let resize_observer = new ResizeObserver(()=>{
    console.log("resize_detected");
    generateTimeline();
});
resize_observer.observe(document.querySelector('body'));


setUpNav();