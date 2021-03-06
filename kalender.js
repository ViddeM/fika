const today = new Date();

const fika = document.fika;
const $fika = document.getElementById("fika-node");

Object.keys(fika).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(today.getFullYear(), month)).toLocaleDateString('sv-SE', { month: "long" })
    $fika.appendChild($monthHeader);

    const $month = document.createElement("ul");
    const $dates = Object.keys(fika[month]).forEach((date) => {
        const fikaDate = fika[month][date];
        const $date = document.createElement("li");
        $date.innerText = `${date}: ${fikaDate.coffee} (${fikaDate.name})`;
        $month.appendChild($date);
    })

    $fika.appendChild($month)

});


// $fika.innerHTML =
