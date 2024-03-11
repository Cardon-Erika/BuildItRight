// import { ItemModalContext } from "@/ItemModalContext";
import { ModalContext } from "@/ModalContext";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
    // custName,
    // estTotal,
    // notes
  // })
  // console.log(formData)

  return (
    // <ItemModalContext.Provider value={{modalData: [modalData, setModalData], addItemModal: [addItemModal, setAddItemModal], selectedCard: [selectedCard, setSelectedCard]}}>
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <Layout></Layout>
    </ModalContext.Provider>
    // </ItemModalContext.Provider>
  );
}
