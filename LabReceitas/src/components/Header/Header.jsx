import {useState} from "react";
import { Link } from "react-router-dom"
import RecipeForm from "../../components/forms/RecipeForm/RecipeForm";
import Modal from 'react-modal';

import "./Header.css"


Modal.setAppElement('#root');


export default function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);

    function abrirModal() {
        setIsOpen(true);
      }
  
      function fecharModal() {
        setIsOpen(false);
      }


     
    return (
        <header>
            <Link to="/" >
              <h1 className="header-title">LabReceitas</h1>
            </Link>
            <div className="modal"> 
              <button onClick={abrirModal} className="modal-button">
                Cadastre uma receita
              </button>
              <Modal
                className={"modal-content"}
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }
                }}
              >
                <button onClick={fecharModal} style={{backgroundColor: '#E6CFCF', color: '#222222'}} className="modal-button">
                  Fechar
                </button>
                <RecipeForm />
              </Modal>
            </div>
        </header>
    )
}