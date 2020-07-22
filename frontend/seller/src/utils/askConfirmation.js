export default (setConfirmationOpen, cb) => {
  setConfirmationOpen(true);
  document
    .getElementById('confirmation_yes_btn')
    .addEventListener('click', cb());
};
