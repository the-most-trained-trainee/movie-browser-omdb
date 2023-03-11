"use client";

const AddFavorite = ({ favorite }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(favorite);
        }}>
        add favorit
      </button>
    </div>
  );
};

export default AddFavorite;
