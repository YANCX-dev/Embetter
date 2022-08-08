let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;


const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const item = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.slider-previous');
const btnNext = document.querySelector('.slider-next');
const itemsCount = item.length;
console.log(btnPrev);

const itemWidth = container.offsetWidth / slidesToShow -10;

const movePosition = (slidesToScroll * itemWidth) + slidesToShow * 10;

item.forEach((item) => {
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
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkButtons();



let instructor_position = 0;
const instructor_slidesToShow = 4;
const instructor_slidesToScroll = 4;


const instructor_container = document.querySelector('.instructor-container');
const instructor_track = document.querySelector('.instructor-track');
const instructor_item = document.querySelectorAll('.instructor');
const instructor_btnPrev = document.querySelector('.instructor-prev');
const instructor_btnNext = document.querySelector('.instructor-next');
const instructor_itemsCount = item.length;


const instructor_itemWidth = (instructor_container.offsetWidth / instructor_slidesToShow);
const instructor_movePosition = (instructor_slidesToScroll * instructor_itemWidth) + instructor_slidesToScroll * 10;

console.log(instructor_itemWidth);
instructor_item.forEach((item) => {
    item.style.minWidth = `${instructor_itemWidth}px`;
});

instructor_btnNext.addEventListener('click', () => {
    instructor_position -= instructor_movePosition;
    instructor_setPosition()
    instructor_checkButtons();
});
instructor_btnPrev.addEventListener('click', () => {
    instructor_position+= instructor_movePosition;
    instructor_setPosition();
    instructor_checkButtons();
});

const instructor_setPosition = () =>{
    instructor_track.style.transform = `translateX(${instructor_position}px)`
}
const instructor_checkButtons = () =>{
    instructor_btnPrev.disabled = instructor_position === 0;
    instructor_btnNext.disabled = instructor_position <= -(instructor_itemsCount - instructor_slidesToShow) * instructor_itemWidth;
}

instructor_checkButtons();