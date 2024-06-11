import { createContext, PropsWithChildren, useContext } from "react";

export const RepositoryContext = createContext(1);

export const RepositoryProvider = ({
    repository,
    children,
  }: PropsWithChildren<{ readonly repository: any }>) => {
    return (
      <RepositoryContext.Provider value={repository}>
        {children}
      </RepositoryContext.Provider>
    );
  };

  export function useRepository(): any {
    return useContext(RepositoryContext);
  }