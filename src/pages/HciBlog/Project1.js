/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Project1.css";
import p1Cover from "../../img/proj1/cover.png";
import pMind from "../../img/proj1/problemMindmap.png"
import dMind from "../../img/proj1/diningMindmap.png"
import p1 from "../../img/proj1/p1.png"
import p2 from "../../img/proj1/p2.png"
import p3 from "../../img/proj1/p3.png"
import s1 from "../../img/proj1/s1.png"
import s2 from "../../img/proj1/s2.png"
import sb1 from "../../img/proj1/sb1.jpg"
import sb2 from "../../img/proj1/sb2.jpeg"
import Nick from "../../img/proj1/Nick.png"
import Sarah from "../../img/proj1/Sarah.png"



export default function HciProject1() {
    return (
        <div className="HCI-Project-1">
            <header className="HCI-Blog-header">
                <NavBar />
            </header>
            <body>
                <article class="post">
                    <figure>
                        <img src={p1Cover} />
                    </figure>
                    <h2>Project 1: “If ___ on campus were more user-friendly...”</h2>

                    <p>
                        For our first Human Computer Interaction project we were tasked with improving something at HKUST. At the time of the project release
                        I had only attended the university for a week and the group I worked with included 3 other exchange students as well. As a result,
                        I was concerned about my ability to come up with issues that people could relate to. However, during our group's first brainstorming
                        session, I found that many of the aspects of campus that I though were inconvenient were shared by my groupmates. During the ideation
                        session, we came up with a mindmap of possible things that could be improved. Following this, we decided to focus on dining as our problem
                        and created a more detailed mindmap of all issues we could think of surrounding it.
                    </p>

                    <div class="tip tip-right">
                        <p>
                            Sixth Sense consists of me, Tiffany Chen, Jack Wu, Raghav Goyal, Christopher Bautz, and Sarthak Singhal
                        </p>
                    </div>

                    <figure>
                        <img src={pMind} />
                    </figure>
                    <figure>
                        <img src={dMind} />
                    </figure>

                    <p>
                        Once we had decided on our problem, we had to verify that our target audience agreed that it existed.
                        To do this, we decided to use a Google Forms survey to gather some data. Everyone in the group helped come up with questions
                        and edit them for clarity and bias. Once the form was complete, we sent out the survey to our networks of HKUST students and
                        waited for the responses to roll in.
                    </p>

                    <figure>
                        <img src={p1} />
                    </figure>
                    <figure>
                        <img src={p2} />
                    </figure>
                    <figure>
                        <img src={p3} />
                    </figure>


                    <p>
                        From these responses, we were able to narrow down a few specific aspects to improve. These include allergen/ingredient info,
                        wait times for meal pickup, table availability, expanding capabilities of mobile/online ordering (ability to pay in-app,
                        mobile receipt to avoid paying at kiosks), and having clear hours for each canteen. With these core features in mind, me and Tiffany
                        came up with two personas (Nick and Sarah) that represented the needs of the target audience
                    </p>

                    <figure>
                        <img src={Nick} />
                    </figure>
                    <figure>
                        <img src={Sarah} />
                    </figure>


                    <p>
                        We then set about creating a mock solution for our personas (and thus our target audience) by adding to the existed HKUST
                        student app.
                    </p>

                    <figure>
                        <img src={s1} />
                    </figure>
                    <figure>
                        <img src={s2} />
                    </figure>

                    <p>
                        With our solution and personas complete, we developed storyboards to demonstrate our solution in action. I created the first storyboard,
                        which depicts a student concerned about allergens and dietary restrictions. Tiffany created the other storyboard, which shows a student
                        who values efficiency and speed when ordering food.
                    </p>

                    <figure>
                        <img src={sb1} />
                    </figure>
                    <figure>
                        <img src={sb2} />
                    </figure>

                    <p>
                        I learned a lot of important lessons while completing this project. In previous computer science classes that tasked
                        me with developing an application or solution, I often went straight to a specific issue and set about creating something
                        that I personally found useful. However, this assumes that my needs are the needs of many and my ideal solution is the best
                        way for the entire audience as well. For this project, a bulk of the work came from needfinding and verifying our problem. This process
                        reemphasized the importance of creating solutions tailored to a specific target audience that has a real and pressing issue.
                    </p>
                    <p>
                        Furthermore, taking the information we collected and condensing it into user personas helped to ensure that all important pain points
                        were addressed by our proposed solution. It was fun and creatively challenging to come up with characters that had all the characteristics
                        of our target audience.
                    </p>
                    <p>
                        Finally, when designing a solution I learned that more features is not necessarily better. For instance: instead of designing a completely new app,
                        improving the existing app means that users do not need to download another app and they are already familiar with the interface. Additionally, using
                        icons rather than text to indicate alergens/dietary restrictions helps to communicate information more efficiently.
                    </p>
                    <p>
                        Overall, I enjoyed working on the first HCI project. This was my first group project at HKUST and first attempt to implement HCI concepts into a solution,
                        and I learned a lot on both sides. I look forward to learning more about HCI and starting the next project!
                    </p>

                </article>
            </body>

        </div>
    );
};