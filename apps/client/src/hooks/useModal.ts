import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  return { isOpened, onOpen, onClose };
};
