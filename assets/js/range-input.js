
// range input

function initializePriceRangeSlider(containerSelector) {
    const container = document.querySelector(containerSelector);
    const rangevalue = container.querySelector(".slider .price-slider");
    const rangeInputvalue = container.querySelectorAll(".range-input input");

    // Set the price gap
    let priceGap = 500;

    // Adding event listeners to price input elements
    const priceInputvalue = container.querySelectorAll(".price-input input");
    
    for (let i = 0; i < priceInputvalue.length; i++) {
        priceInputvalue[i].addEventListener("input", e => {
            let minp = parseInt(priceInputvalue[0].value);
            let maxp = parseInt(priceInputvalue[1].value);
            let diff = maxp - minp;

            if (minp < 0) {
                alert("حداقل قیمت نمی‌تواند کمتر از 0 باشد");
                priceInputvalue[0].value = 0;
                minp = 0;
            }

            if (maxp > 10000) {
                alert("حداکثر قیمت نمی‌تواند بیشتر از 10000 باشد");
                priceInputvalue[1].value = 10000;
                maxp = 10000;
            }

            if (minp > maxp - priceGap) {
                priceInputvalue[0].value = maxp - priceGap;
                minp = maxp - priceGap;

                if (minp < 0) {
                    priceInputvalue[0].value = 0;
                    minp = 0;
                }
            }

            if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
                if (e.target.classList.contains("min-input")) {
                    rangeInputvalue[0].value = minp;
                    let value1 = rangeInputvalue[0].max;
                    rangevalue.style.left = `${(minp / value1) * 100}%`;
                } else {
                    rangeInputvalue[1].value = maxp;
                    let value2 = rangeInputvalue[1].max;
                    rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
                }
            }
        });
    }

    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);
            let diff = maxVal - minVal;
            
            if (diff < priceGap) {
                if (e.target.classList.contains("min-range")) {
                    rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            } else {
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}

// Initialize both sliders when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePriceRangeSlider("#slider1");
    initializePriceRangeSlider("#slider2");
});
