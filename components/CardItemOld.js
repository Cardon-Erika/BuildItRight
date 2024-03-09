import {
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  ChevronUpDownIcon,
  PaperClipIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";
import Modal from "./Modal";
import { Fragment, useContext, useState } from "react";
import { ItemModalContext } from "@/ItemModalContext";
import { ModalContext } from "@/ModalContext";
import EmployeeData from "../data/employee-data.json";
import { Combobox, Dialog, Transition } from "@headlessui/react";

function CardItem({ data, index }) {
  // const { modalData, addItemModal, selectedCard } =
  //   useContext(ItemModalContext);
  // const [modalDataValue, setModalDataValue] = modalData;
  // const [addItemModalValue, setAddItemModalValue] = addItemModal;
  // const [selectedCardValue, setSelectedCardValue] = selectedCard;
  console.log(EmployeeData);

  const { modalOpen, setModalOpen } = useContext(ModalContext);

  // const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  // console.log(datd
  const [selectedEmployee, setSelectedEmployee] = useState(EmployeeData[0]);
  // const [selectedEmployee, setSelectedEmployee] = useState(data?.assignedTo);
  const [query, setQuery] = useState("");

  const filteredEmployees =
    query === ""
      ? EmployeeData
      : EmployeeData.filter((employee) => {
          return employee.name.toLowerCase().includes(query.toLowerCase());
        });

  const parsedDate = new Date(data.statusUpdated);
  const readableDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log(EmployeeData);

  const showModalHandler = (data) => {
    setModalData(data);
    // console.log(data)
    // setShowAddItemModal(true);
    setModalOpen(true);
    // console.log(modalData)
    // setSelectedCardValue(data.id);
    // setSelectedCard(data.id)
    console.log(data);
  };

  const hideModalHandler = () => {
    // setModalData(data)
    // console.log(data)
    setModalOpen(false);
    setSelectedCard(null);
    // console.log(modalData)
  };

  console.log(modalData);
  console.log(modalOpen);

  return (
    <>
    {/* start old modal */}
      <>
        {modalOpen && selectedCard === index ? (
          <Modal
          // showModal={showAddItemModal}
          // setShowModal={setShowAddItemModal}
          // data={modalData}
          // showModal={showAddItemModal}
          className="py-10"
          >
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll min-h-full fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative min-w-[50%] w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {data.custName}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => hideAddItemModalHandler()}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <h5 className="text-me mb-2 text-lg leading-6 text-slate-800 sm:text-md">
                        Lead #{data.leadNum}
                      </h5>
                      {/* <input className="text-me mb-2 text-lg leading-6 text-slate-800" value={data.custName} /> */}

                      {/* Customer Name */}
                      <div className="my-4">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Customer Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="customer-name"
                            id="customer-name"
                            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md"
                            value={data?.custName}
                          />
                        </div>
                      </div>
                      {/* End Customer Name */}

                      {/* Job Estimate */}
                      <div className="my-4">
                        <label
                          for="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Estimated Job Total
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                              $
                            </span>
                            <input
                              type="text"
                              name="job-estimate"
                              id="job-estimate"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                              value={data?.estTotal}
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Job Estimate */}

                      {/* Assigned Employee */}
                      <div className="my-4">
                        <label
                          for="assigned-employee"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Assigned Employee
                        </label>
                        {/* <select value={selectedEmployee} onChange={setSelectedEmployee}>
                          {EmployeeData.map((employee, index) => (
                            <option key={employee.id} value={employee}>{employee.name}</option>
                          ))}
                        </select> */}
                        <div className="mt-2">
                          <Combobox
                            name="assignedEmployee"
                            value={selectedEmployee}
                            onChange={setSelectedEmployee}
                            // defaultValue={selectedEmployee}
                          >
                            <div className="relative mt-1 sm:max-w-md rounded-md shadow-sm ring-1 ring-inset ring-slate-300">
                              {/* flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md */}
                              <div className="relative w-full cursor-default overflow-hidden rounded-md ring-1 ring-inset ring-slate-300 bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <Combobox.Input
                                  className="w-full border-none pl-3 py-2 pr-10 text-sm leading-5 text-slate-900 focus:ring-0"
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
                                  displayValue={(employee) => employee.name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-slate-400"
                                    aria-hidden="true"
                                  />
                                </Combobox.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery("")}
                              >
                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {filteredEmployees.length === 0 &&
                                  query !== "" ? (
                                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                      Nothing found.
                                    </div>
                                  ) : (
                                    filteredEmployees.map((employee) => (
                                      <Combobox.Option
                                        key={employee.id}
                                        className={({ active }) =>
                                          `relative cursor-default select-none pl-10 pr-4 ${
                                            active
                                              ? "bg-teal-600 text-white"
                                              : "text-slate-900"
                                          }`
                                        }
                                        value={employee}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={`block truncate ${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm
                                              }`}
                                            >
                                              <Image
                                                src={employee.image}
                                                width="36"
                                                height="36"
                                                objectFit="cover"
                                                className="rounded-full "
                                                alt={`${employee.name} image`}
                                              />
                                              <span className="pl-2">
                                                {employee.name}
                                              </span>
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                  active
                                                    ? "text-white"
                                                    : "text-teal-600"
                                                }`}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Combobox.Option>
                                    ))
                                  )}
                                </Combobox.Options>
                              </Transition>
                            </div>
                          </Combobox>
                        </div>
                      </div>
                      {/* End Assigned Employee */}

                      {/* Notes */}
                      <div className="my-4">
                        <label
                          for="notes"
                          className="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Notes
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={4}
                            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                            placeholder="Add any details..."
                          />
                        </div>
                      </div>
                      {/* End Notes */}

                      {/* Messages */}
                      <div className="my-4">
                        <label
                          for="messages"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Messages
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="messages"
                            id="messages"
                            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md"
                            // value={data?.custName}
                          />
                          <div className="my-2 p-3 bg-slate-100 ring-1 ring-slate-300 rounded-md flex flex-col">
                            {data.chat.map((message) => {
                              const parsedMessageDate = new Date(message.date);
                              const readableMessageDate =
                                parsedMessageDate.toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                });
                              console.log('compare message author and assigned to emp');
                              console.log(message.author)
                              console.log(data.assignedTo)

                              return (
                                <div key={message.id} className={`mb-3 flex flex-col col-auto ${message.author === data.assignedTo ? "items-end" : "items-start"}`}>
                                  <div style={{maxWidth: '80%'}} className={`text-me text-lg leading-6 rounded-md py-2 px-4 text-slate-800 ${message.author === data.assignedTo ? " bg-teal-300" : "bg-slate-300"}`}>
                                    {message.text}
                                  </div>
                                  <div className="mt-1 mx-1 text-sm">
                                    {/* <div></div>
                                  <div></div> */}
                                    {/* {message.author} at {readableMessageDate} */}
                                    {EmployeeData.map((employee, index) => {
                                      return (
                                        <>
                                          {message.author === employee.id ? (
                                            <span key={index}>{employee.name} at {readableMessageDate}</span>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      {/* End Messages */}

                      {/* <h5 className="text-me mb-2 text-lg leading-6 text-slate-800">
                        ${data.estTotal} (est job total)
                      </h5> */}
                      <h5 className="text-me text-sm leading-6 text-slate-800">
                        Status Updated: {readableDate}
                      </h5>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => hideAddItemModalHandler()}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        // onClick={() => setModalDatalValue(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          </Modal>
        ) : null}
      </>
      {/* End old modal  */}

    
      <Draggable index={index} draggableId={data.id.toString()}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-white rounded-md p-3 mt-3 mx-2"
            data-id={index}
            // selectedCard={selectedCard}
            onClick={() => {
              showAddItemModalHandler(data);
              // key={data.id}
              // selectedCard={selectedCard}
              setSelectedCard(index);
            }}
          >
            {/* Priortity label - needed??? */}
            {/* <label
              className={`bg-gradient-to-r  px-2 py-1 rounded text-white text-sm
        ${
          data.priority === 0
            ? "from-blue-500 to-blue-200"
            : data.priority === 1
            ? "from-green-500 to-green-200"
            : "from-red-500 to-red-200"
        }
      `}
            >
              {data.priority === 0
                ? "Low Priority"
                : data.priority === 1
                ? "Medium Priority"
                : "High Priority"}
            </label> */}
            {/* <PlusIcon
              onClick={() => {
                // setShowAddItemModal(true)
                // setModalData(this.data)
                // setSelectedCard(this.data.id)
                // console.log(this.data)
                // showItemModal={showAddItemModal}
                // cardData={modalData}
                // cardId={selectedCard}
                showAddItemModalHandler(data);
              }}
            /> */}
            <div className="flex justify-between items-end mb-2">
              <h5 className="text-me text-lg leading-6 text-slate-800">
                Lead #{data.leadNum}
              </h5>
              <ul className="flex space-x-3">
                {/* <li>{`EmployeeData.map(employee => data.id === employee.id ? src=${employee.image} : '')`}</li> */}
                {EmployeeData.map((employee, index) => {
                  return (
                    <>
                      {data.assignedTo === employee.id ? (
                        <li key={index}>
                          <Image
                            src={employee.image}
                            width="36"
                            height="36"
                            objectFit="cover"
                            className="rounded-full"
                            alt={`${employee.name} image`}
                          />
                        </li>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
                {/* {data.assignedTo.map((assign, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={assign.avt}
                        width="36"
                        height="36"
                        objectFit="cover"
                        className="rounded-full"
                        alt="random user image"
                      />
                    </li>
                  );
                })} */}
              </ul>
              {/* <ul className="flex space-x-3">
                {data.assignedTo.map((assign, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={assign.avt}
                        width="36"
                        height="36"
                        objectFit="cover"
                        className="rounded-full"
                        alt="random user image"
                      />
                    </li>
                  );
                })} */}
              {/* <li>
                  <button className="border border-dashed flex items-center w-9 h-9 border-slate-500 justify-center rounded-full">
                    <PlusIcon className="w-5 h-5 text-slate-500" />
                  </button>
                </li> */}
              {/* </ul> */}
            </div>
            <h5 className="text-me mb-2 text-lg leading-6 text-slate-800">
              {data.custName}
            </h5>
            <h5 className="text-me mb-2 text-lg leading-6 text-slate-800">
              ${data.estTotal} (est job total)
            </h5>

            <div className="flex justify-between">
              <div className="flex space-x-4 items-center">
                <span className="flex space-x-2 items-center">
                  <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-slate-500" />
                  <span>{data.chat.length}</span>
                </span>
                <span className="flex space-x-2 items-center">
                  <PaperClipIcon className="w-4 h-4 text-slate-500" />
                  <span>{data.attachment}</span>
                </span>
              </div>

              {/* <ul className="flex space-x-3">
                {data.assignedTo.map((assign, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={assign.avt}
                        width="36"
                        height="36"
                        objectFit="cover"
                        className="rounded-full"
                        alt="random user image"
                      />
                    </li>
                  );
                })}
                <li>
                  <button className="border border-dashed flex items-center w-9 h-9 border-slate-500 justify-center rounded-full">
                    <PlusIcon className="w-5 h-5 text-slate-500" />
                  </button>
                </li>
              </ul> */}
            </div>
            <h5 className="text-me text-sm leading-6 text-slate-800">
              Status Updated: {readableDate}
            </h5>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default CardItem;
