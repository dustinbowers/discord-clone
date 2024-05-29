"use client";

import { useModal } from "@/hooks/use-modal-store";

const ServerIdPage = () => {
    const { onOpen, isOpen, onClose, type, data } = useModal();

    return (
        <div>
            Server ID Page
            <ul>
                <li>isOpen: {JSON.stringify(isOpen)}</li>
                <li>type: {type}</li>
                <li>data:
                    <pre dangerouslySetInnerHTML={{
                        __html:
                            JSON.stringify(data, null, 2)
                    }} />
                </li>
            </ul>
        </div>
    );
}

export default ServerIdPage;