import Head from "next/head";
import Layout from "@/components/Layout";
import {
  Bars3BottomLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  CurrencyDollarIcon,
  EllipsisVerticalIcon,
  ListBulletIcon,
  PlusCircleIcon,
  PlusIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import CardItem from "@/components/CardItem";
import BoardData from "../data/board-data.json";
import EmployeeData from "../data/employee-data.json"
import Modal from "@/components/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Fragment, useContext, useEffect, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "@/ModalContext";

function createGuidId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function LeadBoard() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    custName: '',
    estTotal: '',
    notes: '',
    // assignedTo: []
    assignedTo: ''
  })
  const [addLead, setAddLead] = useState(false)
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [count, setCount] = useState(100)

  // const calcMaxHeight = calc(100vh-290px)

  // console.log(BoardData)


  const onDragEnd = (re) => {
    // console.log(re);
    //remove from source list and add to destination list
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const showAddLeadHandler = () => {
    setModalOpen(true)
    setAddLead(true)
  }

  const formHandler = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    console.log(fieldName)
    console.log(fieldValue)

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }))
  }

  const hideAddLeadHandler = () => {
    setModalOpen(false);
    setAddLead(false)
    // setSelectedCard(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = count
    formData.leadNum = count
    formData.chat = [{}]
    formData.attachment = 0
    formData.updates = [{
      id: count,
      type: 'New Lead Created',
      timestamp: Date.now()
    }]
    formData.assignedTo = 1
    // formData.assignedTo = {id: 1, name: 'Ross Gellar', image: '/images/man1.png'} // Make this dynamic!!!
    console.log(formData)
    BoardData[0].items.push(formData)
    console.log(BoardData)
    setCount((prevState) => (
      prevState +1
    ))
    console.log(count)
    setFormData({
      custName: '',
      estTotal: '',
      notes: '',
      // assignedTo: []
      assignedTo: ''
    })
    setModalOpen(false)
  }

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, [formData]);

  return (
    <main className="pl-40 pt-16">
      {/* <div className="p-10 flex flex-col h-screen"> */}

      {modalOpen && addLead ? (
        <Transition appear show={modalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={hideAddLeadHandler}>
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
                      Add A New Lead
                    </Dialog.Title>
                    {/* <hr/> */}
                    <form onSubmit={handleSubmit}>
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
                            for="custName"
                            class="block text-sm font-medium leading-6 text-slate-900"
                          >
                            Customer Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="custName"
                              id="custName"
                              className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md"
                              value={formData?.custName}
                              onChange={formHandler}
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
                            for="estTotal"
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
                                name="estTotal"
                                id="estTotal"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                                value={formData?.estTotal}
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Job Estimate */}

                      {/* Assigned Employee */}
                      {/* <div className="my-5 flex flex-row">
                        <div>
                          <UserGroupIcon className="w-5 h-5 me-2 mt-1 text-slate-900" />
                        </div>
                        <div className="w-full">
                          <label
                            for="assignedTo"
                            className="block text-sm font-medium leading-6 text-slate-900"
                          >
                            Assigned Employee
                          </label>
                          <div className="mt-1">
                            <Combobox
                              name="assignedTo"
                              // value={selectedEmployee}
                              // onChange={setSelectedEmployee}
                            >
                              <div className="relative mt-1 sm:max-w-md rounded-md shadow-sm ring-1 ring-inset ring-slate-300">
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
                                    {EmployeeData.length === 0 &&
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
                      </div> */}
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
                              id="notes"
                              name="notes"
                              rows={4}
                              className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                              value={formData?.notes}
                              placeholder="Add details and notes..."
                              onChange={formHandler}
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Notes */}

                      {/* Messages */}
                      {/* <div className="my-5 flex flex-row">
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
                                const readableMessageDate = formatTimestamp(
                                  message.date
                                );
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
                      </div> */}
                      {/* End Messages */}

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
                        onClick={() => hideAddLeadHandler()}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        // onClick={() => setModalDatalValue(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : null}

      <div className="p-10 flex flex-col overflow-auto h-[calc(100vh-128px)]">
        {/* Board Header */}
        <div className="flex justify-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-slate-600">Leads</h4>
            {/* remove down chevron */}
            {/* <ChevronDownIcon
              className="w-9 h-9 text-slate-500 rounded-full
            p-1 bg-white ml-5 shadow-xl"
            /> */}
          </div>
        </div>

        {/* Board columns */}
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-6 gap-5 my-5">
              {/* <div className="flex m-auto gap-5 my-5"> */}
              {BoardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-slate-100 rounded-md shadow-md flex flex-col relative overflow-hidden ${
                              snapshot.isDraggingOver && "bg-green-100"
                            }`}
                          >
                            <span className="w-full h-1 bg-gradient-to-r from-slate-600 to-slate-400 absolute inset-x-0 top-0"></span>
                            <h4 className="p-3 flex justify-between items-center mb-2">
                              <span className="text-2xl text-slate-600">
                                {board.name}
                              </span>
                              <span className="text-white bg-teal-600 rounded-full w-8 h-8 flex justify-center items-center font-bold">
                                {board.items.length}
                              </span>
                            </h4>

                            <div className="overflow-y-auto h-auto">
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  console.log(item.custName)
                                  console.log(item.id)
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>

                            <button
                              className="flex justify-center items-center my-3 space-x-2 text-lg"
                              onClick={() => {showAddLeadHandler()}}
                            >
                              <span>Add task</span>
                              <PlusCircleIcon className="w-5 h-5 text-slate-500" />
                            </button>
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </main>
  );
}
