import { SlideNav } from "./slide.js";
const slide = new SlideNav(".slide", ".wrapper");
slide.init();

slide.activePrevSlide();
slide.addArrow(".prev", ".next");
console.log(slide);
