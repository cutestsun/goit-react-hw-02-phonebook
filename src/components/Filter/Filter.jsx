export const Filter = ({ value, onFilterChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onFilterChange}
      placeholder="Search by name"
    />
  );
};
