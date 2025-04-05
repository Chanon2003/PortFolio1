import { useState } from 'react';

const Picture = ({ picture, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleClick} className="hover:scale-105 cursor-pointer transition-transform duration-200">
        <img src={picture} className="w-5/6 rounded-md" alt={title} />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-3xl max-h-[90vh] p-4 bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
            <img src={picture} alt={title} className="max-w-full max-h-[80vh] rounded-md" />
            <div className="text-center mt-2 text-lg font-semibold">{title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Picture;
