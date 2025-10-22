import {
    CardCurtainReveal,
    CardCurtainRevealBody,
    CardCurtainRevealDescription,
    CardCurtainRevealFooter,
    CardCurtainRevealTitle,
    CardCurtain
} from "@/components/ui/card-curtain-reveal"

import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const CardCurtainRevealDemo = () => {
    return (
        <div className="min-h-screen place-content-center place-items-center bg-black p-8">
            <CardCurtainReveal className="h-[560px] w-96 border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-2xl">
                <CardCurtainRevealBody className="">
                    <CardCurtainRevealTitle className="text-3xl font-medium tracking-tight">
                        Behind <br />
                        the Curtain
                    </CardCurtainRevealTitle>
                    <CardCurtainRevealDescription className="my-4 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusantium voluptate, eum quia temporibus fugiat rerum nobis modi
                            dolor, delectus laboriosam, quae adipisci reprehenderit officiis
                            quidem iure ducimus incidunt officia. Magni, eligendi repellendus.
                            Fugiat, natus aut?
                        </p>
                    </CardCurtainRevealDescription>
                    <Button
                        variant={"secondary"}
                        size={"icon"}
                        className="aspect-square rounded-full"
                    >
                        <ArrowUpRight />
                    </Button>

                    <CardCurtain className="bg-zinc-50" />
                </CardCurtainRevealBody>

                <CardCurtainRevealFooter className="mt-auto">
                    <img
                        width="100%"
                        height="100%"
                        alt="Tokyo street"
                        className=""
                        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </CardCurtainRevealFooter>
            </CardCurtainReveal>
        </div>
    )
}


