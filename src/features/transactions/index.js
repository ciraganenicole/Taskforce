import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { BsPlusCircle } from "react-icons/bs";
import AddNewTransaction from "./addTransaction";
import { doc, deleteDoc } from "firebase/firestore";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { fetchData } from "../../utils/fetchData";
import EditTransaction from "./editTransaction";

const Transactions = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [open, setOpen] = useState({ edit: false, view: false });
  const [records, setRecords] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  console.log(subCategories);

  useEffect(() => {
    fetchData(setRecords, "records");
    fetchData(setAccounts, "accounts");
    fetchData(setSubCategories, `subCategories`);
  }, []);

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  const handleDelete = async () => {
    const recordRef = doc(db, "records");
    try {
      await deleteDoc(recordRef);
    } catch (err) {
      alert(err);
    }
  };
  console.log(accounts);
  return (
    <div className="flex flex-col h-[100%]">
      <button
        onClick={() => setOpenAddModal(true)}
        className="flex flex-row items-center gap-3 bg-secondary w-[15%] p-2 rounded-[15px]"
      >
        <BsPlusCircle className="text-paragraph100" size={24} />
        <p className="text-paragraph100">Add record</p>
      </button>
      <div className="h-[90%]">
        <table>
          <thead>
            <tr className="grid grid-cols-5 bg-secondary p-4 text-paragraph100 mt-2">
              <th className="text-start px-4">Account</th>
              <th className="text-start px-4">Category</th>
              <th className="text-start px-4">SubCategory</th>
              <th className="text-start px-4">Amount</th>
              <th className="text-start px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              return (<tr
                className="grid grid-cols-5 bg-secondary/10 p-4 text-secondary my-1"
                key={Math.random()}
              >
                <td className="truncate hover:text-clip px-4">
                  {
                    accounts.find(
                      (account) => (account.id === record.data.account)
                    )?.data.accountName
                  }
                </td>
                <td className="truncate hover:text-clip px-4">
                  {record.data.category}
                </td>
                <td className="truncate hover:text-clip px-4">
                  {
                    subCategories.filter(
                      (subCategory) =>
                        (record.data.subCategory.includes(subCategory.id))
                    )?.map(subC => subC.data.name)?.join('|')
                  }
                </td>
                <td className="truncate hover:text-clip px-4">
                  {record.data.amount} {record.data.currency}
                </td>
                <td>
                  <div className="flex flex-row items-center gap-2">
                    <button onClick={() => setOpen({ ...open, edit: true })}>
                      <FiEdit2 size={16} />
                    </button>
                    <button onClick={handleDelete}>
                      <MdDelete size={16} />
                    </button>
                  </div>
                </td>
                {open.edit && (
                  <EditTransaction
                    onClose={handleClose}
                    toEditAmount={record.data.amount}
                    open={open.edit}
                    id={record.id}
                  />
                )}
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      {openAddModal && (
        <AddNewTransaction
          onClose={() => setOpenAddModal(false)}
          open={openAddModal}
        />
      )}
    </div>
  );
};

export default Transactions;
