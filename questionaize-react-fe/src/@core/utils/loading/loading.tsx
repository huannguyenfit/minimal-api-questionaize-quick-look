import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { ToggleMessage } from '@core/models/common/responseMessage';
// import LoadingLogo from 'assets/images/logo.svg';
import './Loading.scss';
import { toast } from 'react-toastify';

// handle loading
const loadingSubject = new BehaviorSubject<boolean>(false);

export const toggleLoading = (value: boolean) => {
  loadingSubject.next(value);
};

//handle error
const handleMessageSubject = new BehaviorSubject<ToggleMessage | null>(null);

export const toggleMessage = (value: ToggleMessage) => {
  handleMessageSubject.next(value);
};

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLoading = (value: boolean) => {
    if (value) {
      setCount((previous) => previous + 1);
    } else {
      setCount((previous) => (previous > 0 ? previous - 1 : 0));
    }
  };

  useEffect(() => {
    if (count > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [count]);

  //#region Subscribe Loading
  useEffect(() => {
    const subscribe = loadingSubject.subscribe((value) => {
      toggleLoading(value);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  //#endregion Subscribe Loading

  //#region handle error
  useEffect(() => {
    const subscribe = handleMessageSubject.subscribe((msg) => {
      if (msg) {
        switch (msg.type) {
          case 'error':
            toast.error(msg.message);
            break;
          case 'success':
            toast.success(msg.message);
            break;
          case 'warning':
            toast.warning(msg.message);
            break;
          case 'info':
            toast.info(msg.message);
            break;
          default: toast(msg.message);
        }
      }
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  //#endregion handle error

  return isLoading ? (
    <div className='loading-section'>
      <div className='overlay-background'></div>
      {/* <img src={LoadingLogo} style={{ width: "80px", height: "80px" }} alt='logo' /> */}
    </div>
  ) : null;
};

export default Loading;
