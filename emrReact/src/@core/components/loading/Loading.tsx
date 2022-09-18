import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
// import LoadingLogo from 'assets/images/logo.svg';
import './Loading.scss';

// handle loading
const loadingSubject = new BehaviorSubject<boolean>(false);

export const toggleLoading = (value: boolean) => {
  loadingSubject.next(value);
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
    setIsLoading(count > 0)
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

  return isLoading ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  ) : null;
};

export default Loading;
