const rus = {
    "header": ["Физическим лицам", "Предприятиям", "Инвестиции", "Блог", "О компании"],
    "title": "Финакадемия",
    "description": "Консалтинговая компания, специализирующаяся на предоставлении организациям и частным лицам финансовых услуг в качестве агрегатора.",
    "short_description": "Генератор оптимальных финансовых решений",
    "team": "Наша команда",
    "about_area": {
        "mission": {
            "title": "Наша миссия",
            "description": "Обеспечить простой и удобный доступ всем желающим к любому финансовому продукту на любом рынке"
        },
        "principles": {
            "title": "Наши принципы",
            "description": "<ul><li>Открытость</li><li>Отвественность</li><li>Индивидуальный подход</li></ul>"
        },
        "values": {
            "title": "Наши ценности",
            "description": "Важнейшая ценность для нас - это наши клиенты. Их интересы, потребности, их развитие и рост — залог нашего успеха"
        },
        "team": {
            "title": "Наша команда",
            "description": "В команде ООО \"ФИНАКАДЕМИЯ\" собрались как профессионалы с многолетним опытом работы на банковском и финансовом рынке, так и молодые перспективные специалисты",
            "button": "Познакомиться с нами"
        }
    },
    "partners": [{
        "name": "Freedom Finance",
        "description": "Депозиты, кредитование <br> Инвестирование, валютные операции"
    }, { "name": "Альфа-банк", "description": "Кредитование бизнеса под льготный процент" }, {
        "name": "Севергазбанк",
        "description": "Банковские гарантии"
    }],
    "products": [{
        "title": "Участие в IPO",
        "description": "Без статуса квалифицированного инвестора"
    }, { "title": "Кредит для бизнеса 6% годовых", "description": "от 50 млн. рублей сроком до 15 лет" }],
    "news": [{
        "title": "Facebook и Instagram вложат более $1 млрд в создателей контента",
        "description": "Первая программа будет поощрять авторов контента в сервисе коротких видео Reels в Instagram.",
        "from_partner": true
    }, {
        "title": "Karma - краудлендинговая платформа",
        "description": "Платформа, на которой можно приунможить свой капитал и привлечь инвестиции",
        "from_partner": false
    }, {
        "title": "Пресс релиз \"Регионы - устойчивое развитие \" ",
        "description": "Всероссийский конкурс по программе господдержки",
        "from_partner": false
    }],
    "footer": [{ "social_media": ["instagram", "facebook"] }, { "phone": "+74951282028" }, { "email": "info@finakademiya.ru" }, { "company": "Финакадемия ООО" }]
};

const eng = {
    "header": ["Private", "Business", "Investments", "Blog", "About"],
    "title": "Finakademiya",
    "description": "Consulting company specializing in providing organizations and individuals with financial services as an aggregator.",
    "short_description": "Optimal Financial Solutions Generator",
    "team": "Our team",
    "about_area": {
        "mission": {
            "title": "Our mission",
            "description": "Provide easy and convenient access for everyone to any financial product in any market"
        },
        "principles": {
            "title": "Our princeples",
            "description": "<ul><li>Openness</li><li>Responsibility</li><li>Individual approach</li></ul>"
        },
        "values": {
            "title": "Our values",
            "description": "Most important value for us is our customers. Their interests, their needs, their development and growth are the key to our success"
        },
        "team": {
            "title": "Our team",
            "description": "The FINAKADEMIA LLC team includes professionals with many years of experience in the banking and financial market, as well as young promising specialists.",
            "button": "Meet us"
        }
    },
    "partners": [{
        "name": "Freedom Finance",
        "description": "Deposits, crediting <br> Investing, currency operations"
    }, {
        "name": "Alfa Bank",
        "description": "Lending to businesses at preferential interest rates"
    }, { "name": "Severgazbank", "description": "Bank guarantees" }],
    "products": [{
        "title": "IPO participation",
        "description": "Without qualified investor status"
    }, { "title": "Loan for business 6% per annum", "description": "from 50 million rubles for up to 15 years" }],
    "news": [{
        "title": "Facebook and Instagram will invest more than $1 billion in content creators",
        "description": "The first program will reward content creators on Instagram's short video service Reels",
        "from_partner": true
    }, {
        "title": "Karma - crowdsourcing platform",
        "description": "A platform on which you can raise capital and investment",
        "from_partner": false
    }, {
        "title": "Press release \"Regiony - Ustoychivoe Razvitie\" ",
        "description": "All-Russian competition on the program of state support",
        "from_partner": false
    }],
    "footer": [{ "social_media": ["instagram", "facebook"] }, { "phone": "+74951282028" }, { "email": "info@finakademiya.ru" }, { "company": "Finakademiya LLC" }]
}


let currentLanguage = rus;

function setLang() {

    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName('header__a')[i].innerHTML = currentLanguage.header[i];
    }

    document.querySelector('.header__h1').innerHTML = currentLanguage.title;
    document.querySelector('.about__p--main-text').innerHTML = currentLanguage.description;
    document.querySelector('.about__p--text').innerHTML = currentLanguage.short_description;
    document.querySelector('.team--h2').innerHTML = currentLanguage.team;
    document.getElementsByClassName('team__h3')[0].innerHTML = currentLanguage.about_area.mission.title;
    document.getElementsByClassName('team__p')[0].innerHTML = currentLanguage.about_area.mission.description;
    document.getElementsByClassName('team__h3')[1].innerHTML = currentLanguage.about_area.principles.title;
    document.getElementsByClassName('team__p')[1].innerHTML = currentLanguage.about_area.principles.description;
    document.getElementsByClassName('team__h3')[2].innerHTML = currentLanguage.about_area.values.title;
    document.getElementsByClassName('team__p')[2].innerHTML = currentLanguage.about_area.values.description;
    document.getElementsByClassName('team__h3')[3].innerHTML = currentLanguage.about_area.team.title;
    document.getElementsByClassName('team__p')[3].innerHTML = currentLanguage.about_area.team.description;
    document.querySelector('.team__button').innerHTML = currentLanguage.about_area.team.button;

    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('partners__name')[i].innerHTML = currentLanguage.partners[i].name;
        document.getElementsByClassName('partners__p')[i].innerHTML = currentLanguage.partners[i].description;
    }

    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName('products__h4')[i].innerHTML = currentLanguage.products[i].title;
        document.getElementsByClassName('products__p')[i].innerHTML = currentLanguage.products[i].description;
    }

    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('news__h4')[i].innerHTML = currentLanguage.news[i].title;
        document.getElementsByClassName('news__p')[i].innerHTML = currentLanguage.news[i].description;
    }

    document.querySelector('.footer--company').innerHTML = currentLanguage.footer[3].company;
    document.querySelector('.footer--tel').innerHTML = currentLanguage.footer[1].phone;
    document.querySelector('.footer--email').innerHTML = currentLanguage.footer[2].email;


    
}

setLang();

document.querySelector('#buttonLanguageEng').addEventListener('click', function () {
    currentLanguage = eng;
    setLang();
});

document.querySelector('#buttonLanguageRus').addEventListener('click', function () {
    currentLanguage = rus;
    setLang();
});




