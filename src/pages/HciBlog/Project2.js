/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Project2.css";
import p2Cover from "../../img/proj2/p2Cover.png";
import mindmap from "../../img/proj2/mindmap.png"
import s1 from "../../img/proj2/survey1.png"
import s2 from "../../img/proj2/survey2.png"
import sam from "../../img/proj2/sam.png"
import vanessa from "../../img/proj2/vanessa.png"
import sb1 from "../../img/proj2/sb1.png"
import sb2 from "../../img/proj2/sb2.png"
import f1 from "../../img/proj2/f1.png"





export default function HciProject2() {
    return (
        <div className="HCI-Project-2">
            <header className="HCI-Blog-header">
                <NavBar />
            </header>
            <body>
                <article class="post">
                    <figure>
                        <img src={p2Cover} />
                    </figure>
                    <h2>Project 2: Chatbot for Wellbeing</h2>

                    <p>
                        For our the second HCI project, we were tasked with developing a chatbot to promote wellbeing. The topic of wellbeing was very broad,
                        so it gave us a lot of freedom to decide the specific nature of the chatbot. It was personally difficult for me to think about a chatbot
                        that would realistically be used, as they seemed quite difficult and finicky to get right. However, as a group we were able to come up with
                        a mind map of different ideas and narrow down to three possibilities to speed date.
                    </p>

                    <div class="tip tip-right">
                        <p>
                            Sixth Sense consists of me, Tiffany Chen, Jack Wu, Raghav Goyal, Christopher Bautz, and Sarthak Singhal
                        </p>
                    </div>

                    <figure>
                        <img src={mindmap} />
                    </figure>

                    <p>
                        To conduct speed dating, Jack and Tiffany created a Google survey to get feedback from our target audience. We got a
                        total for 52 responses, which leaned towards a recipe chatbot being the most desirable option.
                    </p>

                    <figure>
                        <img src={s1} />
                    </figure>
                    <figure>
                        <img src={s2} />
                    </figure>

                    <p>
                        From these responses, we were able to come up with a general layout of our chatbot. We focused on two of the most popular features -
                        the ability to search by ingredient and the ability to search by dietary restrictions. With these core features in mind, Sarthak and Chris
                        came up with two personas (Vanessa and Sam) that represented the needs of the target audience
                    </p>

                    <figure>
                        <img src={sam} />
                    </figure>
                    <figure>
                        <img src={vanessa} />
                    </figure>


                    <p>
                        Then, Raghav and I set about creating our working prototype. We used Rasa as the base of our chatbot and called the edamam API through a library
                        called py-edamam. The edamam API allowed us to easily keyword search ingredients and dietary restrictions. Of course, prototyping did not go 100% smoothly -
                        we faced issues with out chatbot crashing for no apparent reason and spend a lot of time error checking, debugging, and training our bot. As seen in a screenshot
                        from our v1 prototype, ingredients are duplicated and there are grammatical errors in the responses.
                    </p>

                    <div class="tip tip-right">
                        <p>
                            Our code is available on at <a href="https://github.com/lauren-l/HCI-chatbot">https://github.com/lauren-l/HCI-chatbot</a>

                        </p>
                    </div>
                    <figure>
                        <img src={f1} />
                    </figure>

                    <p>
                        With our solution and personas complete, Sarthak and Chris then created our storyboards. One storyboard features Vanessa, who is short on time
                        and ingredients to make a meal. Using Remy (our chatbot), she is able to quickly find a recipe to suit her needs. On the other hand, Sam is a broke
                        college student unable to purchase more groceries because he's used his budget. Using Remy, he can still find delicious recipes to make with his limited
                        ingredients.
                    </p>

                    <figure>
                        <img src={sb1} />
                    </figure>
                    <figure>
                        <img src={sb2} />
                    </figure>

                    <p>
                        User testing was a really important part of this project, and Tiffany and Jack came up with a process that involved both codiscovery and
                        thinking out loud protocols. They sat with 5 different users from our target audience and came back with a set of issues that were found to
                        be common between all testers. These included errors when attempting to start a new recipe search, not knowing what to ask Remy at the beginning,
                        and wanting to be able to search by the name of a dish, not just that ingredients on hand.
                    </p>

                    <p>
                        With this feedback, I was able to go back into our code and implement our v2 features. These features included prompting for users for further questions
                        (without bugs), implementing a new search feature to search by the name of a dish, adding sample queries to the welcome message, and other smaller additions.
                        Most of these changes were implemented by changing our Rasa stories and adding more custom actions, though some issues (like recognizing more diverse ingredients)
                        required playing with our Rasa pipeline.
                    </p>

                    <p>
                        Following our v2 changes, we performed another round of user testing. We saw better feedback as our chatbot was more intuitive and had more diverse features.
                        As with any prototype, however, we still received comments about what could be improved: our UI is quite dreary and plain, the voice reader is too slow and annoying, and
                        searching by cuisine type is unavailable.
                    </p>

                    <p>
                        I learned a lot of important lessons while completing this project. Usually when completing an assignment I
                        leave my project at its first state of completion. My thought process is usually along the lines of - "I've met the requirements,
                        and that's enough". However, this assumes that my initial solution is the best solution, which is often not the case.
                        As the programmer, I am well versed in how to interact with my project and what should happen when I perform certain actions. However, an
                        average user does not have the indepth knowledge that I have and may find my solution unintuitive and clunky. This project really highlighted
                        the importance of user testing with the target audience - not just the developers who are working on the project itself.
                    </p>
                    <p>
                        Furthermore, working with Rasa was quite interesting. This was my first time working with any time of NLP software and I had a lot of fun learning
                        how to use the different featurizers, classifiers, and extractors. I found myself really enjoying mapping out user stories, and putting the nlu together
                        took a lot of thought. There were many times where entities were not extracted as I thought they would be and intents were not recognized as I would have classifed -
                        and I can see myself using Rasa for more projects in the future
                    </p>

                </article>
            </body>

        </div>
    );
};