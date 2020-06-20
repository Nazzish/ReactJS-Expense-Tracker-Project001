import React from 'react';
import './App.css';
import { Header } from './Components/Headers'
import { Balance } from './Components/Balance'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
import { CopyRights } from './Components/CopyRights' 
function App() {
  return (
    //<div clasName="cont">
    <div  className="cont">
      <GlobalProvider>
      <Header />
      
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <CopyRights />

      </div>
      
      </GlobalProvider>
    </div>
    //</div>
  );
}

export default App;
