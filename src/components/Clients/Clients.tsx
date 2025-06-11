import { clients } from "../../constants";

const Clients = () => (
  <section className="my-4">
    <div className="flex flex-row items-center justify-center flex-wrap w-full">
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
