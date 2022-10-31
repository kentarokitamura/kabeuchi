import React, { useState } from "react";
import { BiChevronDown, BiWorld } from "react-icons/bi"
import { AiOutlinePicture } from "react-icons/ai"
import { HiOutlineGif } from "react-icons/hi2"
import { BsEmojiSmile } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"

const TweetCard = () => {
    const [text, setText] = useState()

    return (
        <div className="m-10 flex border-x">
            <div className="mx-4 my-3">
                <img className=" object-cover rounded-full w-14 h-14" src="https://pbs.twimg.com/profile_images/1502646002863333377/1sE5m-A5_bigger.jpg"></img>
            </div>
            <div className="w-2/3">
                <div className="my-3 ml-1 text-sky-500 font-bold flex border-x border-y border-gray-300 rounded-2xl  w-fit items-center px-3 hover:bg-sky-100">
                    <p className="">全員</p>
                    <BiChevronDown className=" text-2xl"/>
                </div>
                <div className="my-6 mx-1">
                    <input className=" break-words whitespace-pre-wrap text-2xl w-11/12 placeholder-slate-500  focus:border-0 focus:outline-0 focus:text-black" type="text" placeholder="いまどうしてる？" maxLength="240" onChange={e =>{setText(e.target.value)}}  ></input> 
                </div>
                <div className="flex  mx-1 py-1 rounded-2xl w-fit text-sky-500 items-center text-s hover:bg-sky-100"><BiWorld /><p className=" font-bold">全員が返信できます</p></div>
                <hr className="my-3"/>
                <div className="flex "> 
                    <div className="flex text-sky-500 text-xl justify-start">
                        <div className="  rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-100"><AiOutlinePicture className=" mx-1" /> </div>
                        <div className="  rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-100"><HiOutlineGif className="mx-1" /> </div>
                        <div className="  rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-100"><BsEmojiSmile className="mx-1" /> </div>
                        <div className="  rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-100"><HiOutlineLocationMarker className="mx-1"  /> </div>
                    </div>
                    
                        { text ? 
                            <div className=" ml-40 flex justify-center mt-1">
                                <div className=" rounded-full border-x border-y w-8 h-8  "></div>
                                <div className=" border-l-2 border-gray-300 h-8  mx-3"></div>
                                <div className=" text-sky-500 text-3xl mr-6 rounded-full border-x border-y w-8 h-8 flex items-center justify-center  ">+</div>
                                <div className=" bg-sky-500 text-white font-bold rounded-full w-fit text-center py-1.5 px-4 h-9 hover:bg-sky-600">ツイートする</div>
                            </div>
                            :
                            <div className=" ml-40 flex justify-center items-center mt-1">
                                    <div className=" rounded-full border-x border-y w-8 h-8  invisible"></div>
                                    <div className=" border-l-2 border-gray-300  mx-3 invisible"></div>
                                    <div className=" text-sky-500 text-3xl mr-6 rounded-full border-x border-y w-8 h-8 flex items-center justify-center invisible">+</div>
                                
                                <div className=" bg-sky-300 text-white font-bold rounded-full w-fit text-center py-1.5 px-4 select-none h-9">ツイートする</div>
                            </div>}
                        
                    
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
