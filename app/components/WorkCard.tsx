import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';

interface WorkCardProps {
    data: {
        projectName: string;
        projectImage: StaticImageData;
        githubLink: string;
        techStack: string[];
        companyLogo: StaticImageData;
        rolePosition: string;
    };
}

const WorkCard = ({ data }: WorkCardProps) => {
    return (
        <div className="mx-auto w-full max-w-[360px] my-4 bg-[#f8f9f5]  rounded-lg p-1 text-gray-900">
            <article className="">
                <section className="rounded-t-lg text-sm">
                    <div className='h-48 overflow-hidden'>
                        <Image
                            src={data.projectImage}
                            alt={data.projectName}
                            layout="responsive"
                            className="rounded-t-lg"
                        />
                    </div>
                    <header className=" font-bold p-2">
                        <p className="my-4 text-2xl font-semibold pr-8 capitalize font-roboto_condensed">{data.projectName}</p>
                        {data?.techStack?.map((skill, index) => (
                            <Badge key={index} className="mr-2 mt-2 rounded-full font-source_code_pro" variant="outline">
                                {skill}
                            </Badge>
                        ))}
                    </header>
                </section>
                <footer className="flex flex-col  gap-4 p-3 font-semibold text-sm">
                    <div className="flex gap-5 items-center font-source_code_pro">
                        <div className="w-[40px] flex items-center h-[40px] rounded-full justify-center border ">
                            <Image
                                src={data.companyLogo}
                                alt='company logo'
                                layout="responsive"
                                width={500}
                                height={500}
                                className='object-cover'

                            />
                        </div>
                        <div className="card__job">
                            <p className="card__job-title">
                                {data.rolePosition}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between font-source_code_pro'>
                        <Link href={data.githubLink} className="w-1/2 mx-1 font-normal bg-[#f8f9f5] flex items-center text-primary "> <Github size={18} className='mx-1' /> <span className='hover:border-b hover:border-primary text-primary'>Github</span></Link>
                        <Link href={`/works/${data.projectName.toLocaleLowerCase()}`} className="w-full  flex items-center py-3 px-2 justify-center text-sm text-black font-medium border border-dashed border-black rounded-full "  >
                            <span className='hover:border-b hover:border-black '>View project</span>
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default WorkCard;