const minVal = document.querySelector('.min-val');
const maxVal = document.querySelector('.max-val');
const priceInputMin = document.querySelector('.min-input');
const priceInputMax = document.querySelector('.max-input');
const minToolTip = document.querySelector('.min-tooltip');
const maxToolTip = document.querySelector('.max-tooltip');
const minGap = 0;
const track = document.querySelector('.slider-track');
const sliderMinVal = parseInt(minVal.min);
const sliderMaxVal = parseInt(maxVal.max);

minVal.addEventListener('input', slideMin);
maxVal.addEventListener('input', slideMax);
priceInputMin.addEventListener('change', setMinInput);
priceInputMax.addEventListener('change', setMaxInput);

function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);

  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }

  minToolTip.textContent = `$  ${minVal.value}`;
  priceInputMin.value = minVal.value;

  setArea();
}
function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);

  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value) - minGap;
  }

  maxToolTip.textContent = `$  ${maxVal.value}`;
  priceInputMax.value = maxVal.value;

  setArea();
}

function setArea() {
  track.style.left = (minVal.value / sliderMaxVal) * 100 + '%';
  minToolTip.style.left = (minVal.value / sliderMaxVal) * 100 + '%';
  track.style.right = 100 - (maxVal.value / sliderMaxVal) * 100 + '%';
  maxToolTip.style.right = 100 - (maxVal.value / sliderMaxVal) * 100 + '%';
}

function setMinInput() {
  let minPrice = parseInt(priceInputMin.value);
  if (minPrice < sliderMinVal) {
    priceInputMin.value = sliderMinVal;
  }
  minVal.value = priceInputMin.value;
  slideMin();
}
function setMaxInput() {
  let maxPrice = parseInt(priceInputMax.value);
  if (maxPrice > sliderMaxVal) {
    priceInputMax.value = sliderMaxVal;
  }
  maxVal.value = priceInputMax.value;
  slideMax();
}
slideMin();
slideMax();
