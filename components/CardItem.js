import {
  Bars3BottomLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
  PaperClipIcon,
  PlusIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";
import Modal from "./Modal";
import { Fragment, useContext, useState } from "react";
import { ItemModalContext } from "@/ItemModalContext";
import { ModalContext } from "@/ModalContext";
import EmployeeData from "../data/employee-data.json";
import { Combobox, Dialog, Disclosure, Transition } from "@headlessui/react";

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

  function formatTimestamp(timestamp) {
    console.log(timestamp)
    const parsedDate = new Date(timestamp);
    const readableDate = parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    return readableDate
  }

  function formatDateOnly(timestamp) {
    const parsedDate = new Date(timestamp);
    const readableDate = parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
    return readableDate
  }

  const updates = data.updates
  let lastUpdate = 'No Updates'
  if(updates?.length > 0) {
    lastUpdate = formatDateOnly(updates[updates.length-1].timestamp)
  }

  console.log(lastUpdate);

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
      {modalOpen && selectedCard === index ? (
        <Transition appear show={modalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={hideModalHandler}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/35" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md min-w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-slate-900 pb-3"
                    >
                      Lead #{data.leadNum} - {data.custName}
                    </Dialog.Title>
                    {/* <hr/> */}
                    <div className="mt-2">
                      {/* <h5 className="text-me mb-2 text-lg leading-6 text-slate-800 sm:text-md">
                      Lead #{data.leadNum}
                    </h5> */}
                      {/* <input className="text-me mb-2 text-lg leading-6 text-slate-800" value={data.custName} /> */}

                      {/* Customer Name */}
                      <div className="my-5 flex flex-row">
                      <div>
                        <UserCircleIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                      </div>
                      <div className="w-full">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Customer Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="customer-name"
                            id="customer-name"
                            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md"
                            value={data?.custName}
                          />
                        </div>
                        </div>
                      </div>
                      {/* End Customer Name */}

                      {/* Job Estimate */}
                      <div className="my-5 flex flex-row">
                        <div>
                          <CurrencyDollarIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                        <label
                          for="first-name"
                          className="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Estimated Job Total
                        </label>
                        <div className="mt-1">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-slate-500 sm:text-sm">
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
                      </div>
                      {/* End Job Estimate */}

                      {/* Assigned Employee */}
                      <div className="my-5 flex flex-row">
                        <div>
                          <UserGroupIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                        <label
                          for="assigned-employee"
                          className="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Assigned Employee
                        </label>
                        {/* <select value={selectedEmployee} onChange={setSelectedEmployee}>
                          {EmployeeData.map((employee, index) => (
                            <option key={employee.id} value={employee}>{employee.name}</option>
                          ))}
                        </select> */}
                        <div className="mt-1">
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
                                    <div className="relative cursor-default select-none px-4 py-2 text-slate-900">
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
                      </div>
                      {/* End Assigned Employee */}

                      {/* Notes */}
                      <div className="my-5 flex flex-row">
                        <div>
                          <Bars3BottomLeftIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                        <label
                          for="notes"
                          className="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Notes
                        </label>
                        <div className="mt-1">
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
                      </div>
                      {/* End Notes */}

                      {/* Messages */}
                      <div className="my-5 flex flex-row">
                        <div>
                          <ChatBubbleBottomCenterTextIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                        <label
                          for="messages"
                          className="block text-sm font-medium leading-6 text-slate-900"
                        >
                          Messages
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="messages"
                            id="messages"
                            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md"
                            // value={data?.custName}
                            placeholder="Write a comment..."
                          />
                          <div className="my-2 p-3 bg-slate-100 ring-1 ring-slate-300 rounded-md flex flex-col">
                            {data.chat.map((message) => {
                              const readableMessageDate = formatTimestamp(message.date)
                              // const parsedMessageDate = new Date(message.date);
                              // const readableMessageDate =
                              //   parsedMessageDate.toLocaleDateString("en-US", {
                              //     year: "numeric",
                              //     month: "short",
                              //     day: "numeric",
                              //     hour: "2-digit",
                              //     minute: "2-digit",
                              //   });
                              // console.log(
                              //   "compare message author and assigned to emp"
                              // );
                              // console.log(message.author);
                              // console.log(data.assignedTo);

                              return (
                                <div
                                  key={message.id}
                                  className={`mb-3 flex flex-col col-auto ${
                                    message.author === data.assignedTo
                                      ? "items-end"
                                      : "items-start"
                                  }`}
                                >
                                  <div
                                    style={{ maxWidth: "80%" }}
                                    className={`text-me leading-6 rounded-md py-2 px-4 text-slate-900 text-sm ${
                                      message.author === data.assignedTo
                                        ? " bg-teal-300"
                                        : "bg-slate-300"
                                    }`}
                                  >
                                    {message.text}
                                  </div>
                                  <div className="mt-1 mx-1 text-xs text-slate-900">
                                    {/* <div></div>
                                  <div></div> */}
                                    {/* {message.author} at {readableMessageDate} */}
                                    {EmployeeData.map((employee, index) => {
                                      return (
                                        <>
                                          {message.author === employee.id ? (
                                            <span key={index}>
                                              <span className="font-bold">
                                                {employee.name}
                                              </span>{" "}
                                              {readableMessageDate}
                                            </span>
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
                      </div>
                      {/* End Messages */}

                      {/* Updates */}
                      {/* <div className="w-full px-4 pt-16"> */}
                      <div className="my-5 flex flex-row">
                        <div>
                          <ListBulletIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex text-sm font-medium text-slate-900 leading-6 mb-2 items-center">
                                <span>Activity</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-4 w-4 text-slate-900 ms-2`}
                                />
                              </Disclosure.Button>
                              {/* <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500"> */}
                              <Disclosure.Panel>
                                {data.updates?.map((update, index) => {
                                  const readableUpdateDate = formatTimestamp(update.timestamp)
                                  // console.log(update);
                                  // const parsedUpdateDate = new Date(
                                  //   update.timestamp
                                  // );
                                  // const readableUpdateDate =
                                  //   parsedUpdateDate.toLocaleDateString(
                                  //     "en-US",
                                  //     {
                                  //       year: "numeric",
                                  //       month: "short",
                                  //       day: "numeric",
                                  //       hour: "2-digit",
                                  //       minute: "2-digit",
                                  //     }
                                  //   );
                                  return (
                                    <div key={index} className="text-xs pb-1">
                                      <p>
                                        <span className="font-bold">
                                          {update.type}
                                        </span>
                                        {" - "}
                                        {readableUpdateDate}
                                      </p>
                                    </div>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        </div>
                      </div>
                      {/* </div> */}
                      {/* End Updates */}

                      {/* <h5 className="text-me mb-2 text-lg leading-6 text-slate-800">
                        ${data.estTotal} (est job total)
                      </h5> */}
                      {/* <h5 className="text-me text-sm leading-6 text-slate-800">
                        Status Updated: {readableDate}
                      </h5> */}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => hideModalHandler()}
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : null}

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
              showModalHandler(data);
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
              <div className="flex space-x-6 items-center">
                <span className="flex space-x-1 items-center">
                  <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-slate-500" />
                  <span>{data.chat.length}</span>
                </span>
                <span className="flex space-x-1 items-center">
                  <PaperClipIcon className="w-4 h-4 text-slate-500" />
                  <span>{data.attachment}</span>
                </span>
                { data.notes ? (
                <span className="flex space-x-1 items-center">
                  <Bars3BottomLeftIcon className="w-4 h-4 text-slate-500" />
                </span> ) : ''
                }
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
            <h5 className="text-me text-sm leading-6 text-slate-500">
              Last Update: {lastUpdate}
            </h5>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default CardItem;
