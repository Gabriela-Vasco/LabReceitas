import {useState} from "react";
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
            <h1>LabReceitas</h1>
            <div className="modal"> 
              <button onClick={abrirModal}>
                Cadastre uma receita
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  },
                  content: {
                    margin:  '0 0 0 auto',
                    border: 'none',
                    background: '#C0C0C0',
                    borderRadius: '5px',
                    padding: '1em',
                    position: "absolute",
                    top: '0',
                    right: '0',
                    width: '50%',
                    height: '100vh'
            
                  }
                }}
              >
                <button onClick={fecharModal}>
                  Fechar
                </button>
                <RecipeForm />
              </Modal>
            </div>
        </header>
    )
}