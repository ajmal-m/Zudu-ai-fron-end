import { create } from 'zustand';

type UserData = {
  email: string;
  password: string;
  isChecked: boolean;
  [key: string]: any; // Allow string indexing for dynamic fields
};

type LoginStore = {
  loading: boolean;
  userData: UserData;
  updateUserData: ({ name, value }: any) => void;
  logInUser: () => void;
};

export const useLoginStore = create<LoginStore>((set, get) => ({
  loading: false,
  userData: { email: "", password: "", isChecked: false },

  updateUserData: ({ name, value }: any) =>
    set((state) => ({
      userData: {
        ...state.userData,
        [name]: value,
      },
    })),

  logInUser: () => {
    const userData = get().userData;
    set({ loading: true})
    console.log('Logging in with:', userData);
    setTimeout(() => {
      set({ loading:false})
    }, 3000)
  }
}));
