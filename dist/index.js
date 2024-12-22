"use strict";
let loadedAnswers = [];
window.onload = function loadQuestions() {
    const link = document.getElementById("link");
    link.disabled = true;
    let Questions = [
        {
            questionType: QuestionType.Science,
            question: "Jaká je chemická značka pro vodu?",
            answer0: "H2O",
            answer1: "O2",
            answer2: "CO2",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaké je hlavní město Francie?",
            answer0: "Berlín",
            answer1: "Madrid",
            answer2: "Paříž",
            correctAnswer: 2
        },
        {
            questionType: QuestionType.History,
            question: "Kdo byl prvním prezidentem Spojených států?",
            answer0: "Abraham Lincoln",
            answer1: "George Washington",
            answer2: "Thomas Jefferson",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Sport,
            question: "Kolik hráčů má fotbalový tým?",
            answer0: "11",
            answer1: "10",
            answer2: "12",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Kdo namaloval Monu Lisu?",
            answer0: "Vincent van Gogh",
            answer1: "Leonardo da Vinci",
            answer2: "Pablo Picasso",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Mixed,
            question: "Která planeta je nejmenší ve sluneční soustavě?",
            answer0: "Merkur",
            answer1: "Mars",
            answer2: "Venuše",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Science,
            question: "Jaký je největší orgán lidského těla?",
            answer0: "Játra",
            answer1: "Kůže",
            answer2: "Srdce",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Která řeka je nejdelší na světě?",
            answer0: "Amazonka",
            answer1: "Nil",
            answer2: "Yangtze",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.History,
            question: "Ve kterém roce začala druhá světová válka?",
            answer0: "1935",
            answer1: "1939",
            answer2: "1941",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Sport,
            question: "Kolik hráčů je na hřišti během hry ve volejbalu?",
            answer0: "6",
            answer1: "5",
            answer2: "7",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Který hudební nástroj je známý jako \"král nástrojů\"?",
            answer0: "Housle",
            answer1: "Varhany",
            answer2: "Piano",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Mixed,
            question: "Který prvek má chemickou značku Au?",
            answer0: "Stříbro",
            answer1: "Zlato",
            answer2: "Měď",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Science,
            question: "Kolik planet je v naší sluneční soustavě?",
            answer0: "7",
            answer1: "8",
            answer2: "9",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaké je největší jezero na světě?",
            answer0: "Kaspické moře",
            answer1: "Horní jezero",
            answer2: "Victoriino jezero",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.History,
            question: "Kdo napsal \"Komunistický manifest\"?",
            answer0: "Karl Marx",
            answer1: "Vladimir Lenin",
            answer2: "Friedrich Engels",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Sport,
            question: "Ve kterém sportu se uděluje trofej Stanley Cup?",
            answer0: "Basketbal",
            answer1: "Hokej",
            answer2: "Fotbal",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Culture,
            question: "Jak se jmenuje nejznámější opera Giuseppe Verdiho?",
            answer0: "La Traviata",
            answer1: "Tosca",
            answer2: "Carmen",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Mixed,
            question: "Kolik kostí má dospělý člověk?",
            answer0: "206",
            answer1: "210",
            answer2: "198",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaké je nejvyšší pohoří na světě?",
            answer0: "Alpy",
            answer1: "Himálaj",
            answer2: "Andes",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.History,
            question: "Kdy byl postaven Karlův most?",
            answer0: "1357",
            answer1: "1400",
            answer2: "1450",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Kdo napsal \"Romeo a Julie\"?",
            answer0: "William Shakespeare",
            answer1: "Charles Dickens",
            answer2: "George Orwell",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Sport,
            question: "Jaké je nejrychlejší plavecké styl?",
            answer0: "Prsa",
            answer1: "Kraul",
            answer2: "Motýlek",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaké je hlavní město Itálie?",
            answer0: "Řím",
            answer1: "Benátky",
            answer2: "Milán",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Science,
            question: "Jak se jmenuje proces, při kterém rostliny přeměňují sluneční energii na potravu?",
            answer0: "Fotosyntéza",
            answer1: "Respirace",
            answer2: "Fermentace",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.History,
            question: "Kdo objevil Ameriku?",
            answer0: "Kryštof Kolumbus",
            answer1: "Vasco da Gama",
            answer2: "James Cook",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Který český spisovatel napsal \"Babičku\"?",
            answer0: "Karel Čapek",
            answer1: "Božena Němcová",
            answer2: "Franz Kafka",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Mixed,
            question: "Jaká je druhá největší planeta naší sluneční soustavy?",
            answer0: "Jupiter",
            answer1: "Saturn",
            answer2: "Neptun",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Který stát je největší podle rozlohy?",
            answer0: "Kanada",
            answer1: "Rusko",
            answer2: "Čína",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Science,
            question: "Kolik měsíců má Jupiter?",
            answer0: "79",
            answer1: "12",
            answer2: "53",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Kdo složil operu \"Figarova svatba\"?",
            answer0: "Ludwig van Beethoven",
            answer1: "Wolfgang Amadeus Mozart",
            answer2: "Johann Sebastian Bach",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.History,
            question: "Ve kterém roce byl vyhlášen vznik Československa?",
            answer0: "1918",
            answer1: "1938",
            answer2: "1945",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Sport,
            question: "Kolik zlatých medailí získal Michael Phelps na olympiádě v Pekingu 2008?",
            answer0: "6",
            answer1: "8",
            answer2: "10",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Science,
            question: "Který plyn je hlavní složkou zemské atmosféry?",
            answer0: "Kyslík",
            answer1: "Dusík",
            answer2: "Oxid uhličitý",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaké je největší město na světě podle počtu obyvatel?",
            answer0: "Tokio",
            answer1: "New York",
            answer2: "Šanghaj",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.History,
            question: "Kdo byl prvním českým prezidentem?",
            answer0: "Tomáš Garrigue Masaryk",
            answer1: "Edvard Beneš",
            answer2: "Václav Havel",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Culture,
            question: "Které české divadlo je známé černým divadlem?",
            answer0: "Národní divadlo",
            answer1: "Laterna magika",
            answer2: "Černé divadlo Jiřího Srnce",
            correctAnswer: 2
        },
        {
            questionType: QuestionType.Mixed,
            question: "Jaká je chemická značka pro kuchyňskou sůl?",
            answer0: "NaCl",
            answer1: "KCl",
            answer2: "CaCl2",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Science,
            question: "Kolik párů chromozomů má člověk?",
            answer0: "46",
            answer1: "23",
            answer2: "22",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Jaký oceán je největší?",
            answer0: "Atlantský oceán",
            answer1: "Indický oceán",
            answer2: "Tichý oceán",
            correctAnswer: 2
        },
        {
            questionType: QuestionType.History,
            question: "Kdo byl posledním císařem Rakouska-Uherska?",
            answer0: "František Josef I.",
            answer1: "Karel I.",
            answer2: "Rudolf II.",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Culture,
            question: "Který film získal Oscara za nejlepší film v roce 1994?",
            answer0: "Forrest Gump",
            answer1: "Pulp Fiction",
            answer2: "Schindlerův seznam",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Sport,
            question: "Kdo vyhrál mistrovství světa ve fotbale 2018?",
            answer0: "Chorvatsko",
            answer1: "Francie",
            answer2: "Německo",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Geography,
            question: "Která poušť je největší na světě?",
            answer0: "Sahara",
            answer1: "Arabská poušť",
            answer2: "Gobi",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.Science,
            question: "Který vědec formuloval teorii relativity?",
            answer0: "Isaac Newton",
            answer1: "Albert Einstein",
            answer2: "Nikola Tesla",
            correctAnswer: 1
        },
        {
            questionType: QuestionType.Culture,
            question: "Jak se jmenuje hlavní hrdina románu \"1984\" od George Orwella?",
            answer0: "Winston Smith",
            answer1: "John Doe",
            answer2: "Sam Lowry",
            correctAnswer: 0
        },
        {
            questionType: QuestionType.History,
            question: "Kdy proběhla bitva u Lipan?",
            answer0: "1434",
            answer1: "1415",
            answer2: "1420",
            correctAnswer: 0
        }
    ];
    const toLoad = document.getElementsByClassName("question");
    for (let i = 0; i < toLoad.length; i++) {
        const element = toLoad[i];
        const rand = Math.floor(Math.random() * Questions.length);
        const question = Questions[rand];
        Questions.splice(rand, 1);
        loadedAnswers.push(question.correctAnswer);
        element.style.borderColor = GetQuestionType(question.questionType);
        const questiondesc = element.children[0];
        questiondesc.style.backgroundColor = GetQuestionType(question.questionType);
        questiondesc.textContent = question.question;
        const options = element.children[1].children;
        options[0].insertAdjacentText('beforeend', question.answer0);
        options[2].insertAdjacentText('beforeend', question.answer1);
        options[4].insertAdjacentText('beforeend', question.answer2);
    }
};
function GetQuestionType(num) {
    switch (num) {
        case 0:
            return "crimson";
        case 1:
            return "orange";
        case 2:
            return "forestgreen";
        case 3:
            return "gold";
        case 4:
            return "deepskyblue";
        case 5:
            return "navy";
    }
    return "";
}
var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Mixed"] = 0] = "Mixed";
    QuestionType[QuestionType["History"] = 1] = "History";
    QuestionType[QuestionType["Geography"] = 2] = "Geography";
    QuestionType[QuestionType["Culture"] = 3] = "Culture";
    QuestionType[QuestionType["Science"] = 4] = "Science";
    QuestionType[QuestionType["Sport"] = 5] = "Sport";
})(QuestionType || (QuestionType = {}));
function submitAnswers() {
    const link = document.getElementById("link");
    const button = document.getElementById("submit");
    if (button.textContent == "Potvrdit") {
        const submitedAnswers = document.querySelectorAll(".options input[type='radio']:checked");
        const inputs = document.querySelectorAll("input[type='radio']");
        const result = document.getElementById("result");
        if (submitedAnswers.length < loadedAnswers.length) {
            result.textContent = "Prosím odpověz na všechny otázky";
            return;
        }
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            element.disabled = true;
        }
        let score = 0;
        for (let i = 0; i < loadedAnswers.length; i++) {
            if (submitedAnswers[i].value == loadedAnswers[i].toString()) {
                score++;
            }
            else {
                result.textContent = `Otázka číslo ${i} špatně. Zkus to znovu`;
                button.textContent = "Zkusit znovu";
                break;
            }
        }
        if (score == loadedAnswers.length) {
            result.textContent = `Správně!`;
            link.disabled = false;
            button.textContent = "Pokračovat";
        }
    }
    else {
        location.reload();
    }
}
