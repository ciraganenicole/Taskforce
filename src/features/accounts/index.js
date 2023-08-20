import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../../firebase'
import AddNewAccount from './addAccount'
import Account from './account'
import {BsPlusCircle} from "react-icons/bs"

const Accounts = () => {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const accountColRef = query(collection(db, 'accounts'), orderBy('created', 'desc'))
    onSnapshot(accountColRef, (snapshot) => {
      setAccounts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className="flex flex-col h-[100%] justify-between">
        <div className="h-[90%]">
         {accounts.map((account) => (
            <Account
              id={account.id}
              key={account.id}
              accountName={account.data.accountName} 
              amount={account.data.amount}
              currency={account.data.currency}
            />
          ))}

        <button onClick={() => setOpenAddModal(true)} className='flex flex-row items-center gap-2'>
            <BsPlusCircle className='text-secondary' size={24} />
            <p className="text-secondary">Add account</p>
        </button>
        </div>

      {openAddModal &&
        <AddNewAccount onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }
    </div>
  )
}

export default Accounts