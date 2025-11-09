"use client";

import { Project as ProjectProps } from '@/types';
import { demoProjects } from '@/lib/projects';
import AnimationContainer from '../utils/AnimationContainer';
import Card from '../utils/Card';

const ProjectCards = () => {

    const data: ProjectProps[] = demoProjects;


    return (
        <AnimationContainer customClassName="w-full flex flex-col">

            <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">

                {data.map((project: ProjectProps, index: number) => (
                    <Card key={`${project.title}-${index}`} project={project} />
                ))}

            </div>
        </AnimationContainer>
    )
};

export default ProjectCards
