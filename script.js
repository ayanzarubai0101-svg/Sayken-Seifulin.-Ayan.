const translations = {
    ru: {
        navHome: "Главная",
        navBio: "Биография",
        navFacts: "Факты",
        tag: "Поэт · Просветитель · Государственный деятель",
        intro: "Один из основоположников современной казахской литературы. Его слово и идеи стали частью культурной истории Казахстана.",
        more: "Изучить биографию ↓",
        bioTitle: "Биография",

        b1: "Детство и учёба",
        p1: "Родился 15 октября 1894 года. Учился в русско-казахской школе, Акмолинске и Омской учительской семинарии.",

        b2: "Первые публикации",
        p2: "В 1914 году вышел его первый сборник «Өткен күндер». Он участвовал в культурной жизни молодёжи.",

        b3: "Общественная деятельность",
        p3: "Создал молодёжную организацию «Жас қазақ», участвовал в выпуске газеты «Тіршілік».",

        b4: "Литература и государство",
        p4: "Возглавлял правительство Казахской АССР, писал стихи, прозу и пьесы.",

        b5: "Репрессии и память",
        p5: "В 1937 году был арестован, в 1938 году расстрелян. В 1957 году реабилитирован посмертно.",

        factsTitle: "Малоизвестные факты",

        f1t: "Имя из детства",
        f1: "При рождении его назвали Садуакасом, а «Сакен» было домашним прозвищем.",

        f2t: "Редактор и исследователь",
        f2: "Он собирал, редактировал и издавал наследие других казахских авторов.",

        f3t: "Работал для сцены",
        f3: "Его пьеса «Бақыт жолына» была поставлена в 1918 году.",

        f4t: "Высокая награда",
        f4: "В 1936 году получил орден Трудового Красного Знамени.",

        f5t: "Газета «Тіршілік»",
        f5: "Участвовал в создании и выпуске газеты «Тіршілік» в Акмолинске.",

        f6t: "Автобиографический след",
        f6: "Сложный жизненный путь описал в произведении «Тар жол, тайғақ кешу».",

        quote: "«Народ живёт в своих песнях, книгах и памяти поколений»",

        footer: "Историко-культурный проект · Сәкен Сейфуллин"
    },

    kz: {
        navHome: "Басты бет",
        navBio: "Өмірбаяны",
        navFacts: "Деректер",
        tag: "Ақын · Ағартушы · Қоғам қайраткері",
        intro: "Қазақтың қазіргі әдебиетінің негізін қалаушылардың бірі. Оның шығармалары Қазақстанның мәдени тарихында маңызды орын алады.",
        more: "Өмірбаянын оқу ↓",
        bioTitle: "Өмірбаяны",

        b1: "Балалық шағы және білім",
        p1: "1894 жылы 15 қазанда дүниеге келді. Нілдідегі орыс-қазақ мектебінде, Ақмолада және Омбы мұғалімдер семинариясында оқыды.",

        b2: "Алғашқы шығармалары",
        p2: "1914 жылы «Өткен күндер» атты алғашқы өлеңдер жинағы жарық көрді.",

        b3: "Қоғамдық қызмет",
        p3: "«Жас қазақ» ұйымын құрды, «Тіршілік» газетінің шығуына қатысты.",

        b4: "Әдебиет және мемлекет",
        p4: "Қазақ АКСР үкіметін басқарды, өлең, проза және пьесалар жазды.",

        b5: "Қуғын-сүргін және мұра",
        p5: "1937 жылы тұтқындалып, 1938 жылы атылды. 1957 жылы ақталды.",

        factsTitle: "Көп біле бермейтін деректер",

        f1t: "Балалық аты",
        f1: "Туған кезде Сәдуақас деп аталған. «Сәкен» — үй ішіндегі еркелетіп қойған аты.",

        f2t: "Редактор әрі зерттеуші",
        f2: "Басқа қазақ авторларының мұрасын жинап, өңдеп, жариялады.",

        f3t: "Драматург",
        f3: "Оның «Бақыт жолына» пьесасы 1918 жылы сахналанды.",

        f4t: "Жоғары марапат",
        f4: "1936 жылы Еңбек Қызыл Ту орденін алды.",

        f5t: "«Тіршілік» газеті",
        f5: "Ақмолада «Тіршілік» газетінің шығуына қатысты.",

        f6t: "Өмір жолы туралы шығарма",
        f6: "Өмір жолын «Тар жол, тайғақ кешу» шығармасында баяндады.",

        quote: "«Халықтың рухы әнінде, кітабында және ұрпақ жадында өмір сүреді»",

        footer: "Тарихи-мәдени оқу жобасы · Сәкен Сейфуллин"
    }
};

// LANGUAGE SWITCH

function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i]").forEach(element => {
        const key = element.dataset.i;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.getElementById("ru").classList.toggle(
        "active",
        language === "ru"
    );

    document.getElementById("kz").classList.toggle(
        "active",
        language === "kz"
    );
}

document.getElementById("ru").addEventListener("click", () => {
    setLanguage("ru");
});

document.getElementById("kz").addEventListener("click", () => {
    setLanguage("kz");
});

// BACKGROUND MUSIC

const audio = document.getElementById("audio");
const musicButton = document.getElementById("music");

musicButton.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();
            musicButton.classList.add("active");
            musicButton.textContent = "♫ Музыка ON";
        } catch (error) {
            alert("Добавь music.mp3 в папку сайта.");
        }
    } else {
        audio.pause();
        musicButton.classList.remove("active");
        musicButton.textContent = "♫ Музыка";
    }
});

// SCROLL TO TOP

document.getElementById("top").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ANIMATION WHEN SCROLLING

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .fact").forEach(element => {
    observer.observe(element);
});