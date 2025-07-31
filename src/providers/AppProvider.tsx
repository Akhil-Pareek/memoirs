import CommonProvider, { Language } from "@/contexts/CommonContext";

interface IContextProvider {
  children: any;
}

const AppContextProvider = ({ children }: IContextProvider) => {
  return <CommonProvider>{children}</CommonProvider>;
};

export default AppContextProvider;
