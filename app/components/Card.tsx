import { ReactElement} from "react";
interface Props {
  children: ReactElement | ReactElement[];
}
export default function Card({ children }:Props): React.ReactElement {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
      <div className="card">{children}</div>
    </div>
  );
}







