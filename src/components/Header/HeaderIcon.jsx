const HeaderIcon = ({ Icon, ariaLabel, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-full transition"
  >
    <Icon size={20} className="text-gray-700 dark:text-gray-200" />
  </button>
);

export default HeaderIcon;
