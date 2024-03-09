import Head from "next/head";
import Layout from "@/components/Layout";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import CardItem from "@/components/CardItem";
import BoardData from "../data/board-data.json";
import Modal from "@/components/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

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
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // const calcMaxHeight = calc(100vh-290px)

  // console.log(BoardData)

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

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

  const onTextAreaKeyPress = (e) => {
    console.log(e.target.attributes);
    if (e.keyCode === 13) {
      //Enter
      const val = e.target.value;
      if (val.length === 0) {
        setShowForm(false);
      } else {
        const boardId = e.target.attributes["data-id"].value;
        const item = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat: 0,
          attachment: 0,
          assignees: [],
        };
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = "";
      }
    }
  };

  return (
    <main className="pl-40 pt-16">
      {/* <div className="p-10 flex flex-col h-screen"> */}
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

          {/* images of user - would this be useful */}
          {/* <ul className="flex space-x-3">
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                width="36"
                height="36"
                // objectFit="cover"
                className="rounded-full"
                alt="random user image"
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/76.jpg"
                width="36"
                height="36"
                // objectFit="cover"
                className="rounded-full"
                alt="random user image"
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/78.jpg"
                width="36"
                height="36"
                // objectFit="cover"
                className="rounded-full"
                alt="random user image"
              />
            </li>
            <li>
              <button className="border border-dashed flex items-center w-9 h-9 border-slate-500 justify-center rounded-full">
                <PlusIcon className="w-5 h-5 text-slate-500" />
              </button>
            </li>
          </ul> */}
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
                              {/* <EllipsisVerticalIcon className="w-5 h-5 text-slate-500" /> */}
                              <span className="text-white bg-teal-600 rounded-full w-8 h-8 flex justify-center items-center font-bold">{board.items.length}</span>
                            </h4>

                            {/* <div className="overflow-y-auto overflow-x-hidden h-auto containerScroll"> */}
                            <div className="overflow-y-auto h-auto">
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                      // onClick={() => {
                                      //   setShowAddItemModal(true)
                                      //   setModalData(item)
                                      // }}
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>

                            {showForm && selectedBoard === bIndex ? (
                              <div className="p-3">
                                <textarea
                                  className="border-slate-300 rounded focus:ring-purple-400"
                                  rows={3}
                                  placeholder="Task info"
                                  data-id={bIndex}
                                  onKeyDown={(e) => onTextAreaKeyPress(e)}
                                />
                              </div>
                            ) : (
                              <button
                                className="flex justify-center items-center my-3 space-x-2 text-lg"
                                onClick={() => {
                                  setSelectedBoard(bIndex);
                                  setShowForm(true);
                                  // showModal = { showAddItemModal };
                                  // setShowModal = { setShowAddItemModal };
                                  // setShowAddItemModal(true)
                                  // setModalData(item)
                                }}
                              >
                                <span>Add task</span>
                                <PlusCircleIcon className="w-5 h-5 text-slate-500" />
                              </button>
                            )}
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
