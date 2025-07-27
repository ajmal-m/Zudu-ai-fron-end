export interface UserRef {
  _id: string;
  name: string;
  email: string;
}

export interface Task {
  _id:string;
  title: string;
  description: string;
  status: "ToDo" | "InProgress" | "Done"; // or just string if dynamic
  priority: "low" | "medium" | "high";     // adjust as needed
  dueDate: string;       // ISO date string
  createdAt: string;
  updatedAt: string;
  assignedTo: UserRef;
  managedBy: UserRef;
}
export interface TaskResponse {
  data: Task[];
  total: number;
  page: number;
  limit: number;
  totalPages:number;
}

