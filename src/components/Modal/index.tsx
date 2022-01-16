import "./modal.scss";
import { ReactComponent as CloseIcon } from "../../assets/close.svg"
import { Dispatch, SetStateAction } from 'react';

interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ setModalOpen }: IModalProps) => {

  return (
    <article className="modalContainer">
      <div className="modal">
        <div className="header">
          <h3>Settings</h3>
          <CloseIcon className='closeIcon' onClick={() => setModalOpen(false)} />
        </div>
        <div className="time">
          <h4>Time (Minutes)</h4>

          <div className="pomodoro">
            <p>Pomodoro</p>
          </div>
          <div className="short break">
            <p>Short Break</p>
          </div>
          <div className="long break">
            <p>Long Break</p>
          </div>
        </div>
        <div className="font"></div>
        <div className="color"></div>
      </div>
    </article>
  );
};

export default Modal;
