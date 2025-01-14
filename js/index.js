function result() {
    const answers = {};

    for (let i = 1; i <= 5; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            answers[`q${i}`] = selected.value;
        } else {
            answers[`q${i}`] = '-';
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Ваши ответы:</h2>`;
    for (let i = 1; i <= 5; i++) {
        resultDiv.innerHTML += `<p>${i}. ${answers[`q${i}`]}</p>`;
    }

    // количество првильных ответов в очках, за каждый по одному очку
    let sum_point = 0;

    // правльные отеты
    if (`${answers[`q${1}`]}` === "Джордж Вашингтон") {
        sum_point++;
    }
    if (`${answers[`q${2}`]}` === "Война с Мексикой") {
        sum_point++;
    }
    if (`${answers[`q${3}`]}` === "Луизианская сделка") {
        sum_point++;
    }
    if (`${answers[`q${4}`]}` === "Инцидент на Кинг-стрит") {
        sum_point++;
    }
    if (`${answers[`q${5}`]}` === "Биржевой крах") {
        sum_point++;
    }
    // вывожу в resultDiv количество правльных ответов
    resultDiv.innerHTML += `<p class="answer-count">Правльных ответов - ${sum_point} из 5</p>`;

    console.log(sum_point);
}

let check = 0;

function changeTheme() {
    const content = document.getElementById('content');
    const body = document.body;
    const title = document.getElementById('title');
    const result = document.getElementById('result');
    if (check % 2 !== 0) {
        body.style.backgroundColor = 'black';
        content.style.backgroundColor = 'black';
        body.style.color = 'white';
        result.style.backgroundColor = 'white';
        result.style.color = 'black';
        content.style.borderColor = 'white';
        Array.from(content.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
    } else {
        body.style.backgroundColor = 'white';
        content.style.backgroundColor = 'white';
        body.style.color = 'black';
        Array.from(content.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
        content.style.borderColor = 'black';
    }
    check++;
}
