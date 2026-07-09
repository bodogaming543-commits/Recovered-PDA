const screen = document.getElementById("screen");

const pages = [

{
text:`X7 PERSONAL DATA ASSISTANT
Firmware v2.04


> Boot sequence initiated...


Checking memory.....................OK
Checking storage....................OK
Checking archive....................OK

Mounting external drive.............OK


WARNING

Recovered personal logs detected.


Tap anywhere to continue.`,
auto:false
},

{
text:`Mounting external drive...

[          ] 0%`,
auto:true
},

{
text:`Mounting external drive...

[==        ] 20%`,
auto:true
},

{
text:`Mounting external drive...

[====      ] 40%`,
auto:true
},

{
text:`Mounting external drive...

[======    ] 60%`,
auto:true
},

{
text:`Mounting external drive...

[========  ] 80%`,
auto:true
},

{
text:`Mounting external drive...

[==========] 100%

Done.

Tap anywhere to continue.`,
auto:false
},

{
text:`Searching archive.

`,
auto:true
},

{
text:`Searching archive..

`,
auto:true
},

{
text:`Searching archive...

`,
auto:true
},

{
text:`Archive Found.

Recovered Entries : 731

Searching earliest record...

Tap anywhere to continue.`,
auto:false
},

{
text:`Earliest Record Located.

Date:
2025 / 1 / 26

Location:
Chess.com


Opening conversation...

Tap anywhere to continue.`,
auto:false
},

{
text:`May Thinzar: hi

Abdelrahman: hello

May Thinzar: nice move

Abdelrahman: thanks bro

May Thinzar: I'm not a bro

Abdelrahman: oh so you are a girl

May Thinzar: yes

Abdelrahman: are you single 

May Thinzar: yes

Abdelrahman: YAAAAAY

May Thinzar: we can make friends

Abdelrahman: YAAAAAY

May Thinzar: send me your tik tok

Abdelrahman: ok i will send it afteri win

May Thinzar: haha i am winning

May Thinzar: i can give you a chance , do you want it

Abdelrahman: no

May Thinzar: oh you are really a man

Tap anywhere to continue.`,
auto:false
},

{
text:`----------------------------------------

Conversation Archive Closed.

Subject Identification Complete...

Name:
May Thinzar

Threat Level:
None

Trust Level:
MAXIMUM

Status:
BRO.

----------------------------------------

Operator's Note

Two years ago...

I expected one chess game.

Instead...

I found a bro.

Thanks
for every laugh,
every conversation,
every motivation,
and for staying around.

Archive Status:
Still Growing...

Happy Birthday, bro.

Take care of yourself.

See you in the next mission.

----------------------------------------`,
auto:false
}

];

let currentPage = 0;
let typing = false;

showPage();

document.addEventListener("click", () => {

    if (typing) return;

    if (pages[currentPage].auto) return;

    currentPage++;

    if (currentPage < pages.length){

        showPage();

    }

});

function showPage(){

    typeText(pages[currentPage].text);

}

function typeText(text){

    typing = true;

    screen.textContent = "";

    let i = 0;

    const interval = setInterval(() => {

        screen.textContent = text.substring(0, i);

        i++;

        if(i > text.length){

            clearInterval(interval);

            typing = false;

            if(pages[currentPage].auto){

                setTimeout(() => {

                    currentPage++;

                    if(currentPage < pages.length){

                        showPage();

                    }

                },600);

            }

        }

    },20);

}

