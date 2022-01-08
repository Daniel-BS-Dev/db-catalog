type Props = {
  name: string;
};

const Categorybadge = ({ name }: Props) => {
  return (
      <div className="categorybadge">{name}</div>

  );
};

export default Categorybadge;
