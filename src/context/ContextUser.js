import React, {useState, createContext} from 'react';

const ContextUser = createContext([]);
const ProviderUser = ({children}) => {
  const [user, setUser] = useState([]);
  let data = {user, setUser};
  //  console.log(data)
  return <ContextUser.Provider value={data}>{children}</ContextUser.Provider>;
};

export {ContextUser, ProviderUser};
