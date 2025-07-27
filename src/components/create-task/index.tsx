import  { useCallback, useState } from "react";
import Label from "../reusable/label";
import Input from "../reusable/input";
import Button from "../reusable/button";
import TextArea from "../reusable/text-area";
import CloseIcon from "../icon/close-icon";
import Select from "../reusable/select";
import DateInput from "../reusable/date-picker";
import axiosInstance from "../../lib/axios";
import AssigneeSelector from "./assignee-selectore";
import { useAuth } from "../../context/authContext";
import { useTaskContext } from "../../context/taskContext";
import { useUserContext } from "../../context/usersContext";
import toast from 'react-hot-toast';


const priorities = [
  { name:"Low", value:'low'},
  { name:'Medium', value:'medium'},
  { name:'High', value:'high'}
];

const CreateTask = () => {
    const {getAllTasks} = useTaskContext();
    const {users} = useUserContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);
    const closeDrawer = () => setIsOpen(false);

    const {user} = useAuth();

    const [task, setTask] = useState({
      title: "",
      description: "",
      assignedTo: "",     
      status: "ToDo",      
      priority: "",  
      dueDate: '' ,
      managedBy: ""       
    });

    
    const handleChange = useCallback((e: { target: { name: any; value: any; }; }) => {
      const { name, value} = e.target;
      setTask((prev) => ({
          ...prev,
          [name]: value,
      }));
    }, [task]);


    const handleSubmit = useCallback(async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          await axiosInstance.post('/tasks', {
            ...task,
            managedBy: user?._id
          });
          setTimeout(() => {
            toast.success("New task created success");
          }, 2000);
          setIsOpen(false);
          getAllTasks()
        } catch (error) {
          console.log(error);
        }
    }, [task]);
  

  return (
    <>
      {/* Toggle Button */}
      <div className="text-center">
        <Button onClick={toggleDrawer} type="button">
          Create new Task
        </Button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          New Task
        </h5>

        {/* Close Button */}
        <Button 
          onClick={closeDrawer} type="button" 
          className="
            text-gray-400 bg-transparent hover:bg-gray-200 
            hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute 
            top-2.5 end-2.5 inline-flex items-center justify-center 
            dark:hover:bg-gray-600 dark:hover:text-white
          " 
        >
          <CloseIcon />
        </Button>

        {/* Form */}
        <form className="mb-6"  onSubmit={handleSubmit}>
          <div className="mb-6">
            <Label type="title" text="Title"/>
            <Input type="text" name="title" value={task.title} updateChange={handleChange} placeholder="Enter title"/>
          </div>

          <div className="mb-6">
            <Label text="Description" type="description"/>
            <TextArea
              name="description"
              placeholder="Task description..."
              updateChange={handleChange}
              value={task.description}
            />
          </div>


          <div className="mb-6">
            <Select
              value={task.priority}
              placeholder="Select Priority"
              options={priorities} 
              label={"Select Priority"} 
              name={"priority"} 
              updateChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <Label text="Due date" type="due date"/>
            <DateInput
              placeholder="Select due date"
              name="dueDate"
              value={task.dueDate}
              updateChange={handleChange}
            />
          </div>


          <div className="mb-6">
            <AssigneeSelector
              value={task.assignedTo}
              placeholder="Select assignee"
              options={users} 
              label={"Select assignee"} 
              name={"assignedTo"} 
              updateChange={handleChange}
            />
          </div>

          <Button type="submit">
            Create Task
          </Button>
        </form>

       
      </div>
    </>
  );
};

export default CreateTask;
