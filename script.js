const container = document.getElementById("array-container");
let array = [];

function generateArray(size = 50) {
    container.innerHTML = "";
    array = [];
    for (let i = 0; i < size; i++) {
        let val = Math.floor(Math.random() * 90) + 10;
        array.push(val);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${val}%`;
        bar.style.width = `${100 / size}%`;
        container.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add("comparing");
            bars[j + 1].classList.add("comparing");

            await new Promise(resolve => setTimeout(resolve, 50));

            if (array[j] > array[j + 1]) {
                // Swap values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Sync UI
                bars[j].style.height = `${array[j]}%`;
                bars[j + 1].style.height = `${array[j + 1]}%`;
                
                bars[j].classList.add("swapping");
                bars[j + 1].classList.add("swapping");
            }

            bars[j].classList.remove("comparing", "swapping");
            bars[j + 1].classList.remove("comparing", "swapping");
        }
        bars[array.length - i - 1].classList.add("sorted");
    }
    bars[0].classList.add("sorted");
}

// Initial
generateArray();
