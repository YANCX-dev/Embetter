let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;


const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const item = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('#slider-previous');
const btnNext = document.querySelector('#slider-next');
const itemsCount = item.length;


const itemWidth = container.offsetWidth / slidesToShow -10;

const movePosition = (slidesToScroll * itemWidth) + slidesToShow * 10;
console.log(movePosition);
item.forEach((item, index) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    position -= movePosition;
    setPostion();
    checkButtons();
});
btnPrev.addEventListener('click', () => {
    position+= movePosition;
    setPostion();
    checkButtons();
});

const setPostion = () =>{
    track.style.transform = `translateX(${position}px)`
}
const checkButtons = () =>{
    console.log(position);
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkButtons();