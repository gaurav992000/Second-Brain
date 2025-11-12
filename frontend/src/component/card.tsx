
import { ShareIcon } from "../icons/Share";
import { Delete } from "../icons/trash";
import { TwitterIcon } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
interface Cardporps {
    title: string,
    link: string,
    type: "Twitter" | "Youtube",
    darkon: boolean

}


export function Card({ link, type, darkon }: Cardporps) {
    return <div>

        <div className={`" rounded-md shadow-xl shadow-gray-500 outline-slate-200 max-w-72 border min-h-48 p-4 min-w-72" ${darkon ? 'bg-black text-white' : 'bg-white'}`} >
            <div className="flex justify-between">

                <div className="flex items-center text-md">
                    <div className="pr-2">
                        {type == "Twitter" ? <TwitterIcon size="lg"  ></TwitterIcon> : <Youtube size="lg"></Youtube>}
                    </div>
                    <div className="pb-2">{type == "Twitter" ? <h1  >{type}</h1> : <h1 className="">{type}</h1>}</div>


                </div>
                <div className="flex gap-2">
                    <ShareIcon size="md"></ShareIcon>
                    <Delete size="md"></Delete>
                </div>

            </div>
            <div className="max-w-64 pt-4">

                {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


                {type === "Twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}


            </div>





        </div>

    </div>

}