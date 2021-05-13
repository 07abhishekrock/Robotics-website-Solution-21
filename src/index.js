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

class ScrollTimeline{
    constructor(){
       this.scrollTimeline =  gsap.timeline({
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
        
        
    }
    init = (tl_params)=>{
        this.scrollTimeline.progress(0);
        this.scrollTimeline.clear();
        this.scrollTimeline.to(...tl_params);
    }
     
}

let new_scroll_timeline = new ScrollTimeline();
let resize_observer = new ResizeObserver(()=>{
    if(new_scroll_timeline){
        new_scroll_timeline.init(['.f1-car',{
            motionPath:{
                path:'#path',
                align:'#path',
                alignOrigin:[0.5,0.5],
                autoRotate:true
            },
            ease:"power1.inOut"
        }]);
    }
});
// tl.to(".f1-car", {
//     motionPath: {
//         path: "#path",
//         align: "#path",
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true
//     },
//     duration: 5,
//     ease: "power1.inOut",
// });
resize_observer.observe(document.querySelector('body'));


setUpNav();