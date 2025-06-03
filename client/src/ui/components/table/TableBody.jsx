
/**
 * TableBody component renders the table body.
 *
 * It wraps the table body element and renders any child elements passed to it within the table body.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child elements to be rendered within the table body.
 *
 * @returns {JSX.Element} A JSX element containing the styled table body.
 */
function TableBody({ children }) {

  return (
    <>
      <tbody>
        {children}
      </tbody>
    </>
  );
}

export default TableBody;
