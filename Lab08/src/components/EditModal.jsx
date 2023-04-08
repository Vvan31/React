import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function EditModal({showModal, handleModal, title, inputRef}) {
    
    const modalRef = useRef()

    useClickOutside(modalRef, showModal, handleModal)

    /*  useEffect(() => {
            setShowModal(true)
        }, []) */
    if (showModal) {
        console.log("Modal rendered true");
        return (
            <div className={styles.overlay}>
                <div ref={modalRef} className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h3>Edit List Item</h3>
                        <input
                        ref={inputRef}
                        type="text"
                        defaultValue={title}
                        />
                        <button
                            onClick={handleModal}
                        >
                            Update 
                        </button> 
                   </div>
                </div>
                
            </div>
        )
    }else{
        return (
            <h2> No modal </h2>
        )
    }
    
}

export default EditModal