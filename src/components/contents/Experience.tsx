import React from 'react';
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine';

const Experience = () => {
    return (
        <TimeLine>
            <TimeLineItem active>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Full Stack Developer (Freelance)
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        December 2024 - Present
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    Working as a freelance full stack developer, contributing to innovative solutions in the Web3, EdTech and AI space.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Creative Brand Designer at Balx Studio
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        Aug 2022 - Present
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    Developed brand identities for various clients, including e-commerce platforms, social media, and marketing materials.
                </TimeLineItem.Description>
            </TimeLineItem>
        </TimeLine>
    );
};

export default Experience;
