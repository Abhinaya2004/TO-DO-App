import "../style.css"
export default function ConfirmationModal  ({ show, onClose, onConfirm })  {
    if (!show) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <h4>Are you sure you want to delete this item?</h4>
          <button onClick={onConfirm}>Yes, Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  };