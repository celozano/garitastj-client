interface Props {
  message?: string;
}
export const Error = ({
  message = 'Something went wrong. Try again later.',
}) => {
  return <div className="p-2">{message}</div>;
};
