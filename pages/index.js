// import { ItemModalContext } from "@/ItemModalContext";
import { ModalContext } from "@/ModalContext";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  // const [ modalData, setModalData ] = useState(false)
  // const [ addItemModal, setAddItemModal ] = useState(false)
  // const [ selectedCard, setSelectedCard ] = useState(null)

  const [modalOpen, setModalOpen] = useState(false);

  return (
    // <ItemModalContext.Provider value={{modalData: [modalData, setModalData], addItemModal: [addItemModal, setAddItemModal], selectedCard: [selectedCard, setSelectedCard]}}>
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <Layout></Layout>
    </ModalContext.Provider>
    // </ItemModalContext.Provider>
  );
}
