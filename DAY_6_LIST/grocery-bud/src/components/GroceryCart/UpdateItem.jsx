import { useState } from 'react';
import { toast } from 'react-toastify';

function UpdateItem({ updateVal, id, updateGroceryItem }) {

  const [updateInp, setUpdateInp] = useState(updateVal);

  const handleUpdate = () => {
    if(!updateInp) {
      toast.error("Empty Todo update not allowed");
      return;
    }
    updateGroceryItem(updateInp, id);
  }

  return <div>
    <input type="text" value={updateInp} onChange={(e) => setUpdateInp(e.target.value)}  />
    <button onClick={handleUpdate}>Update this todo</button>
  </div>;
}

export default UpdateItem;
