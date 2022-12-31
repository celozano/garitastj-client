export const Footer = () => {
  return (
    <div className="flex justify-center p-2 text-xs">
      <div className="text-center">
        <p>
          Created by{' '}
          <a
            href="https://carloslozano.dev"
            target="_blank"
            className="hover:underline"
          >
            Carlos Lozano
          </a>
        </p>
        <p>Data provided by CBP</p>
      </div>
    </div>
  );
};
