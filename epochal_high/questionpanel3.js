//initialize top level variables
//global currentQuestionNumber variable.
var currentQuestion=0;
var highlights=[];
var vp;

 //Questions have 4 types:
 //textimg
 //imgimg
 //texttext
 //imgtext
 //the question type is defined by type[0] and the answer type by type[1]

 //source defines the location of the image



var myQuestions = [
    {
        type: ["text","vpfield"],
        question: "VP Nummer bitte eintragen",
        answers: {
            a:""
        },
        correctAnswer: "",
        highlights: []
    },
   {
       //1
       type: ["textsubtext","text"],
        subtext:"Versuchen Sie nun mit dem gelernten Wissen, die Fragen möglichst richtig zu beantworten",
           question: "Es folgen wieder Fragen zu Kunstwerken",
           answers: {
           
           },
           correctAnswer: "",
           highlights: []
   },
   {
    //30
    type: ["text","text"],
    question: "Welche der folgenden Materialien ist bei der Herstellung einer Radierung nicht geeignet,<br>um daraus die Druckplatte herzustellen?",
    answers: {
        a: "Messing",
        b: "Kupfer",
        c: "Zink",
        d: "Holz"
    },
    correctAnswer: "d",
    highlights: []
    },
    {
    //36
    type: ["text","text"],
    question: "Welches der folgenden Elemente kommt in einem Bild mit dynamischen Aufbau eher selten vor?",
    answers: {
        a: "Kreuzungen",
        b: "Diagonalen",
        c: "Horizontalen",
        d: "Kreise"
    },
    correctAnswer: "c",
    highlights: []
    },
    {
        //53
        type: ["imgtext","text"],
        question: "Welchem Stil gehört diese Skulptur an?",
        image:"qpImages/st05/merkur.jpg",
        answers: {
            a: "Impressionismus",
            b: "Expressionismus",
            c: "Manierismus",
            d: "Klassizismus"
        },
        correctAnswer: "c",
        highlights: []
    },
    {
        //57
        type: ["text","text"],
        question: "Welcher der folgenden Effekte wird mit der Sfumato-Technik nicht erzielt?",
        answers: {
            a: "kräftige Kontraste",
            b: "feine Hell-Dunkel-Durchgänge",
            c: "verschwimmende Konturen",
            d: "natürliche Abstufung der Farben"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //50
        type: ["text","image"],
        question: "In welchem Werk sieht man Schlaglicht?",
        answers: {
            a: "qpImages/pr15/029.jpg",
            b: "qpImages/pr15/057.jpg",
            c: "qpImages/pr15/Pre15-30.jpg",
            d: "qpImages/pr15/pre15-59.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //39
        type: ["text","image"],
        question: "Welches der folgenden Werke stellt Pieta dar?",
        answers: {
            a: "qpImages/bi05/27_j-g-wille-ab2-0038.jpg",
            b: "qpImages/bi05/bellini.jpg",
            c: "qpImages/bi05/rubens.jpg",
            d: "qpImages/bi05/vanderWeydenKreuzabnahme.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //37
        type: ["text","text"],
        question: "Bei einem Wachsrelief schafft man Dreidimensionalität hauptsächlich durch … ",
        answers: {
            a: "plastische Oberflächengestaltung",
            b: "Farbperspektive",
            c: "perspektivische Verkürzung",
            d: "Überlappung"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //44
        type: ["text","text"],
        question: "Die Kunst welcher der folgenden Epochen gilt als verspielt und verschnörkelt?",
        answers: {
            a: "Klassizismus",
            b: "Renaissance",
            c: "Mittelalter",
            d: "Rokoko"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //59
        type: ["text","text"],
        question: "Bei welchem der folgenden Druckverfahren drucken die hochstehenden Partien der Platte auf das Papier?",
        answers: {
            a: "Linolschnitt",
            b: "Radierung",
            c: "Kupferstich",
            d: "Aquatinta"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //35
     type: ["text","image"],
     question: "Welches der folgenden Werke hat einen anderen Aufbau wie die anderen Werke?",
     answers: {
         a: "qpImages/ab02/097_Merkur_Bro170.jpg",
         b: "qpImages/ab02/097_Venus_Bro169.jpg",
         c: "qpImages/ab02/riccio.jpg",
         d: "qpImages/ab02/sammlungneuzeitapollgeorgraphaeldonner0.jpg"
         },
     correctAnswer: "c",
     highlights: []
     },
     {
        //49
        type: ["text","image"],
        question: "Welches der folgenden Werke ist KEIN Holzschnitt?",
        answers: {
            a: "qpImages/pr25/a-duerer-ab3-h0049.jpg",
            b: "qpImages/pr25/a-duerer-ab3-h0131.jpg",
            c: "qpImages/pr25/dürer_holzschnitt.jpg",
            d: "qpImages/pr25/melancholie.jpg"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //51
        type: ["text","text"],
        question: "Der Stil welcher der Epochen gilt als Gegenbewegung zu Barock?",
        answers: {
            a: "Klassizismus",
            b: "Rokoko",
            c: "Renaissance",
            d: "Romantik"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //47
        type: ["imgtext","text"],
        question: "Welcher Epoche gibt diese Form ihren Namen?",
        image: "qpImages/po20/Rocaille_Kartusche_01.jpg",
        answers: {
            a: "Rokoko",
            b: "Renaissance",
            c: "Klassizismus",
            d: "Impressionismus"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //38
        type: ["text","image"],
        question: "Welches der unteren Werke stellt KEINE biblische Figur dar?",
        answers: {
            a: "qpImages/bi04/klagendeeva.jpg",
            b: "qpImages/bi04/mars.jpg",
            c: "qpImages/bi04/selbstbildnis.jpg",
            d: "qpImages/bi04/sohn.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //43
        type: ["text","image"],
        question: "Welches der folgenden Werke ist NICHT mit einer engen Farbpalette gemalt?",
        answers: {
            a: "qpImages/lf08/familienbild.jpg",
            b: "qpImages/lf08/gentileschi.jpg",
            c: "qpImages/lf08/molyn.jpg",
            d: "qpImages/lf08/selbstbildnis.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //61
        type: ["text","text"],
        question: "Bei Radierung wird die Zeichnung auf die Kupferplatte … aufgebracht.",
        answers: {
            a: "seitenverkehrt",
            b: "auf dem Kopf",
            c: "vergrößert",
            d: "mit dickeren Linien"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //46
        type: ["text","text"],
        question: "Welcher der folgenden Künstler ist ein Künstler der Renaissance?",
        answers: {
            a: "Dürer",
            b: "Rembrandt",
            c: "Gentileschi",
            d: "Rubens"
        },
        correctAnswer: "a",
        highlights: []
    },
    {
        //54
        type: ["text","image"],
        question: "Welches der folgenden Werke stellt keine niederländische Landschaft dar? ",
        answers: {
            a: "qpImages/st06/duenenlandschaft.jpg",
            b: "qpImages/st06/lorrain.jpg",
            c: "qpImages/st06/molyn.jpg",
            d: "qpImages/st06/velde.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //41
        type: ["text","image"],
        question: "Wenn die Farben in einem Gemälde wenig bunt und zurückhaltend sind, spricht man von einem gedämpten Kolorit.<br> Welches der folgende Werke ist KEIN Beispiel dafür?",
        answers: {
            a: "qpImages/lf01/duenenlandschaft.jpg",
            b: "qpImages/lf01/gentileschi.jpg",
            c: "qpImages/lf01/ruisdael.jpg",
            d: "qpImages/lf01/selbstbildnis.jpg"
        },
        correctAnswer: "b",
        highlights: []
    },
    {
        //56
        type: ["text","image"],
        question: "Die Technik welches der folgenden Werke gilt NICHT als eine Vervielfältigungstechnik?",
        answers: {
            a: "qpImages/tn01/david.jpg",
            b: "qpImages/tn01/devriesnymphe.jpg",
            c: "qpImages/tn01/fettekueche.jpg",
            d: "qpImages/tn01/sebastian.jpg"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //60
        type: ["text","image"],
        question: "Welches der folgenden Werke kann mit einem Gussverfahren erstellt worden sein?",
        answers: {
            a: "qpImages/tn09/diana.jpg",
            b: "qpImages/tn09/fruehling.jpg",
            c: "qpImages/tn09/klagendeeva.jpg",
            d: "qpImages/tn09/marcaurel.jpg"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //52
        type: ["text","text"],
        question: "Welche der folgenden Eigenschaften ist eine Eigenschaft des Klassizismus?",
        answers: {
            a: "Symmetrie",
            b: "Ausgewogenheit",
            c: "Kontrastreiche Farben",
            d: "Klare Konturen"
        },
        correctAnswer: "c",
        highlights: []
    },
    {
        //47
        type: ["text","text"],
        question: "Starke Licht- und Schattenkontraste sind ein Charakteristikum welcher der folgenden Epochen?",
        image: "qpImages/po20/Rocaille_Kartusche_01.jpg",
        answers: {
            a: "Renaissance",
            b: "Barock",
            c: "Rokoko",
            d: "Klassizismus"
        },
        correctAnswer: "b",
        highlights: []
    },  
    {
        //45
        type: ["text","text"],
        question: "Welche der folgenden Eigenschaften ist KEINE Eigenschaft der Renaissancemalerei?",
        answers: {
            a: "Symmetrie",
            b: "Harmonie",
            c: "Überladenheit",
            d: "Naturtreue"
        },
        correctAnswer: "c",
        highlights: []
    },
    {
        //48
        type: ["text","image"],
        question: "Welcher der folgenden Stücke ist Majolika?",
        answers: {
            a: "qpImages/pr23/27KleopatraLim198.jpg",
            b: "qpImages/pr23/107KanopeWed365.jpg",
            c: "qpImages/pr23/154FürstenbergVase1571.jpg",
            d: "qpImages/pr23/article-2071401-0F17D87400000578-515_634x625.jpg"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //42
        type: ["text","image"],
        question: "In welchem Werk ist warmes Licht zu sehen?",
        answers: {
            a: "qpImages/lf07/hochzeit.jpg",
            b: "qpImages/lf07/pieta.jpg",
            c: "qpImages/lf07/pieta2.jpg",
            d: "qpImages/lf07/selbstbildnis.jpg"
        },
        correctAnswer: "d",
        highlights: []
    },
    {
        //40
        type: ["text","image"],
        question: "Welches der folgenden Werke ist KEIN Historienbild?",
        answers: {
            a: "qpImages/bi11/familienbild.jpg",
            b: "qpImages/bi11/gelehrter.jpg",
            c: "qpImages/bi11/sohn.jpg",
            d: "qpImages/bi11/venus.jpg"
        },
        correctAnswer: "a",
        highlights: []
    },  
    {
        //31
       type: ["text","text"],
           question: "<br><br><br>Sie sind fertig. <br>Bitte melden Sie sich beim Versuchsleiter<br><br>Vielen Dank für Ihre Teilnahme!<br><br> :)",
           answers: {
           
           },
           correctAnswer: "",
           highlights: []
   },
   {
    //31
   type: ["text","text"],
       question: "Please press submit",
       answers: {
       
       },
       correctAnswer: "",
       highlights: []
}
];

var startTime = getTime();

var data = "vp,part,month,day,hour,minutes,seconds,milliseconds,currentQuestion,action,correct\n";
var ddata = new Blob([data]);

log("start");

console.log("questionpanel3.js says hello");


const nextButton = document.getElementById("next");

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

// on submit, show results
//submitButton.addEventListener('click', showResults);
nextButton.addEventListener("click", showNextSlide);
//submitButton.addEventListener("click", submitButtonPress);




function showPreviousSlide(){
    if(currentQuestion<=0){

    }else{
        currentQuestion--;
        showQuestion(currentQuestion);

    }

}

function showNextSlide(){
    //if the question is a pft question, add an alert if no button is checked (forced answer)
    if(currentQuestion>=2 && currentQuestion<=28 && isRadioChecked(currentQuestion,"norm")==false){
        window.alert("Sie müssen eine Antwort auswählen");
    }else{
        currentQuestion++;  
        log("next");
      
        console.log("currQ: "+currentQuestion)
        console.log("currQ length: "+myQuestions.length);
    
        
        if(currentQuestion+1>=myQuestions.length){
            document.getElementById("next").style.display="none";  
            document.getElementById("a").style.display="initial";  
            document.getElementById("a").download=vp+"_3"+".csv";
        }

        showQuestion(currentQuestion);
    }

    
   
}

function showQuestion(n){
    Question = myQuestions[n];

    //container for total html output for currentQuestion
    const output=[];

    //container for all answers for currentQuestion
    const answers=[];
    
    //cycle thru all answers of currentQuestion, and store resulting code in the answers[]
    for(letter in Question.answers){

        //Question[0] defines the question type, image or text
        //Question[1] define the answer type, image or text
        //add answer code depending on answer type
        if(Question.type[1]=="text"){
            answers.push(
                `
                <label>
                <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                ${Question.answers[letter]}
                </label>
                `
            );
        }
        
        if(Question.type[1]=="img"){
            answers.push(
                `
                <label>
                <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                <img src="${Question.answers[letter]}" alt="" > 
                </label>
                `
            );
        }

        if(Question.type[1]=="image"){
            answers.push(
                `
                <label>
                <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                <div style="background-image: url(${Question.answers[letter]});height:300px;width:300px;background-size:contain;background-repeat: no-repeat;"></div> 
                </label>
                `
            );
        }

        if(Question.type[1]=="field"){
            answers.push(
                `
                <label>
                <input type="text" id="${n}" onkeyup="log(this.value)">
                </label>
                `
            );
        }

        if(Question.type[1]=="andfield"){
            answers.push(
                `
                <label>
                <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                ${Question.answers[letter]}
                </label>
                `
            );
            if(letter=="b"){
                answers.push(
                    `
                    <label>
                    <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                    <input type="text" id="${n}" onkeyup="log(this.value)" placeholder="Anderer Studiengang">
                    </label>
                    `
                );
            }
        }

        if(Question.type[1]=="pft"){
            answers.push(
                `
                <label>
                <img class="pft" src="${Question.answers[letter]}" alt="" > 
                </label>
                `
            );
        }
        
        if(Question.type[1]=="likert"){
            answers.push(
                `
                <label>
                <input type="radio" id="${n}${letter}" name="question${n}" value="${letter}" onclick="log(this.id)">
                ${Question.answers[letter]}
                </label>
                `
            );
        }
        if(Question.type[1]=="vpfield"){
            answers.push(
                `
                <label>
                <input type="text" id="${n}" onkeyup="logvp(this.value)">
                </label>
                `
            );
        }

    }

    //make output[] depending on question type
    if(Question.type[0]=="text"){
        output.push(
            `
            <div class="question-${Question.type[0]}"> ${Question.question} </div>
            <div class="answers-${Question.type[1]}"> ${answers.join("")} </div>
            `
    );
    }

    if(Question.type[0]=="textsubtext"){
        output.push(
            `
            <div class="question-text"> ${Question.question} </div>
            <div class="question-subtext"> ${Question.subtext} </div>
            <div class="answers-${Question.type[1]}"> ${answers.join("")} </div>
            `
    );
    }

    if(Question.type[0]=="img"){
        output.push(
            `
            <div class="question-${Question.type[0]}"> 
              <img src="${Question.question}" alt=""> 
            </div>
            <div class="answers-${Question.type[1]}"> ${answers.join("")} </div>
            `
    );
    }

    if(Question.type[0]=="imgtext"){
        output.push(
            `
            <div class="question-${Question.type[0]}"> 
                <div style="background-image: url(${Question.image});height:350px;width:400px;background-size:contain;background-repeat: no-repeat;margin-right:30px;margin-left:50px"></div>
                <br>
                ${Question.question}

            </div>
            <div class="answers-${Question.type[1]}"> ${answers.join("")} </div>
            `
    );
    }
    quizContainer.innerHTML = output.join('');
}

//createListeners() creates Listeners for Radios with Ids: (QuestionNumber, AnswerLetter)
function createListeners(QuestionNumber, numOfAnswers){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(var i=0; i<numOfAnswers; i++){
        document.getElementById(QuestionNumber+""+alphabet.charAt(i)).addEventListener("click", outCry);
    }
}




//pushes action p to data[]
function log(p){
    var t=getTime();
    //var t=getElapsedTime();
    //var tt=translateTimeArrayToString(t);
    data=data+vp+","+"3,"+t+","+currentQuestion+","+p+","+isCorrect(p)+"\n";
    ddata = new Blob([data]);
    var a = document.getElementById('a');
    a.href = URL.createObjectURL(ddata);    
    
    var tString=translateTimeArrayToString(t);
    console.log(vp+","+"3,"+t+","+currentQuestion+","+p+","+isCorrect(p));
}

function logvp(p){
    vp=p;
    console.log(vp);
}

function cleanLog(log){
    
}

function outFly(){
    console.log("fly");
}

//return array with the form: [year, month, day, hour, minutes, seconds, milliseconds]
function getTime(){
    var today = new Date();
    var date = today.getYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = [today.getMonth(),today.getDate(),(today.getHours()-2),today.getMinutes(),today.getSeconds(),today.getMilliseconds()]

    return dateTime;
}

//return timedifference between currentTime and StartTime; elapsedTime
function getElapsedTime(){
    var difference = [getTime()[0]-startTime[0], getTime()[1]-startTime[1], getTime()[2]-startTime[2], getTime()[3]-startTime[3], getTime()[4]-startTime[4], getTime()[5]-startTime[5]];
    return difference;
}

//convertTimes in arrays to strings for debug purposes
function translateTimeArrayToString(timeArray){
    diffString = timeArray[0]+" "+timeArray[1]+" "+timeArray[2]+" "+timeArray[3]+" "+timeArray[4]+" "+timeArray[5];
    return diffString;
}

//isRadioChecked() checks if a radiobutton of one question has been check or not
function isRadioChecked(n,type){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    if(type=="pft"){
        for (i = 0; i < 5; i++) { 
            var btn=""+n+""+alphabet.charAt(i);
            if(document.getElementById(btn).checked) {
                return true;
            }    
        }
    }else if(type=="norm"){
        for (i = 0; i < 4; i++) { 
            var btn=""+n+""+alphabet.charAt(i);
            if(document.getElementById(btn).checked) {
                return true;
            }    
        }
    }
    return false;
}

//returns boolstring if current question answer is equal to correct answer
//still to do, does not work 100%;
function isCorrect(action){
    var QuestionK = myQuestions[currentQuestion];
    var currCorrectAnswer=QuestionK.correctAnswer;
    if(action==(currentQuestion+""+currCorrectAnswer)) {
        return "true";
    }else if(action=="next" || action=="start"){
        return "none";
    }else if(currCorrectAnswer==""){
        return "none";
    }else{
        return "false";
    }
}

//takes a number converts it to string and puts so many zeros infront as so it has 2 digits
function decimalize(n){
    if(getlength(n)<=1){
        return "0"+n.toString();
    }else{
        return n.toString();
    }
}

function getlength(number) {
    return number.toString().length;
}

function timer(){
    var sec = 180;
    var timer = setInterval(function(){

        var minutes = Math.floor(sec/60);
        var seconds = sec%60;
        document.getElementById('TimerDisplay').innerHTML=decimalize(minutes)+':'+decimalize(seconds);
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            
            //FUNCTIONALITY DEPENDANT ON MY_QUESTIONS
            currentQuestion=34;
            log("timerdone");
            showQuestion(currentQuestion);
            document.getElementById('Timer').style.display="none";
            //document.getElementById("next").style.display="none";  
            //document.getElementById("a").style.display="initial"; 
        }
    }, 1000);
}

showQuestion(currentQuestion);



