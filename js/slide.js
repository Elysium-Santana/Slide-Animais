export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
    console.log("clicou");
  }
  onMove(event) {
    console.log("moveu");
  }
  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    console.log("acabou");
  }
  bindEvent() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }
  init() {
    this.bindEvent();
    this.addSlideEvent();
    return this;
  }
}
