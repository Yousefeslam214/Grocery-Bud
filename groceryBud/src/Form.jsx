import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newText, setNewText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newText) {
      toast.error("please provide value");
      return;
    }
    addItem(newText);
    setNewText("");
    // console.log(newText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newText}
          onChange={(event) => setNewText(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
