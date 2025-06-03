/**
 * TableHead component renders the table head.
 *
 * It wraps the table head element and renders any child elements passed to it within the table head.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child elements to be rendered within the table head.
 *
 * @returns {JSX.Element} A JSX element containing the styled table head.
 */
function TableHead({ children }) {

  return (
    <>
      <thead>
        {children}
      </thead>
    </>
  );
}

export default TableHead;
