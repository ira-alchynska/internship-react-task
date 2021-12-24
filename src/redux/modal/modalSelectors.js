const selectIsModalOpen = (state) => state.modal.isModalOpen;
const selectModalData = (state) => state.modal.modalData;

const ModalSelectors = {
  selectIsModalOpen,
  selectModalData,
};

export default ModalSelectors;
