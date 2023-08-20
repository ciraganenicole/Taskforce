import React from 'react';
import Accounts from '../../features/accounts';
import NavBar from '../../features/menu/navbar';
import Transactions from '../../features/transactions';
 
const Home = () => {
 
    return (
        <div className="h-[100vh]">
            <NavBar />

            <div className="flex flex-row">
               <div className="bg-secondary/10 w-[25%] h-[80vh] p-4 m-6 rounded-[15px]">
                 <h2 className="text-secondary font-bold font-sans text-lg mb-8">Budget per account</h2>
                  <Accounts />
               </div>

               <div className="w-[75%] p-4 my-2">
                  <Transactions />
               </div>
            </div>
        </div>
      )
}
 
export default Home