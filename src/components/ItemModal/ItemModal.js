import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard);
  };
  return (
    <div className={`modal`}>
      <div className="modal_item-content">
        <button className=" modal_item-close" type="button" onClick={onClose} />
        <img className="modal_item-image" src={selectedCard.link} />
        <div className="modal_item-infospace">
          <div>
            <div className="modal_item-name"> {selectedCard.name}</div>
            <div className="modal_item-type">
              Weather type: {selectedCard.weather}
            </div>
          </div>
          <div>
            <button
              className="modal_item-deletebutton"
              type="button"
              onClick={handleDelete}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
