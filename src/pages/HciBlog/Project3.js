/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Project3.css";
import p3Cover from "../../img/proj3/p3Cover.png";
import pcMind from "../../img/proj3/pcMind.png"
import sMind from "../../img/proj3/sMind.png"
import p1 from "../../img/proj3/p1.png"
import p2 from "../../img/proj3/p1.png"
import jason from "../../img/proj3/jason.png"
import richard from "../../img/proj3/richard.png"
import jasonStory from "../../img/proj3/jasonStory.png"
import richardStory from "../../img/proj3/richardStory.png"
import speeddate from "../../img/proj3/speeddate.png"



export default function HciProject3() {
    return (
        <div className="HCI-Project-1">
            <header className="HCI-Blog-header">
                <NavBar />
            </header>
            <body>
                <article class="post">
                    <figure>
                        <img src={p3Cover} />
                    </figure>
                    <h2>Project 3: Social XR for Lifelong Learning</h2>

                    <p>
                        For our third and final Human Computer Interaction project we were tasked with developing a social XR solution to aid in lifelong learning. To work on this
                        project, we first needed to brainstorm on what the advantages (and disadvantages) of XR were. To do this, we used mind meister to create a mind map. Then, we created
                        a mindmap to brainstorm some potential solutions for the topic. The main idea was to develop ideas that played up the advantages of XR that we had come up with and try to
                        downplay or account for the disadvantes.
                    </p>

                    <div class="tip tip-right">
                        <p>
                            Sixth Sense consists of me, Tiffany Chen, Jack Wu, Raghav Goyal, Christopher Bautz, and Sarthak Singhal
                        </p>
                    </div>

                    <figure>
                        <img src={pcMind} />
                    </figure>
                    <figure>
                        <img src={sMind} />
                    </figure>

                    <p>
                        The surveying that we did backed up the need for our solution. I developed a google form that asked about what categories of learning people
                        were most interested in, what specific topics within those categories were most desired, and even what type of learning people thought would benefit
                        the most from XR technology. I tried to make the form as neutral as possible in order to avoid skewing the results one way or another. We received 31 responses
                        which reinforced our belief that cultural learning was the most desirable amongst the different types of learning. Futhermore, people were most interested in learning
                        about historical background and cultural context.
                    </p>

                    <figure>
                        <img src={p1} />
                    </figure>
                    <figure>
                        <img src={p2} />
                    </figure>


                    <p>
                        Then, we developed POVs and personas for our potential solution. Jack and Tiffany developed Jason and Richard who fit our target audience.
                        Jason represented the older population, who we wanted to target because XR allows for a more accessible way to travel. Richard represented the
                        typical busy and broke college student who wants to travel. XR is decidedly more affordable that in-person travel, so our solution fits for this population
                        as well.
                    </p>

                    <figure>
                        <img src={jason} />
                    </figure>
                    <figure>
                        <img src={richard} />
                    </figure>


                    <p>
                        Tiffany and Jack developed storyboards for our personas, which we then used to speed date our solution
                    </p>

                    <figure>
                        <img src={jasonStory} />
                    </figure>
                    <figure>
                        <img src={richardStory} />
                    </figure>

                    <p>
                        Our speed dating survey was quite simple, as we just wanted to get as much feedback about our solution as possible.
                        Two recurring points were that people wanted to be able to see more than one place at a time and they wanted to be able to
                        communicate with friends while venturing around
                    </p>

                    <figure>
                        <img src={speeddate} />
                    </figure>

                    <p>
                        Sarthak, Raghav, and Chris worked on developing a prototype for our solution and we received user feedback to further develop
                        the experience. (See our demo at the following <a href='https://drive.google.com/file/d/1z9ZG74f9HVt7nbEKOg8rx_BPjcbYGetW/view?resourcekey'>link</a>)
                    </p>

                    <p>
                        I learned a lot of important lessons while completing this project. In the previous projects I worked on prototyping and storyboarding, which are parts that have
                        visible and concrete results to show for the work. Because of this, I had thought that surveying and needfinding are the easier portions which don't require as much though or
                        effort. However, from this experience I realized that constructing surveys is actually quite difficult to do effectively. Even after getting the results of the survey, I thought many
                        times that I had worded a question differently or used different answer choices.
                    </p>
                    <p>
                        Furthermore, taking the information we collected and pulling meaningful information out of it was a task in and of its own. Seeing the raw data doesn't really help to extrapolate information, like
                        in the case of our speed dating results. Because we left the answer as a text box, a lot of time was spent going through the responses to see what users truly had to say. Reponses such as "the solution looks good"
                        and "nothing I would change" feel good to see, but aren't very constructive in terms of development.
                    </p>
                    <p>
                        Overall, I enjoyed working on this HCI project. Though I took a step back from development this time, I got to spend more time looking at the project from a design and development perspective, which I found interesting
                        and am sure will be useful in the future.
                    </p>

                </article>
            </body>

        </div>
    );
};