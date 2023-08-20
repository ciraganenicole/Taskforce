import {useState} from 'react'
import { doc, deleteDoc} from "firebase/firestore";
import {db} from '../../firebase'
import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {BsEyeFill} from 'react-icons/bs'
import AccountItem from './accountDetail';
import EditAccount from './editAccount';

const Account = ({id, accountName, amount, currency}) => {
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  const handleDelete = async () => {
    const accountRef = doc(db, 'accounts', id)
    try{
      await deleteDoc(accountRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
        <ul className='flex flex-col'>
          <li className='flex flex-row items-center justify-between mb-4'>
            <p className="text-icon text-sm font-bold font-sans">{accountName}</p>
            <div className='flex flex-row items-center gap-2'>
              <button onClick={() => setOpen({...open, view: true})}>
                <BsEyeFill size={16}/>
              </button>
              <button  onClick={() => setOpen({...open, edit : true})}>
                <FiEdit2 size={16}/>
              </button>
              <button onClick={handleDelete}>
               <MdDelete size={16}/>
              </button>
            </div>
          </li>
        </ul>

      {open.view &&
        <AccountItem 
          onClose={handleClose} 
          accountName={accountName} 
          amount={amount}
          currency={currency}
          open={open.view} />
      }

      {open.edit &&
        <EditAccount 
          onClose={handleClose} 
          toEditName={accountName}  
          toEditAmount={amount}
          toEditCurrency={currency}
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Account