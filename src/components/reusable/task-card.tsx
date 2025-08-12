import { memo } from "react";
import AddIcon from '../../assets/add.svg';
import clock from '../../assets/clock.svg';
import Attachment from '../../assets/attachments.svg';
import Messages from '../../assets/message.svg';


const TaskCard = memo(({ task }: { task : { title: string, description : string, attachment : number,messages: number}}) => {
    return(
        <div
            className="
                w-[391px] h-[143px] bg-[#FFFFFF]
                rounded-[8px] p-[15px] pb-[10px] border
                border-gray-300
            "
        >
            <div className="flex justify-between">
                <h2 
                    className="
                        text-[#223759] text-[24px] font-medium font-roboto
                        leading-[24px] capitalize
                    "
                >
                    {task.title}
                </h2>

                <div className="flex items-center gap-[12px]">
                    <img src={clock} alt="clock_icon" />
                    <p className="text-[#6F6F70] text-[14px] font-light font-roboto">12 Days</p>
                </div>
            </div>

            <div className="mt-[15px]">
                <p 
                    className="
                        text-[14px] font-roboto font-light
                        text-[#6F6F70]
                        leading-[129%] max-w-[227px]
                    "
                >
                   {task.description}
                </p>
            </div>

            <div className="mt-[12px] flex items-center justify-between">
                <div className="flex items-center gap-[30px]">
                    <div className="flex items-center gap-[10px]">
                        <img src={Attachment} alt="attachments" />
                        <p className="text-[14px] font-light font-roboto text-[#6F6F70]">{task.attachment}</p>
                    </div>
                    <div  className="flex items-center gap-[10px]">
                        <img src={Messages} alt="message"  />
                        <p className="text-[14px] font-light font-roboto text-[#6F6F70]">{task.messages}</p>

                    </div>

                </div>

                <div className="flex items-center gap-[5px]">
                    <img src={AddIcon} alt="add-icon"/>
                    <div className="flex -space-x-1 rtl:space-x-reverse">
                        {
                            new Array(3).fill(0).map((_, index) => (
                                <img
                                    className="w-[26px] h-[26px] border-2 border-white rounded-full"
                                    src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                                    alt="Profile 5"
                                />
                            ))
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
});

export default TaskCard;