import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        footer={
          <>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button style={{ background: '#007bff', color: '#fff' }}>Confirm</button>
          </>
        }
      >
        <p>This is the body of the modal. You can place any content here.</p>
        <p>It can have text, forms, or other components.</p>
      </Modal>
    </>
  );
};
