import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";


export type ReducersList = {
   // eslint-disable-next-line no-unused-vars
   [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   children: ReactElement<any,any>;
   reducers: ReducersList;
   removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
   const {
      children,
      reducers,
      removeAfterUnmount,
   } = props;

   const store = useStore() as ReduxStoreWithManager;
   const dispatch = useDispatch();

   useEffect(() => {
      Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
         store.reducerManager.add(name, reducer);
         dispatch({ type: `@INIT ${name} reducer` });
      });

      return () => {
         if (removeAfterUnmount) {
            // eslint-disable-next-line no-unused-vars
            Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
               store.reducerManager.remove(name);
               dispatch({ type: `@DESTROY ${name} reducer` });
            });
         }
      };
      // eslint-disable-next-line
   }, []);

   return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
         {children}
      </>
   );
};
